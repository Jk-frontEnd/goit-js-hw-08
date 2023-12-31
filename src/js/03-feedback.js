import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";

const formData = {
  email: '',
  message: '',
  submit: '',
}

const email = document.querySelector(("input"));
const message = document.querySelector(("textarea"));
const submit = document.querySelector(("button"));

populateForm();

const throttledSaveInput = throttle(saveInput, 500);

// Add input event listeners
email.addEventListener('input', throttledSaveInput);
message.addEventListener('input', throttledSaveInput);
submit.addEventListener('click', throttledSaveInput); // Change to 'click' for a button

function saveInput() {
  formData.email = email.value;
  formData.message = message.value;
  formData.submit = submit.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
  const storedData = localStorage.getItem(STORAGE_KEY);
  if (storedData) {
    const parsedData = JSON.parse(storedData);
    email.value = parsedData.email || '';
    message.value = parsedData.message || '';
    submit.value = parsedData.submit || '';
  }
}
