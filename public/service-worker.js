// public/service-worker.js
workbox.setConfig({ debug: true });
workbox.precaching.precacheAndRoute([]);

// Cache images:
workbox.routing.registerRoute(
/\.(?:png|gif|jpg|jpeg|svg)$/,
workbox.strategies.staleWhileRevalidate({
  cacheName: "images",
  plugins: [
    new workbox.expiration.Plugin({
      maxEntries: 60,
      maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
    })
  ]
})
);