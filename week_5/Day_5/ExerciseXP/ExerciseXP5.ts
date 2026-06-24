// Define an interface to enforce the length property
interface Lengthwise {
  length: number;
}

// Use 'extends' to constrain the generic type T
function logLength<T extends Lengthwise>(arg: T): void {
  console.log(arg.length);
}

// Test with different valid types
logLength("Hello");       // Logs: 5 (string)
logLength([1, 2, 3, 4]);  // Logs: 4 (array)
logLength({ length: 10 }); // Logs: 10 (object with length property)
