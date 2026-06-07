const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// 1. Display choices using forEach
colors.forEach((color, index) => {
    console.log(`${index + 1}# choice is ${color}.`);
});

// 2. Check if "Violet" exists using the includes method
const hasViolet = colors.includes("Violet");
console.log(hasViolet ? "Yeah" : "No...");
