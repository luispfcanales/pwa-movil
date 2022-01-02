//'use strict';

// Update cache names any time any of the cached files change.
const CACHE_NAME = 'static-cache-v1';

// Add list of files to cache here.
const FILES_TO_CACHE = [
  './offline.html',
];


self.addEventListener('install', (evt) => {
  console.log('[ServiceWorker] Install');

  evt.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        console.log('[ServiceWorker] Pre-caching offline page');
        return cache.addAll(FILES_TO_CACHE);
      })
  );

  self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
  console.log('[ServiceWorker] Activate');
  // Remove previous cached data from disk.
  evt.waitUntil(
      caches.keys().then((keyList) => {
        return Promise.all(keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache', key);
            return caches.delete(key);
          }
        }));
      })
  );

  self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
  console.log('[ServiceWorker] Fetch', evt.request.url);
  // Add fetch event handler here.
  if (evt.request.mode !== 'navigate') {
    // Not a page navigation, bail.
    return;
  }
  evt.respondWith(
      fetch(evt.request)
          .catch(() => {
            return caches.open(CACHE_NAME)
                .then((cache) => {
                  return cache.match('offline.html');
                });
          })
  );
});


//let deferredPrompt;
//window.addEventListener('beforeinstallprompt', (e) => {
//  e.preventDefault();
//  deferredPrompt = e;
//  console.log("hola")
//  //app.addEventListener('click', (e) => {
//  //  // hide our user interface that shows our A2HS button
//  //  addBtn.style.display = 'none';
//  //  // Show the prompt
//  //  deferredPrompt.prompt();
//  //  // Wait for the user to respond to the prompt
//  //  deferredPrompt.userChoice.then((choiceResult) => {
//  //      if (choiceResult.outcome === 'accepted') {
//  //        console.log('User accepted the A2HS prompt');
//  //      } else {
//  //        console.log('User dismissed the A2HS prompt');
//  //      }
//  //      deferredPrompt = null;
//  //    });
//  //});
//});
//let installApp = self.getElementById('installApp');
//installApp.addEventListener('click', async () => {
//  alert("hola")
//    if (deferredPrompt !== null) {
//        deferredPrompt.prompt();
//        const { outcome } = await deferredPrompt.userChoice;
//        if (outcome === 'accepted') {
//            deferredPrompt = null;
//        }
//    }
//});
//self.addEventListener('beforeinstallprompt', function(e) {
//    e.userChoice.then(function(choiceResult){
//        console.log(choiceResult.outcome);
//        if(choiceResult.outcome == 'dismissed'){
//            console.log('User cancelled home screen install');
//        }else{
//            console.log('User added to home screen');
//        }
//    });
//});
