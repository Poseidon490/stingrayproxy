importScripts('/home/uv-bacxkup/uv.bundle.js');
importScripts('/home/uv-bacxkup/uv.config.js');
importScripts('/home/uv-bacxkup/uv.sw.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));