// app.js

// Import the people array using ES6 syntax (include the file extension)
import people from './data.js';

/**
 * Calculates and prints the average age of all people
 * @param {Array} individuals 
 */
function displayAverageAge(individuals) {
  if (individuals.length === 0) {
    console.log("The array is empty.");
    return;
  }

  // Accumulate the total age using the reduce method
  const totalAge = individuals.reduce((sum, person) => sum + person.age, 0);
  const averageAge = totalAge / individuals.length;

  console.log(`📊 Calculated Statistics:`);
  console.log(`   Total People: ${individuals.length}`);
  console.log(`   Average Age:  ${averageAge.toFixed(2)} years old\n`);
}

// Execute the function with the imported data
displayAverageAge(people);
