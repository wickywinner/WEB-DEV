console.log("line no 1>>",varname);
var varname;
varname=10;
console.log("line no 4>>",varname);
function fn(){
    console.log("line no 6>>",varname);
    var varname=20;
    console.log("line no 8>>",varname);
    function b(){
        console.log("line no 10",varname);
        var varname=30;
    }
    b();
}
fn();

// jab bhi javascript me function ke andr globl variable fir se deifine kiya gya ho to wo hmesa use hi dekhega
// or agr nhi kiya gya ho to jha se function call ki gyi hai wha se variable ki value receive krega


