// console.log('Apidevice APIs Shanghai');

// Accessing point and store port
var http = require('http');
var port = 8000;

// requestHandler.

var requestHandler = function(request, response){
    console.log('Request came from: ' + request.url);
    response.end('apDevice, Shanghai!');
}

var server = http.createServer(requestHandler);

// Requesting on the port
server.listen(port, function(){
    console.log('Listening on port ' + port);
});
