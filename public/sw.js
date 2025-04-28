
const CACHE_NAME = 'levigile-cache-v2';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/src/main.tsx',
  '/src/index.css',
  'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap',
  'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap'
];

const IMAGES_CACHE = 'levigile-images-v1';
const API_CACHE = 'levigile-api-v1';

// Installation du service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS)),
      caches.open(IMAGES_CACHE),
      caches.open(API_CACHE)
    ])
  );
});

// Stratégie de cache : Network First pour les API, Cache First pour les assets statiques
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Images : Cache First
  if (event.request.destination === 'image') {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          if (response) {
            return response;
          }
          return fetch(event.request).then((response) => {
            const clonedResponse = response.clone();
            caches.open(IMAGES_CACHE).then((cache) => {
              cache.put(event.request, clonedResponse);
            });
            return response;
          });
        })
    );
    return;
  }

  // API : Network First
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const clonedResponse = response.clone();
          caches.open(API_CACHE).then((cache) => {
            cache.put(event.request, clonedResponse);
          });
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Static assets : Cache First
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});

// Nettoyage des anciens caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => 
            cacheName !== CACHE_NAME && 
            cacheName !== IMAGES_CACHE && 
            cacheName !== API_CACHE
          )
          .map((cacheName) => caches.delete(cacheName))
      );
    })
  );
});
