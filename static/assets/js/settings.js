function injectCode() {
  var cssCode = document.getElementById('cssInput').value;
  var jsCode = document.getElementById('jsInput').value;

  // Inject CSS
  var style = document.createElement('style');
  style.type = 'text/css';
  style.appendChild(document.createTextNode(cssCode));
  document.head.appendChild(style);

  // Inject JavaScript
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.appendChild(document.createTextNode(jsCode));
  document.head.appendChild(script);

  // Output the result
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = 'Code injected successfully!';
}
