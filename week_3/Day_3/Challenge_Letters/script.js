/*
Daily Challenge: Show only the letters
Instructions:
1. Target the text input element.
2. Listen for mutations using the modern 'input' event listener.
3. Clean the text string in real-time by stripping out non-letter characters using a Regular Expression.
*/

// 1. Target the input element node
let lettersInput = document.getElementById("lettersInput");

// 2. Attach the input event listener
lettersInput.addEventListener("input", function() {
    // Regular Expression breakdown:
    // /[^a-zA-Z]/g
    // [^...] means "match everything EXCEPT the characters inside these brackets"
    // a-z means lowercase letters, A-Z means uppercase letters
    // /g is a global flag that forces it to replace all matches, not just the first one
    let cleanValue = lettersInput.value.replace(/[^a-zA-Z]/g, "");

    // 3. Reassign the cleaned text value back into the input element field
    lettersInput.value = cleanValue;
});
