const request = require("request");
const cheerio = require("cheerio");

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
getAllMatchesLink(fulllink);
}

//step :-2
function getAllMatchesLink(url)
{
    request(url,function (err,response,html)
    {
        if(err){
            console.log(err);
        }
        else{
            //console.log(html);
            extractAllLink(html);
        }
    }
    )
}

function extractAllLink(html)
{
    const $ = cheerio.load(html);
    let scorecardele = $("a[data-hover='Scorecard']");
    for(let j=0;j<scorecardele.length;j++){
        let link = $(scorecardele[j]).attr("href");
        let finallink = "https://www.espncricinfo.com"+link;
        console.log(finallink);
    }
}

