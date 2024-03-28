const targetClass = ".banner";

function checkDay() {
  const today = new Date().getDay();

  // Tuesday = 2, Wednesday = 3, Thursday = 4
  if (today !== 2 && today !== 3 && today !== 4) {

    const elements = document.getElementsByClassName(targetClass);

    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.add("hidden"); // Add a "hidden" class to hide
    }
  }
}

checkDay();

