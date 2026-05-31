// Outer loop controls the rows (6 rows total)
for (let i = 1; i <= 6; i++) {
    let rowString = "";
    
    // Inner loop controls the stars added to the current row
    // It runs exactly 'i' times for row 'i'
    for (let j = 1; j <= i; j++) {
        rowString += "* ";
    }
    
    // Print the complete row line and remove trailing spaces
    console.log(rowString.trim());
}
