const url = "./data/members.json";

const spotlightCards = document.querySelector(".spotlight-card");
const spot1 = document.querySelector("#spot1");
const spot2 = document.querySelector("#spot2");
const spot3 = document.querySelector("#spot3");

async function getMembers() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  displaySpotLightedMembers(data);
}

function displaySpotLightedMembers(data) {
  let list = [];

  // Add only Silver and gold members to list
  for (let i = 0; i < data.members.length; i++) {
    // console.log(data.members[i]);
    if (
      data.members[i].membershipLevel == "silver" ||
      data.members[i].membershipLevel == "gold"
    ) {
      list.push(data.members[i]);
      // console.log(data.members[i]);
    }
  }

  // pick randos from list
  let num1 = Math.floor(Math.random() * list.length);
  let num2 = Math.floor(Math.random() * list.length);
  let num3 = Math.floor(Math.random() * list.length);
  console.log(list);

  // display randos
  let company = list[num1];

  const logo = document.createElement("img");
  const info = document.createElement("div");
  const name = document.createElement("p");
  const number = document.createElement("p");
  const location = document.createElement("p");
  const url = document.createElement("a");

  // Add alt text for accessibility

  let count = 1;
  while (count < 4) {
    switch (count) {
      case 1:
        parent = spot1;
        company = list[num1];
        console.log(list[num1]);

        break;
      case 2:
        parent = spot2;
        company = list[num2];
        console.log(list[num2]);
        break;
      case 3:
        parent = spot3;
        company = list[num3];
        console.log(list[num3]);
        break;
    }

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

    parent.appendChild(logo);
    parent.appendChild(info);

    count += 1;
  }

  // image
  // compay name
  // location
  // number
  // URL
}

getMembers();
