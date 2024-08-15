const input = document.querySelectorAll("input")[0];
const textarea = document.querySelectorAll("textarea")[0];
const expenseContainer = document.querySelector(".log-container");
const totalAmount = document.querySelector(".total");

let allExpenses = [];
window.onload = () => {
  const savedExpenses = JSON.parse(localStorage.getItem("expenses"));
  if (savedExpenses) {
    allExpenses = savedExpenses;
    printAllExpenses();
  }
};

function createExpense() {
  let inputValue = Number(input.value);
  let descriptionValue = textarea.value;
  let newExpense = {
    amount: inputValue,
    description: descriptionValue,
  };
  allExpenses.push(newExpense);
  saveExpenses();
  printAllExpenses();
  input.value = "";
  textarea.value = "";
}

function printAllExpenses() {
  let clutter = "";
  let total = 0;

  allExpenses.forEach(({ amount, description }, index) => {
    total += amount;
    clutter += `
    <div class="flex">
       <p class="shadow-xl bg-white p-2 rounded-lg font-semibold justify-between w-auto">
         ${description}:
         Rs ${amount}
          <button onclick="deleteExpense(${index})" class="bg-red-600 p-2 rounded-lg text-white font-semibold">Delete</button>
          <button onclick="editExpense(${index})" class="bg-sky-600 p-2 rounded-lg text-white font-semibold">Edit</button>
       </p>
       </div>
      
    `;
  });
  expenseContainer.innerHTML = clutter;
  totalAmount.innerHTML = "Rs " + total;
}

function deleteExpense(index) {
  allExpenses.splice(index, 1);
  saveExpenses();
  printAllExpenses();
}

const addContainer = document.querySelector(".add-container");
const editContainer = document.querySelector(".edit-container");
const editInput = document.querySelectorAll("input")[1];
const editTextarea = document.querySelectorAll("textarea")[1];
let targetIndex;

function editExpense(index) {
  if (isEditing) {
    displayError();
  } else {
    editInput.value = allExpenses[index].amount;
    editTextarea.value = allExpenses[index].description;
    targetIndex = index;
    toggleInputDiv();
  }
}

function updateExpense() {
  allExpenses[targetIndex].amount = Number(editInput.value);
  allExpenses[targetIndex].description = editTextarea.value;
  saveExpenses;
  printAllExpenses();
  toggleInputDiv();
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

const error = document.querySelector(".error");
function displayError() {
  error.innerHTML = `
     <p class="red">Please first save the current expense to proceed</p>
   `;
  setTimeout(() => {
    error.innerHTML = "";
  }, 2000);
}

function saveExpenses() {
  localStorage.setItem("expenses", JSON.stringify(allExpenses));
}
