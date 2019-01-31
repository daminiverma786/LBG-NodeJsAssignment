const request = require("request");
const fs = require("fs");
const cheerio = require('cheerio');

request.get("https://www.wiprodigital.com",(error,res,body) =>{
  if(error){
    return console.dir(error);
    console.log("network error");
  }
  console.log("request successful");
  $ = cheerio.load(body);
  let link = [];
  $('a').each(function(index,a){
    console.log((($(this).attr('href')).indexOf('wiprodigital.com') != -1));
    if (($(this).attr('href')).indexOf('wiprodigital.com') != -1){
      link.push($(this).attr('href')+"\n");
    }
  });

  $('img').each(function(index,a){
    link.push($(this).attr('src')+"\n");
  });
  // console.log(link);
  fs.writeFile('outputCrawler.txt',link, (err) => {
      if(err){
        console.log(err);
       }
       else{
           console.log('200');
           console.log("File saved successfully. Check in outPutCrawler.txt");
       }
     });
});
