const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listRef = document.querySelector("#ingredients");

const elements = ingredients.map((el) => {
  let listEl = document.createElement("li");
  listEl.classList.add("item");
  listEl.textContent = el;
  return listEl;
});

listRef.append(...elements);
