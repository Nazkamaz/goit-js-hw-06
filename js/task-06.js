const inputEl = document.getElementById('validation-input');
console.dir(inputEl);
const lengthInputEl = inputEl.dataset.length;
console.log(lengthInputEl);

inputEl.addEventListener('blur', onBlurInput);

function onBlurInput(event) {
   if(event.currentTarget.value.trim().length === Number(lengthInputEl)){
      event.currentTarget.classList.remove('invalid');
      event.currentTarget.classList.add('valid');
   } else {
      event.currentTarget.classList.remove('valid');
      event.currentTarget.classList.add('invalid');
   }
}




