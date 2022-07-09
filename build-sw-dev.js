// build-sw.js
import {generateSW} from 'workbox-build';

generateSW({
  swDest: './public/sw-dev.js',
  globDirectory: './public',
  globPatterns: [
    '**',
    '*',
    '*'
  ]
});