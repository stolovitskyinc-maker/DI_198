/*
JS Drum Kit Control Engine Logic
Features Handled:
- Simultaneous keyboard event routing and pointer click interactions.
- Audio play rewinding enabling high-speed repeat trigger clicks.
- Transition end element tracking to automatically strip active UI highlight states.
*/

// 1. Core Controller Function to execute sound playing logic
function playDrumSound(keyStrokeValue) {
    // Locate the matching audio and HTML key block elements based on data attributes
    let audio = document.querySelector(`audio[data-key="${keyStrokeValue}"]`);
    let keyElement = document.querySelector(`.key[data-key="${keyStrokeValue}"]`);

    // Guard Clause: exit if a pressed key does not map to an audio element
    if (!audio) return;

    // Critical Performance Rule: Rewind sample stream timeline track to zero.
    // Without this line, tapping a key rapidly will fail to play sound until the previous clip finishes.
    audio.currentTime = 0;
    audio.play();

    // Append visual active glow presentation style modifier class
    keyElement.classList.add("playing");
}

// 2. Setup Keyboard Event Routing Channel Listener
window.addEventListener("keydown", function(event) {
    // Standardize input value tracking string to lower-case values
    let keyInput = event.key.toLowerCase();
    playDrumSound(keyInput);
});

// 3. Setup Interactive Click Target Listeners
let allKeyDivs = document.querySelectorAll(".key");
allKeyDivs.forEach(singleKey => {
    singleKey.addEventListener("click", function() {
        // Pull bound attribute identifier token from targeted click wrapper element 
        let clickedKeyAttr = this.getAttribute("data-key");
        playDrumSound(clickedKeyAttr);
    });
});

// 4. Cleanup Function: Automatically strips active glow classes upon visual style transitions completing
function removeGlowStyle(event) {
    // Only remove class if the CSS transform property is what finished transitioning
    if (event.propertyName !== "transform") return;
    this.classList.remove("playing");
}

// Attach the transition end cleanup listener to each individual key div block
allKeyDivs.forEach(singleKey => {
    singleKey.addEventListener("transitionend", removeGlowStyle);
});
