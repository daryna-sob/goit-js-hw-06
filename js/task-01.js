const listItems = document.querySelectorAll(".item");
const listRef = document.querySelectorAll("h2");
console.log("Number of categories:", listRef.length);
listItems.forEach((item) => {
  console.log("Category:", item.firstElementChild.textContent);

  const itemsList = item.querySelectorAll("li");
  console.log("Elements:", itemsList.length);
});
