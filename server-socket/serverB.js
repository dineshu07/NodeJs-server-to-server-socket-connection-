var io = require('socket.io-client');
var socket = io.connect('http://localhost:6000', {reconnect: true});

socket.on('connect', function(socket) { 
  console.log('Connected! to server A');
 	
});
socket.on('news', function(data){

	console.log("from main server To client server");
});
socket.emit("Hello");
socket.emit("second");