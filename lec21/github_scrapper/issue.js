const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const pdfkit = require("pdfkit")


function getIssuePageHtml(url,topics,RepoName){
    request(url,cb);
    function cb(err,response,html){
        if(err){
            console.log(err);
        }
        else if(response.statuscode == 404){
            console.log("page not found");
        }
        else{
            //console.log(html)
            getIssues(html);
        }
    }

    function getIssues(html){
        let $ = cheerio.load(html);
        let issueEleArr = $(".Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title");
        let arr =[]
        for(let i=0;i<issueEleArr.length;i++)
        {
            let link = $(issueEleArr[i]).attr("href");
            //console.log(link);
            arr.push(link);
        }
        //console.log(topics,"      ",arr)
        let folderPath = path.join(__dirname,topics);
        dirCreater(folderPath);
        let filePath = path.join(folderPath,RepoName+".pdf");
        let text = JSON.stringify(arr);
        let pdfDoc = new pdfkit();
        pdfDoc.pipe(fs.createWriteStream(filePath));
        pdfDoc.text(text);
        pdfDoc.end();
    }
}
module.exports = getIssuePageHtml;

function dirCreater(folderPath){
    if(fs.existsSync(folderPath) ==false){
        fs.mkdirSync(folderPath);
    }
}