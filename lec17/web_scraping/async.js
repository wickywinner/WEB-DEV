//async programming :- A process operates independently of other process

const fs=require("fs");
console.log("before");
fs.readFile("f1.txt",cb);
console.log("after");
function cb(error,data){
    if(error){
        console.log("error :" ,error);
    }
    else{
        console.log("data :" +data);
    }
}
