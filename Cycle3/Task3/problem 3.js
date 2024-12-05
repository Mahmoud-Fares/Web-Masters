/**
 *
 * Exercise: 3 Reverse a String
 * Problem: Write a function that takes a string as input and
 * returns the reversed string.
 */

function reverseString(str) {
   return str.split("").reverse().join("");
}

// Example usage:
const str = "Hello, World!";
const reversedString = reverseString(str);

console.log("the string before get reversed is: ", str); // Output: "Hello, World!"
console.log("reversedString: ", reversedString); // Output: "!dlroW ,olleH"
