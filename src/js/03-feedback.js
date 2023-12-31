import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";

const updateLocalStorage = throttle(() => {
  const formData = {
    email: form.querySelector("input").value,
    message: form.querySelector("textarea").value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}, 500);

const loadFromLocalStorage = () => {
  const storedData = localStorage.getItem(STORAGE_KEY);
  if (storedData) {
    const formData = JSON.parse(storedData);
    form.querySelector("input").value = formData.email || '';
    form.querySelector("textarea").value = formData.message || '';
  }
};

form.addEventListener('input', updateLocalStorage);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const formData = {
    email: form.querySelector("input").value,
    message: form.querySelector("textarea").value,
  };
  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});

loadFromLocalStorage();