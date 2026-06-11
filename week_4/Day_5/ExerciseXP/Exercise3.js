// 1. Create a promise that instantly resolves with a value of 3
const resolvedPromise = Promise.resolve(3);

// 2. Create a promise that instantly rejects with "Boo!"
const rejectedPromise = Promise.reject("Boo!");

// --- TESTING THE PROMISES ---

// Testing the resolved promise
resolvedPromise
  .then(value => console.log("Resolved with value:", value)); // Logs: Resolved with value: 3

// Testing the rejected promise
rejectedPromise
  .catch(error => console.log("Rejected with error:", error)); // Logs: Rejected with error: Boo!
