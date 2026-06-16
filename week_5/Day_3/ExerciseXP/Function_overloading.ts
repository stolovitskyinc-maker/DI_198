// 1. Overload Signatures
function greet(): string;
function greet(name: string): string;

// 2. Implementation Signature (handles both cases with a default parameter)
function greet(name: string = "Guest"): string {
    return `Hello, ${name}!`;
}

// Test the function
console.log(greet());        // Output: Hello, Guest!
console.log(greet("Alice")); // Output: Hello, Alice!
