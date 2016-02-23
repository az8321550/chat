var online=[];
module.exports=function chat(io,app){
    io.on('connection', function(socket){

        socket.on('online', function(data){

            online.push({
                socketId:socket.id,
                username:data.username,
                socket:socket
            })

            socket.broadcast.emit('online', {
                username:data.username
            });
        });

        socket.on('message', function(data){

            //如果用户在线
            var tempSocket=findOnline(data.id);
            if(tempSocket){
                tempSocket.socket.emit('message', data);
            }else{
                //存入离线消息
                //todo
            }


        });

        socket.on('disconnect', function () {
            var result=findOnlineById(socket.id)
            if(result){
                socket.broadcast.emit('offline', online[result.index].username);
                online.splice(result.index,1);
            }
        });

    });

    function findOnline(username){
        for(var i=0;i<online.length;i++){
            if(online[i].username==username){
                return online[i];
            }
        }
        return false;
    }

    function findOnlineById(id){
        for(var i=0;i<online.length;i++){
            if(online[i].socketId==id){
                return {
                    index:i
                };
            }
        }
        return false;
    }

}