function allTruthy(...args) {
  return args.every(arg => Boolean(arg));
}

// Alternative ultra-short version:
// const allTruthy = (...args) => args.every(Boolean);

// Test Examples
console.log(allTruthy(true, true, true));       // Output: true
console.log(allTruthy(true, false, true));      // Output: false
console.log(allTruthy(5, 4, 3, 2, 1, 0));       // Output: false
console.log(allTruthy("hello", [], {}, 42));    // Output: true
