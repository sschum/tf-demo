importScripts('/tf-demo/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/tf-demo/_nuxt/app.1926c96f2e4197132f91.js",
    "revision": "c4748945bdc29f707bb128aaee082134"
  },
  {
    "url": "/tf-demo/_nuxt/layouts/default.aed1b7875609970baadd.js",
    "revision": "0840e147560d69cfb3b57b2e57dcabfb"
  },
  {
    "url": "/tf-demo/_nuxt/manifest.175ef81be26d22230b37.js",
    "revision": "ce1b20d84ca8a065e884d627195b8ff2"
  },
  {
    "url": "/tf-demo/_nuxt/pages/index.2bd4c4e9a890b158a15c.js",
    "revision": "9fade6d02608530d67769cb4522c6177"
  },
  {
    "url": "/tf-demo/_nuxt/vendor.d1a2f02f9244ad846c08.js",
    "revision": "59ae86ee52ef125fd9596c3a0b90fbaf"
  }
], {
  "cacheId": "gh-pages-demo",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/tf-demo/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/tf-demo/.*'), workbox.strategies.networkFirst({}), 'GET')





