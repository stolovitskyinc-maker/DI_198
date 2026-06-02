/*
🌟 Exercise 1: Timer
Instructions:
- Part I: Alert "Hello World" after 2 seconds.
- Part II: Append <p>Hello World</p> to #container after 2 seconds.
- Part III: Append <p>Hello World</p> every 2 seconds. Clear interval on button click OR when 5 paragraphs are reached.
*/

// --- PART I ---
// setTimeout(function() {
//     alert("Hello World");
// }, 2000);


// --- PART II ---
// setTimeout(function() {
//     let container = document.getElementById("container");
//     let p = document.createElement("p");
//     p.textContent = "Hello World";
//     container.appendChild(p);
// }, 2000);


// --- PART III ---
let container = document.getElementById("container");
let clearBtn = document.getElementById("clear");

// Declare the interval ID globally so it can be accessed by both conditions
let timerInterval = setInterval(addParagraph, 2000);

function addParagraph() {
    // 1. Create and append the new paragraph element
    let p = document.createElement("p");
    p.textContent = "Hello World";
    container.appendChild(p);

    // 2. Check if total paragraphs reached 5 to clear automatically
    let paragraphCount = container.getElementsByTagName("p").length;
    if (paragraphCount >= 5) {
        clearInterval(timerInterval);
        console.log("Interval cleared automatically: Reached 5 paragraphs.");
    }
}

// 3. Clear interval manually if the user clicks the button
clearBtn.addEventListener("click", function() {
    clearInterval(timerInterval);
    console.log("Interval cleared manually by user button click.");
});
