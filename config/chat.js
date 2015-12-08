
var online=[];

module.exports=function chat(io){
    io.on('connection', function(socket){
        console.log('connection')

        socket.on('online', function(data){

            online.push({
                id:data.id,
                username:data.username
            })
            socket.user={
                id:data.id,
                username:data.username
            }

            socket.broadcast.emit('online', {
                id:data.id,
                username:data.username
            });
        });

        socket.on('message', function(data){
            console.log(data)

            socket.broadcast.emit('message', data);
        });

        socket.on('disconnect', function () {
            socket.broadcast.emit('left', socket.user);
        });

    });
}