/*
Challenge: Mad Libs
Instructions:
1. Capture all input values upon form submission while preventing page reload.
2. Ensure no field is left empty.
3. Write and display a dynamic story combining all inputs.
4. Bonus: Implement a shuffle feature displaying at least 3 distinct randomly picked story variants.
*/

// 1. Target key workspace elements
const formObj = document.getElementById("libform");
const storySpan = document.getElementById("story");
const shuffleBtn = document.getElementById("shuffle-button");

// 2. Global variables to hold the active values for the shuffle feature
let currentWords = null;

// 3. Form submission listener to generate the initial story
formObj.addEventListener("submit", function(event) {
    // Prevent standard browser page reload behavior
    event.preventDefault();

    // Retrieve input values cleanly
    const nounVal = document.getElementById("noun").value.trim();
    const adjVal = document.getElementById("adjective").value.trim();
    const personVal = document.getElementById("person").value.trim();
    const verbVal = document.getElementById("verb").value.trim();
    const placeVal = document.getElementById("place").value.trim();

    // Validate that no inputs are empty
    if (!nounVal || !adjVal || !personVal || !verbVal || !placeVal) {
        alert("Please fill out all the input fields before generating your story!");
        return;
    }

    // Cache words globally to allow shuffling later
    currentWords = { noun: nounVal, adj: adjVal, person: personVal, verb: verbVal, place: placeVal };

    // Render the initial story selection
    displayRandomStory(currentWords);
});

// 4. Bonus: Shuffle event click listener
shuffleBtn.addEventListener("click", function() {
    if (!currentWords) {
        alert("Please generate a story using the 'Lib it!' button first!");
        return;
    }
    displayRandomStory(currentWords);
});

// Helper function containing the story templates and rendering logic
function displayRandomStory(words) {
    // Array storing 3 completely distinct story variations
    const stories = [
        `Yesterday, ${words.person} decided to ${words.verb} a very ${words.adj} ${words.noun} directly inside ${words.place}!`,
        `While exploring ${words.place}, ${words.person} found a ${words.adj} ${words.noun} and started to ${words.verb} uncontrollably.`,
        `Legends say that in ${words.place}, ${words.person} owns a ${words.adj} ${words.noun} that loves to ${words.verb} all night long.`
    ];

    // Pick a completely random index point between 0 and 2
    const randomIndex = Math.floor(Math.random() * stories.length);
    
    // Inject the selected template text into the page layout workspace
    storySpan.textContent = stories[randomIndex];
}
