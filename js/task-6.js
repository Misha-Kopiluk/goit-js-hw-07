function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const btnCreate = document.querySelector("button");
const btnDestroy = document.querySelector("[data-destroy]");
const elBoxes = document.querySelector("#boxes");
const input = document.querySelector("input");

const size = () => createBoxes(input.value);
let sum = 0;

function createBoxes(amount) {
  sum = 30;
  const el = [];
  elBoxes.innerHTML = "";
  for (let i = 0; i < amount; i++) {
    el.push(`<div id="box" style="height:${sum}px;width:${sum}px;background-color:${getRandomHexColor()}"></div>`);
    sum += 10;
  }
  if (amount >= 1 && amount <= 100) {
    const box = el.map(elem => elem).join('');
    elBoxes.insertAdjacentHTML("beforeend", box);
  }
  input.value = "";
}
btnDestroy.classList.add("btn");

function destroyBoxes() {
  elBoxes.innerHTML = "";
}

btnCreate.addEventListener('click', size);
btnDestroy.addEventListener('click', destroyBoxes);
