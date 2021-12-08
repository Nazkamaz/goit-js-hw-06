function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.change-color');
const spanColorValueEl = document.querySelector('.color');

buttonEl.addEventListener('click', randomColorChenger);

function randomColorChenger(){
document.body.style.backgroundColor = getRandomHexColor();
spanColorValueEl.textContent = document.body.style.backgroundColor;
}
