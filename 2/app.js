const input = document.querySelectorAll("input")[0];
const inputDiv = document.querySelector(".todo-list-container");

let allTodos = [];

function createTodo() {
  let inputValue = input.value;
  allTodos.push(inputValue);
  printAllTodos();
  input.value = "";
}

function printAllTodos() {
  inputDiv.innerHTML = "";
  allTodos.map(
    (todo, index) =>
      (inputDiv.innerHTML += `
      <p>
      ${todo}
        <button onclick="deleteTodo(${index})">Delete</button>
        <button onclick="editTodo(${index})">Edit</button>
      </p>
    `)
  );
}

function deleteTodo(index) {
  allTodos.splice(index, 1);
  printAllTodos();
}

const addContainer = document.querySelector("#add-todo-container");
const editContainer = document.querySelector("#edit-todo-container");
const editInput = document.querySelectorAll("input")[1];

let targetIndex = 0;

function editTodo(index) {
  if (isEditing) {
    displayError()
  } 
  else {
    toggleInputDiv();
    editInput.value = allTodos[index];
    targetIndex = index;
  }
}

function updateTodo() {
  toggleInputDiv();
  allTodos.splice(targetIndex, 1, editInput.value);
  printAllTodos();
}

let isEditing = false;

function toggleInputDiv() {
  if (isEditing) {
    addContainer.className = "";
    editContainer.className += " hide";
  } else {
    editContainer.className = "";
    addContainer.className += " hide";
  }
  isEditing = !isEditing;
}

const error = document.querySelector(".error")

function displayError(){
   error.innerHTML = `
     <p style="color: red;">Please save the current todo first</p>
   `
   setTimeout(() => {
      error.innerHTML = ""
   }, 3000)
}