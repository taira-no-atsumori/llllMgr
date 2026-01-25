// public/sw.js
const CACHE_NAME = 'llllMgr-cache-v1';
const CACHE_URLS = [
  // キャッシュしたい静的リソースをここに追加
  '/',
  '/index.html',
  // 画像URLは動的にキャッシュ
];

// インストール時にキャッシュ
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(CACHE_URLS);
    })
  );
});

// フェッチイベントで画像をキャッシュ
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Firebase Storageの画像URLの場合のみキャッシュ
  if (url.hostname.includes('firebasestorage.googleapis.com') && event.request.method === 'GET') {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request).then((response) => {
          // レスポンスが有効ならキャッシュ
          if (response.status === 200 && response.type === 'basic') {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return response;
        });
      })
    );
  }
});

// アクティベート時に古いキャッシュを削除
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});