# FreePlayer website

Static site for the FreePlayer LG webOS TV app, hosted with GitHub Pages:

- `index.html`: landing and support page
- `privacy.html`: privacy policy (the URL you give LG Seller Lounge)
- `demo/`: legal demo playlist for LG QA testers (`demo/playlist.m3u`), with logos and a TV guide (`demo/epg.xml`)

`scripts/build-demo.mjs` regenerates the demo files. The GitHub Action in `.github/workflows/epg.yml` runs it daily,
so the demo TV guide always covers the current days.
