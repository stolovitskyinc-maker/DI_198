function compareToTen(num) {
  return new Promise((resolve, reject) => {
    if (num <= 10) {
      resolve(`${num} is less than or equal to 10. Promise resolved!`);
    } else {
      reject(`${num} is greater than 10. Promise rejected!`);
    }
  });
}

// --- TEST CASES ---

// In the example, the promise should reject
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error)); // Output: "15 is greater than 10. Promise rejected!"

// In the example, the promise should resolve
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error)); // Output: "8 is less than or equal to 10. Promise resolved!"
