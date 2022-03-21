let request = require("request");
let cheerio = require("cheerio");
const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary";
console.log("Before");
request(url,cb);
function cb(error,response,html){
    if(error){
        console.log(error);
    }
    else{
        extractHTML(html);
    }
}
function extractHTML(html){
    let $=cheerio.load(html);
    let eleArr= $(".d-flex.match-comment-padder.align-items-center .match-comment-long-text");//$(".d-flex match-comment-padder align-items-center .match-comment-long-text");

    let text = $(eleArr[0]).text();
    let htmldata = $(eleArr[0]).html();

    console.log("text data", text);
    console.log("html data", htmldata);
}
console.log("after");