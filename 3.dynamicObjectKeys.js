// dynamic object keys

const person = {
  name: 'john',
};

// dot notation
console.log(person.name);
person.age = 25;
console.log(person);

// square bracket notation
console.log(person['age']);
const items = {
  'featured-items': ['item 1', 'item 2'],
};
console.log(items['featured-items']);

// object keys using variables

let appState = 'loading';
appState = 'error';
const keyName = 'computer';
const app = {
  [appState]: true,
};
app[keyName] = 'apple';
app.year = 2010;
console.log(app);

const state = {
  loading: true,
  name: '',
  job: '',
};

console.log(state);

function updateState(key, value) {
  state[key] = value;
}

updateState('name', 'John');
console.log(state);
updateState('job', 'instructor');
console.log(state);
updateState('loading', false);
console.log(state);
