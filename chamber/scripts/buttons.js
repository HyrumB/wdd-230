// nav button stuff
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("hidden");
});

const element = document.querySelector(".banner"); // Select the element with class "banner"

if (element) {
  const closeButton = document.querySelector("#closebanner");
  const banner = document.querySelector(".banner");
  closeButton.addEventListener("click", () => {
    banner.classList.toggle("hidden");
  });
} else {
  console.log("No element with class 'banner' found");
}
