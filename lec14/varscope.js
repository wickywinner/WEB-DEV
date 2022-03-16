//2015 
//come with es6
console.log("line no 3>>",varname);
var varname;
varname=10;
console.log("line no 6>>",varname);
function fn(){
    console.log("line no 8>>",varname);
    varname=20;
    varname++;
    console.log("line no 11>>",varname);
    var varname;
    console.log("line no 13>>",varname);
}
fn();
console.log("line no 16>>",varname);

// ** var is function scope **