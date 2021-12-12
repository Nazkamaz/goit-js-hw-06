const formEl = document.querySelector(".login-form");

function onFormSubmit(event){
event.preventDefault();

const emailEl = event.currentTarget.elements.email;
const passwordEl = event.currentTarget.elements.password;

if(!emailEl.value || !passwordEl.value){
  return alert('все поля должны быть заполнены.');  
  
};
  const formData = new FormData(event.currentTarget);

formData.forEach((value, name) => {
  console.log('onFormSubmit -> name', name);
  console.log('onFormSubmit -> value', value);
})

    console.log(formData);
    formEl.reset();
  
  };

formEl.addEventListener('submit', onFormSubmit);






