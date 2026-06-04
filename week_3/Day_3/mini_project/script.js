/*
Double Slider Form State Engine Control
Instructions:
1. Target the button triggers and master sliding layout framework wrapper box shell.
2. Listen for clicks on the Sign Up button to append the activation modifier class string.
3. Listen for clicks on the Sign In button to strip the activation modifier class string.
*/

// 1. Target interface interact elements using let/const declarations
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// 2. Add event listener to activate the sliding layout right panel state
signUpButton.addEventListener('click', function() {
    container.classList.add("right-panel-active");
    console.log("Slider state changed: Sign Up layout panel active.");
});

// 3. Add event listener to deactivate and return back to initial default view forms state
signInButton.addEventListener('click', function() {
    container.classList.remove("right-panel-active");
    console.log("Slider state changed: Sign In layout panel active.");
});
