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
    "revision": "ff5aebabc9de7676ff7a04b9d2080c4c"
  },
  {
    "url": "about.html",
    "revision": "32f0b50c3f309bfd835f9aa662d2b15d"
  },
  {
    "url": "assets/css/0.styles.9bcbb34f.css",
    "revision": "5b75ab49cb3eab9dd89dd14ed1e13adf"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2946f7c8.js",
    "revision": "0c0ec91d9ef05f97dd0e89e6e7570d1a"
  },
  {
    "url": "assets/js/11.7caa4962.js",
    "revision": "3e4fb6755f893ce3c4cf05f4f56052f4"
  },
  {
    "url": "assets/js/12.3b7ecce5.js",
    "revision": "5ff3ca3a0eeb3d2f5d2fe4e571d10654"
  },
  {
    "url": "assets/js/13.08a0e21b.js",
    "revision": "c568c2893225d540f4547f56507433bf"
  },
  {
    "url": "assets/js/14.082ea59a.js",
    "revision": "ff3c85143f7014f3a8a39f445260b638"
  },
  {
    "url": "assets/js/15.3e058d3b.js",
    "revision": "6202c93b7d285308c7fb24254945ae64"
  },
  {
    "url": "assets/js/16.aafa8fe9.js",
    "revision": "4486e68c7f9bc6ad445b7ae8ae13a613"
  },
  {
    "url": "assets/js/17.5bb23ab9.js",
    "revision": "e59f840e8ee289c606ac249be67256c9"
  },
  {
    "url": "assets/js/18.1269805b.js",
    "revision": "151af740b6a6cb8aaf4a47b10f8ebac1"
  },
  {
    "url": "assets/js/19.00eca21c.js",
    "revision": "a6d5595a8c0b4febd620173113e49678"
  },
  {
    "url": "assets/js/2.43d9a9a1.js",
    "revision": "0c707ceafed24a58b7b0cb4e45f17e7a"
  },
  {
    "url": "assets/js/20.7a2b2802.js",
    "revision": "14fefecc3f085cb7ab05e55cdc5e18f4"
  },
  {
    "url": "assets/js/21.7d3a7ade.js",
    "revision": "9a2308ffd92e6c07df31ed36a891e58e"
  },
  {
    "url": "assets/js/22.55a8dc04.js",
    "revision": "02a3f8dd025374dbf8c3351b23a878c9"
  },
  {
    "url": "assets/js/23.beaf9528.js",
    "revision": "7464fba2202f13dd994faad4ec4bd837"
  },
  {
    "url": "assets/js/24.4aaf7e16.js",
    "revision": "0873a8c0df2c2540f37c748858ee69d0"
  },
  {
    "url": "assets/js/25.c87ddaf7.js",
    "revision": "09ca76068916f0d17b558517de7792e2"
  },
  {
    "url": "assets/js/26.4ffb1e6a.js",
    "revision": "a993721ccfc8a4772584743fa848ea7e"
  },
  {
    "url": "assets/js/27.2fb2be27.js",
    "revision": "0802ede0fbfd20d9fff14738fb0f9ae9"
  },
  {
    "url": "assets/js/28.86561669.js",
    "revision": "1e3a3becd19ba7769427bbae77b5157f"
  },
  {
    "url": "assets/js/29.0b5ef079.js",
    "revision": "109ab6b4574d46fa04a0a73d5ab5dbaa"
  },
  {
    "url": "assets/js/3.69d622b4.js",
    "revision": "9ced8f5eb78222ccf804b0b749f36ccd"
  },
  {
    "url": "assets/js/4.7f4016cf.js",
    "revision": "152a76e9af09ea3ce66d526637db3fd7"
  },
  {
    "url": "assets/js/5.0c0f6a89.js",
    "revision": "a8429630d437e8fb9fe714b7230573df"
  },
  {
    "url": "assets/js/6.c52b7919.js",
    "revision": "3c3b33d42d211a124d2f964b5f55690b"
  },
  {
    "url": "assets/js/7.f980bb26.js",
    "revision": "5cba6a31480e9e247d39fd814d5e019d"
  },
  {
    "url": "assets/js/8.50f23deb.js",
    "revision": "7ca7540a80c97957f88e19f3b7e6c719"
  },
  {
    "url": "assets/js/9.5e414059.js",
    "revision": "e012ab730d7d9b22bb1c41ac059721dc"
  },
  {
    "url": "assets/js/app.fe1d8497.js",
    "revision": "80aa020fca85feceace73cde13b72796"
  },
  {
    "url": "demo.html",
    "revision": "f1f95ae706d0c239f4fc3096b765fffd"
  },
  {
    "url": "en/about.html",
    "revision": "90e236b6235a051728a94d502fd2fbc2"
  },
  {
    "url": "en/guide/additional-package-support.html",
    "revision": "d9a494718aa76b96fc5a431fb6cac95a"
  },
  {
    "url": "en/guide/config.html",
    "revision": "7c84d8d952711bae37dd897fc3d51c95"
  },
  {
    "url": "en/guide/faq.html",
    "revision": "3be7004f9ced8e4ba321f7b8892b3dd9"
  },
  {
    "url": "en/guide/icon.html",
    "revision": "fc1ad2deeed812dacfdd77ac55d00f87"
  },
  {
    "url": "en/guide/index.html",
    "revision": "e7a5f3fceb95915c5143c8a520cb2f2c"
  },
  {
    "url": "en/guide/page.html",
    "revision": "591de898cec147d78a67805e4fdd54b6"
  },
  {
    "url": "en/guide/third-party-support.html",
    "revision": "d4b3697155b05141274b3a6289cd95a0"
  },
  {
    "url": "en/index.html",
    "revision": "11bd1b6e635be45eba27e54ea2cfc6c0"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "75e1ef37685eb006c8405ad185267294"
  },
  {
    "url": "guide/config.html",
    "revision": "4924fe67b9ecb4f450e1e16f1f307e07"
  },
  {
    "url": "guide/faq.html",
    "revision": "814939de5d83327261aa1e0a0a11ec6a"
  },
  {
    "url": "guide/icon.html",
    "revision": "5010afe924d07cc71f9ff096457a636b"
  },
  {
    "url": "guide/index.html",
    "revision": "3e41ca4166b42dbabec5754d657401a4"
  },
  {
    "url": "guide/migrate.html",
    "revision": "9bfbff006ea7e9888529577869561652"
  },
  {
    "url": "guide/page.html",
    "revision": "f10b6a192a904e5daae970ee92faeba1"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "b5a997bc51ccb24ed0f9e3577d1e7f00"
  },
  {
    "url": "index.html",
    "revision": "d32bdf35fed046b58f2f09ad1c28940a"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  },
  {
    "url": "yun.svg",
    "revision": "ebbd22f3cde555d95e5dec5d41ed8505"
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
