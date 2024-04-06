const form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    window.location.href = "thankyou.html";
  });


// Get the hidden input field
const formLoadTimeInput = document.getElementById("form_load_time");
const timestamp = new Date().getTime(); // Returns milliseconds since Unix epoch
// Set the value of the hidden input field
formLoadTimeInput.value = timestamp;