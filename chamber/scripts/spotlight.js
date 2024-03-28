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

  const logo1 = document.createElement("img");
  const info1 = document.createElement("div");
  const name1 = document.createElement("p");
  const number1 = document.createElement("p");
  const location1 = document.createElement("p");
  const url1 = document.createElement("a");

  parent = spot1;
  company = list[num1];

  logo1.src = company.image.imageUrl;
  logo1.alt = company.image.fileName;
//   logo1.width = 100;
//   logo1.height = 50;

  name1.textContent = company.name;
  info1.appendChild(name1);

  location1.textContent = company.address;
  info1.appendChild(location1);

  number1.textContent = company.phoneNumber;
  info1.appendChild(number1);

  url1.href = company.websiteUrl;
  url1.textContent = "Visit Website";
  info1.appendChild(url1);

  parent.appendChild(logo1);
  parent.appendChild(info1);

  const logo2 = document.createElement("img");
  const info2 = document.createElement("div");
  const name2 = document.createElement("p");
  const number2 = document.createElement("p");
  const location2 = document.createElement("p");
  const url2 = document.createElement("a");

  parent = spot2;
  company = list[num2];

  logo2.src = company.image.imageUrl;
  logo2.alt = company.image.fileName;
//   logo2.width = 100;
//   logo2.height = 50;

  name2.textContent = company.name;
  info2.appendChild(name2);

  location2.textContent = company.address;
  info2.appendChild(location2);

  number2.textContent = company.phoneNumber;
  info2.appendChild(number2);

  url2.href = company.websiteUrl;
  url2.textContent = "Visit Website";
  info2.appendChild(url2);

  parent.appendChild(logo2);
  parent.appendChild(info2);

  const logo3 = document.createElement("img");
  const info3 = document.createElement("div");
  const name3 = document.createElement("p");
  const number3 = document.createElement("p");
  const location3 = document.createElement("p");
  const url3 = document.createElement("a");

  parent = spot3;
  company = list[num3];

  logo3.src = company.image.imageUrl;
  logo3.alt = company.image.fileName;
//   logo3.width = 100;
//   logo3.height = 50;
  
  name3.textContent = company.name;
  info3.appendChild(name3);

  location3.textContent = company.address;
  info3.appendChild(location3);

  number3.textContent = company.phoneNumber;
  info3.appendChild(number3);

  url3.href = company.websiteUrl;
  url3.textContent = "Visit Website";
  info3.appendChild(url3);

  parent.appendChild(logo3);
  parent.appendChild(info3);

  // image
  // compay name
  // location
  // number
  // URL
}

getMembers();
