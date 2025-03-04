// Function to display an alert message when the button is clicked
function showAlert() {
    alert("Hello! Welcome to my landing page.");
  }
  
  // Function to toggle extra content on and off
  function toggleExtraContent() {
    var contentDiv = document.getElementById('extraContent');
    if (contentDiv.style.display === 'none' || contentDiv.style.display === '') {
      contentDiv.style.display = 'block';
    } else {
      contentDiv.style.display = 'none';
    }
  }
  
  // Function to change the background to a random color
  function changeBackground() {
    var colors = ['#FFCDD2', '#F8BBD0', '#E1BEE7', '#D1C4E9', '#C5CAE9', '#BBDEFB', '#B3E5FC', '#B2EBF2', '#B2DFDB', '#C8E6C9'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
  }
  
  // Function to toggle dark mode
  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
  
  // Function to update the current time every second
  function updateTime() {
    var now = new Date();
    var timeDiv = document.getElementById('currentTime');
    timeDiv.textContent = "Current Time: " + now.toLocaleTimeString();
  }
  
  // Call updateTime every second
  setInterval(updateTime, 1000);
  
  // Initialize extra content as visible
  document.getElementById('extraContent').style.display = 'block';
  