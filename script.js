
const inputField = document.querySelector(".list_input");
const addButton = document.querySelector("#add_item");
const todoList = document.querySelector(".items-list");
const sortButton = document.querySelector("#sort_button");
const deleteButton = document.querySelector(".delete");


const getInitialInput = () => {
    const li = document.createElement("li");
    li.innerHTML = `
		<input class="list_input" type="text" value="">
		<img class="cancel" src="./img/delete.svg">
	`;
    li.querySelector("img").addEventListener("click", () => {
        li.parentElement.removeChild(li);
    });

    return li;
}



sortButton.addEventListener("click", function () {

    let tasks = Array.from(todoList.children);


    tasks.sort(function (a, b) {
        return a.textContent.localeCompare(b.textContent);
    });


    todoList.innerHTML = "";


    tasks.forEach(function (task) {
        todoList.appendChild(task);
    });



});

sortButton.addEventListener("click", function () {
    let tasks = Array.from(todoList.children);
    tasks.sort(function (a, b) {
        return a.textContent.localeCompare(b.textContent);
    });
    tasks.reverse();
    todoList.innerHTML = "";
    tasks.forEach(function (task) {
        todoList.appendChild(task);
    });
});


document.getElementById("add_item").addEventListener("click", () => {
    const newItem = getInitialInput();
    document.getElementById("items_list").append(newItem);
});

document.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        const newItem = getInitialInput();
        document.getElementById("items_list").append(newItem);
    }
});


