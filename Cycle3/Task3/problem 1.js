/**
 *
 * Exercise 1: Filtering an Array
 * Problem: Write a function that takes an array of numbers
 * and returns a new array containing only the even
 * numbers.
 */

function filterEvenNumbers(numbers) {
   return numbers.filter((number) => number % 2 === 0);
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterEvenNumbers(numbers);
console.log("evenNumbers", evenNumbers); // Output: [2, 4, 6]
