
// salwa , salam , hateen , zahra , hawally , russia
const petsData = [
  {
    name: "rocky",
    city: "salwa",
    img: "images/pet-01.png",
  },
  {
    name: "rambo",
    city: "zahra",
    img: "images/pet-03.png",
  },
  {
    name: "crimv",
    city: "russia",
    img: "images/pet-02.png",
  },
  {
    name: "krazy",
    city: "zahra",
    img: "images/pet-01.png",
  },
  {
    name: "not crazy",
    city: "salam",
    img: "images/pet-01.png",
  },
  {
    name: "kasko",
    city: "salam",
    img: "images/pet-01.png",
  },
  {
    name: "krown",
    city: "salam",
    img: "images/pet-01.png",
  },
  {
    name: "nrob",
    city: "salam",
    img: "images/pet-01.png",
  },
  {
    name: "yabr",
    city: "hateen",
    img: "images/pet-01.png",
  },
  {
    name: "kasser",
    city: "hateen",
    img: "images/pet-01.png",
  },
  {
    name: "jasim",
    city: "hawally",
    img: "images/pet-02.png",
  },
  {
    name: "btata",
    city: "salwa",
    img: "images/pet-03.png",
  },
  {
    name: "tmoon",
    city: "salwa",
    img: "images/pet-04.png",
  },
  {
    name: "Loushi losh",
    city: "zahra",
    img: "images/pet-04.png",
  },
];
// global 
const subButton = document.querySelector("#button");
const root = document.querySelector("#root");

// onClick Button
subButton.addEventListener("click", (event) => {
  event.preventDefault();
//   main variables
  const searchQuery = document.querySelector("#search").value;
  const notFound = document.querySelector(".not-found");
//   root.classList.toggle = "toggle";

// filter the search result 
  const searchResult = petsData.filter((pet) => pet.city == searchQuery);

  root.innerHTML = "";
  notFound.style.display = "none";
  
  if (searchResult.length === 0) {
    notFound.style.display = "block";
  } else {
    Math.floor(Math.random() * searchResult);
    searchResult.map((card) => {
      // Create Elemnets
      const widget = document.createElement("div");
      const widget__image = document.createElement("div");
      const img = document.createElement("img");
      const widget__desc = document.createElement("widget__desc");
      const h4 = document.createElement("h4");
      const p = document.createElement("p");
      // Style the elements
      widget.className = "widget";
      widget__image.className = "widget__image";
      widget__desc.classList = "widget__desc";
      // Append Cilds  
      root.appendChild(widget);
      widget.appendChild(widget__image);
      widget.appendChild(widget__desc);
      widget__desc.appendChild(h4);
      widget__desc.appendChild(p);
      widget__image.appendChild(img);
       
      h4.innerHTML = card.name;
      p.innerHTML = card.city;
      img.src = card.img;
    });
  }
});
