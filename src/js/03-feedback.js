import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
}

const STORAGE_KEY = "feedback-form-state";
const formData = new FormData();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

formSavedData();

function onFormSubmit (event){
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
}

function onFormInput (event){
  formData[event.target.name] = event.target.value;
  const dataStorage = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, dataStorage);
}

function formSavedData() {
    const savedFormFields = JSON.parse(localStorage.getItem(STORAGE_KEY));
 
    if (savedFormFields !== null ) {
      refs.form.elements['email'].value = savedFormFields.email;
      refs.form.elements['message'].value = savedFormFields.message;
    } 
  };