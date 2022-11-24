// ECMA Script 2022
// at() - takes integer and returns the item at that index - string and array.

// Top Level Await - Basic Examples
// We need not wrap code in async function in order to use await

// To run this we should set this as a module - add type='module' in script tag
// and also use live server to spin up your app
// Which means in a module we can directly use await

// use the correct path
import fetchTours from './utils/fetchTours.js';

const tours = await fetchTours();
console.log('Tours: ', tours);

const scores = [100, 87, 55];

const oldScore = scores[scores.length - 1];
console.log(oldScore);

const newScore = scores.at(-1);
console.log(newScore);

const channel = 'Coding Addict';
console.log(channel.at(0));

// Traditional way of fetching data
const fetchData = async () => {
  const resp = await fetch('https://course-api.com/react-tabs-project');
  const data = await resp.json();
  console.log(data);
};

fetchData();

// fetching data using top level await
const response = await fetch('https://course-api.com/react-tabs-project');
const tabs = await response.json();
console.log('Tabs', tabs);
