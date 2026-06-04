// --- 1. Function Declaration ---
function convertKgToGramsDeclaration(kg) {
    return kg * 1000;
}
// Invocation:
console.log(convertKgToGramsDeclaration(2)); // Logs: 2000


// --- 2. Function Expression ---
const convertKgToGramsExpression = function(kg) {
    return kg * 1000;
};
// Invocation:
console.log(convertKgToGramsExpression(3.5)); // Logs: 3500


// --- 3. Difference Comment ---
// Function declarations are hoisted (can be called before they are written), while function expressions are not hoisted.


// --- 4. One-Line Arrow Function ---
const convertKgToGramsArrow = kg => kg * 1000;
// Invocation:
console.log(convertKgToGramsArrow(0.5)); // Logs: 500
