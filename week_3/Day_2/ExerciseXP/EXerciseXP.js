/*
🌟 Exercise 1 : Find the numbers divisible by 23
Instructions
Create a function call displayNumbersDivisible() that takes no parameter.
In the function, loop through numbers 0 to 500.
Console.log all the numbers divisible by 23.
At the end, console.log the sum of all numbers that are divisible by 23.

Bonus: Add a parameter divisor to the function.
displayNumbersDivisible(divisor)
*/

// Main function with Bonus parameter included (defaults to 23 if no argument is passed)
function displayNumbersDivisible(divisor = 23) {
    let sum = 0;
    let numbers = [];

    for (let i = 0; i <= 500; i++) {
        if (i % divisor === 0) {
            numbers.push(i);
            sum += i;
        }
    }

    console.log(numbers.join(" "));
    console.log(`Sum : ${sum}`);
}

// Running the function for Exercise 1
displayNumbersDivisible(23);

// Testing bonus examples:
// displayNumbersDivisible(3);
// displayNumbersDivisible(45);

/*
🌟 Exercise 2 : Shopping List
Instructions
const stock = { "banana": 6, "apple": 0, "pear": 12, "orange": 32, "blueberry":1 }  
const prices = { "banana": 4, "apple": 2, "pear": 1, "orange": 1.5, "blueberry":10 } 
Add the stock and prices objects to your js file.
Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”.
Create a function called myBill() that takes no parameters.
The function should return the total price of your shoppingList. 
The item must be in stock. (Hint : check out if .. in)
If the item is in stock find out the price in the prices object.
Call the myBill() function.

Bonus: If the item is in stock, decrease the item’s stock by 1
*/

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
};

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
};

const shoppingList = ["banana", "orange", "apple"];

function myBill() {
    let totalPrice = 0;

    for (const item of shoppingList) {
        // Check if the item exists in stock and its quantity is greater than 0
        if (item in stock && stock[item] > 0) {
            totalPrice += prices[item];
            // Bonus: Decrease stock by 1
            stock[item]--; 
        }
    }

    return totalPrice;
}

console.log(`Total Bill: $${myBill()}`);

/*
Exercise 3 : What’s in my wallet ?
Instructions
Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments : an item price and an array representing the amount of change in your pocket.
In the function, determine whether or not you can afford the item.
Change will always be represented in the following order: quarters (0.25), dimes (0.10), nickels (0.05), pennies (0.01).
*/

function changeEnough(itemPrice, amountOfChange) {
    const quarterValue = 0.25;
    const dimeValue = 0.10;
    const nickelValue = 0.05;
    const pennyValue = 0.01;

    let totalWallet = (amountOfChange[0] * quarterValue) +
                      (amountOfChange[1] * dimeValue) +
                      (amountOfChange[2] * nickelValue) +
                      (amountOfChange[3] * pennyValue);

    return totalWallet >= itemPrice;
}

// Testing Examples
console.log(changeEnough(4.25, [25, 20, 5, 0])); // true
console.log(changeEnough(14.11, [2, 100, 0, 0])); // false
console.log(changeEnough(0.75, [0, 0, 20, 5])); // true

/*
🌟 Exercise 4 : Vacations Costs
Instructions
Define hotelCost(): asks user for nights. Must be a number. Costs $140/night.
Define planeRideCost(): asks user for destination. "London": $183, "Paris": $220, others: $300.
Define rentalCarCost(): asks user for days. Costs $40/day. >10 days gets 5% discount.
Define totalVacationCost(): calls the 3 functions and logs the total breakdown.

Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.
*/

// Refactored functions accepting arguments directly to fulfill the Bonus requirement
function hotelCost(nights) {
    return nights * 140;
}

function planeRideCost(destination) {
    destination = destination.trim().toLowerCase();
    if (destination === "london") return 183;
    if (destination === "paris") return 220;
    return 300;
}

function rentalCarCost(days) {
    let cost = days * 40;
    if (days > 10) {
        cost *= 0.95; // 5% discount
    }
    return cost;
}

function totalVacationCost() {
    // Prompt and validate Hotel Nights
    let nights;
    while (true) {
        let input = prompt("How many nights would you like to stay at the hotel?");
        nights = Number(input);
        if (input !== null && input.trim() !== "" && !isNaN(nights) && nights >= 0) break;
    }

    // Prompt and validate Destination
    let destination;
    while (true) {
        destination = prompt("What is your destination?");
        if (destination !== null && destination.trim() !== "" && isNaN(Number(destination))) break;
    }

    // Prompt and validate Car Rental Days
    let days;
    while (true) {
        let input = prompt("How many days would you like to rent the car?");
        days = Number(input);
        if (input !== null && input.trim() !== "" && !isNaN(days) && days >= 0) break;
    }

    // Calculate individual costs using the helper functions
    const hotel = hotelCost(nights);
    const plane = planeRideCost(destination);
    const car = rentalCarCost(days);
    const total = hotel + plane + car;

    console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}.`);
    console.log(`Total Vacation Cost: $${total}`);
}

// Call the main driver function
totalVacationCost();

/*
🌟 Exercise 5 : Users
Instructions
Using Javascript:
1. Retrieve the div and console.log it.
2. Change the name “Pete” to “Richard”.
3. Delete the second <li> of the second <ul>.
4. Change the name of the first <li> of each <ul> to your name.
5. Add a class called student_list to both of the <ul>'s.
6. Add the classes university and attendance to the first <ul>.
7. Add a “light blue” background color and some padding to the <div>.
8. Do not display the <li> that contains the text node “Dan”.
9. Add a border to the <li> that contains the text node “Richard”.
10. Change the font size of the whole body.
Bonus: If the background color of the div is “light blue”, alert “Hello x and y”
*/

// 1. Retrieve the div and console.log it
const containerDiv = document.getElementById("container");
console.log(containerDiv);

// 2. Change the name “Pete” to “Richard”
const lists = document.querySelectorAll(".list");
lists[0].children[1].textContent = "Richard";

// 3. Delete the second <li> of the second <ul> (Sarah)
lists[1].children[1].remove();

// 4. Change the name of the first <li> of each <ul> to your name
for (const ul of lists) {
    ul.children[0].textContent = "Alex"; // Replace 'Alex' with your name
}

// 5. Add a class called student_list to both of the <ul>'s
for (const ul of lists) {
    ul.classList.add("student_list");
}

// 6. Add the classes university and attendance to the first <ul>
lists[0].classList.add("university", "attendance");

// 7. Add a “light blue” background color and some padding to the <div>
containerDiv.style.backgroundColor = "lightblue";
containerDiv.style.padding = "10px";

// 8. Do not display the <li> that contains the text node “Dan” (Now the 2nd item of 2nd list after removal)
lists[1].children[1].style.display = "none";

// 9. Add a border to the <li> that contains the text node “Richard”
lists[0].children[1].style.border = "2px solid black";

// 10. Change the font size of the whole body
document.body.style.fontSize = "18px";

// Bonus: If the background color of the div is “light blue”, alert users
if (containerDiv.style.backgroundColor === "lightblue") {
    const user1 = lists[0].children[0].textContent;
    const user2 = lists[0].children[1].textContent;
    alert(`Hello ${user1} and ${user2}`);
}

/*
🌟 Exercise 6 : Change the navbar
Instructions
1. Change the value of the id attribute from navBar to socialNetworkNavigation, using setAttribute.
2. Create a new <li> with text "Logout" and append it to the <ul>.
3. Use firstElementChild and lastElementChild to retrieve the first and last <li> elements and display their link text.
*/

// 1. Change the id attribute
const nav = document.getElementById("navBar");
nav.setAttribute("id", "socialNetworkNavigation");

// 2. Add a new <li> "Logout"
const ul = nav.querySelector("ul");
const newLi = document.createElement("li");
const newAnchor = document.createElement("a"); // Best practice to keep markup consistent
newAnchor.setAttribute("href", "#");
newAnchor.textContent = "Logout";
newLi.appendChild(newAnchor);
ul.appendChild(newLi);

// 3. Display text of first and last <li> items
const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;

console.log(`First link text: ${firstLi.textContent}`);
console.log(`Last link text: ${lastLi.textContent}`);

/*
Exercise 7 : My Book List
Instructions
In the body of the HTML page, create an empty section: <section class="listBooks"></section>
In the js file, create an array called allBooks of objects containing: title, author, image, alreadyRead.
Render each book inside a div inside the <section>.
Display title and author. Set image width to 100px.
If the book is already read, set the color of the book’s details to red.
*/

const allBooks = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        image: "https://unsplash.com", 
        alreadyRead: true
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        image: "https://unsplash.com",
        alreadyRead: false
    }
];

const bookSection = document.querySelector(".listBooks");

allBooks.forEach(book => {
    // Create DOM nodes
    const bookDiv = document.createElement("div");
    const bookDetails = document.createElement("p");
    const bookImg = document.createElement("img");

    // Populate content
    bookDetails.textContent = `${book.title} written by ${book.author}`;
    bookImg.setAttribute("src", book.image);
    bookImg.style.width = "100px";

    // Check if book has been read
    if (book.alreadyRead) {
        bookDetails.style.color = "red";
    }

    // Append nodes
    bookDiv.appendChild(bookDetails);
    bookDiv.appendChild(bookImg);
    bookSection.appendChild(bookDiv);
});
