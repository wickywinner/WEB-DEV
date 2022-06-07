const fs= require("fs");

console.log("before");

let promise = fs.promises.readFile("info.txt");

promise.then(function(data){
    console.log(""+data);
})
promise.catch(function(err){
    console.log(err);
})

console.log("after")