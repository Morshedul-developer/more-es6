const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter((num) => num % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4, 6]

const persons = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 },
  { name: "Eve", age: 45 },
  { name: "Frank", age: 50 },
];

const young = persons.filter(person => person.age <= 30);
console.log(young);