chat= $.extend(chat,{
    friends:[],
    messageList:[],
    write:function(id){
        var temp=chat.messageList.slice(0);
        chat.messageList.length=0;
        for(var i=0;i<temp.length;i++){
            if(temp[i].from==id){
                writeChat(temp[i].content);
            }else{
                chat.messageList.push(temp[i]);
            }
        }
    },
    isFriend:function(id){
        console.log(chat.friends)
        for(var i=0;i<chat.friends.length;i++){
            if(chat.friends[i].id==id){
                return true;
            }
        }
        return false;
    },
    online:function(data){
        $(".xxim_online_i[data-id="+data.username+"]").addClass("active")

    },
    offline:function(data){
        $(".xxim_online_i[data-id="+data+"]").removeClass("active")

    },
    message:function(data){

        if($("#xubox_layer1").is(":visible")){
            if($(".layim_chatlist li[data-id="+data.from+"]").hasClass("layim_chatnow")){
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
})

var socket = io()

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
        var id=chat.messageList[0].from;
        $(".xxim_childnode[data-id="+id+"]").trigger("click");
        chat.write(id)
        flashNewCancel()
    }
})

//表情
$(document).on("click",".layim_addface",function(){

})

//图片
$(document).on("click","#layim_file",function(){
    $("#layim_file_up").click()
})


socket.emit('online', {
    id:chat.id,
    username: chat.username
});

socket.on('online', function (data) {
    if(chat.isFriend(data.username)){
        chat.online(data)
    }
});


socket.on('message', function (data) {
    if(data.id==chat.username){
        chat.message(data)
    }
});


socket.on('offline', function (data) {
    if(chat.isFriend(data)){
        chat.offline(data)
    }
});

