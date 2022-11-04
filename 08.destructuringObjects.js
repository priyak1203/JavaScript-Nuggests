// Object Destructuring

// faster/easier way to access variables/keys from objects
const john = {
  first: 'john',
  last: 'smith',
  city: 'chicago',
  siblings: {
    sister: 'anna',
    brother: 'peter',
  },
};

// const firstName = john.first;
// const lastName = john.second;
// const sister = john.siblings.sister;
// console.log(firstName, lastName, sister);

const {
  first,
  last,
  city: place,
  school,
  siblings: { sister: firstSibling, brother },
} = john;
console.log(first, last, place, school, brother, firstSibling);

function printName(person) {
  const { first, last } = person;
  //   console.log(`Name: ${person.first} ${person.last}`);
  console.log(`Name : ${first} ${last}`);
}

function printNameandCity({ first, last, city, siblings: { brother } }) {
  console.log(`Name: ${first} ${last}, City: ${city}`);
  console.log(`Brother : ${brother}`);
}

printName(john);
printNameandCity(john);
