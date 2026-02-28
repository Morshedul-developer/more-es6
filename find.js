const persons = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 40 },
  { name: "Eve", age: 45 },
  { name: "Frank", age: 50 },
];

const young = persons.find(person => person.age <= 30);
console.log(young); // { name: "Alice", age: 25 } find() returns the first element that satisfies the condition, so it returns Alice who is 25 years old.

const old = persons.find(person => person.age > 40);
console.log(old); // { name: "Eve", age: 45 } find() returns the first element that satisfies the condition, so it returns Eve who is 45 years old.