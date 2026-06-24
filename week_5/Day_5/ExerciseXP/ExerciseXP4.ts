function getFirstElement(arr: (number | string)[]): string {
  // Access the first element
  const first = arr[0];
  
  // Use a type assertion to force it to behave as a string
  return first as string;
}

// Test instances
const mixedArray1 = ["hello", 42, "world"];
const mixedArray2 = [100, "apple", 200];

console.log(getFirstElement(mixedArray1)); // Works naturally
console.log(getFirstElement(mixedArray2)); // Returns 100, but treated as a string by the compiler
