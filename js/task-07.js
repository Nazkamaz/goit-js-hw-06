const inputRangeEl = document.getElementById("font-size-control");
console.dir(inputRangeEl);
const textEl = document.getElementById("text");
console.dir(textEl);

function onInputValue(event){
    textEl.style.fontSize = event.currentTarget.value + 'px';
};

inputRangeEl.addEventListener('input', onInputValue);