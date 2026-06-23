const greet = require('./greeting');
const displayColorfulMessage = require('./colorful-message');
const readFileContent = require('./read-file');

console.log('--- Starting Challenge Application ---\n');

// 1. Run Greeting Module
const greeting = greet('Full-Stack Engineer');
console.log(greeting);

// 2. Run Colorful Message Module
displayColorfulMessage();

// 3. Run File Reader Module
readFileContent();
