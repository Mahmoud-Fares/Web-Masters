/**
 *
 * Exercise: 2 Find the Largest Number
 * Problem: Write a function that takes an array of numbers
 * and returns the largest number in the array.
 */

// Solution 1: Using Math.max with spread operator
function findLargestNumber(numbers) {
   return Math.max(...numbers);
}

// Solution 2: Using reduce method
function findLargestNumberWithReduce(numbers) {
   return numbers.reduce((largest, current) => {
      return current > largest ? current : largest;
   }, numbers[0]);
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6];
const largestNumber = findLargestNumber(numbers);
const largestNumberReduce = findLargestNumberWithReduce(numbers);
console.log("largestNumber", largestNumber); // Output: 6
console.log("largestNumberReduce", largestNumberReduce); // Output: 6
