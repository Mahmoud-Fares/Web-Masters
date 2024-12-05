/**
 *
 * Exercise: 4 Remove Duplicates
 * Problem: Write a function that takes an array of numbers
 * and returns a new array without duplicate numbers.
 */

function removeDuplicates(numbers) {
   return [...new Set(numbers)];
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const uniqueNumbers = removeDuplicates(numbers); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("uniqueNumbers", uniqueNumbers);
