//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
//Event listeners

todoButton.addEventListener("click", addToDo);

//functions

function addToDo(event){
    event.preventDefault();
    console.log("hello");
}