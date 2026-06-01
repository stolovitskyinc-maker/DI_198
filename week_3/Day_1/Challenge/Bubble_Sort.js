const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];

// 1. Using the .toString() method
// This converts the array into a comma-separated string automatically.
const stringFromToString = numbers.toString();
console.log("Using .toString():", stringFromToString); 
// Output: "5,0,9,1,7,4,2,6,3,8"

// 2. Using the .join() method with different separators
const joinPlus = numbers.join("+");
console.log("Joined with '+':", joinPlus);     // Output: "5+0+9+1+7+4+2+6+3+8"

const joinSpace = numbers.join(" ");
console.log("Joined with space:", joinSpace);  // Output: "5 0 9 1 7 4 2 6 3 8"

const joinEmpty = numbers.join("");
console.log("Joined with empty:", joinEmpty);  // Output: "5091742638"
