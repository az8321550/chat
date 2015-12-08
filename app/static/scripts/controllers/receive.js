'use strict';

var ReceiveBonusCtrl=function($scope, $location, $http) {
    
	
	
   //领取奖金   
   window.receive = function(event,rid) {
	    var all=0;
	  	if(event.altKey&&rid==2){
   		//alert('altKey，开奖一开到底');
   		 all=1;
       	}
		
	    var win= dialog({width: '250px'});
       win.title('加载中...');
	   win.content("<center> 数据处理中。。。</center>");
	  win.showModal();

      $http.post('/lobby/app/kirinResource/activity/receive/'+rid+'/'+all).success(function(r) {
         win.title('成功');
		   if(r.status==1){
			
			   win.content("<center>"+r.data.message+"</center>");
		   }else{
			    win.content("<center>"+r.message+"</center>");
				
		   }
		
        });
   }
   
   
		
  }