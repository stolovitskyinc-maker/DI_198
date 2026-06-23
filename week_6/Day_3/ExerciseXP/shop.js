// shop.js

// Import the products array from products.js
const products = require('./products.js');

/**
 * Searches for a product by name (case-insensitive)
 * @param {string} productName 
 */
function findProductByName(productName) {
  const foundProduct = products.find(
    product => product.name.toLowerCase() === productName.toLowerCase()
  );

  if (foundProduct) {
    console.log(`✨ Product Found:`);
    console.log(`   Name:     ${foundProduct.name}`);
    console.log(`   Price:    $${foundProduct.price}`);
    console.log(`   Category: ${foundProduct.category}\n`);
  } else {
    console.log(`❌ Product "${productName}" not found.\n`);
  }
}

// Test calls with different product names
findProductByName("Laptop");
findProductByName("Running Shoes");
findProductByName("Smartphone"); // Test missing product
