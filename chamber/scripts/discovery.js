const url = "./data/directory.json";

async function getDirectoryData(url) {
    const response = await fetch(url);
    const data = await response.json();
    ;
    displayDirectoryData(data);
}

function displayDirectoryData(data) {
    console.log(data)
}

getDirectoryData(url)