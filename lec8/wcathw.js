


let fs = require("fs");
// input
let inputArr = process.argv.slice(2);
// console.log(inputArr);
// options
let optionsArr = [];
let filesArr = [];
// identify -> options
for (let i = 0; i < inputArr.length; i++) {
    let firstChar = inputArr[i].charAt(0);
    if (firstChar == "-") {
        optionsArr.push(inputArr[i]);
    } else {
        filesArr.push(inputArr[i]);

    }


}
// options check
let isBothPresent = optionsArr.includes("-b") && optionsArr.includes("-n");
if (isBothPresent==true) {
    console.log("either enter -n or -b option");
    return;
}
// existence
for (let i = 0; i < filesArr.length; i++) {
    //    /buffer
    let isPresent = fs.existsSync(filesArr[i]);
    if (isPresent == false) {
        console.log(`file ${filesArr[i]} is not present`);
        return;
    }
}
// read
let content = "";
for (let i = 0; i < filesArr.length; i++) {
    //    /buffer
    let bufferContent = fs.readFileSync(filesArr[i]);
    content += bufferContent + "\r\n";
}
// console.log(content)
let contentArr = content.split("\r\n");
// console.log(contentArr);
// -s 
let isSPreset = optionsArr.includes("-s");
if (isSPreset == true) {
    
    let ans = removeline(contentArr);
    console.log(ans.join("\r\n"));
}

let isNPresent = optionsArr.includes("-n");
if (isNPresent == true) {
    let res=addNumber(contentArr)
    console.log(res);
}

let isBPresent = optionsArr.includes("-b");
if (isBPresent == true) {
    let ans = removeline(contentArr);
    let res=addNumber(ans);
    console.log(res);
}

function removeline(contentArr){
    for(let i=1;i<contentArr.length;i++)
        {
            if(contentArr[i]=="" && contentArr[i-1]==""){
                contentArr[i]=null;
            }
            else if(contentArr[i]=="" && contentArr[i-1]== null){
                contentArr[i]=null;
            }
        }
        let temparr=[]
        for(let i=0;i<contentArr.length;i++)
        {
            if(contentArr[i]!=null)
            {
                temparr.push(contentArr[i])
            }
        }
        contentArr=temparr;
        return contentArr
}

function addNumber(contentArr){
    let res="";
    for(let i=0;i<contentArr.length;i++)
    {
        res= res+`${i+1} ${contentArr[i]}`+"\r\n";
    }
    return res;

}
