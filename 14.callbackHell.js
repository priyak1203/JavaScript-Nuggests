// Callback Hell

// after 1s first red;
// after 3s second blue;
// after 2s third green;

const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');

const btn = document.querySelector('.btn');

// btn.addEventListener('click', () => {
//   console.log('Hello World');
//   setTimeout(() => {
//     console.log('First One - Red after 1s');
//     first.style.color = 'red';
//   }, 1000);

//   setTimeout(() => {
//     console.log('Second One - Blue after 3s');
//     second.style.color = 'blue';
//   }, 3000);

//   setTimeout(() => {
//     console.log('Third One - Green after 2s');
//     third.style.color = 'green';
//   }, 2000);
// });

// Note : The above code gets executed based on time sequence.
// 1st Red, 2nd Green, 3rd Blue.

btn.addEventListener('click', () => {
  console.log('Hello World');
  setTimeout(() => {
    console.log('First One - Red after 1s');
    first.style.color = 'red';

    setTimeout(() => {
      console.log('Second One - Blue after 3s');
      second.style.color = 'blue';

      setTimeout(() => {
        console.log('Third One - Green after 2s');
        third.style.color = 'green';
      }, 2000);
    }, 3000);
  }, 1000);
});

// Note : The above code gets executed in sequence
//  1st red, 2nd blue, 3rd green
