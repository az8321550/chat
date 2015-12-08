var socket = io()
var chat={
    list:[],
    messageList:[],
    id:"az8321550",
    username:"nobody",
    write:function(id){
        var temp=chat.messageList.slice(0);
        chat.messageList.length=0;
        for(var i=0;i<temp.length;i++){
            if(temp[i].id==id){
                writeChat(temp[i].content);
            }else{
                chat.messageList.push(temp[i]);
            }
        }
    },
    isFriend:function(id){
        for(var i=0;i<chat.list.length;i++){
            if(chat.list[i].id==id){
                return true;
            }
        }
        return false;
    },
    online:function(data){
        if(this.isFriend(data.id)){
            alert("你的好友"+data.username+"上线了")
        }
    },
    message:function(data){

        if($("#xubox_layer1").is(":visible")){
            if($(".layim_chatlist li[data-id="+data.id+"]").hasClass("layim_chatnow")){
                writeChat(data.content);
            }else{
                this.messageList.push(data)
                flash(data.id)
            }
        }else{
            this.messageList.push(data)
            flashNew()
        }

    }
}

flashIndex=0;
function flash(id){
    var ele=$(".layim_chatlist li[data-id="+id+"]")
    flashIndex++;
    ele.data("time","flashTime"+flashIndex);
    window["flashTime"+flashIndex] = setInterval(function(){
        ele.find("span").toggle()
    },500)
}
function flashNew(){
    clearInterval(window["flashTimeNew"]);
    window["flashTimeNew"] = setInterval(function(){
        $("#chat-new").find("i").toggle()
    },500)
    if($("#layim_min").is(":visible")){
        window["flashTimeMinNew"] = setInterval(function(){
            $("#layim_min").toggle()
        },500)
    }
}
function flashNewCancel(){
    $("#chat-new").find("i").show()
    $("#layim_min").hide()
    clearInterval(window["flashTimeNew"]);
    clearInterval(window["flashTimeMinNew"]);
}
function cancleFlash(ele){
    if(ele.data("time")){
        ele.find("span").show()
        clearInterval(window[ele.data("time")])
    }
}

$(document).on("click",".layim_chatlist li",function(){
    cancleFlash($(this));
    if(chat.messageList.length){
        chat.write($(this).data("id"))
    }
})

$(document).on("click","#chat-new,#layim_min",function(){
    if(chat.messageList.length){
        var id=chat.messageList[0].id
        $(".xxim_childnode[data-id="+id+"]").trigger("click");
        chat.write(id)
        flashNewCancel()
    }
})


socket.emit('online', {
    id:chat.id,
    username: chat.username
});

socket.on('online', function (data) {
    chat.online(data)
});


socket.on('message', function (data) {
    chat.message(data)
});


socket.on('left', function (data) {
    //下线了
    console.log(data)
});

