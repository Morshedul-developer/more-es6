const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);

// console.log(doubled); // Output: [2, 4, 6, 8, 10]

const person = {
  name: 'Alice',
  age: 30,
  city: 'New York'
};

const entries = Object.entries(person);
// console.log(entries);

const mappedEntries = entries.map(entry => entry.join(': '));
console.log(mappedEntries); // Output: ['name: Alice', 'age: 30', 'city: New York']

