var chalk = require('chalk');
var greet = require('./greet');
const styledMessage = chalk.bgGreen.black(greet('Xola'));
// console.log(greet('Xola'))
console.log(styledMessage)