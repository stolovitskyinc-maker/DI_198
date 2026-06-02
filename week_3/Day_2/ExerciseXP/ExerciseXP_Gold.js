/*
Exercise 1 : is_Blank
Instructions
Write a program to check whether a string is blank or not.

console.log(isBlank('')); --> true
console.log(isBlank('abc')); --> false
*/

function isBlank(str) {
    // Check if the trimmed string length is exactly 0
    return str.trim().length === 0;
}

// Testing the function
console.log(isBlank(''));    // true
console.log(isBlank('abc'));  // false

/*
Exercise 2 : Abbrev_name
Instructions
Write a JavaScript function to convert a string into an abbreviated form.

console.log(abbrevName("Robin Singh")); --> "Robin S."
*/

function abbrevName(fullName) {
    const parts = fullName.trim().split(" ");
    
    // If there is only one name, return it directly
    if (parts.length < 2) return fullName;
    
    const firstName = parts[0];
    const lastNameFirstLetter = parts[1].charAt(0).toUpperCase();
    
    return `${firstName} ${lastNameFirstLetter}.`;
}

// Testing the function
console.log(abbrevName("Robin Singh")); // "Robin S."

/*
Exercise 3 : SwapCase
Instructions
Write a JavaScript function which takes a string as an argument and swaps the case of each character.
For example :
if you input 'The Quick Brown Fox' 
the output should be 'tHE qUICK bROWN fOX'.
*/

function swapCase(str) {
    return str
        .split("")
        .map(char => {
            // If character matches its uppercase version, convert to lowercase, else convert to uppercase
            return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
        })
        .join("");
}

// Testing the function
console.log(swapCase('The Quick Brown Fox')); // 'tHE qUICK bROWN fOX'

/*
Exercise 4 : Omnipresent value
Instructions
Create a function that determines whether an argument is omnipresent for a given array.
A value is omnipresent if it exists in every subarray inside the main array.

isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1) ➞ true
isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6) ➞ false
*/

function isOmnipresent(arr, val) {
    // .every() checks if all sub-arrays satisfy the inside .includes() condition
    return arr.every(subArray => subArray.includes(val));
}

// Testing the function
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1)); // true
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)); // false

/*
Exercise 5 : Red table
Instructions
Copy the code above and write some Javascript code to color all diagonal table cells in red.
*/

// Target the table element using the template's query format
let table = document.body.firstElementChild;

// Loop through each row of the table
for (let i = 0; i < table.rows.length; i++) {
    // The diagonal cell shares the same index for both its row and its column (0:0, 1:1, 2:2...)
    let diagonalCell = table.rows[i].cells[i];
    
    // Apply the red background styling to the matched element
    diagonalCell.style.backgroundColor = "red";
}
