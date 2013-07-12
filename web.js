var express = require('express');
var fs = require('fs');
var localFile = 'index.html';
var getFileContent = function getFileConent(localFile) {
  var buffer =fs.readFileSync(localFile);
  return buffer.toString('utf-8');
    
};

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    response.send(getFileContent(localFile));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
