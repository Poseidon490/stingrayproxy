importScripts('/static/uv/uv.bundle.js');
importScripts('/static/uv/uv.config.js');
importScripts('/static/uv/uv.sw.js');
importScripts('/static/paywall.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
