// Set object - stores a collection of unique values of any type

// new Set()
// add(value)
// delete(value)
// clear()
// has(value)

// iterators
// entries(), keys(), values(), forEach()

const unique = new Set();

// adding to the set
unique.add('first');
unique.add('first');
unique.add('second');
unique.add('third');
unique.add('first');
unique.add(3);

const random = 'fourth';
unique.add(random);

// delete from the set
const result = unique.delete('second');
console.log(result);

const check = unique.delete('five');
console.log(check);

// has
const isValue = unique.has('first');
console.log(isValue);

const isValueNew = unique.has('seventy');
console.log(`is value new : ${isValueNew}`);

console.log(unique);

// clear
const fruits = new Set(['apple', 'banana', 'orange']);
console.log(fruits);

fruits.clear();
console.log(fruits);

// iterators

// keys()

const setKeys = unique.keys();
console.log(setKeys);

for (const item of setKeys) {
  console.log(setKeys);
  console.log(item);
}

console.log(Array.from(setKeys));
console.log(Array.from(unique.keys()));

// values()
const setValues = unique.values();
console.log(setValues);

for (const value of setValues) {
  console.log(value);
  console.log(setValues);
}
console.log(Array.from(setValues));

console.log(Array.from(unique.values()));

// entries()
const setEntries = unique.entries();
console.log(setEntries);

for (const item of setEntries) {
  console.log(item);
  console.log(setEntries);
}

console.log(Array.from(setEntries));
console.log(Array.from(unique.entries()));

// forEach()

console.log('============================================');
console.log('forEach()');

let text = '';
unique.forEach((value) => {
  text += value + '-';
});
console.log(text);
