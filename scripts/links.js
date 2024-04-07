const baseURL = "https://hyrumb.github.io/wdd230/";

const linksURL = "https://hyrumb.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  console.log(data);
  displayLinks(data);
}

function displayLinks(data) {
  const activityList = document.querySelector('#activities');

  for (let i = 0; i < data.weeks.length; i++) {
      const week = document.createElement('li');

      week.textContent = `${data.weeks[i].week} :`;
      activityList.appendChild(week);

      for (let j = 0; j < data.weeks[i].links.length; j++) {
          const link = document.createElement('a');

          link.href = `${data.weeks[i].links[j].url}`;
          link.textContent = `${data.weeks[i].links[j].title} |`;
          
          if (j === data.weeks[i].links.length - 1) {
              link.textContent = `${data.weeks[i].links[j].title}`;
          }
          week.appendChild(link);


      }
  }
}


getLinks();
