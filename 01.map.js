// map method

const people = [
  {
    name: 'Bob',
    age: 28,
    position: 'developer',
  },
  {
    name: 'peter',
    age: 22,
    position: 'intern',
  },
  {
    name: 'Susan',
    age: 30,
    position: 'the boss',
  },
  {
    name: 'William',
    age: 36,
    position: 'the director',
  },
];

// returns a new array
// does not change the size of original array (unlike filter)
// may use values from original array when making new one

const ages = people.map((person) => person.age);
console.log(ages);

const doubleAges = people.map(({ age }) => {
  return age * 2;
});
console.log(doubleAges);

const getPosition = (person) => {
  return person.position;
};

const positions = people.map(getPosition);
console.log(positions);

function getNames(person) {
  return person.name;
}

const namesArray = people.map(getNames);
console.log(namesArray);

const newPeople = people.map((item) => {
  return {
    firstName: item.name.toUpperCase(),
    oldAge: item.age + 20,
  };
});

console.log(newPeople);

const names = people.map((person) => `<h2>${person.name}</h2>`);
console.log(names);
const result = document.getElementById('result');
result.innerHTML = names.join('');
