// for-in loop
// used to traverse the object

const person = {
  name: 'John',
  age: '32',
  job: 'Developer',
};

for (const key in person) {
  console.log(`${key} : ${person[key]}`);
}
