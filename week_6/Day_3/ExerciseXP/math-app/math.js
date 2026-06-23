// math-app/math.js

/**
 * Adds two numbers together
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}

/**
 * Multiplies two numbers together
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function multiply(a, b) {
  return a * b;
}

// Export functions as an object using CommonJS syntax
module.exports = {
  add,
  multiply
};
