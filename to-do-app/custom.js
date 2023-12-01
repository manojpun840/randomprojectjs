const inputBox = document.getElementById("input-box");
// console.log(inputBox);
const listContainer = document.getElementById("list-container");
// console.log(listContainer);
const addBtn = document.querySelector(".js-button");
// console.log(addBtn);

addBtn.addEventListener("click", () => {
    addTask();
});

inputBox.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        addTask();
    }
});

const addTask = () => {
    if(inputBox.value === ""){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        // console.log(li);
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        // console.log(span);
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
};

listContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});

const saveData = () => {
    localStorage.setItem("data",listContainer.innerHTML);
};

const showTask = () => {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

