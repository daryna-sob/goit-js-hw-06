function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(getRandomHexColor());

const btn = document.querySelector(".change-color");
const span = document.querySelector(".color");

btn.addEventListener("click", () => {
  const randomCol = getRandomHexColor();
  span.textContent = randomCol;
  document.body.style.backgroundColor = randomCol;
});
