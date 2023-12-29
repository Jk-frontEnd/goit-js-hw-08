import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const storageKey = "feedback-form-state";

const items = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
};

items.form.addEventListener('submit', onFormSubmit);
items.form.addEventListener('input', throttle(onFormInput, 500));

let formData = {
  email: '',
  message: '',
};

processingTheForm();

function onFormSubmit(e) {
  e.preventDefault();
  localStorage.removeItem(storageKey);
  formData.email = items.email.value;
  formData.message = items.message.value;
  e.currentTarget.reset();
}

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(storageKey, JSON.stringify(formData));
}

function processingTheForm() {
  const formValues = localStorage.getItem(storageKey);
  const objectValues = JSON.parse(formValues);

  if (objectValues) {
    formData = objectValues;
    items.email.value = objectValues.email || '';
    items.message.value = objectValues.message || '';
    formData = objectValues.email || '';
    formData = objectValues.message || '';
  }
}