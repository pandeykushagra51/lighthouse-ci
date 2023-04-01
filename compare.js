let results = require('./.lighthouseci/assertion-results.json');
const url = require('url');

console.log(results);

const pages = ['/', '/about-us', '/faq'];
const hostList = {
    qa:'qa.gripinvest.in',
    preProd:'preprod.gripinvest.in',
    // localhost:'localhost:3000',
}


const qa = {};
const preProd = {};
const localhost = {};

// interface PageData{
//     name:string,
//     expected:number,
//     actual:number,
//     values:number [],
//     opertor:string,
//     passed: boolean,
//     auditProperty:string,
//     auditId: string,
//     level: string,
//     url: string,
// }

// let data:PageData;



for(let x of results){
    // let data = x as any as PageData
    let urlData = url.parse(x.url);
    let path=urlData.path;
    console.log(urlData);

    if(urlData.host==hostList.qa){
        qa[path] = x.actual;
    }
    else if(urlData.host==hostList.preProd){
        preProd[path] = x.actual;
    }
    else{
        localhost[path] = x.actual;
    }

}

function isValidScore(qaScore, preProdScore, localhostScore){

    console.log(qaScore,preProdScore,localhostScore);
    if(localhostScore<qaScore*0.9||localhost<preProdScore*0.9)
    return false;

    return true;

}

for(let page of pages){
    console.log(page)
    if(!isValidScore(qa[page],preProd[page],localhost[page])){
        console.log(`Lighthouse validation falied for page ${page}`);
        console.log(`qaScore:${qa[page]}`);
        console.log(`preProdScore:${preProd[page]}`);
        console.log(`localhostScore:${localhost[page]}`);
        process.exit(1);
    }else{
        console.log(`Lighthouse validation score for page ${page}`);
        console.log(`qaScore:${qa[page]}`);
        console.log(`preProdScore:${preProd[page]}`);
        console.log(`localhostScore:${localhost[page]}`);
    }
}

console.log('Lighthouse Validation Successfull ');
process.exit(1);
// process.exit(1);
