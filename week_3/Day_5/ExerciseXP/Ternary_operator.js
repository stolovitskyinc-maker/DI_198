/*
Instructions:
1. Transform winBattle() into an arrow function.
2. Create a variable called experiencePoints.
3. Assign a ternary operator: if winBattle() is true, experiencePoints = 10, else 1.
4. Console.log the experiencePoints variable.
*/

// 1. Transform the function to an arrow function
const winBattle = () => true;

// 2 & 3. Create the variable and assign it using a ternary operator
let experiencePoints = winBattle() ? 10 : 1;

// 4. Output the variable to the console
console.log(experiencePoints); // Logs: 10
