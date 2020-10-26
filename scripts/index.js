import renderCards from "./renderCards.js";
import petsData from "./data.js";

const subButton = document.querySelector("#button");
const root = document.querySelector("#root");
const emptyRoot = () => (root.innerHTML = "");
const error = (reason) => {
  emptyRoot();
  const msg = document.createElement("h1");
  root.appendChild(msg);
  msg.innerHTML = reason;
  msg.style.textAlign ="center"
};

const cards = () => {
  const searchQuery = document.querySelector("#search").value;

  emptyRoot();
  const filteredData = petsData.filter((data) =>
    data.city.includes(searchQuery)
  );

  if (filteredData.length === petsData.length) {
    error(`You need to spicify a city🔎🌏 hint : use  hawally , hateen , zahra , salam`);
  } else if (filteredData == 0) {
    emptyRoot();
    error(`Nothing found 🔎🌏 hint : use  hawally , hateen , zahra , salam`);
  } else {
    renderCards(filteredData, root);
  }
};

// Listners
addEventListener("input", cards);
subButton.addEventListener("click", cards);
