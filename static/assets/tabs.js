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
  const tabContentIndex = Array.from(tabContent.parentNode.children).indexOf(tabContent);
  tabContent.parentNode.removeChild(tabContent);

  tabButton.parentNode.removeChild(tabButton);

  const tabButtons = document.getElementsByClassName('tab');
  for (let i = tabContentIndex + 1; i < tabButtons.length; i++) {
    const buttonTabId = tabButtons[i].getAttribute('onclick').match(/'([^']+)'/)[1];
    const newTabId = `tab${i}`;
    tabButtons[i].setAttribute('onclick', `openTab(event, '${newTabId}')`);
    tabButtons[i].innerHTML = `Tab ${i} <span class="close-button" onclick="closeTab(event)"><i class="fas fa-times"></i></span>`;

    const tabContent = document.getElementById(buttonTabId);
    tabContent.id = newTabId;
  }
}

// Event listener for the home tab
document.getElementById('tab1').addEventListener('click', (event) => {
  openTab(event, 'tab1');
});

// Event listener for the "Add Tab" button
document.querySelector('.add-tab-button').addEventListener('click', addNewTab);
