/*
Instructions:
Create a self-invoking function (IIFE) that takes 4 arguments:
number of children, partner’s name, geographic location, job title.
Display the sentence in the DOM.
*/

(function(numberOfChildren, partnerName, geographicLocation, jobTitle) {
    // 1. Create a text node or paragraph to hold the string sentence
    const predictionParagraph = document.createElement("p");
    
    // 2. Format the layout sentence string using template literals
    predictionParagraph.textContent = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`;
    
    // 3. Append the finished node directly to the main body document layout workspace
    document.body.appendChild(predictionParagraph);

})(0, "Yaakov", "Haifa", "Full Stack Developer"); 
// 👆 Pass your 4 arguments inside the closing parentheses immediately to trigger execution
