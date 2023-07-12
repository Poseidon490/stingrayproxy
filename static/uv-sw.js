importScripts('/uv/uv.bundle.js');
importScripts('/uv/uv.config.js');
importScripts('/uv/uv.sw.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
iframe.contentDocument.body.appendChild(document.createElement('script')).src = 'static/home/assets/js/blocker.js';
