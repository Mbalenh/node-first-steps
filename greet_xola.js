// CommonJS:
import chalk from "chalk"
import figlet from "figlet"
import greet from "./greet.js"
// const styledMessage = chalk.bgGreen.black(greet('Xola'));
// console.log(greet('Xola'))
figlet(greet('Xola'), function(err, data) {
    "use strict";
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        // return;
    }
  
    const styledMessage = chalk.bgGreen.black(data);
    console.log(styledMessage);
  });