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
    socket.emit('newEmail',{
        from: 'mike@example.com',
        text: 'Hey. What is going on.',
        createAt: 123
    });
    socket.emit('sendMessage',{
        from: "Rishabh",
        text: "Random stuff",
        createAt: 456
    });
    socket.on('createMessage',(mess)=>{
        mess.createAt = 765;
        console.log('createMessage',mess);
    })
    socket.on('createEmail',(newEmail)=>{
        console.log('createEmail',newEmail);
    })
    socket.on('disconnect',()=>{
        console.log('disconnected from client');
    });
});

server.listen(port,()=>{
    console.log('Server is up on port'+port);
});