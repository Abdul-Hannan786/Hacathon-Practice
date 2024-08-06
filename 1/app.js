const arr = [
  {
    name: "Petals of roses",
    image:
      "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?q=80&w=3786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Animals of town",
    image:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "the crowd of city",
    image:
      "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "fruits of planet",
    image:
      "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

function showImages() {
  let div = "";
  arr.forEach(({ image }) => {
    div += `<div class="box">
        <img class="cursor-pointer" src="${image}" alt="image">
        <div class="caption">Lorem ipsum </div>
    </div>`;

    const container = document.querySelector(".container");
    container.innerHTML = div;
  });
}

showImages();

function serachImage() {

  const input = document.querySelector("#searchinput");
  const overlays = document.querySelector(".overlay");
  const searchData = document.querySelector(".searchdata")

  input.addEventListener("focus", () => {
    overlays.style.display = "block";
    searchData.style.display = "block"
  });

  input.addEventListener("blur", () => {
    overlays.style.display = "none";
    searchData.style.display = "none"
  });

  input.addEventListener("input", () => {

    let divEl = ""

    const filteredArray = arr.filter((item) => (
        item.name.toLocaleLowerCase().startsWith(input.value)
    ))
    
    filteredArray.forEach(({name}) => {
        divEl += `<div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${name}</h3>
        </div>
        `

        searchData.innerHTML = divEl
    })
  })
}

serachImage();
