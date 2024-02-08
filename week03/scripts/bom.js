const input = document.querySelector("#favChap");
const list = document.querySelector("#list");
const button = document.querySelector("button");

let chaptersArray = getChapterList() || [];

function displayList(item) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");

  li.textContent = item;
  delBtn.textContent = "❌";

  delBtn.addEventListener("click", () => {
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus;
  });

  li.appendChild(delBtn);
  list.appendChild(li);

//   input.value = "";
}

chaptersArray.forEach((chapter) => {
  displayList(chapter);
});

function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList();
}

function getChapterList() {
  return JSON.parse(localStorage.getItem("myFavBOMList"));
}

function setChapterList() {
  localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

button.addEventListener("click", (e) => {
  e.preventDefault();

  if (input.value) {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = " ";
    input.focus();
  }
});
