// sw-mobile.js
const CACHE_NAME = 'ferreteria-carnevale-v2';
const urlsToCache = [
  '/',
  '/index.html',
  // Agregar aquí otros recursos si los tienes
];

// Instalar Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache abierto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activar Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Eliminando cache viejo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Interceptar solicitudes - ESTO ES CRÍTICO PARA EVITAR 404
self.addEventListener('fetch', event => {
  // Verificar si es una solicitud a nuestra app
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          // Si encontramos en cache, devolver
          if (response) {
            return response;
          }
          
          // Si no está en cache, hacer la solicitud
          return fetch(event.request)
            .then(response => {
              // Verificar si la respuesta es válida
              if (!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }
              
              // Clonar la respuesta
              const responseToCache = response.clone();
              
              caches.open(CACHE_NAME)
                .then(cache => {
                  cache.put(event.request, responseToCache);
                });
                
              return response;
            })
            .catch(error => {
              console.log('Fetch falló; devolviendo offline page:', error);
              // Para rutas no encontradas, devolver index.html
              return caches.match('/index.html');
            });
        })
    );
  }
});
