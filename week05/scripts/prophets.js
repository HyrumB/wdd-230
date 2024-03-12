const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector("#cards");

async function getProphetsData() {
  const response = await fetch(url);
  const data = await response.json();
  //   console.table(data.prophets);
  return data.prophets;
}

// getProphetsData();

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    const card = document.createElement("section");
    const fullName = document.createElement("h2");
    const birthday = document.createElement("p");
    const birthplace = document.createElement("p");
    const portrait = document.createElement("img");

    // Set heading content using textContent
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    birthday.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
    // Set image attributes using setAttribute()
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute(
      "alt",
      `Portrait of ${prophet.name} ${prophet.lastname}`
    );

    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");

    card.appendChild(fullName);
    card.appendChild(birthday);
    card.appendChild(birthplace);
    card.appendChild(portrait);
    cards.appendChild(card);
  });
};

async function display() {
  const proData = await getProphetsData();
  displayProphets(proData);
}
display();
