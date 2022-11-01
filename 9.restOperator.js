// Rest operator
// gathers / collects items
// use it while destructuring and in function declarations
// placement is important, careful with the same name

// arrays
const fruits = ['apple', 'orange', 'lemon', 'pear', 'banana'];
const [first, second, ...restOfTheFruits] = fruits;
console.log(first, restOfTheFruits);
const specificFruit = restOfTheFruits.find((fruit) => fruit === 'banana');
console.log(specificFruit);

// objects

const person = {
  name: 'Jos',
  lastName: 'Buttler',
  job: 'Cricketer',
  city: 'London',
};

const { name, job, ...restOfTheInfo } = person;
console.log(name, job, restOfTheInfo);

// functions
const getAverage = (name, ...scores) => {
  console.log(name);
  console.log(scores);
  const average =
    scores.reduce((total, item) => {
      return (total += item);
    }, 0) / scores.length;

  console.log(average);
};

getAverage('Peter', 78, 65, 41, 52);

const testScores = [67, 78, 99, 100];
getAverage(person.name, ...testScores);
