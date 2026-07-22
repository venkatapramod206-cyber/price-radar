// PricePro Service Worker — PWA Offline Support
const CACHE = "pricepro-v1";
const ASSETS = [
  "/price-radar/",
  "/price-radar/index.html",
  "/price-radar/alerts.html",
  "/price-radar/about.html",
  "/price-radar/contact.html",
  "/price-radar/privacy.html",
  "/price-radar/terms.html",
  "/price-radar/404.html",
  "/price-radar/product.html",
  "/price-radar/css/style.css",
  "/price-radar/js/app.js",
  "/price-radar/js/data.js",
  "/price-radar/js/images.js",
  "/price-radar/js/alerts.js",
  "/price-radar/manifest.json",
  "/price-radar/favicon.svg"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(resp => {
        if (!resp || resp.status !== 200 || resp.type === "opaque") return resp;
        const clone = resp.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return resp;
      }).catch(() => caches.match("/price-radar/404.html"));
    })
  );
});
