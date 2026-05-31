// 1. Create a variable called sentence containing "not" and "bad"
const sentence = "The movie is not that bad, I like it";

// 2. Find the first appearance index position of the substring "not"
const wordNot = sentence.indexOf("not");

// 3. Find the first appearance index position of the substring "bad"
const wordBad = sentence.indexOf("bad");

// 4. Check if both words exist and "bad" appears after "not"
if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
    // Extract the exact substring from the start of "not" to the end of "bad"
    // We add 3 to wordBad because "bad" is 3 characters long
    const substringToReplace = sentence.slice(wordNot, wordBad + 3);
    
    // Replace the "not...bad" chunk with "good"
    const resultSentence = sentence.replace(substringToReplace, "good");
    
    console.log(resultSentence); 
    // Output: "The movie is good, I like it"
} else {
    // If conditions are not met, print the original unaltered sentence
    console.log(sentence);
}
