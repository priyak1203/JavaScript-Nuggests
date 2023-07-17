// Array includes() - checks if the item is in an array
// useful in the conditional statements

const groceries = ['milk', 'bread', 'eggs'];

let randomItem = 'cereal';

let isIncluded = groceries.includes(randomItem);
console.log(isIncluded);

randomItem = 'milk';
// randomItem = 'cereal';

isIncluded = groceries.includes(randomItem);
console.log(isIncluded);

isIncluded = groceries.includes(randomItem, 1);
console.log(isIncluded);

if (groceries.includes(randomItem)) {
  console.log(`Yeah ${randomItem} is in the list`);
} else {
  console.log(`Oops! ${randomItem} is not in the list`);
}
