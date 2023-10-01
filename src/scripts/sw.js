self.addEventListener('install', (event) => {
  console.log('Intalling Service Worker ...');

  // TODO: Caching App Shell Resource
});

self.addEventListener('activate', (event) => {
  console.log('Activationg Service Worker ...');

  // TODO: Delete old cahces
});

self.addEventListener('fetch', (event) => {
  console.log(event.request);

  event.respondWith(fetch(event.request));
  // TODO: Add/get fetch request to/from caches
});
