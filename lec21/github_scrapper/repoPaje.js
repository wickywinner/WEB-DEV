const request = require("request");
const cheerio = require("cheerio");
const getIssuePageHtml = require("./issue");
function getRepoPageHtml(url,topics){
    request(url,cb);
    function cb(err,response,html){
        if(err){
            console.log(err)
        }
        else if(response.statuscode == 404){
            console.log("page not found")
        }
        else{
            //console.log(html)
            getReposLink(html);
        }
    }

    function getReposLink(html){
        let $ = cheerio.load(html);
        let headingArr= $(".f3.color-fg-muted.text-normal.lh-condensed")
        console.log(topics);
        for(let i=0;i<8;i++)
        {
            let twoAnchor = $(headingArr[i]).find("a");
            let link=$(twoAnchor[1]).attr("href");
            //console.log(link);
            let fullLink = `https://github.com${link}/issues`;
            //console.log(fullLink);
            let RepoName = link.split("/").pop()
            getIssuePageHtml(fullLink,topics,RepoName);

        }
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

    }
}
module.exports = getRepoPageHtml;