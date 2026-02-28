const numbers = [1, 2, 3, 4, 5];

// with normal for loop
let sum = 0;
for(let i=0; i<numbers.length; i++) {
    sum += numbers[i];
}
// console.log(sum); // Output: 15

// with reduce method
const total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(total); // Output: 15

//! Explanation:
//* The reduce method takes a callback function and an initial value (0 in this case).
//* The callback function takes two parameters: the accumulator (which accumulates the result) and the currentValue (the        current element being processed).
//* The reduce method iterates through the array, applying the callback function to each element and updating the accumulator until it processes all elements, resulting in the final sum.