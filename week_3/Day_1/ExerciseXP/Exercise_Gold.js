let numbers = [123, 8409, 100053, 333333333, 7];

for (let i = 0; i < numbers.length; i++) {
    // If the remainder when dividing by 3 is exactly 0
    if (numbers[i] % 3 === 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}

// =======================================================================

let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
};

// 1. Prompt the student for their name and clean up spacing
let inputName = prompt("What is your name?").strip();

// Convert to lowercase so typing 'Randy' or 'randy' both work perfectly
let lowercaseName = inputName.toLowerCase();

// 2 & 3. Check if the name exists inside the guestList object
if (lowercaseName in guestList) {
    let country = guestList[lowercaseName];
    // Capitalize the first letter of the name for a clean display message
    let formattedName = lowercaseName.charAt(0).toUpperCase() + lowercaseName.slice(1);
    console.log(`Hi! I'm ${formattedName}, and I'm from ${country}.`);
} else {
    console.log("Hi! I'm a guest.");
}

// ========================================================================================================

let age = [20, 5, 12, 43, 98, 55];

// 1. Calculate and log the sum of all numbers
let sum = 0;
for (let i = 0; i < age.length; i++) {
    sum += age[i];
}
console.log(`The sum of all ages is: ${sum}`);


// 2. Track down and log the highest age in the array
// Start by assuming the very first number is the highest
let highestAge = age[0]; 

for (let i = 1; i < age.length; i++) {
    // If we encounter a number larger than our current max, update it
    if (age[i] > highestAge) {
        highestAge = age[i];
    }
}
console.log(`The highest age is: ${highestAge}`);
