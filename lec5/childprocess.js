//child_process is a module use to execute different task such as opening etc..
let cp = require("child_process");
console.log("Trying to open calculator");
cp.execSync("calc");
console.log("Trying to open VS CODE");
cp.execSync("code");
console.log("Trying to open My portfolio in chrome");
cp.execSync("start chrome http://wicky.pythonanywhere.com/");

//now read output from different file
let op=cp.execSync("node abc.js");
console.log("output"+op);
