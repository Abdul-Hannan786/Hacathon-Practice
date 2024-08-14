const floor1 = document.querySelector("#floor-1");
const floor2 = document.querySelector("#floor-2");
const floor3 = document.querySelector("#floor-3");
const floor4 = document.querySelector("#floor-4");
const floor5 = document.querySelector("#floor-5");
const audio = document.querySelector("#audio")

let mySound = new Audio("doorbell-95035.mp3")

function lift(floorNum) {
  floorNum === "1"
    ? (floor1.classList.add("bg-sky-600"),
      floor1.classList.add("transition"),
      floor1.classList.remove("bg-white"))
    : (floor1.classList.remove("bg-sky-600"), floor1.classList.add("bg-white"));

  floorNum === "2"
    ? (floor2.classList.add("bg-sky-600"),
      floor2.classList.add("transition"),
      floor2.classList.remove("bg-white"))
    : (floor2.classList.remove("bg-sky-600"), floor2.classList.add("bg-white"));

  floorNum === "3"
    ? (floor3.classList.add("bg-sky-600"),
      floor3.classList.add("transition"),
      floor3.classList.remove("bg-white"))
    : (floor3.classList.remove("bg-sky-600"), floor3.classList.add("bg-white"));

  floorNum === "4"
    ? (floor4.classList.add("bg-sky-600"),
      floor4.classList.add("transition"),
      floor4.classList.remove("bg-white"))
    : (floor4.classList.remove("bg-sky-600"), floor4.classList.add("bg-white"));

  floorNum === "5"
    ? (floor5.classList.add("bg-sky-600"),
      floor5.classList.add("transition"),
      floor5.classList.remove("bg-white"))
    : (floor5.classList.remove("bg-sky-600"), floor5.classList.add("bg-white"));

    // audio.innerHTML = ` <audio id="audio" src="./doorbell-95038.mp3" autoplay></audio>`
}

