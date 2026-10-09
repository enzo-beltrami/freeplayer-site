// Demo channels for FreePlayer testers. Only openly licensed films and public test streams.
export const channels = [
  {
    id: 'bbb', name: 'Big Buck Bunny', group: 'Open Movies', abbr: 'BBB', colors: ['#f59e0b', '#ef4444'],
    url: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8', block: 30,
    title: 'Big Buck Bunny',
    desc: 'Animated short film by the Blender Foundation (2008), licensed under Creative Commons Attribution 3.0.',
  },
  {
    id: 'tos', name: 'Tears of Steel', group: 'Open Movies', abbr: 'ToS', colors: ['#0ea5e9', '#6366f1'],
    url: 'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8', block: 30,
    title: 'Tears of Steel',
    desc: 'Science-fiction short film by the Blender Foundation (2012), licensed under Creative Commons Attribution 3.0.',
  },
  {
    id: 'bipbop', name: 'Apple BipBop 16:9', group: 'Test Streams', abbr: 'BB', colors: ['#22c55e', '#0d9488'],
    url: 'https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_16x9/bipbop_16x9_variant.m3u8', block: 60,
    title: 'BipBop test pattern', desc: 'Apple HLS example stream with multiple bitrates.',
  },
  {
    id: 'bipbopadv', name: 'Apple BipBop Advanced', group: 'Test Streams', abbr: 'BA', colors: ['#84cc16', '#16a34a'],
    url: 'https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8', block: 60,
    title: 'BipBop advanced example', desc: 'Apple HLS example stream (fMP4, multiple renditions).',
  },
  {
    id: 'uslive', name: 'Unified Streaming Live', group: 'Test Streams', abbr: 'USL', colors: ['#a855f7', '#ec4899'],
    url: 'https://demo.unified-streaming.com/k8s/live/stable/live.isml/.m3u8', block: 120,
    title: 'Live test stream', desc: 'Public live HLS demo stream from Unified Streaming.',
  },
  {
    id: 'mux', name: 'Mux Test Stream', group: 'Test Streams', abbr: 'MX', colors: ['#f43f5e', '#f97316'],
    url: 'https://test-streams.mux.dev/test_001/stream.m3u8', block: 60,
    title: 'Test stream', desc: 'Public HLS test stream from Mux.',
  },
];
