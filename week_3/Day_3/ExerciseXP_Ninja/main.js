/*
Tip Calculator Assignment
Instructions:
1. Extract values for bill amount, service quality, and group size.
2. Validate inputs and set defaults dynamically.
3. Perform division calculations and style visibility blocks.
4. Bind execution context safely onto the calculation button click.
*/

// --- Second Part (Initialization) ---
// Hide the totalTip element immediately when the script runs to prevent it from showing early
document.getElementById("totalTip").style.display = "none";

// Bind the calculateTip function to the button with id="calculate"
document.getElementById("calculate").onclick = function() {
    calculateTip();
};

// --- First Part ---
function calculateTip() {
    // 1. Fetch values directly from the HTML elements using their IDs
    let billAmount = document.getElementById("billAmt").value;
    let serviceQuality = document.getElementById("serviceQual").value;
    let numberOfPeople = document.getElementById("numOfPeople").value;

    // 2. Condition 1: Check if critical parameters are empty or unselected
    // serviceQual option for "Choose..." usually has a value of "0"
    if (billAmount === "" || serviceQuality == 0) {
        alert("Please enter the bill amount and service quality values.");
        return; // Exit function execution early so we don't calculate with bad inputs
    }

    // 3. Condition 2: Evaluate group sizes and configure layout wrappers
    if (numberOfPeople === "" || numberOfPeople < 1) {
        numberOfPeople = 1;
        // Hide the "/ each" label if only 1 person is paying
        document.getElementById("each").style.display = "none";
    } else {
        // Show the "/ each" label if there are multiple people
        document.getElementById("each").style.display = "block";
    }

    // 4. Calculate the average tip breakdown per individual
    // Converting billAmount and serviceQuality to Numbers ensures mathematical precision
    let total = (Number(billAmount) * Number(serviceQuality)) / Number(numberOfPeople);

    // 5. Format to exactly two decimal layout positions (e.g., 5.43)
    total = total.toFixed(2);

    // 6. Make the wrapper container visible on screen layout
    document.getElementById("totalTip").style.display = "block";

    // 7. Inject calculated numeric value output into the targeted element
    document.getElementById("tip").textContent = total;
}
