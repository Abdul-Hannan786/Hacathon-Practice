const input = document.querySelectorAll("input")[0];
const inputDiv = document.querySelector(".todo-list-container");

function createTodo() {
  let inputValue = input.value;
  printAllTodos(inputValue);
  input.value = "";
}

function printAllTodos(todo) {
  let newTodoItem = makeAllTodos(todo)
  inputDiv.appendChild(newTodoItem)
}

function makeAllTodos(newTodoText){
    let pEl = document.createElement("P");
    let textNode = document.createTextNode(newTodoText);
    pEl.appendChild(textNode);
  
    let dltBtn = document.createElement("BUTTON");
    let editbtn = document.createElement("BUTTON");
  
    let dltBtnText = document.createTextNode("Delete");
    dltBtn.appendChild(dltBtnText);
    dltBtn.setAttribute("onclick", "deleteTodo(this)");
    pEl.appendChild(dltBtn);
  
    let editbtnText = document.createTextNode("Edit");
    editbtn.appendChild(editbtnText);
    editbtn.setAttribute("onclick", "editTodo(this)");
    pEl.appendChild(editbtn);   
  
    return pEl
}

function deleteTodo(el) {
  let targetTodo = el.parentNode;
  inputDiv.removeChild(targetTodo);
}

const addContainer = document.querySelector("#add-todo-container");
const editContainer = document.querySelector("#edit-todo-container");
const editInput = document.querySelectorAll("input")[1];
let editValue;

function editTodo(el) {
    editValue = el.parentNode.childNodes[0];
    editInput.value = editValue.nodeValue;
    toggleInputDiv();
}

function updateTodo() {
    editValue.nodeValue = editInput.value
    toggleInputDiv();
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
