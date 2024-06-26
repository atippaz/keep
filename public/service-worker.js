// // service-worker.js
// const cacheName = 'cacheweb';
var CACHE_NAME = 'mywebcache'
var urlsToCache = [
  '/dist/index.html',
  '/dist/service-worker.js',
  '/dist/manifest.webmanifest',
  '/dist/logo.ico',
  '/dist/registerSW.js',
  '/dist/workbox-3e911b1d.js',
  '/dist/sw.js',

  '/dist/assets/CurrencyPage-B0G52z9B.js',
]

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('Opened cache')
      return cache.addAll(urlsToCache)
    })
  )
})
self.addEventListener('activate', function (event) {
  var cacheWhitelist = ['mywebcache', 'other-cache-v1']
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      console.log('Cache hit - return response')
      console.log(response)
      if (response) {
        return response
      }
      console.log(event.request)
      return fetch(event.request)
    })
  )
})
