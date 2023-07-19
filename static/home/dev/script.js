window.onload = function() {
  var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
  var loadTimeElement = document.getElementById("load-time");
  loadTimeElement.textContent = "" + loadTime + " ms";

  // Check if the browser supports the Storage API
  if (typeof(Storage) !== "undefined") {
    // Retrieve the size of localStorage in bytes
    var storageSize = JSON.stringify(localStorage).length;

    // Convert the size to more readable units (KB, MB, GB)
    var sizeInKB = (storageSize / 1024).toFixed(2);
    var sizeInMB = (storageSize / (1024 * 1024)).toFixed(2);
    var sizeInGB = (storageSize / (1024 * 1024 * 1024)).toFixed(2);

    // Display the storage usage on the page
    var storageUsageElement = document.getElementById("storage-usage");
    storageUsageElement.innerHTML = "<br>Bytes: " + storageSize + " bytes <br>KB: " + sizeInKB + " KB <br>MB: " + sizeInMB + " MB <br>GB: " + sizeInGB + " GB";
  } else {
    // Display a message if the browser doesn't support the Storage API
    var storageUsageElement = document.getElementById("storage-usage");
    storageUsageElement.textContent = "Storage API is not supported by this browser.";
  }
};
window.addEventListener('DOMContentLoaded', checkServerStatus);

function checkServerStatus() {
  var statusElement = document.getElementById('status');
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        statusElement.innerText = 'Server is up and running!';
      } else {
        statusElement.innerText = 'Server is down.';
      }
    }
  };

  xhr.open('GET', 'https://amongus.poseidon490.repl.co/#', true);
  xhr.send();
}
// Variables
var fpsCounter = document.getElementById('fps-counter');
var frameCount = 0;
var startTime = performance.now();

// Function to update FPS counter
function updateFPSCounter() {
  var currentTime = performance.now();
  var elapsedTime = currentTime - startTime;
  var currentFPS = Math.round((frameCount / elapsedTime) * 1000);

  fpsCounter.innerHTML = 'FPS: ' + currentFPS;

  // Reset variables
  frameCount = 0;
  startTime = currentTime;

  // Request next frame
  requestAnimationFrame(updateFPSCounter);
}

// Function to count frames
function countFrames() {
  frameCount++;
  requestAnimationFrame(countFrames);
}


countFrames();


updateFPSCounter();

    function updateVisitorCount() {

      if (localStorage.getItem('visitorCount')) {

        var count = parseInt(localStorage.getItem('visitorCount'));

        count++;

        document.getElementById('visitorCount').textContent = count;

        localStorage.setItem('visitorCount', count);
      } else {
        localStorage.setItem('visitorCount', 1);
        document.getElementById('visitorCount').textContent = 1;
      }
    }

    window.addEventListener('load', updateVisitorCount);
document.addEventListener("DOMContentLoaded", function() {
  const output = document.getElementById("output");
  const commandInput = document.getElementById("command");

  commandInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      const command = commandInput.value.trim();
      commandInput.value = "";
      output.innerHTML += `<div><span>$</span> ${command}</div>`;
      processCommand(command);
    }
  });

function processCommand(command) {
  if (command === "help") {
    output.innerHTML += `<div>Available commands:</div>
                         <div>- help: Display available commands</div>
                         <div>- time: Show current time</div>
                         <div>- echo [message]: Print a message</div>
                         <div>- date: Display the current date</div>
                         <div>- about: Show information about the developer/terminal</div>
                         <div>- quote: Show a random inspirational quote</div>
                         <div>- weather [location]: Get the current weather for a specific location</div>
                         <div>- calc [expression]: Perform arithmetic calculations</div>
                         <div>- random: Generate a random number</div>
                         <div>- color [color code]: Change the text color in the terminal</div>
                         <div>- clear: Clear the terminal</div>
                         <div>- hack: Simulate hacking in progress</div>`;
  } else if (command === "time") {
    const currentTime = new Date().toLocaleTimeString();
    output.innerHTML += `<div>Current time is: ${currentTime}</div>`;
  } else if (command === "date") {
    const currentDate = new Date().toLocaleDateString();
    output.innerHTML += `<div>Current date is: ${currentDate}</div>`;
  } else if (command === "about") {
    output.innerHTML += `<div>Made by Poseidon490.</div>`;
  } else if (command === "quote") {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        output.innerHTML += `<div>${data.content} - ${data.author}</div>`;
        output.scrollTop = output.scrollHeight;
      })
      .catch((error) => {
        output.innerHTML += `<div>Error fetching quote: ${error}</div>`;
        output.scrollTop = output.scrollHeight;
      });
  } else if (command.startsWith("weather")) {
    const location = command.substring(8).trim();
    const apiKey = "afea3312b3e24723bbe134501231407";
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const { temp_c, humidity, wind_kph } = data.current;
        output.innerHTML += `<div>Current weather in ${location}: Temperature: ${temp_c}°C, Humidity: ${humidity}%, Wind: ${wind_kph} kph</div>`;
        output.scrollTop = output.scrollHeight;
      })
      .catch((error) => {
        output.innerHTML += `<div>Error fetching weather data: ${error}</div>`;
        output.scrollTop = output.scrollHeight;
      });
  } else if (command.startsWith("calc")) {
    const expression = command.substring(4).trim();
    try {
      const result = eval(expression);
      output.innerHTML += `<div>Result: ${result}</div>`;
      output.scrollTop = output.scrollHeight;
    } catch (error) {
      output.innerHTML += `<div>Error evaluating expression: ${error}</div>`;
      output.scrollTop = output.scrollHeight;
    }
  } else if (command.startsWith("echo")) {
    const message = command.substring(4).trim();
    if (message !== "") {
      output.innerHTML += `<div>${message}</div>`;
      output.scrollTop = output.scrollHeight;
    }
  } else if (command === "random") {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    output.innerHTML += `<div>Random number: ${randomNumber}</div>`;
    output.scrollTop = output.scrollHeight;
  } else if (command.startsWith("color")) {
    const colorCode = command.substring(6).trim();
    output.style.color = colorCode;
  } else if (command === "clear") {
    output.innerHTML = "";
  } else if (command === "hack") {
    simulateHacking();
  } else {
    output.innerHTML += `<div>Command not found: ${command}</div>`;
    output.scrollTop = output.scrollHeight;
  }

  // Scroll to the bottom of the terminal
  output.scrollTop = output.scrollHeight;
}

function simulateHacking() {
  const hackingText = "Hacking in progress...";
  const hackingDuration = 3000; // in milliseconds

  const intervalId = setInterval(() => {
    output.innerHTML += `<div style="color: green;">${hackingText}</div>`;
    output.scrollTop = output.scrollHeight;
  }, 100);

  setTimeout(() => {
    clearInterval(intervalId);
    output.innerHTML += `<div style="color: green;">Hacking completed!</div>`;
    output.scrollTop = output.scrollHeight;
  }, hackingDuration);
}

output.innerHTML = "<div>Type 'help' to get started</div>";
});
