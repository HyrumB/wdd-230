const baseURL = "https://hyrumb.github.io/wdd230/";

const linksURL = "https://hyrumb.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  // console.log(data);
  displayLinks(data);
}

async function displayLinks(data) {
  console.log(data);

  const ul = document.querySelector("#activities");
  const bar = " | ";

  for (const link of data) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `${link.week}`;
    a.textContent = link.title;
    li.appendChild(a);
    ul.appendChild(li);
  }
}

getLinks();
