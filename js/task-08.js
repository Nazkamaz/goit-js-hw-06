const formEl = document.querySelector(".login-form");
console.log(formEl);

function onFormSubmit(event){
event.preventDefault();

const emailEl = event.currentTarget.elements.email;

console.log(emailEl.value);

const passwordEl = event.currentTarget.elements.password;

if(emailEl.value == '' || passwordEl.value == ''){
  return alert('все поля должны быть заполнены.');  
  
};
  const formData = new FormData(event.currentTarget);
    console.log(formData);
    formEl.reset();
  
};


formEl.addEventListener('submit', onFormSubmit);






