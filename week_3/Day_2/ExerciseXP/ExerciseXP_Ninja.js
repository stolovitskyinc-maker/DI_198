/*
Exercise 1: Random Number
Instructions
Get a random number between 1 and 100.
Console.log all even numbers from 0 to the random number.
*/

// Math.random() * 100 gives a number from 0 to 99.99. Math.floor + 1 shifts it to 1 to 100.
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(`Generated Random Number: ${randomNumber}`);

console.log("Even numbers:");
for (let i = 0; i <= randomNumber; i += 2) {
    console.log(i);
}

/*
Exercise 2: Capitalized letters
Instructions
Create a function that takes a string as an argument.
Have the function return:
1. The string but all letters in even indexes should be capitalized.
2. The string but all letters in odd indexes should be capitalized.
Note: Index 0 will be considered even. The argument is a lowercase string with no spaces.
Example: capitalize("abcdef") will return ['AbCdEf', 'aBcDeF']
*/

function capitalize(str) {
    // Array for even indexed characters capitalized
    let evenCaps = str.split("").map((char, index) => {
        return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
    }).join("");

    // Array for odd indexed characters capitalized
    let oddCaps = str.split("").map((char, index) => {
        return index % 2 !== 0 ? char.toUpperCase() : char.toLowerCase();
    }).join("");

    return [evenCaps, oddCaps];
}

// Testing the function
console.log(capitalize("abcdef")); // ['AbCdEf', 'aBcDeF']

/*
Exercise 3 : Is palindrome?
Instructions
Write a JavaScript function that checks whether a string is a palindrome or not.
Note: A palindrome is a word, phrase or sequence that is spelled the same both backwards and forward.
*/

function isPalindrome(str) {
    // Clean string to remove spaces and non-alphanumeric characters for robustness, and lower case it
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    
    // Reverse the string elements
    const reversedStr = cleanStr.split("").reverse().join("");
    
    return cleanStr === reversedStr;
}

// Testing the function
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("kayak")); // true
console.log(isPalindrome("hello")); // false

/*
Exercise 4 : Biggest Number
Instructions
Create a function called biggestNumberInArray(arrayNumber) that takes an array as a parameter and returns the biggest number.
Note : This function should work with any array;
Example:
const array = [-1,0,3,100, 99, 2, 99] ;// should return 100 
const array2 = ['a', 3, 4, 2]; // should return 4 
const array3 = []; // should return 0
*/

function biggestNumberInArray(arrayNumber) {
    // Handle empty array rule directly
    if (arrayNumber.length === 0) return 0;

    let max = -Infinity;
    let hasNumbers = false;

    for (const item of arrayNumber) {
        // Parse and check if current element is a valid number type
        const num = Number(item);
        if (!isNaN(num)) {
            hasNumbers = true;
            if (num > max) {
                max = num;
            }
        }
    }

    // Return max if numbers were processed, otherwise default to 0
    return hasNumbers ? max : 0;
}

// Testing the function
console.log(biggestNumberInArray([-1, 0, 3, 100, 99, 2, 99])); // 100
console.log(biggestNumberInArray(['a', 3, 4, 2]));           // 4
console.log(biggestNumberInArray([]));                        // 0

/*
Exercise 5: Unique Elements
Instructions
Write a JS function that takes an array and returns a new array with only unique elements.
Example: list=[1,2,3,3,3,3,4,5] newList = [1,2,3,4,5]
*/

function getUniqueElements(arr) {
    // Utilizing JavaScript Set to effortlessly strip duplicate elements instantly
    return Array.from(new Set(arr));
}

// Testing the function
const list = [1, 2, 3, 3, 3, 3, 4, 5];
console.log(getUniqueElements(list)); // [1, 2, 3, 4, 5]

/*
Exercise 6 : Calendar
Instructions
Create a function called createCalendar(year, month)
The function should create a calendar for the given year/month.
The calendar should be a table, where a week is <tr>, and a day is <td>. 
The table top should be <th> with weekday names: Mon, Tue... until Sun.
Hint: There shouldn’t be any code in the HTML file. The table should be created from the JS file using the DOM.
*/

function createCalendar(year, month) {
    // JS Months match 0-11 range, so shift user input 1-12 back by 1 index point
    const mon = month - 1; 
    const d = new Date(year, mon);

    // Create container elements
    const table = document.createElement("table");
    const headerRow = document.createElement("tr");
    const weekdays = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];

    // Append table headers
    weekdays.forEach(day => {
        const th = document.createElement("th");
        th.textContent = day;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    let tr = document.createElement("tr");

    // Get index of the first day of the selected month (Mon: 0, Tue: 1 ... Sun: 6)
    // d.getDay() returns 0 for Sunday, 1 for Monday... up to 6 for Saturday.
    let firstDayIndex = d.getDay() - 1;
    if (firstDayIndex === -1) firstDayIndex = 6; // Fix structure conversion if day is Sunday

    // Spaces/dots layout for the first week row alignment
    for (let i = 0; i < firstDayIndex; i++) {
        const td = document.createElement("td");
        td.textContent = ".";
        tr.appendChild(td);
    }

    // Fill table rows with dates of the actual month loop
    while (d.getMonth() === mon) {
        const td = document.createElement("td");
        td.textContent = d.getDate();
        tr.appendChild(td);

        // Sunday means end of current row week layout line, start a new row element
        let currentDayIndex = d.getDay() - 1;
        if (currentDayIndex === -1) currentDayIndex = 6;

        if (currentDayIndex === 6) { 
            table.appendChild(tr);
            tr = document.createElement("tr");
        }

        d.setDate(d.getDate() + 1);
    }

    // Append trailing placeholder columns if final row loop line is uneven
    let lastDayIndex = tr.children.length;
    if (lastDayIndex > 0 && lastDayIndex < 7) {
        for (let i = lastDayIndex; i < 7; i++) {
            const td = document.createElement("td");
            td.textContent = ".";
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    // Inject finished complete calendar into document workspace body
    document.body.appendChild(table);
}

// Testing the function (Generates September 2012 example pattern)
createCalendar(2012, 9);
