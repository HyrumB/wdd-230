const url = "./data/members.json";
const parent = document.querySelector("#company-container");


async function getMembers() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  displaySpotLightedMembers(data);
}

function displaySpotLightedMembers(data) {

  // Add only Silver and gold members to list
  for (let i = 0; i < data.members.length; i++) {
    
    let company = data.members[i]

        // Create elements with class names matching their variable names
        const logo = document.createElement("img");
        logo.className = "logo";
        const info = document.createElement("div");
        info.className = "info";
        const name = document.createElement("p");
        name.className = "name";
        const number = document.createElement("p");
        number.className = "number";
        const location = document.createElement("p");
        location.className = "location";
        const url = document.createElement("a");
        url.className = "link";
        const wrapper = document.createElement("div");
        wrapper.className = "wrapper";

    logo.src = company.image.imageUrl;
    logo.alt = company.image.fileName;

    name.textContent = company.name;
    info.appendChild(name);

    location.textContent = company.address;
    info.appendChild(location);

    number.textContent = company.phoneNumber;
    info.appendChild(number);

    url.href = company.websiteUrl;
    url.textContent = "Visit Website";
    info.appendChild(url);

    wrapper.appendChild(logo);
    wrapper.appendChild(info);

    parent.appendChild(wrapper);

    // image
    // compay name
    // location
    // number
    // URL
  }
}

getMembers();

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#company-container");


gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
  display.classList.add("list");
  display.classList.remove("grid");
});