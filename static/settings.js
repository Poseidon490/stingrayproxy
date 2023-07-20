    // Function to save settings in Local Storage
    function saveSettings() {
      var panicKeyInput = document.getElementById('panicKeyInput').value.trim().toLowerCase();
      var titleInput = document.getElementById('title').value.trim();
      // Add other settings variables here if needed

      // Save settings in an object
      var settingsData = {
        panicKey: panicKeyInput,
        pageTitle: titleInput,
        // Add other settings variables here if needed
      };

      // Convert the object to a JSON string and store it in Local Storage
      localStorage.setItem('settings', JSON.stringify(settingsData));

      alert('Settings saved successfully!');
    }

    // Function to apply settings from Local Storage to the page elements
    function applySettings() {
      var settingsData = localStorage.getItem('settings');
      if (settingsData) {
        settingsData = JSON.parse(settingsData);

        // Apply the settings to your page elements
        var panicKeyInput = document.getElementById('panicKeyInput');
        panicKeyInput.value = settingsData.panicKey;

        var titleInput = document.getElementById('title');
        titleInput.value = settingsData.pageTitle;

        // Apply other settings variables here if needed
      }
    }

    // Call the function to apply settings when the page loads
    window.onload = function () {
      applySettings();
    };

    function injectCode() {
      // Your existing code for injecting CSS and JS...
    }

    function toggleEruda() {
      // Your existing code for toggling Eruda...
    }

    function setTitle(title) {
      document.title = title;
    }

    function setFavicon(url) {
      // Your existing code for setting the favicon...
    }

    function resetTab() {
      location.reload();
    }

    document.addEventListener('keydown', function (event) {
      var panicKeyInput = document.getElementById('panicKeyInput');
      var panicKey = panicKeyInput.value.trim().toLowerCase();

      if (event.key === panicKey) {
        var websiteInput = document.getElementById('websiteInput');
        var websiteURL = websiteInput.value.trim();

        // Check if a valid URL is entered
        if (websiteURL !== '') {
          // Redirect to the entered URL
          window.location.href = websiteURL;
        }
      }
      
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

    function toggleEruda() {
      if (window.eruda) {
        window.eruda.init();
      } else {
        var script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/eruda';
        document.body.appendChild(script);
        script.onload = function () {
          window.eruda.init();
        };
      }
    }

    function setTitle(title) {
      document.title = title;
    }

    function setFavicon(url) {
      var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.type = 'image/x-icon';
      link.rel = 'shortcut icon';
      link.href = url;
      document.getElementsByTagName('head')[0].appendChild(link);
    }

    function resetTab() {
      location.reload();
    }

    document.addEventListener('keydown', function (event) {
      var panicKeyInput = document.getElementById('panicKeyInput');
      var panicKey = panicKeyInput.value.trim().toLowerCase();

      if (event.key === panicKey) {
        var websiteInput = document.getElementById('websiteInput');
        var websiteURL = websiteInput.value.trim();

        // Check if a valid URL is entered
        if (websiteURL !== '') {
          // Redirect to the entered URL
          window.location.href = websiteURL;
        }
      }
