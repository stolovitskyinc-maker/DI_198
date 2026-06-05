/*
Part I Instructions:
- Create an outer function `makeJuice(size)`.
- Create an inner function `addIngredients(ing1, ing2, ing3)` that reads the outer size parameter and appends a sentence to the DOM.
- Invoke the inner function once inside the outer function.
*/

function makeJuice(size) {
    // Inner function reads 'size' directly from the parent outer scope closure
    function addIngredients(firstIng, secondIng, thirdIng) {
        const sentenceParagraph = document.createElement("p");
        
        sentenceParagraph.textContent = `The client wants a ${size} juice, containing ${firstIng}, ${secondIng}, ${thirdIng}.`;
        
        document.body.appendChild(sentenceParagraph);
    }

    // Invoke the inner function exactly once inside the parent scope context
    addIngredients("apple", "ginger", "lemon");
}

// Invoke the outer function in the global scope to trigger layout injection
makeJuice("medium");

// ======================================================================================================================================================

/*
Part II Instructions:
- In `makeJuice`, initialize an empty `ingredients` array.
- Update `addIngredients` to receive 3 ingredients and push them into the array.
- Create a secondary inner function `displayJuice` to loop and print the final description.
- Invoke `addIngredients` twice (6 items total), then invoke `displayJuice` once.
*/

function makeJuice(size) {
    // 1. Initialize an empty array tracking closure state data structures
    const ingredients = [];

    // 2. Inner function to populate the tracking array
    function addIngredients(firstIng, secondIng, thirdIng) {
        ingredients.push(firstIng, secondIng, thirdIng);
    }

    // 3. Inner function to render the completed data summary onto the screen layout
    function displayJuice() {
        const sentenceParagraph = document.createElement("p");
        
        // Using ingredients.join(", ") makes formatting clean and dynamic regardless of list length
        sentenceParagraph.textContent = `The client wants a ${size} juice, containing ${ingredients.join(", ")}.`;
        
        document.body.appendChild(sentenceParagraph);
    }

    // 4. Invoke addIngredients TWICE to fulfill the 6 ingredient request
    addIngredients("apple", "banana", "blueberry");
    addIngredients("spinach", "kale", "mint");

    // 5. Invoke displayJuice once to finalize execution inside the parent scope
    displayJuice();
}

// 6. Invoke the outer function in the global scope
makeJuice("large");
