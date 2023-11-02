import chalk from 'chalk';

const warning = chalk.hex('#FF6969');

console.log(chalk.blue('Hello world!'));
console.log(chalk.red('Hello world!'));
console.log(chalk.green.bgRed('Hello world!'));
console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

console.log(warning("I am warning"))
