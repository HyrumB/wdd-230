function updateVisitCount() {
    // Check if local storage is available
    if (typeof(Storage) !== "undefined") {
      // Get the stored visit count or initialize it to 0
      let visitCount = parseInt(localStorage.getItem("visitCount")) || 0;
      visitCount++;
      localStorage.setItem("visitCount", visitCount);
      document.getElementById("visitCountDisplay").innerHTML = "Visit count: " + visitCount;
    } else {
      // Local storage not available, display a message
      document.getElementById("visitCountDisplay").innerHTML = "Visit count unavailable (local storage not supported)";
    }
  }
  
  // on page load it calls the function
  window.addEventListener("load", updateVisitCount);
  