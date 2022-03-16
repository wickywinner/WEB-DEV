#!/usr/bin/env node
let inputArr = process.argv.slice(2);
let fs= require("fs");
let path = require("path");
let helpobj= require("./commands/help");
let treeobj = require("./commands/tree");
let organizeobj = require("./commands/organize");

types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    image:['jpg','jpeg']
}
// console.log(inputArr);
// node main.js tree "directoryPath"
// node main.js organize "directoryPath"
// node main.js help
let command = inputArr[0];
//implement switch case for differnt operations..

switch(command){
    case "tree":
        treeobj.treekey(inputArr[1]);
        break;
    case "organize":
        organizeobj.organizekey(inputArr[1]);
        break;
    case "help":
        helpobj.helpkey();
        break;
    default :
        console.log("please provide correct command");
        break;
}