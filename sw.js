/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/index.da5b40ad.js",
    "revision": "d676bdbc0b67fe15896309f0b69c420b"
  },
  {
    "url": "assets/index.f1a6aad3.css",
    "revision": "e736f97b24111a03f718b72d00ae7250"
  },
  {
    "url": "CNAME",
    "revision": "b1ccc414b4fd03a9d196a9bd75399558"
  },
  {
    "url": "favicon.ico",
    "revision": "bb2417a188fee97c5ca0ab9d98f9cb34"
  },
  {
    "url": "img/icons/android-chrome-192x192.png",
    "revision": "46a9cf06b95655256306f244b330cc0a"
  },
  {
    "url": "img/icons/android-chrome-maskable-192x192.png",
    "revision": "46a9cf06b95655256306f244b330cc0a"
  },
  {
    "url": "img/icons/android-chrome-maskable-512x512.png",
    "revision": "803096d3faa158a59d03b6777b773851"
  },
  {
    "url": "img/icons/apple-touch-icon-120x120.png",
    "revision": "df77e58b0fcd239cbe715daee3ae27b7"
  },
  {
    "url": "img/icons/apple-touch-icon-152x152.png",
    "revision": "bcbadaeba76f9201ceb1245c0dbe65a2"
  },
  {
    "url": "img/icons/apple-touch-icon-180x180.png",
    "revision": "38dd766a8f84189994185921727e97dc"
  },
  {
    "url": "img/icons/apple-touch-icon-60x60.png",
    "revision": "2ff66bde817b8498c6b6393efafa5353"
  },
  {
    "url": "img/icons/apple-touch-icon-76x76.png",
    "revision": "92708070392c7212914fbd9b2b48ca4e"
  },
  {
    "url": "img/icons/apple-touch-icon.png",
    "revision": "38dd766a8f84189994185921727e97dc"
  },
  {
    "url": "img/icons/favicon-16x16.png",
    "revision": "ae6fa19b8cb12b9bc68cff37af36bb94"
  },
  {
    "url": "img/icons/favicon-32x32.png",
    "revision": "15e3e8c5e2ada577674ef2d23154259c"
  },
  {
    "url": "img/icons/msapplication-icon-144x144.png",
    "revision": "be6bb6d09f041f6b9429410fb2bd6986"
  },
  {
    "url": "img/icons/mstile-150x150.png",
    "revision": "bc8f20be4123ebd1be0e669aab0b1ea1"
  },
  {
    "url": "img/icons/safari-pinned-tab.svg",
    "revision": "612f64b0dedcb7a70ee7aed004a7381a"
  },
  {
    "url": "index.html",
    "revision": "475ea1c1243a92e7f9a49f4c868f8165"
  },
  {
    "url": "manifest.json",
    "revision": "ab5e2020a3581cdeaba45863687ce6be"
  },
  {
    "url": "robots.txt",
    "revision": "b6216d61c03e6ce0c9aea6ca7808f7ca"
  },
  {
    "url": "sw-dev.js",
    "revision": "b4f3d70b43beb1ab89368469426725a7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
