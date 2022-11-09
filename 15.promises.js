// Promises
// Used to avoid call back hell
// Promise is an object that returns a value
// which you hope to return in future and not immediately

// Pending, Rejected, Fulfilled

const promise = new Promise((resolve, reject) => {
  resolve('Hello World');
  //   resolve([1, 2, 3]);
  //   reject('There was an error!');
});

console.log(promise);

promise
  .then((response) => console.log(response))
  .catch((err) => console.log(err));

const value = 2;

const randomNumberCheck = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 3);
  if (random === value) {
    resolve('You guessed it right');
  } else {
    reject('Wrong number');
  }
  console.log(random);
});

randomNumberCheck
  .then((response) => console.log(response))
  .catch((err) => console.log(err));
