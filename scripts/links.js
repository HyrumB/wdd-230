const baseURL = "https://hyrumb.github.io/wdd230/";

const linksURL = "https://hyrumb.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  // console.log(data);
  displayLinks(data);
}

function displayLinks(data) {
  const weekList = document.querySelector('#weekList');
  for (let i = 0; i < weeks.week.length; i++) {
      
      const week = document.createElement('li');
      week.textContent = `${weeks.weeks[i].week} :`;
      weekList.appendChild(week);
      for (let j = 0; j < weeks.weeks[i].links.length; j++) {

          const link = document.createElement('a');
          link.href = `${weeks.weeks[i].links[j].url}`;
          link.textContent = `${weeks.weeks[i].links[j].title} |`;
          if (j === weeks.weeks[i].links.length - 1) {
              link.textContent = `${weeks.weeks[i].links[j].title}`;
          }
          week.appendChild(link);


      }
  }
  console.log(weekList);

}


getLinks();
