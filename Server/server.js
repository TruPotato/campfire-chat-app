require('dotenv').config()

const express = require('express');
const app = express();
var http = require("http").Server(app)

const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile('Client/index.html', { root: __dirname + "/../" });
});

io.on('connection', function(socket){
    console.log('user connected');
    socket.on('chat message', function(msg){
        io.emit('chat message', msg)
    });
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});

http.listen(process.env.PORT, function(){
    console.log(`listening on http://localhost:${process.env.PORT}`);
});