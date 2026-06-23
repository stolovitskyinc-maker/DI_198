// math-app/app.js

// Require the third-party lodash package
const _ = require('lodash');

// Require your custom math module
const math = require('./math.js');

// 1. Using your custom math module functions
const sumResult = math.add(15, 25);
const multiplyResult = math.multiply(6, 7);

console.log('📐 --- Custom Math Module Results ---');
console.log(`   Addition (15 + 25):      ${sumResult}`);
console.log(`   Multiplication (6 * 7):  ${multiplyResult}\n`);

// 2. Using lodash utility functions with an array of data
const numbers =;

// _.sum calculates the total of all items in an array
const totalSum = _.sum(numbers);

// _.mean calculates the average value of items in an array
const averageValue = _.mean(numbers);

console.log('📦 --- Lodash Utility Results ---');
console.log(`   Target Array:            [${numbers.join(', ')}]`);
console.log(`   Array Total Sum:         ${totalSum}`);
console.log(`   Array Average (Mean):    ${averageValue}`);
