const delayedPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("success");
  }, 4000); // 4000 milliseconds = 4 seconds
});

// --- TESTING THE PROMISE ---
console.log("Starting 4-second timer...");

delayedPromise
  .then((result) => {
    console.log(result); // Logs "success" exactly 4 seconds later
  });
