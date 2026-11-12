const chalk = require('chalk');
const { getFormattedDate } = require('./dateFormatter');

// Using chalk for colorful output
console.log(chalk.blue('=== Welcome to NPM Practice App ==='));

// Using local module which uses dayjs
const currentDate = getFormattedDate();
console.log(chalk.green(`Current Date: ${currentDate}`));

console.log(chalk.yellow('Successfully used dayjs and chalk packages!'));