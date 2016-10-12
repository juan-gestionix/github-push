var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
var port = process.env.PORT || 1337;
app.set('port', port);
app.set('views', __dirname, '/views');
app.set('view engine', 'html');
app.use(cookieParser());
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require("fs");



app.get('/', function (req, res) {
    //send the index.html file for all requests
    res.sendfile(__dirname + '/views/index.html');
});

http.listen(app.get('port'), function () {
    console.log('listening on *:' + app.get('port') + '');
});
//for testing, we're just going to send data to the client every second
setInterval(function () {
    /*
      our message we want to send to the client: in this case it's just a random
      number that we generate on the server
    */
    var msg = Math.random();
    io.emit('message', msg);
    console.log(msg);

}, 1000);



//var express = require('express');
//var app = express();
//var http = require('http');//.Server(app);
//var io = require('socket.io')(http);
//var port = process.env.PORT || 1337;
//var fs = require("fs");

//app.set('port', port);
//app.set('views', __dirname, '/views');
//app.set('view engine', 'html');

//app.get('/', function (req, res) {
//    //send the index.html file for all requests
//    res.sendfile(__dirname + '/views/index.html');
//});

//http.listen(app.get('port'), function () {
//    console.log('listening on *:' + app.get('port') + '');
//});
////for testing, we're just going to send data to the client every second
//setInterval(function () {
//    /*
//      our message we want to send to the client: in this case it's just a random
//      number that we generate on the server
//    */
//    var msg = Math.random();
//    io.emit('message', msg);
//    console.log(msg);

//}, 1000);




//var http = require('http');
//var port = process.env.port || 1337;
//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//}).listen(port);
