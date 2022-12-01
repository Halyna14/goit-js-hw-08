import Throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.email');
const message = document.querySelector('.message');

const LOCAL_KEY = 'feedback-form-state';

form.addEventListener('input', Throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

let saveText = JSON.parse(localStorage.getItem('feedback-form-state'));
populateOnForm();
function onInput(event) {
  if (!saveText) {
    const onForm = {};
    onForm[event.target.name] = event.target.value;
    localStorage.setItem(LOCAL_KEY, JSON.stringify(onForm));
  } else {
    const onForm = { ...saveText };
    onForm[event.target.name] = event.target.value;
    localStorage.setItem(LOCAL_KEY, JSON.stringify(onForm));
  }
}
function onSubmit(event) {
  event.preventDefault();

  try {
    console.log(saveText);
  } catch (error) {
    console.log(error.email);
    console.log(error.text);
  }
  localStorage.removeItem(LOCAL_KEY);
  saveText = '';

  event.target.reset();
}
function populateOnForm() {
  if (saveText) {
    onInput.value = saveText.email || '';
    onSubmit.value = saveText.message || '';
  }
}
