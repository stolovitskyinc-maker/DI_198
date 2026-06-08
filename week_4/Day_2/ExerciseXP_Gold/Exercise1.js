// Destructure 'first' and 'last' directly inside the function parameters
function printFullName({ first, last }) {
    // Return the formatted template literal matching displayStudentInfo's output
    return `Your full name is ${first} Schoppik`;
}

// Example usage:
const output = printFullName({ first: 'Elie', last: 'Schoppik' });
console.log(output); 
// Output: 'Your full name is Elie Schoppik'
