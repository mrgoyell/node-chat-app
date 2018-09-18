let socket = io();

socket.on('connect',function(){
    console.log('connected to server');

    // socket.emit('createEmail',{
    //     to: 'jen@example.com',
    //     text: 'Hey. This is Andrew'
    // });

    // socket.emit('createMessage',{
    //     from:"Rishabhs",
    //     text:"It is what it is"
    // });

});

socket.on('sendMessage',function(mess){
    console.log("sendMessage",mess);
})

socket.on('disconnect',function(){
    console.log('disconnected from server');
});

socket.on('newEmail',function(email){
    console.log('New Email',email);
})