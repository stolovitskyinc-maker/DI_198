// Exercise 1: Sum elements

const numbers = [10, 20, 30, 40];

const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum); // Output: 100

// ==========================================================================================

// Exercise 2 : Remove Duplicates

const duplicateArray = [1, 2, 2, 3, 4, 4, 5, 1];

// Convert to Set to remove duplicates, then spread back into an array
const uniqueArray = [...new Set(duplicateArray)];

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

// =============================================================================================

// Exercise 3 : Remove certain values

function cleanArray(arr) {
    // Boolean(value) returns false for all falsy values, dropping them automatically
    return arr.filter(Boolean);
}

const sampleArray = [NaN, 0, 15, false, -22, '', undefined, 47, null];
console.log(cleanArray(sampleArray)); 
// Output: [15, -22, 47]

// =================================================================================================

// Exercise 4 : Repeat please !

function repeat(str, n = 1) {
    let result = "";
    for (let i = 0; i < n; i++) {
        result += str;
    }
    return result;
}

console.log(repeat('Ha!', 3)); // Output: "Ha!Ha!Ha!"
console.log(repeat('Ha!'));     // Output: "Ha!" (defaults to 1 time)

// ===========================================================================================================

// Exercise 5 : Turtle & Rabbit

const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// Pad from the start (left side) so the string reaches a total length of 7
turtle = turtle.padStart(7);
rabbit = rabbit.padStart(7);

console.log(startLine);
console.log(turtle);
console.log(rabbit);
