const input = document.querySelectorAll("input")[0];
const inputDiv = document.querySelector(".todo-list-container");

let allTodos = [];

function createTodo() {
  let newTodo = input.value;
  allTodos.push(newTodo);
  printAllTodos();
  input.value = "";
}

function printAllTodos() {
  inputDiv.innerHTML = "";
  allTodos.map((todo, index) => {
    inputDiv.innerHTML += `
         <p>${todo}     
           <button onclick="deleteTodo(${index})">Delete</button>
           <button onclick="editTodo(${index})">Edit</button>
         </p>
     `;
  });
}

function deleteTodo(index) {
  allTodos.splice(index, 1);
  printAllTodos();
}

const editInput = document.querySelectorAll("input")[1];
const addContainer = document.querySelector("#add-todo-container");
const editContainer = document.querySelector("#edit-todo-container");

let editIndex;
function editTodo(index) {
  if(isEditing){
    alert("Please save the current todo first")
  }
  else{
  toggleInputDiv();
  editInput.value = allTodos[index];
  editIndex = index;
  }
}

function updateTodo() {
  toggleInputDiv();
  allTodos.splice(editIndex, 1, editInput.value);
  printAllTodos();
}

let isEditing = false;
function toggleInputDiv() {
  if (!isEditing) {
    addContainer.className += " hide";
    editContainer.className = "";
  } else {
    addContainer.className = "";
    editContainer.className += " hide";
  }

  isEditing = !isEditing;
}
