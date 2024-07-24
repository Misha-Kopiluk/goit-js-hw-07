const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
const element = (event) => {
  nameOutput.textContent = event.currentTarget.value.trim();

  if (!nameOutput.textContent) {
  nameOutput.textContent = "Anonymous";
  }
}
nameInput.addEventListener("input", element);

