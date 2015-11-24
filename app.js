var http = require('http');
//var appport = process.env.VCAP_APP_PORT || 3000;
var appport = 4000;
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World from Node.js app in Eclipse for Bluemix project\n');
}).listen(appport);
