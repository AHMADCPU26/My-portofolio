=var sidebarOpen = false;
var openSidebarBtn = document.getElementById("openSidebarBtn");
var body = document.querySelector("body");

openSidebarBtn.addEventListener("click", function() {
  toggleSidebar();
});

document.getElementById("homeButton").addEventListener("click", function() {
  window.location.href = "index.html";
});

document.getElementById("aboutButton").addEventListener("click", function() {
  window.location.href = "about.html";
});

document.getElementById("contactButton").addEventListener("click", function() {
  window.location.href = "contact.html";
});

function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");

  if (!sidebarOpen) {
    body.classList.add("sidebar-open");
  } else {
    body.classList.remove("sidebar-open");
  }

  sidebarOpen = !sidebarOpen;
}

// Check if the sidebar should be open when the page loads (e.g., when navigating back or forward)
if (localStorage.getItem("sidebarOpen") === "true") {
  body.classList.add("sidebar-open");
  sidebarOpen = true;
}

// Save the sidebar state to local storage
window.addEventListener("beforeunload", function() {
  localStorage.setItem("sidebarOpen", sidebarOpen);
});
