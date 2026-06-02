/*
Exercise 2 : Move the box
Instructions:
- Implement myMove() called by the HTML button.
- Move the #animate box 1px to the right every 1 millisecond using setInterval.
- Stop the box when it reaches the right boundary edge of the #container.
*/

function myMove() {
    let animateBox = document.getElementById("animate");
    let containerBox = document.getElementById("container");

    // Track the horizontal position of the animating box
    let position = 0;

    // Calculate maximum boundary limit dynamically (400px container - 50px box = 350px travel space)
    let maxBoundary = containerBox.clientWidth - animateBox.clientWidth;

    // Start interval to trigger every 1 millisecond
    let animationInterval = setInterval(moveRight, 1);

    function moveRight() {
        if (position >= maxBoundary) {
            // Stop the interval once boundary is hit
            clearInterval(animationInterval);
        } else {
            // Advance the box layout style position by 1 pixel unit
            position++;
            animateBox.style.left = position + "px";
        }
    }
}
