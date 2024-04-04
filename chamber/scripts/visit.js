
function updateVisitMessage() {
    const lastVisitString = localStorage.getItem("lastVisit");
  
    // Check if it's the first visit
    if (!lastVisitString) {
      displayMessage("Welcome! Let us know if you have any questions via email at notreal@mail.unreal");
      return;
    }
  
    const lastVisit = new Date(lastVisitString);
    const now = new Date();
  
    // Calculate the difference in milliseconds
    const diffMs = now - lastVisit;
  
    // Convert to days and round down
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  
    if (days == 0) {
      displayMessage("Back so soon?");

    } else {
        // Display the message "you last visited ____ days ago if days != 1"
        // otherwise display "you last visited 1 day ago"
      const message = days == 1 ? "You last visited 1 day ago." : `You last visited ${days} days ago.`;
      displayMessage(message);
    }
  }
  
  function displayMessage(message) {
    // Replace this with your logic to display the message in the sidebar
    const sidebarElement = document.getElementById("visit-message");
    if (sidebarElement) {
      sidebarElement.textContent = message;
    }
  }
  
  // Update the message on page load
  updateVisitMessage();
  
  // Update the last visit time on every page visit
  localStorage.setItem("lastVisit", new Date().toISOString());