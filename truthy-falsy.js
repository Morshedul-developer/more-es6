//* There are only 8 falsy values in JavaScript:
//! 1. false
//! 2. 0
//! 3. -0
//! 4. 0n (BigInt zero)
//! 5. "", '', `` (empty strings)
//! 6. null
//! 7. undefined
//! 8. NaN

//* All other values are truthy, including:
//! 1. true
//! 2. Any non-zero number (e.g., 1, -1, 3.14)
//! 3. Any non-empty string (e.g., "hello", 'world', `!`)
//! 4. Objects (e.g., {}, [])
//! 5. Functions (e.g., function() {}, () => {})

//* Example usage:
if (0) {
  console.log("This will not be printed because 0 is falsy.");
}
if ("Hello") {
  console.log("This will be printed because 'Hello' is truthy.");
}