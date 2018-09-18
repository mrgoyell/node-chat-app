const path = require('path');
const pubPath = path.join(__dirname,'../public');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const port = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app);
var io = socketIO(server);
app.use(express.static(pubPath));
// app.get('/',()=>{
//     app.render()
// })
io.on('connection',(socket)=>{
    console.log('New user connected');
    socket.on('disconnect',()=>{
        console.log('disconnected from client');
    });
});

server.listen(port,()=>{
    console.log('Server is up on port'+port);
});