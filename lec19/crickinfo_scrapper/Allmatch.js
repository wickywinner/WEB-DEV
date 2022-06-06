const request = require("request");
const cheerio = require("cheerio");
const scorecardobj = require("./scorecard");

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
        scorecardobj.ps(finallink);
    }
}

module.exports = {
    gAllmatches : getAllMatchesLink
}