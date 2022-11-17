// Timestamps

console.log(new Date());

// Unix Time
// January 1, 1970
// 1s = 1000ms
console.log(Date.now());
console.log(new Date().getTime());
console.log(new Date().valueOf());

setTimeout(() => {
  console.log(Date.now());
}, 1000);

// create id's in learning apps
let people = [];
people = [...people, { id: Date.now(), name: 'John' }];

setTimeout(() => {
  people = [...people, { id: Date.now(), name: 'Peter' }];
  console.log(people);
}, 1000);

// create / get dates
console.log(new Date(1568701499349));

const now = Date.now();
const futureDate = new Date(now + 1000 * 60);
console.log(futureDate);
console.log(new Date());

// difference between dates
const firstDate = new Date();
const secondDate = new Date(2022, 10, 19);

console.log(firstDate - secondDate);
console.log(secondDate - firstDate);

const firstValue = firstDate.getTime();
const secondValue = secondDate.getTime();

console.log(firstValue - secondValue);
console.log(secondValue - firstValue);

const timeDifference = secondValue - firstValue;

console.log(timeDifference);

const minutes = timeDifference / (1000 * 60);
console.log(minutes);

const hours = timeDifference / (1000 * 60 * 60);
console.log(hours);
