var http = require('http');

var port = 8081;

var server = http.createServer();
server.on('request', function(request, response) {
    response.writeHead(200);
    var request_params = { "method":request.method, "url": request.url, "headers": request.headers};
    console.log(request.method + ":" + request.url);
    response.write(JSON.stringify(request_params, null, 4));
    response.end();
});

server.listen(port);
console.log('Browse to http://127.0.0.1:' + port);
