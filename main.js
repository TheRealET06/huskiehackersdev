// Function to load header and footer dynamically
document.addEventListener("DOMContentLoaded", function () {
  loadSection("header.html", "header-container");
  loadSection("footer.html", "footer-container");
});

// Function to load dynamic content (About, Events, Schedules, etc.)
function loadContent(page) {
  fetch(page)
      .then(response => {
          if (!response.ok) {
              throw new Error("Failed to load content.");
          }
          return response.text();
      })
      .then(data => {
          document.getElementById("content").innerHTML = data;

          // Smoothly scroll to the updated content
          document.getElementById("content").scrollIntoView({ behavior: "smooth" });
      })
      .catch(error => {
          console.error("Error loading content:", error);
          document.getElementById("content").innerHTML = "<p style='color:red;'>Error loading content. Please try again.</p>";
      });
}

// Function to reset content when "Home" is clicked
function showHome() {
  document.getElementById("content").innerHTML = `
      <div class="content-section">
          <h2>Welcome to Huskie Hackers!</h2>
          <p>Explore limitless possibilities, contribute to real-world solutions, and elevate your skills with us.</p>

          <h2>Why Huskie Hackers?</h2>
          <ul>
              <li><strong>Unlock Your Potential:</strong> Dynamic community fostering creativity and technical prowess.</li>
              <li><strong>Real-World Impact:</strong> Solve meaningful problems and make a difference.</li>
              <li><strong>Lifelong Connections:</strong> Build a supportive community beyond coding sessions.</li>
              <li><strong>Resume Boost:</strong> Hackathons and projects for real-world problem-solving skills.</li>
              <li><strong>Idea to Reality:</strong> Transform innovative concepts into tangible ventures.</li>
          </ul>

          <h2>How to Get Involved:</h2>
          <p>
              Join our meetings, form teams, and embark on coding adventures. All skill levels welcome!
              Ready to code the future?  
              <br> <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=kDOH6hyMMUKnmWtaAjWy5p3RGXH94rpGmP6UMjPJcPpURE1WWEpDRzRKU0RWRklITzQ2NFEzSEhUNy4u" target="_blank">Join Us</a>!!!
              by filling out the form. We will be glad to have you on board.
              <br><br> Do not hesitate to <a href="https://discord.gg/MJVwjds5QU">Contact Us</a> if you have any questions.
          </p>

          <p>Cheers to innovation, </p>
          <p>Huskie Hackers</p>
      </div>
  `;
  document.getElementById("content").scrollIntoView({ behavior: "smooth" });
}

// Function to load header and footer
function loadSection(file, containerId) {
  fetch(file)
      .then(response => response.text())
      .then(data => {
          document.getElementById(containerId).innerHTML = data;
      })
      .catch(error => console.error(`Error loading ${file}:`, error));
}
