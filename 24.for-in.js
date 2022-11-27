// "for-in" loop - iterate over object properties
// not advised to use it on arrays, especially if the order is important
// on arrays use "for-of" loop instead

const person = {
  name: 'John',
  age: '32',
  job: 'Developer',
};

for (const key in person) {
  console.log(`${key} : ${person[key]}`);
}
