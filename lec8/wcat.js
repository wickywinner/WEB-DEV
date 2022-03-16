let fs = require("fs");
let path = require("path");

// 1. input
let input = process.argv.slice(2);

// 2. making two seperate array one for command nd other for files
let command=[];
let file =[];

// 3.seperate input array in two abvove two arrays
for(let i=0;i<input.length;i++)
{
    let ch=input[i].charAt(0);
    if(ch =="-")
    {
        command.push(input[i]);
    }
    else{
        file.push(input[i]);
    }
}
//console.log(command,file);
if (command.includes("-n","-b")){
    console.log("please input right command");
    return;
}

let content="";
for(let i=0;i<file.length;i++)
{   let fileName = path.basename(file[i]);
    let destFilePath = path.join(__dirname, fileName);
    if(fs.existsSync(destFilePath) == true){
    let contentarr = fs.readFileSync(file[i],"utf-8");
    console.log(contentarr);
    content=contentarr+"\r\n";
    }
    else{
        console.log("please provie correct file name");
        return;
    }
}
//console.log(content);
let contentArr = content.split("\r\n")

// here both task 1  and task 2 completed

for(let i=0;i<command.length;i++)
{
    if(command[i].charAt(1)=="s"){
        let ans = removeline(contentArr);
        console.log(ans.join("\r\n"));
    
    }

    else if(command[i].charAt(1)=="n"){
        let res=addNumber(contentArr)
        console.log(res);

    }
    else if(command[i].charAt(1)=="b"){
        let ans = removeline(contentArr);
        let res=addNumber(ans);
        console.log(res);
        
    }
    else{
        console.log("plaese eanter vaild commands");
    }
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
