// Call back function
// Is a function that we pass in as an argument and execute it later
// used in array methods, setTimeout, event listeners etc

function makeUpperCase(value) {
  console.log(value.toUpperCase());
}

function handleName(name, cb) {
  const fullName = `${name} smith`;
  console.log(fullName);
  cb(fullName);
}

const reverseString = (value) => {
  console.log(value.split('').reverse().join(''));
};

handleName('tony', makeUpperCase);
handleName('peter', reverseString);

handleName('susan', function (value) {
  console.log(`Name is ${value}`);
});

handleName('Amanda', (value) => {
  console.log(`I am ${value}`);
});

handleName('John', (value) => console.log(`This is ${value}`));

const btn = document.querySelector('.btn');

// btn.addEventListener('click', () => {
//   console.log('Hello World');
// });

function greetPeople() {
  console.log('Welcome People');
}

btn.addEventListener('click', greetPeople);
