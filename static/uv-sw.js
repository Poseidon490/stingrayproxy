importScripts('/uv/uv.bundle.js');
importScripts('/uv/uv.config.js');
importScripts('/uv/uv.sw.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
// Add a button to the page
var button = document.createElement('button');
button.innerText = 'Block Element';
button.style.position = 'fixed';
button.style.top = '10px';
button.style.right = '10px';
document.body.appendChild(button);

// Function to block elements
function blockElement(event) {
  event.stopPropagation();
  event.preventDefault();
  event.target.style.display = 'none';
}

// Add click event listener to the button
button.addEventListener('click', function() {
  // Add click event listeners to all elements on the page
  var elements = document.querySelectorAll('*');
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', blockElement, true);
  }
});
