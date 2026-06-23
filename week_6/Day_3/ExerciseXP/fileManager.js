// fileManager.js
const fs = require('fs');

/**
 * Reads content from a file synchronously
 * @param {string} filePath 
 * @returns {string}
 */
function readFile(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    console.error(`❌ Error reading file at ${filePath}:`, error.message);
    throw error;
  }
}

/**
 * Writes content to a file synchronously
 * @param {string} filePath 
 * @param {string} content 
 */
function writeFile(filePath, content) {
  try {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`💾 Successfully wrote to: ${filePath}`);
  } catch (error) {
    console.error(`❌ Error writing to file at ${filePath}:`, error.message);
    throw error;
  }
}

// Export named functions using CommonJS syntax
module.exports = {
  readFile,
  writeFile
};
