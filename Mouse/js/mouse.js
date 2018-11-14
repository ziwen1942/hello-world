
			//设定全局变量，记录是否打中老鼠
			var beat = 0;
  			//总游戏时间
  			var time = 20;
  			//倒计时时间
  			var djsTime = 3;
			/*点击游戏说明按钮*/	
			intervalid = null,        //指定setInterval()的变量
   			timeId = null;         //指定setTimeout()的变量	
   			timeId2 = null;		//
			function helpMessage(){

				document.getElementById("start").style.display="none";
				document.getElementById("message").style.display="none";
				document.getElementById("exit").style.display="none";
				document.getElementById("content").style.background="url(img/help.png) no-repeat";
				document.getElementById("back").style.display="block";
				
			}
			//返回游戏主界面
			function backMenu(){
				document.getElementById("endbtn").style.display = "none";
				document.getElementById("content").style.cursor="none";
				document.getElementById("content").style.display="block";

				document.getElementById("endPhoto").style.display="none";
				document.getElementById("start").style.display="inline-block";
				document.getElementById("message").style.display="inline-block";
				document.getElementById("exit").style.display="inline-block";
				document.getElementById("content").style.background="url(images/bg_canvas.png)";
				document.getElementById("back").style.display="none";
				
			}
			//倒计时结束显示
			function GameOver(){
				document.getElementById("remtime").style.display="none"
				document.getElementById("score").style.display="none"
				document.getElementById("endPhoto").style.cursor = "none";
				document.getElementById("back2").style.cursor = "none";
				document.getElementById("restart").style.cursor = "none";
				document.getElementById("area").style.display = "none";
				document.getElementById("point").innerText = beat;
				document.getElementById("content").style.cursor="auto";
    			clearTimeout(timeId);//clearTime()方法返回setTimeout()的id	
    			clearTimeout(timeId2);
    			clearInterval(intervalid);
				document.getElementById("endPhoto").style.display="block"
				document.getElementById("content").style.display="none";

				for (var i=0;i<=8;i++) {
					document.getElementById("m"+i).style.marginTop="100px";
				}
				
				
				
			}
			
			//开始游戏
			function startGame(){
				document.getElementById("content").style.cursor="none";
				document.getElementById("area").style.display = "block";
				
				document.getElementById("endbtn").style.display = "block";
				
				time = 20;
            	document.form1.score.value = 0;
            	beat = 0;
				timeShow();
				document.getElementById("content").style.display="block";
				document.getElementById("endPhoto").style.display="none";
				document.getElementById("remtime").style.display="block"
				document.getElementById("score").style.display="block"
				
				document.getElementById("content").style.background="url(images/bg_canvas.png)";
				document.getElementById("start").style.display="none";
				document.getElementById("message").style.display="none";
				document.getElementById("exit").style.display="none";
				//随机产生老鼠
				intervalid= setInterval(function(){
				//产生随机数
				var  num = Math.floor(Math.random()*9);
					
				//获取各种距离
				var l1=document.getElementById('Img').offsetLeft;  
				//自身宽度+距离左侧的宽度
	            var r1=document.getElementById('Img').offsetLeft+document.getElementById('Img').offsetWidth;  
	            var t1=document.getElementById('Img').offsetTop;  
	            //锤子自身对的高度+距离上侧的高度
	            var b1=document.getElementById('Img').offsetTop+document.getElementById('Img').offsetHeight;  
	            var l2=document.getElementById('m'+num).offsetLeft; 
	            //地鼠自身宽度+距离左侧的宽度
	            var r2=document.getElementById('m'+num).offsetLeft+document.getElementById('m'+num).offsetWidth;  
	            var t2=document.getElementById('m'+num).offsetTop;  
	            //地鼠自身的高度距离上侧的高度 
	            var b2=document.getElementById('m'+num).offsetTop+document.getElementById('m'+num).offsetHeight;  
	             //锤子与老鼠碰撞计算
	            if(r1<l2 || l1>r2 || b1<t2 || t1>b2)  
	            {  
	            	var ele = document.getElementById("m"+num);
	            	//实现锤子点击动画
	            	ele.onmousedown = function(){
	            		ChangeBg("Img","images/bt03.png");
	            		//打中老鼠老鼠切换图片
	            		
	            		document.form1.score.value = beat;
	            		console.log("总得分为："+beat);
	            		document.getElementById('m'+num).style.backgroundImage='url(images/mouse1.png)';  
	            	}
	                beat+=1;
	            }  
	            else  
	            {  
	            	var ele = document.getElementById("m"+num);
	            	//实现锤子点击动画
	            	ele.onmousedown = function(){
	            		ChangeBg("Img","images/bt03.png");
	            		
	            		 document.getElementById('m'+num).style.background='url(images/mouse1.png)';  
	            	}
	               
	            }
   				//老鼠冒出和缩回
	            $("#m"+num).animate({"marginTop":0+"px"},function(){

                	timeId2=  setTimeout(function(){
	                    $("#m"+num).animate({"marginTop":100+"px"});
	                },1000);
	                
	            });		
	            //老鼠被打进洞后，恢复原图
	                document.getElementById("m"+num).style.backgroundImage = "url(images/mouse1.png)";
		            
		        },3000);
					
				}

		/*锤子和地鼠碰撞检测*/
		// 锤子跟着鼠标移动
	 		window.onload=Main;
		//全局坐标变量
		  var x="";
		  var y="";
		//定位图片位置
		   function GetMouse(oEvent,snum)
		  {
		     x=oEvent.clientX;
		     y=oEvent.clientY;
		    document.getElementById('Img').style.left=(parseInt(x))+10+"px";
		    document.getElementById('Img').style.top=y-30+"px";		    
		     var oEvent=oEvent||event;    
		   }
		//入口
		  function Main()
		  {
		  	//改了这个位置会卡
		    var ele=document.getElementById("all");
		//注册鼠标移动事件
		    ele.onmousemove=function(){GetMouse(event);}
		// 注册鼠标按下事件
		    ele.onmousedown=function(){
            		ChangeBg("Img","images/bt003.png");
		    	
		    }
		//注册鼠标弹回事件
		    ele.onmouseup=function(){ChangeBg("Img","images/bt001.png");}
		   }
		//图片变化
		  function ChangeBg(id,url)
		  {
		    document.getElementById(id).src=url;
		  }
		  
		  
		 //显示当前倒计时所剩时间
			function timeShow(){
			    
			    if(time == 0){
			        GameOver();
			        return;
			    }else{
			        time = time-1;
			        document.form1.remtime.value = time;
			        timeId = setTimeout("timeShow()",2000);
			    }
			}
			
			//音频播放与暂停
			function playOrPause(){
				var audio =	document.getElementById("audio");
				if(audio.paused){
					audio.play();
					document.getElementById("playbtn").style.backgroundImage = "url(img/musicplaying.png)";
				}else if(audio.played){
					audio.pause();
					document.getElementById("playbtn").style.backgroundImage = "url(img/musicpause.png)";
					
				}
			}
			/*退出游戏功能*/
			function exit(){
				var r = confirm("确定退出游戏吗？","提示");
				if(r==true){
					window.close();
				}else{
					alert("继续战斗吧");
				}
			}
			
			
			
	