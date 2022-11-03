const server = require('http').createServer();

const io = require('socket.io')(server, {
    transports: ['websocket', 'polling']
});

const { rooms } = require('./data/rooms');

io.on("connection", client => {
    
    console.log('listening socketio')
    
    io.emit("rooms", rooms);

});

server.listen(8000);