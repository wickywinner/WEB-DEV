//path module is used for join directories and file in various operating system.

let fs = require("fs");
let path = require("path");


// //   *********here we make 5 temproray directories with readme file*******


// for(let i=1;i<5;i++)
// {
//     let pathtomake = `temp-${i}`;
//     fs.mkdirSync(pathtomake);
//     fs.writeFileSync(path.join(pathtomake,"readme.md"),`#readme for ${pathtomake}`);
// }

//  ************** find extenstion and directory name  ***********

let ext = path.extname(path.join(__dirname,"abc.js"));
console.log("ext_name->>",ext);
let name = path.basename(__dirname);
console.log("base_name-->>",name);