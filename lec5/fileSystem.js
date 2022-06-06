// fileSystem is use to create ,read,update and delete file
let fs = require("fs");
// create 
//fs.writeFileSync('xyz.txt', "way to create a file and write in it");
//read
// let read_data = fs.readFileSync('abc.js');
// console.log("readdata "+read_data);
//update
//fs.appendFileSync("xyz.txt","way to update in file");

//fs.mkdirSync("tempdir");
//fs.writeFileSync("tempdir/abc.txt","kuch v likh do wo abc.txt me chla jayega");
// let content = fs.readFileSync("tempdir/abc.txt","utf-8");
// console.log(content);
// let content = fs.readdirSync("tempdir");
// for(let i=0;i<content.length;i++)
// {
//     console.log("file",content[i],"isremoved");
//     //for remove content from directory
//     fs.unlinkSync("tempdir/"+content[i]);
// }

//remove folder
fs.rmdirSync("tempdir");



