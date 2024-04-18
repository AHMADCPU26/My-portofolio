// JavaScript code for toggling the sidebar when the button is clicked
var sidebarOpen = false;
var openSidebarBtn = document.getElementById("openSidebarBtn");

openSidebarBtn.addEventListener("click", function() {
  toggleSidebar();
});

document.getElementById("homeButton").addEventListener("click", function() {
  window.location.href = "index.html";
  toggleSidebar();
});

document.getElementById("aboutButton").addEventListener("click", function() {
  window.location.href = "about.html";
  toggleSidebar();
});

document.getElementById("contactButton").addEventListener("click", function() {
  window.location.href = "contact.html";
  toggleSidebar();
});

function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");

  if (!sidebarOpen) {
    sidebar.style.left = '0';
    openSidebarBtn.style.left = '250px'; // Move the button to the right when the menu appears
  } else {
    sidebar.style.left = '-250px';
    openSidebarBtn.style.left = '10px'; // Move the button back to its original position when the menu is closed
  }

  sidebarOpen = !sidebarOpen;
}\
