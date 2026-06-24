// Constrain T to objects that possess a toString method
function formatInput<T extends { toString(): string }>(input: T): string {
  // Use type assertion to explicitly interact with it as a string
  const stringified = (input.toString()) as string;
  
  return `Formatted Output: ${stringified.trim()}`;
}

// Test cases
console.log(formatInput("  hello world  ")); // Works with strings
console.log(formatInput(12345));             // Works with numbers (they have .toString())
