document.addEventListener("DOMContentLoaded", function() {

  document.body.style.opacity = 0;
  
  window.setTimeout(() => {
    document.body.style.transition = "opacity 2s";
    document.body.style.opacity = 1; 
  }, 50);
  
  //alert("Welcome to Huskie Hackers!");

});

// Function to show the events content
function showEvents() {
  var eventsContent = document.getElementById("events-content");
  var aboutContent = document.getElementById("about-content");

  if (eventsContent && aboutContent) {
    eventsContent.style.display = "block";
    aboutContent.style.display = "none";

    // Scroll to the events content smoothly
    eventsContent.scrollIntoView({ behavior: "smooth" });
  }
}

// Function to show the about content
function showAbout() {
  var aboutContent = document.getElementById("about-content");
  var eventsContent = document.getElementById("events-content");

  if (aboutContent && eventsContent) {
    aboutContent.style.display = "block";
    eventsContent.style.display = "none";

    // Scroll to the about content smoothly
    aboutContent.scrollIntoView({ behavior: "smooth" });
  }
}

// Function to show the home content
function showHome() {
  var homeContent = document.getElementById("hero");
  if (homeContent) {
    homeContent.scrollIntoView({ behavior: "smooth" });
  }
}
