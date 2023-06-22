"use strict";
/**
 * @type {HTMLFormElement}
 */
const form = document.getElementById("uv-form");
/**
 * @type {HTMLInputElement}
 */
const address = document.getElementById("uv-address");
/**
 * @type {HTMLInputElement}
 */
const searchEngine = document.getElementById("uv-search-engine");
/**
 * @type {HTMLParagraphElement}
 */
const error = document.getElementById("uv-error");
/**
 * @type {HTMLPreElement}
 */
const errorCode = document.getElementById("uv-error-code");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    await registerSW();
  } catch (err) {
    error.textContent = "Failed to register service worker.";
    errorCode.textContent = err.toString();
    throw err;
  }

  const url = search(address.value, searchEngine.value);
  location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
});

async function launchURL(openURL) {
  try {
    await registerSW();
  } catch (err) {
    error.textContent = "Failed to register service worker.";
    errorCode.textContent = err.toString();
    throw err;
  }

  const url = search(openURL, searchEngine.value);
  location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
}


async function launchGame(openURL) {
  try {
    await registerSW();
  } catch (err) {
    error.textContent = "Failed to register service worker.";
    errorCode.textContent = err.toString();
    throw err;
  }

  const url = search(openURL, searchEngine.value);
  const encodedUrl = __uv$config.prefix + __uv$config.encodeUrl(url);
  localStorage.setItem('storedURL', encodedUrl);
  window.location.href="/g/gframe.html"
}
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
  tabList.appendChild(tabButton);

  const tabPanel = document.createElement('div');
  tabPanel.className = 'tab-panel';
  tabPanel.id = newTabId;
  tabPanel.innerHTML = `        <div class="search-container">
          <input type="text" class="search-bar" placeholder="Search">
        </div>`;
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

// Event listener for the home tab
document.getElementById('tab1').addEventListener('click', (event) => {
  openTab(event, 'tab1');
});

// Event listener for the "Add Tab" button
document.querySelector('.add-tab-button').addEventListener('click', addNewTab);

