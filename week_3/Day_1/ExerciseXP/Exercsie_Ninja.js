// 1. Create person objects with details and a BMI calculation method
const person1 = {
    fullName: "John Doe",
    mass: 80,    // in kilograms
    height: 1.8, // in meters
    // Method to calculate and return BMI: weight / (height * height)
    calculateBMI: function() {
        return this.mass / (this.height * this.height);
    }
};

const person2 = {
    fullName: "Jane Smith",
    mass: 65,    // in kilograms
    height: 1.65, // in meters
    calculateBMI: function() {
        return this.mass / (this.height * this.height);
    }
};

// 2. Create an external function to compare both individual BMI metrics
function compareBMI(p1, p2) {
    const bmi1 = p1.calculateBMI();
    const bmi2 = p2.calculateBMI();
    
    console.log(`${p1.fullName}'s BMI: ${bmi1.toFixed(2)}`);
    console.log(`${p2.fullName}'s BMI: ${bmi2.toFixed(2)}`);

    // Determine and display the person with the largest BMI value
    if (bmi1 > bmi2) {
        console.log(`${p1.fullName} has the largest BMI.`);
    } else if (bmi2 > bmi1) {
        console.log(`${p2.fullName} has the largest BMI.`);
    } else {
        console.log("Both individuals have the exact same BMI.");
    }
}

// Execute the comparison function
compareBMI(person1, person2);

// =================================================================================

// Function 1: Purely calculates and returns the raw average of any numerical array
function findAvg(gradesList) {
    // Check if the array is empty to avoid dividing by zero errors
    if (gradesList.length === 0) {
        return 0;
    }
    
    let sum = 0;
    for (let i = 0; i < gradesList.length; i++) {
        sum += gradesList[i];
    }
    
    const average = sum / gradesList.length;
    console.log(`The class grade average is: ${average.toFixed(2)}`);
    return average;
}

// Function 2: Master workflow evaluator function that validates criteria thresholds
function checkCourseStatus(gradesList) {
    // This function calls the helper function to receive the numeric average result
    const classAverage = findAvg(gradesList);
    
    // Status assessment criteria threshold evaluation block
    if (classAverage >= 65) {
        console.log("Congratulations, you passed the course! 🎉");
    } else {
        console.log("Unfortunate news: You failed and must repeat the course. 📚");
    }
}

// Sample execution tracking datasets to test the pipeline framework
const studentGradesPassing = [70, 85, 90, 60, 72];
const studentGradesFailing = [50, 60, 45, 70, 55];

console.log("--- Testing Passing Dataset ---");
checkCourseStatus(studentGradesPassing);

console.log("\n--- Testing Failing Dataset ---");
checkCourseStatus(studentGradesFailing);
