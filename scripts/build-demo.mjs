// Builds demo/playlist.m3u, demo/logos/*.svg and demo/epg.xml (a rolling 4-day schedule).
// Run daily (see .github/workflows/epg.yml) so the TV guide always has current data.
import { writeFileSync, mkdirSync } from 'node:fs';
import { channels } from './channels.mjs';

const out = new URL('../demo/', import.meta.url);
mkdirSync(new URL('logos/', out), { recursive: true });

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const pad = (n) => String(n).padStart(2, '0');
const xt = (ms) => {
  const d = new Date(ms);
  return `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}00 +0000`;
};

let m3u = '#EXTM3U url-tvg="epg.xml"\n';
for (const c of channels) {
  m3u += `#EXTINF:-1 tvg-id="${c.id}.demo" tvg-name="${esc(c.name)}" tvg-logo="logos/${c.id}.svg" group-title="${c.group}",${c.name}\n${c.url}\n`;
  writeFileSync(
    new URL(`logos/${c.id}.svg`, out),
    `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="200" viewBox="0 0 320 200">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c.colors[0]}"/><stop offset="1" stop-color="${c.colors[1]}"/></linearGradient></defs>
  <rect width="320" height="200" rx="36" fill="url(#g)"/>
  <text x="160" y="128" font-family="Arial, Helvetica, sans-serif" font-size="${c.abbr.length > 2 ? 84 : 100}" font-weight="700" fill="#fff" text-anchor="middle">${c.abbr}</text>
</svg>
`,
  );
}
writeFileSync(new URL('playlist.m3u', out), m3u);

const day = 24 * 3600e3;
const start = Math.floor(Date.now() / day) * day - day;
const end = start + 4 * day;
let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<tv generator-info-name="FreePlayer demo">\n';
for (const c of channels) xml += `  <channel id="${c.id}.demo"><display-name>${esc(c.name)}</display-name></channel>\n`;
for (const c of channels) {
  const block = c.block * 60e3;
  for (let t = start; t < end; t += block) {
    const title = c.title;
    xml += `  <programme start="${xt(t)}" stop="${xt(t + block)}" channel="${c.id}.demo"><title>${esc(title)}</title><desc>${esc(c.desc)}</desc></programme>\n`;
  }
}
xml += '</tv>\n';
writeFileSync(new URL('epg.xml', out), xml);
console.log(`demo: ${channels.length} channels, schedule ${new Date(start).toISOString()} → ${new Date(end).toISOString()}`);
