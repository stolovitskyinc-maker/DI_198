const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];

// 1. Using the .toString() method
// This converts the array into a comma-separated string automatically.
const stringFromToString = numbers.toString();
console.log("Using .toString():", stringFromToString); 
// Output: "5,0,9,1,7,4,2,6,3,8"

// 2. Using the .join() method with different separators
const joinPlus = numbers.join("+");
console.log("Joined with '+':", joinPlus);     // Output: "5+0+9+1+7+4+2+6+3+8"

const joinSpace = numbers.join(" ");
console.log("Joined with space:", joinSpace);  // Output: "5 0 9 1 7 4 2 6 3 8"

const joinEmpty = numbers.join("");
console.log("Joined with empty:", joinEmpty);  // Output: "5091742638"


// ============================================================================================

const numbersToSort = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];

console.log("Initial array layout:", [...numbersToSort]);

// Outer loop: Tracks how many passes we make through the array.
// With 10 numbers, we need at most 10 total passes to completely guarantee the sort.
for (let i = 0; i < numbersToSort.length; i++) {
    
    // Inner loop: Compares adjacent elements side by side.
    // It loops from the beginning up to the unsorted portion of the array.
    for (let j = 0; j < numbersToSort.length - 1 - i; j++) {
        
        // Check if the current number is SMALLER than the next number.
        // If it is, they are in the wrong order for a descending sort, so we swap them.
        if (numbersToSort[j] < numbersToSort[j + 1]) {
            
            // 1. Store the value of the current item in a temporary holding box
            let temp = numbersToSort[j];
            
            // 2. Replace the current item with the larger next item
            numbersToSort[j] = numbersToSort[j + 1];
            
            // 3. Put the temporary stored item into the next position, completing the swap
            numbersToSort[j + 1] = temp;
            
            // Console log to visualize the modification actively
            console.log(`Swapped index ${j} and ${j+1} -> [${numbersToSort.join(",")}]`);
        }
    }
    console.log(`--- End of Pass #${i + 1} --- Current state: [${numbersToSort.join(",")}]`);
}

console.log("\nFinal sorted descending array output:", numbersToSort);
// Output: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
