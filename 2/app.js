const input = document.querySelectorAll("input")[0];
const inputDiv = document.querySelector(".todo-list-container");

let allTodos = [];

window.onload = () => {
  const savedTodos = JSON.parse(localStorage.getItem("todos"))
  if(savedTodos){
    allTodos = savedTodos
    printAllTodos()
  }
}


function createTodo() {
  let inputValue = input.value;
  allTodos.push(inputValue);
  saveTodos()
  printAllTodos();
  input.value = "";
}

function printAllTodos() {
  let clutter = "";
  allTodos.forEach((todo, index) => {
    clutter += `
      <p>
        ${todo}
        <button onclick="deleteTodo(${index})">Delete</button>
        <button onclick="editTodo(${index})">Edit</button>
      </p>
    `;
  });

  inputDiv.innerHTML = clutter;
}

function deleteTodo(index) {
  allTodos.splice(index, 1);
  saveTodos()
  printAllTodos();
}

const addContainer = document.querySelector("#add-todo-container");
const editContainer = document.querySelector("#edit-todo-container");
const editInput = document.querySelectorAll("input")[1];
let targetIndex;

function editTodo(index) {
  if (isEditing) {
    displayError();
  } else {
    editInput.value = allTodos[index];
    targetIndex = index;
    toggleInputDiv();
  }
}

function updateTodo() {
  allTodos.splice(targetIndex, 1, editInput.value);
  saveTodos()
  printAllTodos();
  toggleInputDiv();
}

let isEditing = false;

function toggleInputDiv() {
  if (!isEditing) {
    editContainer.className = "";
    addContainer.className += " hide";
  } else {
    editContainer.className += " hide";
    addContainer.className = "";
  }

  isEditing = !isEditing;
}

const error = document.querySelector(".error")

function displayError(){
   error.innerHTML = `
      <h3 class="red">Please save the current todo first</h3>
   `
   setTimeout(() => {
      error.innerHTML = ""
   }, 1300  )
}

function saveTodos(){
  localStorage.setItem("todos", JSON.stringify(allTodos))
}