
function isPaywallDetected() {
  return document.body.textContent.includes("paywall, subscribe, subscription,");
}


function disableJavaScript() {
  document.body.setAttribute('javascript', 'false');
}


function reloadPage() {
  location.reload();
}


function detectPaywallAndTakeAction() {
  if (isPaywallDetected()) {
    disableJavaScript();
    reloadPage();
  }
}


self.addEventListener('fetch', event => {

  event.respondWith(
    fetch(event.request)
      .then(response => {

        const clonedResponse = response.clone();


        if (response.headers.get('content-type').includes('text/html')) {
          return clonedResponse.text().then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            if (isPaywallDetected()) {
              disableJavaScript();
              reloadPage();
            }
            return new Response(html, { status: response.status, statusText: response.statusText });
          });
        }

        return response;
      })
      .catch(error => {
        console.error('Error:', error);
        return new Response('An error occurred.', { status: 500 });
      })
  );
});
