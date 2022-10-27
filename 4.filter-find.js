// Filter - returns a new array, returns based on condition, can manipulate the size of new array (unlike map)
// Find - returns single instance, returns undefined if no match, returns first instance if more than one match

const people = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'susy', age: 30, position: 'the boss' },
  { name: 'anna', age: 35, position: 'intern' },
  { name: 'john', age: 32, position: 'director' },
];

const fruits = ['mango', 'banana', 'apple', 'lemon'];

// filter
const youngPeople = people.filter((person) => {
  //   if (person.age < 30) {
  //     return person;
  //   }
  return person.age < 30;
});
console.log(youngPeople);

const developers = people.filter((person) => person.position === 'developer');
console.log(developers);

// no match

const seniorDevs = people.filter(
  (item) => item.position === 'senior developer'
);
console.log(seniorDevs);

// find

const peter = people.find((person) => person.name === 'peter');
console.log(peter);

const fruit = fruits.find((item) => item === 'apple');
console.log(fruit);

// no match

const oldPerson = people.find((person) => person.age > 35);
console.log(oldPerson);

// multiple matches - first match
const randomPerson = people.find((person) => person.age < 32);
console.log(randomPerson);

// accessing the result
const john = people.find((person) => person.name === 'john');
console.log(john.position);

const anna = people.filter((person) => person.name === 'anna');
console.log(anna[0].position);
