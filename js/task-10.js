function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const input = document.querySelector('input[type = "number"]');
const box = document.querySelector("#boxes");

create.addEventListener("click", () => {
  createBoxes(input.value);
});

function createBoxes(amount) {
  let markup = "";
  for (let i = 0; i < amount; i += 1) {
    markup += `<div style="width: ${30 + i * 10}px; height: ${30 + i * 10}px; 
    background-color: ${getRandomHexColor()}"></div>`;
  }
  box.insertAdjacentHTML("afterbegin", markup);
}

destroy.addEventListener("click", () => {
  box.innerHTML = "";
});
