//document.getElementById("lastModified");

// use const unless you need to change the value then use let
function getLastModifiedDate(){
    const lastmodifiedID = document.querySelector("#lastModified");
    const lastModifiedDate = document.lastModified;

    // textcontent will be pasted verbatem so html will not appear
    lastmodifiedID.innerHTML = `Last Modified: ${lastModifiedDate}</em>`;
    }

function getCurrentYear(){
    const currentYearElement = document.querySelector('#year');
    const currentYear = new Date().getFullYear();
    currentYearElement.innerHTML = `&copy ${currentYear} | Toronto Chambers Site | Hyrum Bullock |`;


}   

// getLastModifiedDate();
getCurrentYear();