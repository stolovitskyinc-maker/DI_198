/*
Email Validation Engine
Approaches Implemented:
- Approach A: Pure Javascript String Methods (No Regex)
- Approach B: Regular Expression Match Check (With Regex)
*/

const emailForm = document.getElementById("emailForm");
const emailInput = document.getElementById("emailInput");
const resultMessage = document.getElementById("resultMessage");

// Master Form Submission Event Routing
emailForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Stop page layout refreshing reload

    const emailValue = emailInput.value.trim();

    // -------------------------------------------------------------
    // TOGGLE TEST STYLES HERE: 
    // Swap the commented lines below to switch between validation modes
    // -------------------------------------------------------------
    const isValid = validateEmailWithoutRegex(emailValue);
    // const isValid = validateEmailWithRegex(emailValue);

    // Render results status back out onto the UI view layout
    if (isValid) {
        resultMessage.textContent = "Success! That is a valid email address.";
        resultMessage.className = "success";
    } else {
        resultMessage.textContent = "Error: Invalid email format detected.";
        resultMessage.className = "error";
    }
});

/**
 * APPROACH 1: Email Validation WITHOUT Regex
 * Strategy: Manually checks for character patterns using text slicing and indexOf markers.
 * Requirements: [characters] + "@" + [characters] + "." + [characters]
 */
function validateEmailWithoutRegex(email) {
    // 1. Locate character index anchors
    let atIndex = email.indexOf("@");
    let lastDotIndex = email.lastIndexOf(".");

    // 2. "@" must exist, cannot be the very first character, and cannot be duplicated
    if (atIndex < 1 || atIndex !== email.lastIndexOf("@")) {
        return false;
    }

    // 3. "." must exist and must appear AFTER the "@" sign symbol split marker point
    // Also, there must be at least one character separating the "@" and the "." symbol
    if (lastDotIndex <= atIndex + 1) {
        return false;
    }

    // 4. The final period symbol cannot be the last character of the text string array
    if (lastDotIndex === email.length - 1) {
        return false;
    }

    // If it passes all criteria checks, return valid true state parameters
    return true;
}

/**
 * APPROACH 2: Email Validation WITH Regex
 * Strategy: Evaluates input structure parameters instantly against a formal Regex pattern code matrix.
 */
function validateEmailWithRegex(email) {
    // Regex breakdown:
    // ^[^@\s]+       -> Matches characters at the start before an @ symbol (excluding spaces and @)
    // @              -> Matches the literal '@' character
    // [^@\s]+\.      -> Matches domain characters followed by a literal period '.' character
    // [^@\s]+$       -> Matches extension tracking characters up until the end of the text line string
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

    // Execute pattern validation sequence
    return emailPattern.test(email);
}
