const server = require('http').createServer();

const io = require('socket.io')(server, {
    transports: ['websocket', 'polling']
});

let { rooms } = require('./data/rooms');

io.on("connection", client => {
        
    io.emit("rooms", rooms);
    
    client.on("joinRoom", roomId => {
        
        client.join(roomId);

        const index = rooms.findIndex(room => room.id === roomId);
        rooms[index].users.push(client.id);        
        
        io.emit("roomInfo", rooms[index]);
        io.emit("rooms", rooms);
    });

    client.on("disconnecting", () => {        
        console.log(rooms)
        io.emit("rooms", rooms);
    } )

});

server.listen(8000);