const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard";
const request = require("request");
const cheerio = require("cheerio");
console.log("Before");
request(url, cb);
function cb(err, response, html) {
    if (err) {
        console.log(err);
    } else {
        extractHTML(html);
    }
}
function extractHTML(html) {
    let $ = cheerio.load(html);
    // full page search
    let teamsArr = $(".match-info.match-info-MATCH .team");
    let wTeamName;
    for (let i = 0; i < teamsArr.length; i++) {
        let hasclass = $(teamsArr[i]).hasClass("team-gray");
        if (hasclass == false) {
            // find 
            // team who wons have not "team-gray" class
            let teamNameElem = $(teamsArr[i]).find(".name");
            wTeamName = teamNameElem.text().trim();
        }
    }
    // segregate 
    // shorter form html
    let innigsArr = $(".card.content-block.match-scorecard-table>.Collapsible");
    // let htmlStr = "";
    for (let i = 0; i < innigsArr.length; i++) {
        // let cHtml = $(innigsArr[i]).html();
        // htmlStr += cHtml;
        // team names
        let teamNameElem = $(innigsArr[i]).find(".header-title.label");
        let teamName = teamNameElem.text();
        teamName = teamName.split("INNINGS")[0];
        teamName = teamName.trim();
        //table batsmen
        let tableElem = $(innigsArr[i]).find(".table.batsman");
        let allBatsman = $(tableElem).find("tr");
        for (let j = 0; j < allBatsman.length; j++) 
        {
            let allColsOfPlayer = $(allBatsman[j]).find("td");
            let Is_batsmancol = $(allColsOfPlayer[0]).hasClass("batsman-cell");
            if(Is_batsmancol ==true){
                let href = $(allColsOfPlayer[0]).find("a").attr("href");
                let name = $(allColsOfPlayer[0]).text();
                let fulllink = "https://www.espncricinfo.com"+href;
                //console.log(fulllink);
                getBirthdayPage(fulllink,name,teamName);
            }
        }

    }

}

function getBirthdayPage(url,name,teamName)
{
    request(url,cb);
    function cb(err,response,html){
        if(err){
            console.log(err);
        }
        else{
            extractbirthday(html,teamName);
        }
    }
}

function extractbirthday(html,teamName)
{
let $ =cheerio.load(html);
let playerinfoarr=$(".player_overview-grid .player-card-description.gray-900");
let playerName = $(playerinfoarr[0]).text();
let DOB = $(playerinfoarr[1]).text();
console.log(`${playerName} plays for ${teamName} was born on ${DOB}`);
}
