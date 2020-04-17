//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');
//Event listeners

todoButton.addEventListener("click", addToDo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//functions

function addToDo(event) {
    event.preventDefault();
    //Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Todo List Item
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Check Buttom
    const completedButtom = document.createElement('button');
    completedButtom.innerHTML = '<i class="fas fa-check"></i>';
    completedButtom.classList.add('complete-btn');
    todoDiv.appendChild(completedButtom);
    //Trash Buttton
    const trashButtom = document.createElement('button');
    trashButtom.innerHTML = '<i class="fas fa-trash"></i>';
    trashButtom.classList.add('trash-btn');
    todoDiv.appendChild(trashButtom);
    //Append To list
    todoList.appendChild(todoDiv);
    //Clear Todoinput value
    todoInput.value = "";

}

function deleteCheck(event) {
    const item = event.target;
    //Delete todo
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        //Animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function () {
            todo.remove();
        });
    }

    //Check todo
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (todo.classList.contains("completed")){
                    todo.style.display = "none";
                } else {
                    todo.style.display = "flex";
                }
                break;
        }
    });
}

function saveLocalTodos(todo){
    //Check to see if todo is already in local storage
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo)
}