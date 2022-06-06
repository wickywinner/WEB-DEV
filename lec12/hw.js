console.log("varname",varname);
var varname;
console.log("varname",varname);
varname = "Captain America";
console.log("varname",varname);
fn();
function fn(){
    console.log("Hello from fn");
}
fn();
// fncontainer(); // TypeError: fncontainer is not a function
 var fncontainer = function (){
    console.log("I am expression");
}
fncontainer();
