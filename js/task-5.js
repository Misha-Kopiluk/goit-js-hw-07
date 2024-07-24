function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const colorSpan = document.querySelector(".color");

const clicBtnEl = () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorSpan.textContent = getRandomHexColor();
};
btnEl.addEventListener("click", clicBtnEl);
