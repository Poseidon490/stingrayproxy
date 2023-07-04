// tabs.js

let tabCount = 2; // Start tab count from 2 since home is initially loaded as tab 1

function openTab(event, tabId) {
  const tabContent = document.getElementsByClassName('tab-panel');
  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none';
  }

  const tabLinks = document.getElementsByClassName('tab');
  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(' active', '');
  }

  document.getElementById(tabId).style.display = 'block';
  event.currentTarget.className += ' active';
}

function addNewTab() {
  const tabList = document.getElementById('sortable');
  const tabButton = document.createElement('button');
  const newTabId = `tab${tabCount}`;
  tabButton.className = 'tab';
  tabButton.setAttribute('onclick', `openTab(event, '${newTabId}')`);
  tabButton.innerHTML = `Tab ${tabCount} <span class="close-button" onclick="closeTab(event)"><i class="fas fa-times"></i></span>`;
  
  // Add double-click event listener to the tab for renaming
  tabButton.addEventListener('dblclick', (event) => {
    renameTab(event.target);
  });
  
  tabList.appendChild(tabButton);

  const tabPanel = document.createElement('div');
  tabPanel.className = 'tab-panel';
  tabPanel.id = newTabId;

  const iframeWrapper = document.createElement('div');
  iframeWrapper.className = 'iframe-wrapper';

  const iframe = document.createElement('iframe');
  iframe.src = '/static/tabs.html';
  iframe.style.display = 'block';
  iframe.style.height = '100vh';
  iframe.style.width = '100vw';
  iframe.style.border = 'none';
  iframe.style.background = 'black';

  iframeWrapper.appendChild(iframe);
  tabPanel.appendChild(iframeWrapper);
  document.querySelector('.tab-content').appendChild(tabPanel);

  tabCount++;
}

function closeTab(event) {
  const tabButton = event.target.closest('.tab');
  const tabId = tabButton.getAttribute('onclick').match(/'([^']+)'/)[1];

  const tabContent = document.getElementById(tabId);
  tabContent.parentNode.removeChild(tabContent);

  tabButton.parentNode.removeChild(tabButton);
}

function renameTab(tabButton) {
  const oldTabText = tabButton.firstChild.nodeValue.trim();
  const newTabText = prompt('Enter new tab name:', oldTabText);

  if (newTabText) {
    tabButton.firstChild.nodeValue = newTabText;
  }
}

// Event listener for the home tab
document.getElementById('tab1').addEventListener('click', (event) => {
  openTab(event, 'tab1');
});

// Event listener for the "Add Tab" button
document.querySelector('.add-tab-button').addEventListener('click', addNewTab);
