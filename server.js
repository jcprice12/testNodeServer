var http = require("http");

var GOOD_PORT = 7000;
var BAD_PORT = 7500;

function handleGoodRequest(request, response) {
    console.log(request);
    response.end("You're amazing");
}

function handleBadRequest(request, response) {
    console.log(request);
    response.end("You're the worst");
}

var serverGood = http.createServer(handleGoodRequest);
serverGood.listen(GOOD_PORT, function(){
    console.log("Good server listening on port: " + GOOD_PORT);
});

var serverBad = http.createServer(handleBadRequest);
serverBad.listen(BAD_PORT, function(){
    console.log("Bad server listening on port: " + BAD_PORT);
})