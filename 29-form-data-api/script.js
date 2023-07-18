// typical approach with vanilla js

const form = document.querySelector('.form');
const nameInput = document.querySelector('.name-input');
const emailInput = document.querySelector('.email-input');
const passwordInput = document.querySelector('.password-input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nameValue = nameInput.value;
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  if (!nameValue || !emailValue || !passwordValue) {
    console.log('please provide values');
    return;
  }

  // do something with values
  console.log(`Name: ${nameValue}`);
  console.log(`Email: ${emailValue}`);
  console.log(`Password: ${passwordValue}`);

  // clear the values
  nameInput.value = '';
  emailInput.value = '';
  passwordInput.value = '';
});

// ========================================================================================================== //

// accessing form-data

// const form = document.querySelector('.form');
// also valid approach
// const formData = new FormData(form);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  // won't directly return values
  console.log(formData);
});

// ========================================================================================================== //

// accessing the values

// const form = document.querySelector('.form');
// also valid approach
// const formData = new FormData(form);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  console.log(formData);

  // spread out - entries, keys, values
  const entries = [...formData.entries()];
  console.log(entries);

  const keys = [...formData.keys()];
  console.log(keys);

  const values = [...formData.values()];
  console.log(values);

  // iterate over with for of loop
  for (let [key, value] of formData) {
    console.log(`${key} = ${value}`);
  }
});

// ========================================================================================================== //

// other methods on formData

// const form = document.querySelector('.form');
// also valid approach
// const formData = new FormData(form);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);

  // check for value
  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password');
  console.log({ name, email, password });

  // append
  formData.append('test', 'testValue');

  // delete
  formData.delete('password');

  // check property
  const checkName = formData.has('email');
  console.log(checkName);

  const entries = [...formData.entries()];
  console.log(entries);
});

// ========================================================================================================== //

// sending the form data to the server

// const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const entries = [...formData.entries()];
  console.log(entries);

  // its not JSON so... (depends on the server)
  // axios.post('someUrl', formData);

  // better approach
  const formObject = Object.fromEntries(formData);
  console.log(formObject);

  // will work
  // axios.post('someUrl', formObject);

  // reset entries
  e.currentTarget.reset();
});
