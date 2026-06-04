/*
Instructions:
Write an arrow function that checks if an argument is a string.
Return true or false.
*/

// Core arrow function utilizing typeof verification
const isString = (value) => typeof value === 'string';

// Testing the function
console.log(isString('hello'));      // true
console.log(isString([1, 2, 4, 0])); // false
