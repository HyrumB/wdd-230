const input = document.querySelector("#favchap");
const list = document.querySelector("#list");
const button = document.querySelector("button");

button.addEventListener("click", (e) => {
    e.preventDefault();

    if (input.value){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");

    li.textContent = input.value;
    delBtn.textContent = "❌";

    delBtn.addEventListener("click", () => {
        list.removeChild(li);
        input.focus;
    });

    li.appendChild(delBtn);
    list.appendChild(li);

    input.value = "";
    
    }

    input.focus
});