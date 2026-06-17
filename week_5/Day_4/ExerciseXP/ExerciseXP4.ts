class Calculator {
    // 1. Static Method for Addition
    public static add(a: number, b: number): number {
        return a + b;
    }

    // 2. Static Method for Subtraction
    public static subtract(a: number, b: number): number {
        return a - b;
    }
}

// 3. Calling Static Methods Directly (No Instance Created)
const sum = Calculator.add(5, 3);
const difference = Calculator.subtract(10, 4);

console.log(sum);        // Output: 8
console.log(difference); // Output: 6
