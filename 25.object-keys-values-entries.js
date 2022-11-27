// Three methods to convert objects into arrays
// Object.keys() - converts property names into array
// Object.values() - converts property values into array
// Object.entries() - converts both

const person = {
  name: 'John',
  age: 30,
  job: 'Developer',
};

const keys = Object.keys(person);
console.log(keys);

const values = Object.values(person);
console.log(values);

const result = Object.entries(person);
console.log(result);

// Dispaly entries using map
const keyNames = result.map((item) => {
  const [key, value] = item;
  console.log(key, value);
  return key;
});

console.log(keyNames);

// Display entries using for of
for (const item of result) {
  const [keyName, value] = item;
  console.log(keyName, value);
}

for (const [keyName, value] of result) {
  console.log(`The value of ${keyName} is : ${value}`);
}
