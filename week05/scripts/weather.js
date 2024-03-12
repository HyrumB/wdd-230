// key: 55d264ebc27554decb2c313a600bfceb
// lat lon 49.74946601610474, 6.637785128724036
// api call: https://api.openweathermap.org/data/2.5/weather?lat=49.74946601610474&lon=6.637785128724036&appid=55d264ebc27554decb2c313a600bfceb

// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

const lat = 49.74946601610474;
const lon = 6.637785128724036;
const units = "farenheit";
const APIkey = "55d264ebc27554decb2c313a600bfceb";
const url =
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=${units}}`;

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();

      displayresults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayresults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = `${desc}`;
}

apiFetch()
