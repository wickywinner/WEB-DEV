module.exports={
    organizekey: organizeFn
}
let fs= require("fs");
let path = require("path");

//Organize funtion
function organizeFn(dirPath) {
    // console.log("organize command implemnted for ", dirPath);
    // 1. input -> directory path given
    let destPath;
    if (dirPath == undefined) {
        destPath = process.cwd();// CWD is current working directory
        return;
    } else {
        let doesExist = fs.existsSync(dirPath);
        if (doesExist) {

            // 2. create -> organized_files -> directory
            destPath = path.join(dirPath, "organized_files"); // destPath is path of organized files
            // Now, check if directory is already present if not then we have to make it
            if (fs.existsSync(destPath) == false) {
                fs.mkdirSync(destPath);
            }
            // after this directory prepared

        } else {

            console.log("Kindly enter the correct path");
            return;
        }
    }
    organizeHelper(dirPath, destPath);
    // 3. identify categories of all the files present in that input directory  ->
}

function organizeHelper(src, dest) {
    // 3. identify categories of all the files present in that input directory  ->
    let childNames = fs.readdirSync(src); //it only gives name but we have to find path 
    // console.log(childNames);
    for (let i = 0; i < childNames.length; i++) {
        let childAddress = path.join(src, childNames[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
        if (isFile) {
            // console.log(childNames[i]);
            let category = getCategory(childNames[i]);
            console.log(childNames[i], "belongs to --> ", category);
            // 4. copy / cut  files to that organized directory inside of any of category folder 
            sendFiles(childAddress, dest, category);
        }
    }
}
function sendFiles(srcFilePath, dest, category) {
    // 
    module.exports={
        organizekey:organizeFn
    }
    let fs= require("fs");
    let path = require("path");
    
    let categoryPath = path.join(dest, category);
    if (fs.existsSync(categoryPath) == false) {
        fs.mkdirSync(categoryPath);
    }
    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(categoryPath, fileName);
    fs.copyFileSync(srcFilePath, destFilePath);
    fs.unlinkSync(srcFilePath);
    console.log(fileName, "copied to ", category);

}
function getCategory(name) {
    let ext = path.extname(name);
    ext = ext.slice(1);//remove dot(.)
    for (let type in types) {
        let cTypeArray = types[type];//current types
        for (let i = 0; i < cTypeArray.length; i++) {
            if (ext == cTypeArray[i]) {
                return type;
            }
        }
    }
    return "others";
}
