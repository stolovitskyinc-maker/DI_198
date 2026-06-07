const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((color, index) => {
    const position = index + 1;
    // Use ternary operator to pick the right suffix (1st, 2nd, 3rd, and th for everything else)
    const suffix = position <= 3 ? ordinal[position] : ordinal[0];
    
    console.log(`${position}${suffix} choice is ${color}.`);
});
