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
    "url": "assets/AboutView.00d82a16.js",
    "revision": "ac1d687e40affda1b6bde9579c3832a7"
  },
  {
    "url": "assets/AboutView.ab071ea6.css",
    "revision": "e5e2c1ac7dd6e494cc1c5f08b52b6da8"
  },
  {
    "url": "assets/index.5187d2d2.js",
    "revision": "fa9c568d6cefacb8ef7b094cf47fb241"
  },
  {
    "url": "assets/index.e5cce12a.css",
    "revision": "ffb4b681be547e3d818a6b10480978f4"
  },
  {
    "url": "CNAME",
    "revision": "b1ccc414b4fd03a9d196a9bd75399558"
  },
  {
    "url": "favicon.ico",
    "revision": "1ba2ae710d927f13d483fd5d1e548c9b"
  },
  {
    "url": "img/icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "img/icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "img/icons/android-chrome-maskable-192x192.png",
    "revision": "845a39478d0e2d4d5d32a092de2de250"
  },
  {
    "url": "img/icons/android-chrome-maskable-512x512.png",
    "revision": "2695f5feb66cdb0c6f09d0e415824cf9"
  },
  {
    "url": "img/icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "img/icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "img/icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "img/icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "img/icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "img/icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "img/icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "img/icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "img/icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "img/icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "img/icons/safari-pinned-tab.svg",
    "revision": "4e857233cbd3bb2d2db4f78bed62a52f"
  },
  {
    "url": "index.html",
    "revision": "8738ef51e77ccea2f00c260f1728a78c"
  },
  {
    "url": "manifest.json",
    "revision": "1283e92b39ede1ada5be3a13578ab8e6"
  },
  {
    "url": "robots.txt",
    "revision": "b6216d61c03e6ce0c9aea6ca7808f7ca"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
