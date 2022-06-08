const puppeteer = require("puppeteer");
let page
console.log("Before");

const browserOpenpromise = puppeteer.launch({
    headless:false,
    slowMo : true,
    defaultViewport : null,
    args:["--start-maximized"]
});

browserOpenpromise.then(function (browser){
  //console.log("Browser Opened");
  //Currently open tab
  let pageArrpromise = browser.pages();
  return pageArrpromise;
}).then(function(browserpages){
    page = browserpages[0];
    let gotopromise = page.goto("https://www.google.com/");
    return gotopromise;
}).then(function(){
    //waiting for the element to be apear on the page 
    let elementwaitpromise = page.waitForSelector("input[type='text']",{visible:true});
    return elementwaitpromise;
}).then(function(){
    let keywillbesendpromise = page.type("input[type ='text']","pepcoding");
    //page.type() it type any element on the page-> selector
    return keywillbesendpromise;
}).then(function(){
    let enterwillbepressed = page.keyboard.press("Enter");
    //page.keyboard() is used type any keyword on the page
    return enterwillbepressed;
}).then(function(){
    let elementwaitpromise = page.waitForSelector("h3.LC20lb.DKV0Md",{visible:true});
    return elementwaitpromise;
}).then(function(){
    let keyswillsendpromise = page.click("h3.LC20lb.DKV0Md");
    return keyswillsendpromise;
}).catch(function(err){
    console.log(err);
})

console.log("after");
