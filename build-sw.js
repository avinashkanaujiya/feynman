// build-sw.js
import {generateSW} from 'workbox-build';

generateSW({
  swDest: './docs/sw.js',
  globDirectory: './docs',
  globPatterns: [
    // '**',
    // '*',
    // '*'
  ]
});