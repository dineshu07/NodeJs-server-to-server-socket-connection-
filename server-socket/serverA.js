var http = require('http'),
io = require('socket.io');
var socket = '';
// Create server & socket
var server = http.createServer(function(req, res)
{
  // Send HTML headers and message
  res.writeHead(404, {'Content-Type': 'text/html'});
  res.end('<h1>Aw, snap! 404</h1>');
});
server.listen(6000);
io = io.listen(server);

// Add a connect listener
io.sockets.on('connection', function(socket)
{
   socket = socket;
  console.log('SErverB connected.');
  socket.emit('news');
  
   socket.on('Hello', function(data){
    console.log("emiting From client to server ");
  });
   socket.on('second', function(data){
    console.log("second emit From client server ");
  });
  
});

   