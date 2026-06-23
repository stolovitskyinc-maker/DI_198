// file-explorer/read-directory.js
const fs = require('fs');

// Use '.' to specify the current working directory
const targetDirectory = '.'; 

console.log(`📂 Scanning contents of directory: "${targetDirectory}"...\n`);

try {
  // Read the directory contents synchronously
  const files = fs.readdirSync(targetDirectory);

  console.log('📋 Items found inside this folder:');
  files.forEach((file, index) => {
    console.log(`   ${index + 1}. 📄 ${file}`);
  });
  
} catch (error) {
  console.error('❌ An error occurred while reading the directory:', error.message);
}
