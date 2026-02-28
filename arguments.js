function add(a, b) {
    // console.log(arguments);
    // const argsArray = [...arguments];
    // Or
    const argsArray = Array.from(arguments);
    console.log(argsArray);
    return a + b;
}

const result = add(2, 3, 4, 5, 6); 
console.log(result); // Output: 5