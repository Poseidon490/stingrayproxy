// Get the parent window and document
var parentWindow = window.parent;
var parentDocument = parentWindow.document;

// Create the button in the parent document
var button = parentDocument.createElement('button');
button.innerText = 'Block Element';
button.style.position = 'fixed';
button.style.top = '10px';
button.style.right = '10px';
parentDocument.body.appendChild(button);

// Function to block elements
function blockElement(event) {
  event.stopPropagation();
  event.preventDefault();
  event.target.style.display = 'none';
}

// Add click event listener to the button
button.addEventListener('click', function() {
  // Add click event listeners to all elements on the page
  var elements = parentDocument.querySelectorAll('*');
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', blockElement, true);
  }
});
