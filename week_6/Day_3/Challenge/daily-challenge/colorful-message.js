const chalk = require('chalk');

function displayColorfulMessage() {
    const message = chalk.blue.bold('This is a vibrant blue message using Chalk!');
    console.log(message);
}

module.exports = displayColorfulMessage;
