const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

function inputFunction (event){
    outputEl.textContent = event.currentTarget.value.trim() || 'Anonimus';
};

inputEl.addEventListener('input', inputFunction);