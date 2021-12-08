let counterValue = 0;
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const onValue = document.querySelector('#value');

const clickBtnDecrementer = () => {
counterValue -= 1;
onValue.textContent = counterValue;
};

const clickBtnIncrementer = () => {
counterValue += 1;
onValue.textContent = counterValue;
};

incrementBtn.addEventListener('click', clickBtnIncrementer);
decrementBtn.addEventListener('click', clickBtnDecrementer);

