function isPaywallDetected() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);

  
  while (walker.nextNode()) {
    const textNode = walker.currentNode;
    const textContent = textNode.textContent.trim();
    

    if (textContent.includes("paywall") || textContent.includes("subscription")) {
      return true;
    }
  }
  
  return false;
}


function disableJavaScript() {
  // Disable JavaScript by setting the "javascript" attribute of the <body> element to "false"
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


window.addEventListener('load', detectPaywallAndTakeAction);
