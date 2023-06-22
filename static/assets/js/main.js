window.location.href = 'about:blank';
setTimeout(() => {
  var iframe = document.createElement('iframe');
  iframe.src = 'https://www.yourwebsite.com'; // Replace with your website URL
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';
  document.body.appendChild(iframe);
}, 1000); // Delay of 1 second to ensure about:blank is loaded first
