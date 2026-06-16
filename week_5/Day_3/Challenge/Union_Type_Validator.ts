function validateUnionType(value: any, allowedTypes: string[]): boolean {
    const valueType = typeof value;
    
    for (const type of allowedTypes) {
        if (valueType === type) {
            return true;
        }
    }
    
    return false;
}

// Demonstrate usage with different types:
const testValue1: string | number = "Hello";
const testValue2: boolean | number = 42;
const testValue3: string[] = ["a", "b"];

console.log(validateUnionType(testValue1, ["string", "number"]));  // Output: true
console.log(validateUnionType(testValue2, ["string", "number"]));  // Output: true
console.log(validateUnionType(testValue3, ["string", "number"]));  // Output: false

// typeof Operator: This operator evaluates the data type of the runtime argument and returns it as a lowercase string (e.g., "string", "number", "boolean").
// for...of Loop: Iterates through each string element inside the allowedTypes array sequentially.
// Type Matching: The if statement compares the extracted runtime type against the permitted checklist. It stops early and yields true upon finding a match.
// Fallback Return: The function returns false if the loop finishes checking every item in the array without finding any valid match.