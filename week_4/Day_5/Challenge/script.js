const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

// Function 1: Convert JSON string to JavaScript Object
function toJs() {
  return new Promise((resolve, reject) => {
    try {
      const morseObj = JSON.parse(morse);
      
      // Check if the parsed object is empty
      if (Object.keys(morseObj).length === 0) {
        reject("Error: The Morse JavaScript object is empty.");
      } else {
        resolve(morseObj);
      }
    } catch (error) {
      reject("Error: Failed to parse Morse JSON string.");
    }
  });
}

// Function 2: Prompt user and map text characters into a Morse array
function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const userInput = prompt("Please enter a word or a sentence:");
    
    if (userInput === null || userInput === "") {
      reject("Error: No text entered for translation.");
      return;
    }

    const translationArray = [];
    // Convert to lower case to match object dictionary keys
    const lowerInput = userInput.toLowerCase();

    for (let char of lowerInput) {
      // Spaces can be ignored or handled natively depending on requirements. 
      // If handling space as an empty break, bypass validation.
      if (char === " ") continue; 

      // If character doesn't exist in our dictionary object, reject immediately
      if (!morseJS.hasOwnProperty(char)) {
        reject(`Error: The character "${char}" does not exist in the Morse dictionary.`);
        return;
      }
      
      translationArray.push(morseJS[char]);
    }

    resolve(translationArray);
  });
}

// Function 3: Join values with line breaks and render directly to the DOM
function joinWords(morseTranslation) {
  const outputDiv = document.getElementById("morse-output");
  
  // Create line breaks using the HTML break tag (<br>)
  const joinedText = morseTranslation.join("<br>");
  
  // Append inside target DOM element
  outputDiv.innerHTML = joinedText;
  
  console.log("Translation complete!");
}

// --- CHAINING THE THREE FUNCTIONS ---
toJs()
  .then((morseJS) => toMorse(morseJS))
  .then((morseTranslation) => joinWords(morseTranslation))
  .catch((error) => {
    // Gracefully catch any rejection error states and report them
    console.error(error);
    const outputDiv = document.getElementById("morse-output");
    if (outputDiv) {
      outputDiv.innerHTML = `<span style="color: red;">${error}</span>`;
    }
  });
