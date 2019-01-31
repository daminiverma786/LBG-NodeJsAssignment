const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const http = require('http');
const fs = require('fs');
const readStringFunction = require("./fileWithString.js");
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Product of params in a get call
app.get('/product/:value1/:value2',(req, res) => {
  const value1=req.params.value1;
  const value2=req.params.value2;
  const responseString=`message: The product of two numbers is ${value1 * value2}`;
  res.send(responseString);
});

//Accepts a file content and writes them on the disk
app.get('/writeFileContentToDisk',function(req,res){
    let newFileContent = req.query.newFileContent;
    fs.writeFile('newfile.txt',newFileContent, (err) => {
        if(err){
          res.end(err);
         }
         else{
             res.statusCode = 200;
             res.end("File saved successfully. Check in newfile.txt");
         }
       });
});

//Restful Api that accepts a string as input and returns first non-repeating character in the string
app.get('/stringValue',function(req,res){
    let str = req.query.str;
     let output = readStringFunction.readString(str);
     res.send(output);
})

//Server listening on port 8080
server.listen(8080,function(){
    console.log("Server listening on port 8080");
});

module.exports = server;
