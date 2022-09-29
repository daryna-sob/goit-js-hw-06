const input = document.querySelector("#validation-input");
const inputLength = input.getAttribute("data-length");

input.addEventListener("blur", (e) => {
  if (e.currentTarget.value.length === Number(inputLength)) {
    input.classList = "valid";
  } else input.classList = "invalid";
});
