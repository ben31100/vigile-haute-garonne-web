
// Version du cache
const CACHE_NAME = 'levigile-cache-v3';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/src/main.tsx',
  '/src/index.css'
];

const IMAGES_CACHE = 'levigile-images-v2';
const API_CACHE = 'levigile-api-v2';

// Installation du service worker - optimisée pour limiter les ressources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  
  // Ne pas attendre les autres caches pour activer le SW
  self.skipWaiting();
});

// Stratégie de cache optimisée: plus de préchargements excessifs
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Ignorer les requêtes analytics et autres services tiers
  if (url.hostname.includes('googletagmanager.com') || 
      url.hostname.includes('analytics') ||
      url.hostname.includes('firestore.googleapis.com')) {
    return;
  }

  // Images : Cache First avec limite de temps
  if (event.request.destination === 'image') {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          // Retourner du cache si disponible
          if (response) {
            // Rafraîchir le cache en arrière-plan si l'image a plus de 7 jours
            const fetchDate = response.headers.get('date');
            if (fetchDate) {
              const cachedDate = new Date(fetchDate).getTime();
              const now = new Date().getTime();
              const oneWeek = 7 * 24 * 60 * 60 * 1000;
              
              if ((now - cachedDate) > oneWeek) {
                // Mise à jour du cache en background
                fetch(event.request).then((freshResponse) => {
                  if (freshResponse.ok) {
                    caches.open(IMAGES_CACHE).then((cache) => {
                      cache.put(event.request, freshResponse);
                    });
                  }
                }).catch(() => {/* Ignorer les erreurs de refresh */});
              }
            }
            return response;
          }
          
          // Sinon récupérer depuis le réseau et mettre en cache
          return fetch(event.request).then((networkResponse) => {
            if (!networkResponse || networkResponse.status !== 200) {
              return networkResponse;
            }
            
            const clonedResponse = networkResponse.clone();
            caches.open(IMAGES_CACHE).then((cache) => {
              cache.put(event.request, clonedResponse);
            });
            return networkResponse;
          });
        })
    );
    return;
  }

  // API : Network First simplifié
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response.ok) {
            const clonedResponse = response.clone();
            caches.open(API_CACHE).then((cache) => {
              cache.put(event.request, clonedResponse);
            });
          }
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Static assets : Cache First avec fallback réseau
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
      .catch(() => {
        // Fallback pour les pages HTML
        if (event.request.mode === 'navigate') {
          return caches.match('/');
        }
        return new Response('Ressource non disponible', { 
          status: 408,
          headers: { 'Content-Type': 'text/plain' }
        });
      })
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
    }).then(() => {
      // Prendre le contrôle immédiat sans attendre la navigation
      return self.clients.claim();
    })
  );
});
