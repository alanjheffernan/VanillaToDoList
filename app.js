//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
//Event listeners

todoButton.addEventListener("click", addToDo);
todoList.addEventListener("click", deleteCheck);

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
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }

    //Check todo
    if(item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}