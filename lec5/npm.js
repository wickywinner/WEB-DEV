// cli-color is a module used to provide different text color for command line text
// figlet  is node module used to HYBRID test style in terminal

let figlet = require("figlet");
let clicolor =require("cli-color");
console.log(clicolor.red(figlet.textSync("WICKY WINNER")));