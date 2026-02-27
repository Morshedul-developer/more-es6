let x;
console.log(x);

let y = undefined;
console.log(y);

let z = null;
console.log(z);

const numbers = [1, 2, 3];
console.log(numbers[5]); // This will log 'undefined' since there is no element at index 5

const numbers2 = [1, 2, 3, 4, 5];
delete numbers2[2]; // This will remove the element at index 2, but the length of the array remains the same
console.log(numbers2); // This will log [1, 2, <1 empty item>, 4, 5]
console.log(typeof numbers2[2]);