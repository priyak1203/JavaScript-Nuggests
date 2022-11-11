// async / await
// async must be present in front of the function to use await
// always returns a promise
// await waits till promise is settled
// error handling using try/catch block

const asyncExample = async () => {
  return 'hello world';
};
console.log(asyncExample());

async function testAsyncExample() {
  const result = await asyncExample();
  console.log(result);
  console.log('Hello People');
}
testAsyncExample();

const users = [
  { id: 1, name: 'Susan' },
  { id: 2, name: 'Peter' },
  { id: 3, name: 'Anna' },
];

const userArticles = [
  { userId: 1, articles: ['A1', 'A2', 'A3'] },
  { userId: 2, articles: ['B1', 'B2'] },
  { userId: 3, articles: ['C1', 'C2', 'C3', 'C4', 'C5'] },
];

const getUser = (username) => {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.name === username);

    if (user) {
      resolve(user);
    } else {
      reject(`There is no user with name : ${username}`);
    }
  });
};

function getArticles(userId) {
  return new Promise((resolve, reject) => {
    const user = userArticles.find((user) => user.userId === userId);

    if (user) {
      resolve(user.articles);
    } else {
      reject('Wrong ID');
    }
  });
}

// using .then and .catch
getUser('Peter')
  .then((data) => getArticles(data.id))
  .then((articles) => console.log(articles))
  .catch((err) => console.log(err));

// using async / await
const getData = async (username) => {
  try {
    const user = await getUser(username);
    const articles = await getArticles(user.id);
    console.log(articles);
  } catch (error) {
    console.log(error);
  }
};

getData('Susan');
