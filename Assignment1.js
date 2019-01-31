const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3001;  // Needs a default Value of 3001 as per assignment

// Read Content from Specifed File Path
function readFileContent(filePath, callback) {
  fs.readFile(filePath, function(err, fileContent) {
    if(err) {
      throw err; process.exit(-1);
    }
    callback(fileContent.toString());
  });
}

// Return Response to the server
function returnResponse(responseObject, dataToBeReturned) {
  responseObject.writeHead(200, {'Content-Type': 'text/html'});
  responseObject.write(dataToBeReturned);
  return responseObject.end();
}

// Create a WebServer;
http.createServer((req, res) => {
  readFileContent('File.html', returnResponse.bind(null, res));
}).listen(port);
