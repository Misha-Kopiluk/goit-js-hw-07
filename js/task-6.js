function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const btnCreate = document.querySelector("button");
const btnDestroy = document.querySelector("[data-destroy]");
const elBoxes = document.querySelector("#boxes");
const input = controls.querySelector("input");

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
  const box = el.map(e => e).join('');
  elBoxes.insertAdjacentHTML("beforeend", box);
  input.value = "";
  if (sum >= 1040) {
    elBoxes.innerHTML = "";
  }
}
btnDestroy.classList.add("btn");

function destroyBoxes() {
  elBoxes.innerHTML = "";
}

btnCreate.addEventListener('click', size);
btnDestroy.addEventListener('click', destroyBoxes);
