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
    "url": "404.html",
    "revision": "ed7af39bd22648991820fe83e38940a4"
  },
  {
    "url": "algorithm/3n函数.png",
    "revision": "248fe476c605b0f589c1b0b6573d022f"
  },
  {
    "url": "algorithm/alg/index.html",
    "revision": "15735855e32815e5683f01c9d759a75b"
  },
  {
    "url": "algorithm/alg/stairs/index.html",
    "revision": "80886062518bf81b0056fa2d111dba70"
  },
  {
    "url": "algorithm/dataStructure/index.html",
    "revision": "38610eb8aa3e89af398a82edd8fe210d"
  },
  {
    "url": "algorithm/dataStructure/timeComplex/index.html",
    "revision": "5ee647706f594d1ddfd76b10ff72eea5"
  },
  {
    "url": "algorithm/index.html",
    "revision": "3904089054f540b6fcbafe8b7bc370b7"
  },
  {
    "url": "algorithm/logN函数.png",
    "revision": "f748cc8fc54a861e7d3607c10fcd2861"
  },
  {
    "url": "algorithm/n的平方函数.png",
    "revision": "af65e31f2d2aa13f067c68202895e83e"
  },
  {
    "url": "algorithm/常数函数.png",
    "revision": "bb411e168df47392ef3bcfa738922930"
  },
  {
    "url": "assets/css/0.styles.1a9d01b8.css",
    "revision": "489baa63bc36fd037a25131e78c95e84"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b08d28b2.js",
    "revision": "e2e8139eea830285120410396f65c20e"
  },
  {
    "url": "assets/js/11.ecfa3d82.js",
    "revision": "938a6e4ee49f601c8eabeaa191d67cc1"
  },
  {
    "url": "assets/js/12.8a5c28cd.js",
    "revision": "2991a503d07840db62fa7387ecab6a2b"
  },
  {
    "url": "assets/js/13.8a02d9b5.js",
    "revision": "e4b9288730b70d1fcb43e677b96a9e25"
  },
  {
    "url": "assets/js/14.4038996a.js",
    "revision": "5f9d58b9f00102864d1f34551c8701d5"
  },
  {
    "url": "assets/js/15.b0f9a865.js",
    "revision": "6bff3e0bb5405c27f213b6e3dad1b58f"
  },
  {
    "url": "assets/js/16.a9e2a432.js",
    "revision": "9e8c46767309529d2bcb838d139e1c54"
  },
  {
    "url": "assets/js/17.156ec433.js",
    "revision": "00e9944fd0289ebc31b39f614f06a828"
  },
  {
    "url": "assets/js/18.d20bea0f.js",
    "revision": "ad5b9e555fe9be971e26404b6d4128a9"
  },
  {
    "url": "assets/js/19.acc280cc.js",
    "revision": "b2e441dbde00e383c4985cdf3fe21b37"
  },
  {
    "url": "assets/js/2.54429308.js",
    "revision": "489bbf4e5c9948524947209a2446fbea"
  },
  {
    "url": "assets/js/3.975113a2.js",
    "revision": "3250e483b7d06741fecc10dc9f3cf99f"
  },
  {
    "url": "assets/js/4.0bfaaae4.js",
    "revision": "d6ad8011c2560ae46d82191f99d23c2e"
  },
  {
    "url": "assets/js/5.1c83c7a3.js",
    "revision": "b7e858766c9b775e708748c926f5c11e"
  },
  {
    "url": "assets/js/6.0da4b6e2.js",
    "revision": "8bc58959018471be81a76f08b1426862"
  },
  {
    "url": "assets/js/7.2e285360.js",
    "revision": "233c0d8f261e824113c39230ca9dc38d"
  },
  {
    "url": "assets/js/8.3bc13b01.js",
    "revision": "b6164ffc5838e32b68a16844c21e7170"
  },
  {
    "url": "assets/js/9.b398ad71.js",
    "revision": "3d44f10805d20b12a43a1c7d0a54c2f9"
  },
  {
    "url": "assets/js/app.6ca98d68.js",
    "revision": "ad1e7cb52d9437ed6a5600b39ef41a41"
  },
  {
    "url": "img/nodejs.jpg",
    "revision": "d1c98b82a430585cc02adf25f31437fa"
  },
  {
    "url": "index.html",
    "revision": "9c9ad1825c324c145135ca9a14305a36"
  },
  {
    "url": "node/index.html",
    "revision": "e78fa77a5286ecd66225bc63a150da4f"
  },
  {
    "url": "node/module/index.html",
    "revision": "e6cb8e533c4a2416eb3e1a518aaa4b30"
  },
  {
    "url": "node/module/path/index.html",
    "revision": "7a18d22fd4eb3074acc32a956e7cbf8f"
  },
  {
    "url": "node/module/stream/index.html",
    "revision": "05ba14647d8e56ac79c64f3392a82142"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
