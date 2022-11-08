// Spread operator
// Allows and iterable to spread/ expand individually inside receiver
// Split into single items and COPY them

const udemy = 'udemy';
const letters = [...udemy];
console.log(letters);

const boys = ['john', 'peter', 'dave'];
const girls = ['susan', 'anna'];
const bestFriend = 'William';
const friends = [...boys, bestFriend, ...girls];
console.log(friends);

// reference
// const newFriends = friends;

// copy
const newFriends = [...friends];
newFriends[0] = 'nancy';
console.log(friends);
console.log(newFriends);

// objects
const person = { name: 'john', job: 'developer' };
const newPerson = { ...person, lastName: 'peter' };
newPerson.city = 'chicago';
console.log(person);
console.log(newPerson);
