//async programming :- A process operates independently of other process
`A-Start ------------------------------------------ A-End   
| B-Start -----------------------------------------|--- B-End   
|    |      C-Start ------------------- C-End      |      |   
|    |       |                           |         |      |
V    V       V                           V         V      V      
1 thread->|<-A-|<--B---|<-C-|-A-|-C-|--A--|-B-|--C-->|---A---->|--B-->|
` 
// Above is an example of async programming that A,B and C all three operates independently of each others
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
