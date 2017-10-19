var httpServer = require('http-server');
var path = require('path');

var rootPath = path.join(__dirname);
var server = httpServer.createServer({ root: rootPath });
server.listen(8080, function(){
  console.log("Listening on port 8080...");
});
