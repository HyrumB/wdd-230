const form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    window.location.href = "landing.html";
  });