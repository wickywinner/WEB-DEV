const request = require("request");
const cheerio = require("cheerio");
const getAllMatchesLinkobj = require("./Allmatch");

//step :-1
const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";
request(url,cb);
function cb(err,response,html)
{
    if(err){
        console.log(err);
    }
    else{
        //console.log(html);
        extracthtml(html);
    }
}

function extracthtml(html){
let $ = cheerio.load(html);
let anchorEle = $("a[data-hover='View All Results']");
let link = anchorEle.attr("href");
let fulllink = "https://www.espncricinfo.com"+link;
//console.log(fulllink);
getAllMatchesLinkobj.gAllmatches(fulllink);
}




