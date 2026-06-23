// npm-beginner/app.js

// Require the CommonJS version of the chalk library
const chalk = require('chalk');

console.log("🚀 --- Booting Chalk Color System --- \n");

// 1. Single basic foreground colors
console.log(chalk.blue("🔹 This is a cool blue status message."));
console.log(chalk.green("🟩 Success! The operation completed without errors."));
console.log(chalk.red("❌ Warning: High temperature levels detected."));

// 2. Combining font treatments (Bold / Underline) with colors
console.log("\n✨ --- Font Styling Combinations --- ");
console.log(chalk.bold.yellow("⚠️ ATTENTION: Please check your configuration data!"));
console.log(chalk.underline.magenta("🔗 Clickable lookalike link styling via underline."));

// 3. Mixing text colors with background highlight colors
console.log("\n🎨 --- Background Highlights --- ");
console.log(chalk.black.bgCyan(" 🟦 INFO ") + " Custom label text with a bright cyan badge background.");
console.log(chalk.white.bgRed.bold(" CRITICAL ERROR ") + " System failure requires immediate attention!");
