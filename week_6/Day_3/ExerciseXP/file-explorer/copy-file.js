// file-explorer/copy-file.js
const fs = require('fs');

console.log('🔄 Initializing copy operation...');

try {
  // 1. Read the contents of the source file
  // 'utf8' ensures the file is read as readable text instead of raw binary data
  const content = fs.readFileSync('source.txt', 'utf8');
  console.log('📖 Successfully read "source.txt"');

  // 2. Write the retrieved content into the destination file
  fs.writeFileSync('destination.txt', content, 'utf8');
  console.log('💾 Successfully wrote to "destination.txt"');

} catch (error) {
  console.error('❌ An error occurred during the copy process:', error.message);
}
