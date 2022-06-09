const puppeteer = require("puppeteer");
const codeObj = require("./code");
const loginlink = "https://www.hackerrank.com/auth/login";
const email= "billey.14@yadaptorym.com";
const password = "mehu@kon";

let openbrowser = puppeteer.launch({
    headless:false,
    defaultViewport:null,
    args:['--start-maximized']
});

let page

openbrowser.then(function(browserObj){
    let browseropenpromise = browserObj.newPage();
    return browseropenpromise;
}).then(function(newTab){
    page = newTab
    let hackerrankopenpromise = newTab.goto(loginlink);
    return hackerrankopenpromise;
}).then(function(){
    let emialentered = page.type("input[type='text']",email,{delay:50});
    return emialentered;

}).then(function(){
    let passwordentered = page.type("input[type='password']",password,{delay:50});
    return passwordentered;

}).then(function(){
    let loginbuttonclicked = page.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
    return loginbuttonclicked;
}).then(function(){
    let clickonAlgopromise = waitAndClick('.topic-card a[data-attr1="algorithms"]',page);
    return clickonAlgopromise;
}).then(function(){
    let clickonwarmuppromise = waitAndClick('input[value="warmup"]',page)
    return clickonwarmuppromise;
}).then(function(){
    let waitfor3sec = page.waitFor(3000);
    return waitfor3sec;
}).then(function(){
    let allchallengepromise = page.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled',{delay:50});
    return allchallengepromise;
}).then(function(questionArr){
    console.log('no of ques:',questionArr.length);
    let questionwillbesolved = questionSolver(page,questionArr[0],codeObj.answers[0])
    return questionwillbesolved


})


function waitAndClick(selector,cPage){
return new Promise(function(resolve,reject){
    let waitForModelPromise = cPage.waitForSelector(selector);
    waitForModelPromise.then(function(){
        let clickModal = cPage.click(selector);
        return clickModal
    }).then(function(){
        resolve()
    }).catch(function(err){
        reject()
    })
})
}

function questionSolver(page,question,answer){
    return new Promise(function(resolve,reject){
        let questionwillbeclicked = question.click();
        questionwillbeclicked.then(function(){
            let editorInFocusPromise = waitAndClick('.hr-monaco-editor-parent',page);
            return editorInFocusPromise;
        }).then(function(){
            return waitAndClick('.checkbox-input',page);
        }).then(function(){
            return page.waitForSelector('.input.text-area.custominput.auto-width',page);
        }).then(function(){
            return page.type('.input.text-area.custominput.auto-width',answer,{delay:10})
        }).then(function(){
            let ctrlspressed = page.keyboard.down('Control');
            return ctrlspressed;
        }).then(function(){
            let Aispressed = page.keyboard.press('A',{delay:100})
            return Aispressed
        }).then(function(){
            let Xispressed = page.keyboard.press('X',{delay:100})
            return Xispressed;
        }).then(function(){
            let ctrlisunpredded = page.keyboard.up('Control')
            return ctrlisunpredded;
        }).then(function(){
            let maineditorinfocus =waitAndClick('.hr-monaco-editor-parent',page);
            return maineditorinfocus;
        }).then(function(){
            let ctrlspressed = page.keyboard.down('Control');
            return ctrlspressed;
        }).then(function(){
            let Aispressed = page.keyboard.press('A',{delay:100})
            return Aispressed
        }).then(function(){
            let Vispressed = page.keyboard.press('V',{delay:100})
            return Vispressed;
        }).then(function(){
            let sdubmitpresspromise = page.click('.ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled',{delay:10})
            return sdubmitpresspromise;
        }).then(function(){
            resolve()
        }).then(function(err){
            reject();
        })
    })
}