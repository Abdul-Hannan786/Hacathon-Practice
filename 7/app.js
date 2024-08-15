const titleInput = document.querySelectorAll("input")[0];
const contentInput = document.querySelectorAll("textarea")[0];
const noteContainer = document.querySelector("#note-container");

let allNotes = [];

window.onload = () => {
  const savedNotes = JSON.parse(localStorage.getItem("notes"));
  if (savedNotes) {
    allNotes = savedNotes;
    printAllnotes();
  }
};

function createNotes() {
  let newNotes = {
    title: titleInput.value,
    content: contentInput.value,
  };
  allNotes.push(newNotes);
  saveNotes()
  printAllnotes();
  titleInput.value = "";
  contentInput.value = "";
}

function printAllnotes() {
  let clutter = "";
  allNotes.forEach(({ title, content }, index) => {
    clutter += `
           <div class="rounded-lg bg-sky-100 w-64 p-3 flex flex-col justify-between">
             <h3 class="text-xl font-bold">${title}</h3>
             <p>${content}</p>
             <div class="text-white font-semibold mt-2">
             <button class="bg-red-600 p-2 rounded-md" onclick="deleteNote(${index})">Delete Note</button>
               <button class="bg-sky-600 p-2 rounded-md" onclick="editNote(${index})">Edit Note</button>
            </div>
      </div>
        `;
  });

  noteContainer.innerHTML = clutter;
}

function deleteNote(index) {
  allNotes.splice(index, 1);
  saveNotes()
  printAllnotes();
}

const addContainer = document.querySelector(".add-container");
const editContainer = document.querySelector(".edit-container");
const editTitleInput = document.querySelectorAll("input")[1];
const editContentInput = document.querySelectorAll("textarea")[1];
let targetIndex;

function editNote(index) {
  if (isEditing) {
    alert("Please save the current note first");
  } else {
    editTitleInput.value = allNotes[index].title;
    editContentInput.value = allNotes[index].content;
    targetIndex = index;
    toggleInputDiv();
  }
}

function updateNote() {
  allNotes[targetIndex].title = editTitleInput.value;
  allNotes[targetIndex].content = editContentInput.value;
  saveNotes()
  printAllnotes();
  toggleInputDiv();
}

let isEditing = false;
function toggleInputDiv() {
  if (!isEditing) {
    editContainer.classList.remove("hide");
    addContainer.classList.add("hide");
  } else {
    editContainer.classList.add("hide");
    addContainer.classList.remove("hide");
  }

  isEditing = !isEditing;
}

function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(allNotes));
}
