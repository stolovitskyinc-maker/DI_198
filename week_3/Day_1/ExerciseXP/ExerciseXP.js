const people = ["Greg", "Mary", "Devon", "James"];

// 1. Remove "Greg" from the array
people.shift(); 
// Now: ["Mary", "Devon", "James"]

// 2. Replace "James" with "Jason"
// Find James's position and update it
const jamesIndex = people.indexOf("James");
if (jamesIndex !== -1) {
    people[jamesIndex] = "Jason";
}
// Now: ["Mary", "Devon", "Jason"]

// 3. Add your name to the end
people.push("Alex"); 
// Now: ["Mary", "Devon", "Jason", "Alex"]

// 4. Console.log Mary's index
console.log(people.indexOf("Mary")); // Logs: 0

// 5. Copy using slice (excluding "Mary" and "Alex")
// slice(start, end) extracts up to but NOT including the end index
const peopleCopy = people.slice(1, 3); 
console.log(peopleCopy); // Logs: ["Devon", "Jason"]

// 6. Index of "Foo" and why it returns -1
console.log(people.indexOf("Foo")); // Logs: -1
// Explanation: indexOf returns -1 when the searched element is not found in the array.

// 7. Store the last element using its index relationship to length
// The index of the last element is always array length minus 1
const last = people[people.length - 1];
console.log(last); // Logs: "Alex"
// 1. Iterate through people array and log each person
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

// 2. Iterate and exit after logging "Devon"
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Devon") {
        break; // Stops the loop completely
    }
}


// ===========================================================

const colors = ["blue", "red", "green", "purple", "black"];
const suffixes = ["st", "nd", "rd", "th", "th"];

for (let i = 0; i < colors.length; i++) {
    // Standard version
    console.log(`My #${i + 1} choice is ${colors[i]}`);
    
    // Bonus version using suffixes array
    console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`);
}

// ==============================================================================

let userNumber;

// A standard while loop works perfectly here
while (true) {
    let input = prompt("Please enter a number:");
    userNumber = Number(input); // Convert string input to a number
    
    // Check data type
    console.log(`The data type received is: ${typeof userNumber}`);
    
    // Break the loop if the input is 10 or greater
    if (userNumber >= 10) {
        break;
    }
}

// ======================================================================================

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

// 1. Console.log the number of floors
console.log(building.numberOfFloors);

// 2. Apartments on floors 1 and 3
console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor);

// 3. Second tenant's name and room count
const secondTenant = building.nameOfTenants[1]; // "Dan"
const danRooms = building.numberOfRoomsAndRent.dan[0];
console.log(`${secondTenant} has ${danRooms} rooms.`);

// 4. Check rents and update Dan's rent if condition matches
const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if ((sarahRent + davidRent) > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
}
console.log(`Dan's updated rent: ${building.numberOfRoomsAndRent.dan[1]}`);

// ==========================================================================================

const family = {
    father: "John",
    mother: "Jane",
    son: "Billy"
};

// Log keys
for (let key in family) {
    console.log(key); // Logs: father, mother, son
}

// Log values
for (let key in family) {
    console.log(family[key]); // Logs: John, Jane, Billy
}

// =======================================================================================

const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}

let sentence = "";
for (let key in details) {
    sentence += `${key} ${details[key]} `;
}

console.log(sentence.trim()); // Logs: "my name is Rudolf the reindeer"

// =============================================================================================

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// 1. Create an array of just the first letters
const firstLetters = [];
for (let i = 0; i < names.length; i++) {
    firstLetters.push(names[i][0]);
}

// 2. Sort the letters alphabetically
firstLetters.sort();

// 3. Combine them into a single string
const secretSocietyName = firstLetters.join("");

console.log(secretSocietyName); // Logs: "ABJKPS"
