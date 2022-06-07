

let url = "https://github.com/topics"
const cheerio  = require("cheerio");
const request = require("request");
const getRepoPageHtml = require("./repoPaje");
request(url,cb)
function cb(err,response,html){
    if(err){
        console.log(err);
    }
    else if(response.statuscode == 404){
        console.log("page not found")
    }
    else{
        //console.log(html);
        getTopicLinks(html);
    }
}

function getTopicLinks(html){
    let $ = cheerio.load(html);
    let linkElemArray = $(".no-underline.d-flex.flex-column.flex-justify-center");
    //console.log(linkElemArray);
    for(let i=0;i<linkElemArray.length;i++)
    {
        let href = $(linkElemArray[i]).attr("href");
        //console.log(href);
        let topics = href.split("/").pop()
        let fullLink = `https://github.com/${href}`;
        getRepoPageHtml(fullLink,topics);
    }
}