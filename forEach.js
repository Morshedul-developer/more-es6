const numbers = [1, 2, 3, 4, 5];
const d = numbers.forEach(num => {
  console.log(num * 2);
});
console.log(d); 
// 4
// 6
// 8
// 10
// undefined (forEach returns undefined)