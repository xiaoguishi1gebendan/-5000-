 window.base = {
    b: function(){
        console.log("hello");
	},
	zipLoading:false,
	// domain: "http://lottery-test-bucket2.oss-cn-hongkong.aliyuncs.com/",
	//   hostUrl :"http://47.91.168.10/",//http://47.91.168.10/
	//  socketType:"ws",
	//  zipUrl:'common/loadBaseDataZip',
	//  local: ":///47.91.168.10/common/socket?timestamp=",

	skip:"http://172.16.10.191:8080/view/home/caipiaoxiangqin.html?vue=vue",
	 oldurlone: ['mobile/05/007', 'mobile/05/015', 'computer/05/027', 'mobile/06/001','mobile/03/001', 'mobile/03/002', 'mobile/05/028', 'computer/05/032', 'computer/05/033','computer/05/034',
	'mobile/02/001', 'mobile/02/013', 'mobile/02/014', 'mobile/02/017', 'mobile/02/018', 'mobile/02/019', 'mobile/01/014', 'mobile/05/049', 'mobile/07/001','mobile/07/002',
		 'mobile/07/003', 'mobile/07/004','common/getPopUpInfo'
     ],
	 oldurltwo: ['common/loadBaseDataZip', 'common/home', 'common/aboutUs', 'common/notice/list','common/activity/list','common/activity/detail', 'common/getSystemContent','common/getInfoList',
	'common/getInfoPage', 'common/getHelpList', 'user/userInfo', 'user/message/list', 'user/message/view', 'user/feedback/add', 'user/feedback/list','user/feedback/detail',
	'user/ploxy/content', 'common/getBaseConfig', 'common/project/detail', 'common/project/downloadAnroid', 'common/project/download','common/project/list','common/getPopUpInfo'
    ],
    newurl: ['common/ploadBaseDataZip', 'common/phome', 'common/paboutUs', 'common/pnotice/list', 'common/pactivity/list', 'common/pactivity/detail', 'common/pgetSystemContent',
		'common/pgetInfoList', 'common/pgetInfoPage', 'common/pgetHelpList', 'user/puserInfo', 'user/pmessage/list', 'user/pmessage/view', 'user/pfeedback/add','user/pfeedback/list',
		'user/pfeedback/detail', 'user/ploxy/pcontent', 'common/pgetBaseCon', 'common/pproject/detail', 'common/pproject/downloadAnroid', 'common/pproject/download','common/pproject/list','common/pgetPopUpInfo'
	],

	//代理测试-start-------
	domain: "http://lottery-test-bucket2.oss-cn-hongkong.aliyuncs.com/",
	hostUrl :"http://47.91.215.153/",//http://47.91.168.10/
	socketType:"ws",
	zipUrl:'common/loadBaseDataZip',
	local: "://47.91.215.153/common/socket?timestamp=",
	 //代理测试-stop-------

	//生产-start-------
	// domain: "/",
	// hostUrl :"/",//http://47.91.168.10/
	// socketType:"wss",
	// zipUrl:'common/loadBaseDataZipH5',
	// local: "://"+document.domain+"/common/socket?timestamp=",
	 //生产-stop-------

	 //代理商5000-start-------
	//  domain: "https://img.235370.com/",
	//  hostUrl :"/",//http://47.91.168.10/
	// socketType:"wss",
	// zipUrl:'common/loadBaseDataZipH5',
	// local: "://"+document.domain+"/common/socket?timestamp=",
	 //代理商-stop-------

	 //代理商6000-start--没域名,不https-----
	// domain: "/",
	// hostUrl :"/",//http://47.91.168.10/
	// socketType:"ws",
	// zipUrl:'common/loadBaseDataZipH5',
	// local: "://47.75.201.72/common/socket?timestamp=",
	 //代理商-stop-------

// 5000ce
	//  domain: "http://lottery-test-bucket2.oss-cn-hongkong.aliyuncs.com/",
	//   hostUrl :"http://47.91.168.10/",//http://47.91.168.10/
	//  socketType:"ws",
	//  zipUrl:'common/loadBaseDataZip',
	//  local: ":///47.91.168.10/common/socket?timestamp=",


    getApi:function(){
    	var name="周会"
	// ----------------时间--------------------------------------
		/**
	 * 时间相关工具类
	 */

		/**
		 * 时间倒计时
		 * @param {Object} id 目标显示位置的id
		 * @param {Object} endDateStr 结束时间 格式可以有（yyyy-MM-dd HH:mm:ss）和时间戳（1499864593306）
		 * 
		 * 	timeDown("timeDownId", "2017-07-12 23:30:00");
		 *	timeDown1("timeDownId", 1499865083306);
		 */
		function refreshTime(id, time, func) {
			var totalTime = parseInt(time / 1000);
			if (totalTime <= 0) {
				if (document.getElementById(id)) {
					document.getElementById(id).innerHTML = "00:00:00";
				}
				if (func) {
					func(id);
				}
				//倒数结束事件
				return;
			} else {
				var hours = Math.floor(totalTime / (60 * 60)) < 10 ? "0" + Math.floor(totalTime / (60 * 60)) : Math.floor(totalTime / (60 * 60));
				//取模（余数）
				var modulo = totalTime % (60 * 60);
				//分钟
				var minutes = Math.floor(modulo / 60) < 10 ? "0" + Math.floor(modulo / 60) : Math.floor(modulo / 60);
				//秒
				var seconds = modulo % 60 < 10 ? "0" + modulo % 60 : modulo % 60;
				//输出到页面
				if (document.getElementById(id)) {
					document.getElementById(id).innerHTML = hours + ":" + minutes + ":" + seconds;
				}
			}
			//if(document.getElementById(id)){//页面变化，找不到该ID后，取消定时器
			//	setInterval(function () {
			//		refreshTime(id, (totalTime-1)*1000,func);
			//	}, 1000);
			//}
		}

		/**
		 * 将时间戳转化为格式时间  默认yyyy-MM-dd HH:mm:ss格式
		 * @param {Object} times
		 * @param {Object} format
		 */
		function getFotmatTime(times, format) {
			var time = new Date(times);
			var utc = time.getTime() + (time.getTimezoneOffset() * 60000);
			time = new Date(utc);
			var year = time.getFullYear();//年
			var month = (time.getMonth() + 1) < 10 ? "0" + (time.getMonth() + 1) : (time.getMonth() + 1);//月份，由于月份是从0开始计算，所以要加1
			var day = time.getDate() < 10 ? "0" + time.getDate() : time.getDate(); //日
			var hour = time.getHours() < 10 ? "0" + time.getHours() : time.getHours(); //时
			var minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes(); //分
			var second = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();//秒
			if (!format) {
				return year + "-" + month + "-" + day + "  " + hour + ":" + minutes + ":" + second;
			} else if (format == "yyyy-MM-dd") {
				return year + "-" + month + "-" + day;
			} else if (format == "HH:mm:ss") {
				if (time.getDate() > 1) {
					hour = parseInt(hour) + (time.getDate() - 1) * 24;
				}
				return hour + ":" + minutes + ":" + second;
			} else if (format == "HH:mm") {
				return hour + ":" + minutes;
			}
		}

		/**
		 * 无时差--将时间戳转为格式化时间  默认yyyy-MM-dd HH:mm:ss格式
		 * @param {Object} times
		 * @param {Object} format
		 */
		function getFotmatTimeNoOffset(times, format) {
			var time = new Date(times);
			var year = time.getFullYear();//年
			var month = (time.getMonth() + 1) < 10 ? "0" + (time.getMonth() + 1) : (time.getMonth() + 1);//月份，由于月份是从0开始计算，所以要加1
			var day = time.getDate() < 10 ? "0" + time.getDate() : time.getDate(); //日
			var hour = time.getHours() < 10 ? "0" + time.getHours() : time.getHours(); //时
			var minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes(); //分
			var second = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();//秒
			if (!format) {
				return year + "-" + month + "-" + day + "  " + hour + ":" + minutes + ":" + second;
			} else if (format == "yyyy-MM-dd") {
				return year + "-" + month + "-" + day;
			} else if (format == "HH:mm:ss") {
				return hour + ":" + minutes + ":" + second;
			} else if (format == "HH:mm") {
				return hour + ":" + minutes;
			}
		}

	
    //-------------------------------------------------------以下是定义变量
    var divisor = "lottery@alpha";

	// var domain = "http://lottery-test-bucket2.oss-cn-hongkong.aliyuncs.com/";
		var domain = base.domain;
		var hostUrl = base.hostUrl;//http://47.91.168.10/
		var socketType = base.socketType;
	
	var isLoadingDataBase = false;
	
	var localVersion = "";
	//------------需要用到的方法---------------------
	function loadBaseDataZip() {
	var data = {
		timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0]
	};
	data = deal1(data);


}
	
	
	
	
	var hashMap = {
	Set: function(key, value) { this[key] = value },
	Get: function(key) { return this[key] },
	Contains: function(key) { return this.Get(key) == null ? false : true },
	Remove: function(key) { delete this[key] }
};

var hashMap2 = {
	Set: function(key, value) { this[key] = value },
	Get: function(key) { return this[key] },
	Contains: function(key) { return this.Get(key) == null ? false : true },
	Remove: function(key) { delete this[key] }
};

	
	/**
 * 根据参数进行签名操作
 * @param data
 * @returns {___anonymous39063_39066}
 */


function setArgument(key, value) {
	myStorage.setItem(key, value);
}




function asyncLoaded(url, callBack) { /*url为js的链接，callBack为url的js中的函数（该函数调用应该写到匿名函数中，如function(){console.log(div.getScrollOffset())}）*/
	var script = document.createElement('script');
	script.type = 'text/javascript';
	/*if else 这几句话必须要写到这位置处，不能放最后，因为if中js加载中script.readyState存在好几种状态，
	只有状态改变‘readystatechange’事件才会触发，但现在浏览器加载速度很快，当解析到该事件时JS有可能已经加载完，
	所以事件根本不会触发，所以要写到前面*/
	if(script.readystate) { //兼容IE
		script.onreadystatechange = function() { //状态改变事件才触发
			if(script.readyState == 'loaded' || script.readyState == 'complete') {
				callBack();
				script.onreadystatechange = null;
			}
		}
	} else {
		script.onload = function(e) {
			callBack();
		}
	};
	script.src = url;
	document.body.appendChild(script);
}



	
	
	//deal1
	function deal1(data) {
		var tmp = [];
		$.each(data, function(key, val) {
			tmp[tmp.length] = key;
		});
		tmp.sort();
		var allParameters = "";
		$.each(tmp, function(i, key) {
			allParameters += key + data[key];
		}); 
		var sign = $.md5(divisor + allParameters).toLocaleUpperCase();
		data.sign = sign;
		return data;
	}
		function dealNew(url, data) {

			var domain = document.domain;
			// 特殊域名判断
			for (var i = 0; i < window.kehucval.length; i++) {
				console.log("后加载")
				if (window.kehucval[i] == domain) {
					//    if(1){
					for (var j = 0; j < base.oldurlone.length; j++) {

						if (url == base.oldurlone[j]) {
							url = base.newurl[j];
							break;
						}
					}
					for (var j = 0; j < base.oldurltwo.length; j++) {

						if (url == base.oldurltwo[j]) {
							url = base.newurl[j];
							break;
						}
					}
				}
			}

			data = deal1(data);
			var result;
			return $.ajax({
				url: hostUrl + url,
				type: 'post',
				data: data, // 参数
				async: true,
				dataType: 'json',
				contenttype: "application/text;charset=utf-8",
				success: function (data1) {
					return new Promise((resolve, reject) => {
						if (data1.code === 401) {
							localStorage.removeItem("token")
							localStorage.setItem("currentUser", null)
							window.vm.$router.push({ path: "/login" })
						} else {
							resolve(data1)
						}
					})
				},
				error: function () {
					// 跳转到登陆页面
				}
			});
		}
	function deal(url, data) {
		
		var domain=document.domain;
		// 特殊域名判断
		if (window.kehucval.length>0){
			for (var i = 0; i < window.kehucval.length; i++) {
				console.log("后加载")
				if (window.kehucval[i] == domain) {
					//    if(1){
					for (var j = 0; j < base.oldurlone.length; j++) {

						if (url == base.oldurlone[j]) {
							
							url = base.newurl[j];
							break;
						}
					}
					for (var j = 0; j < base.oldurltwo.length; j++) {

						if (url == base.oldurltwo[j]) {
						
							url = base.newurl[j];
							break;
						}
					}
				}
			} 
		}
       
		
		
	data = deal1(data);
	var result; 
	$.ajax({
		url: hostUrl + url,
		type: 'post',
		data: data, // 参数
		async: false,
		dataType: 'json',
		contenttype: "application/text;charset=utf-8",
		success: function(data1) {
			// console.log(window.vm)
			console.log(data1)
			result = data1;
			// if (!myStorage.getItem("firstEntry")) {
			// 	myStorage.setItem("firstEntry",'1')
			// } else {
			// 	var version;
			// 	if(window.ifcvalue){
			// 		base.getApi().getPTimestamp1().then((res)=>{
			// 			console.log(res)
			// 					 version= res.version;
			// 					  window.updata(version,2);
			// 		 });
					
			// 	  }else{
			// 	   base.getApi().loadTimestamp1().then((res)=>{
			// 		   console.log(res)
			// 				version= res.version;
			// 				window.updata(version,1)
			// 		});
					
			// 	  }
			// }

			if(myStorage.getItem("time-version")!= null && result.version && result.version != myStorage.getItem("time-version").split("-")[1] && !isLoadingDataBase) {
				loadBaseDataZip();
				//window.location.reload();
				var version;

				if(window.ifcvalue){
					base.getApi().getPTimestamp1().then((res)=>{
						console.log(res)
								 version= res.version;
								  window.updata(version,2);
					 });
					
				  }else{
				   base.getApi().loadTimestamp1().then((res)=>{
					   console.log(res)
							version= res.version;
							window.updata(version,1)
					});
					
				  }

			}
		},
		error: function() {
			// 跳转到登陆页面
		}
	});
	if(result && result.code == 401) { //登陆状态过期
		localStorage.removeItem("token")
		localStorage.setItem("currentUser",null)
		alert("您被迫下线")
		window.vm.$router.push({path:"/login"})
	};
	return result;
}
	
	//获取时间戳
	 
	function loadTimestamp() {
		var data = {};
	//	var result = deal('common/getTimestamp', data);
		var result = deal('mobile/05/001', data);
		myStorage.setItem("time-version", new Date().getTime() - result.data+"-"+result.version);
	}
	
	var baseSokectQueue = [];
	var NumOfTryOpenSocket = 0;
	function openWebSocket(){
		if ("WebSocket" in window) {
			var ddd = {timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0]};
			ddd = deal1(ddd);
			// 打开一个 web socket
			// var ws = new WebSocket(socketType+"://"+window.location.host+"/common/socket?timestamp="+ddd.timestamp+"&sign="+ddd.sign);
			var ws = new WebSocket(socketType+base.local+ddd.timestamp+"&sign="+ddd.sign);
			ws.onopen = function() {
				// Web Socket 已连接上，使用 send() 方法发送数据
				ws.send("发送数据");
				console.log("数据发送中...");
				//baseSokectQueue = new SokectQueue();
			};
			ws.onmessage = function(evt) {
				var received_msg = evt.data;
				if (received_msg) {
					baseSokectQueue.push(JSON.parse(received_msg));
				}
			};
			ws.onclose = function() {
				// 关闭 websocket
				if(NumOfTryOpenSocket<3){
					openWebSocket();
				}
				console.log("连接已关闭...");
				NumOfTryOpenSocket++;
			};
			ws.error = function() {
				// 关闭 websocket
				console.log("连接异常...");
			};
		} else {
			// 浏览器不支持 WebSocket
			console.log("您的浏览器不支持 WebSocket!");
		}
	}

	
	
	
	$(function() {
		if(myStorage.getItem("time-version")){
			var timeDiff = myStorage.getItem("time-version").split("-")[0];
			if(timeDiff == null) {
				loadTimestamp();//获取时间戳
			};
			var localVersion = myStorage.getItem("time-version").split("-")[1];
			if(localVersion == null && !isLoadingDataBase) {
				loadBaseDataZip();//获取基础数据存入缓存
			};
		}else{
			loadTimestamp();
			loadBaseDataZip();
		}
		/* 返回 */
		$(".back").click(function() {
			window.history.back();
		});
		//登录页面返回
		$('.oback').click(function(){
			window.history.back()
		})
		
	});
	
//--------------------------------------------------变量定义完毕
    	
    	
    	
    	return {
// --------------------------------------------------保留两位小数
//
		returnFloat:function(value) {
			var value = Math.round(parseFloat(value) * 100) / 100;
			var xsd = value.toString().split(".");
			if(xsd.length == 1) {
				value = value.toString() + ".00";
				return value;
			};
			if(xsd.length > 1) {
				if(xsd[1].length < 2) {
					value = value.toString() + "0";
				}
				return value;
			}
		},

//---------------------------------------------------以下是接口调用
			/**
			 * 更改请求地址等信息
			 */
			changeDomain: function () {

				window.base.domain = "http://lottery-bucket.oss-cn-hongkong.aliyuncs.com/";
				base.hostUrl = "https://47.91.160.151/";
				base.socketType = "wss";
				base.zipUrl = 'common/loadBaseDataZipStraight';
				base.local = ":///47.91.160.151/common/socket?timestamp=";
			},
			


			a:function(){
				$("p").css("color","red");
				var ss=$.md5("111");
			},
			getArgument:function (key) {
			var tmp = myStorage.getItem(key);
			myStorage.removeItem(key);
			return tmp;
			},
			loadTimestamp:function () {
				var data = {};
				//	var result = deal('common/getTimestamp', data);
				var result = deal('mobile/05/001', data);
				return result
			},
			loadTimestamp1: function () {
				var data = {};
				//	var result = deal('common/getTimestamp', data);
				var result = dealNew('mobile/05/001', data);
				return result
			},
			 getPTimestamp:function() {
				var data = {};
				var result = deal('common/getPTimestamp', data);
				 return result
			},
			getPTimestamp1: function () {
				var data = {};
				var result = dealNew('common/getPTimestamp', data);
				return result
			},
			/**
			 * 根据彩种ID获取彩种整个规则,一级玩法--二级玩法--三级玩法--玩法明细值列表
			 */
			getLotteryDetail:function(lotteryId) {
				var data = {
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					lotteryId: lotteryId
				};
				var result = deal('common/getLotteryDetail', data);
				 return result
			},
			homeqmList:function (type) {

				var data = {
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					type: type
				};
				var result = deal('common/getPopUpInfo', data);
				if (result.code != 200) {
					$.tips(result.message, 1000);
				}
				return result;
		   },
			homeqmList1: function (type) {

				var data = {
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					type: type
				};
				var result = dealNew('common/getPopUpInfo', data);
				if (result.code != 200) {
					$.tips(result.message, 1000);
				}
				return result;
			},
			getBalace: function (id) {

				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId:id
				};
				var result = deal('user/getBalace', data);

				return result;
			},
			getBalacenew: function (id) {

				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: id
				};
				var result = dealNew('user/getBalace', data);

				return result;
			},
		   // 获取二维码地址
			orcode_App:function (zone) {
				var data = {
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					zone:zone
				};
				var result = deal('mobile/05/031', data);
				if(result.code != 200) {
					$.tips(result.message, 1000);
				}
				return result;
			},
			share: function () {
				var data = {
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0]
				};
				var result = deal('common/getWebLink', data);
				if (result.code != 200) {
					$.tips(result.message, 1000);
				}
				return result;
			},

			//获取代码是否维护接口

			isLotteryFix:function(LotteryId){
				var data = {
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					lotteryId:LotteryId
				};
				return dealNew('common/isLotteryFix', data);
			},

			//获取簽名列表
			qmList:function (userId) {
				
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId:userId
				};
			//	var result = deal('user/signInfo', data);/computer/02/027
			    var result = deal('computer/02/027', data);
				if(result.code != 200) {
					$.tips(result.message, 1000);
				}
				return result;
			},	
			//签到功能
			qd_All:function (userId) { //获取所有彩种列表
				
				var data = {
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId:userId
				};
			//	var result = deal('common/userSignIn', data);
			    var result = deal('mobile/05/046', data);
				if(result.code != 200) {
					$.tips(result.message, 1000);
				}
				return result;
			},
			//获取红包列表
			redpackage:function (userId,pageNum){
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId:userId,
					pageNum:pageNum
				};
				var result = deal('user/userRedList', data);
				if(result.code != 200) {
					$.tips(result.message, 1000);
				}
				return result;
			},
			//领取红包
			redpackageHq:function (userRedId,userId){
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userRedId:userRedId,
					userId:userId
				};
				var result = deal('user/insertRedAmount', data);
				if(result.code != 200) {
					$.tips(result.message, 1000);
				}
				return result;
			},
			
			//玩法规则
			gameRules: function (lotteryId){
			 	var data = {
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					lotteryId:lotteryId
				};
			//	var result = deal('common/userSignIn', data);
			    var result = deal('common/getplayExplainByLotteryId', data);
				if(result.code != 200) {
					$.tips(result.message, 1000);
				}
				return result;
			},
			//获取生肖详情 
			 getAnimalsCollections:function (lottera){
			 	var data = {
					// timestamp: new Date().getTime(),
					timestamp:new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					type:lottera
				};
			//	var result = deal('common/getAnimalsCollections', data);
			    var result = deal('mobile/05/050', data);
				if(result.code != 200) {
					$.tips(result.message, 1000);
				}
				return result;
			 },
			getAnimalsCollections1: function (lottera) {
				var data = {
					// timestamp: new Date().getTime(),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					type: lottera
				};
				//	var result = deal('common/getAnimalsCollections', data);
				var result = dealNew('mobile/05/050', data);
				// if (result.code != 200) {
				// 	$.tips(result.message, 1000);
				// }
				return result;
			},
			 //彩种介绍
			 inroductionList: function (){
			 	var data = {
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
				};
			//	var result = deal('common/userSignIn', data);
			    var result = deal('common/getPlayContent', data);
				if(result.code != 200) {
					$.tips(result.message, 1000);
				}
				return result;
			 },
  			 //玩法说明
			  inroduction:function (lotteryId){
			 	var data = {
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					lotteryId:lotteryId
				};
			//	var result = deal('common/userSignIn', data);
			    var result = deal('common/getPlayContentByLotteryId', data);
				if(result.code != 200) {
					$.tips(result.message, 1000);
				}
				return result;
			 },
			 //撤销订单
			cx_All:function (userId,bettingld) { //撤销订单
				
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId:userId,
					bettingId:bettingld
				};
			//	var result = deal('trade/revokeOrder', data);
				var result = deal('mobile/09/043', data);
				if(result.code != 200) {
					$.tips(result.message, 1000);
				}
				return result;
			},
			//获取所有彩种列表
			getLotteryList:function () { //获取所有彩种列表
				var data = {
					// timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0]
					timestamp: new Date().getTime()
				};
			//	var result = deal('common/getLotteryList', data);
			    var result = deal('computer/05/019', data);
				if(result.code != 200) {
					$.tips(result.message, 1000);
				};
				return result;
			},
			//获取所有玩法列表
			evolutionList:function () { //获取所有彩种列表
				var data = {
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0]
				};
			//	var result = deal('common/getLotteryList4Rules', data);
				var result = deal('mobile/05/051', data);
				if(result.code != 200) {
					$.tips(result.message, 1000);
				};
				return result;
			},
			//新充值列表
			newRechargeList:function (userId) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId
				};
			//	var result = deal('trade/rechargeList', data);
				var result = deal('mobile/09/009', data);
				return result;
			},
			//新充值列表
			newRechargeListCommon:function (userId) {
				var data = {
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId
				};
			//	var result = deal('common/rechargeList', data);
				var result = deal('mobile/05/036', data);
				return result;
			},
			//新充值接口
			newRecharge:function (userId, amount, plateformConfigId) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId,
					amount: amount,
					plateformConfigId: plateformConfigId,
					source: 'h5Recharge'
				};
			//	var result = deal('trade/recharge', data);
				var result = deal('mobile/09/006', data);
				return result;
			},
			newRechargenew: function (userId, amount, plateformConfigId) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId,
					amount: amount,
					plateformConfigId: plateformConfigId,
					source: 'h5Recharge'
				};
				//	var result = deal('trade/recharge', data);
				var result = dealNew('mobile/09/006', data);
				return result;
			},
			//新充值接口
			newRechargeCommon:function (userId, amount, plateformConfigId) {
				var data = {
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId,
					amount: amount,
					plateformConfigId: plateformConfigId,
					source: 'h5Recharge'
				};
				var result = deal('mobile/05/038', data);
				return result;
			},
	
	//---------以下是实验----

//----------------------------------------------------------------------------------------------------------
/**
 * 新充值接口
 */
			newRechargeWX:function (userId, amount, plateformConfigId,openid) {
				var data = {
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId,
					amount: amount,
					plateformConfigId: plateformConfigId,
					openid: openid,
					source: 'h5Recharge'
				};
				var result = deal('common/recharge', data);
				return result;
			},

			/**
			 * 新充值验证接口
			 */
			queryRechargeCommon:function (userId, order_no, plateformConfigId) {
				var data = {
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId,
					order_no: order_no,
					plateformConfigId: plateformConfigId
				};
				var result = deal('mobile/05/039', data);
				return result;
			},

			/**
			 * 新充值验证接口
			 */
			queryRecharge:function (userId, order_no, plateformConfigId) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId,
					order_no: order_no,
					plateformConfigId: plateformConfigId
				};
				var result = deal('mobile/09/007', data);
				return result;
			},

			/**
			 * 新充值-银行转账列表
			 */
			rechargeBankList:function (userId, bankId) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId,
					bankId: bankId
				};
			//	var result = deal('trade/rechargeBankList', data);
				var result = deal('mobile/09/010', data);
				return result;
			},

			/**
			 * 新充值-银行转账列表
			 */
			rechargeBankListCommon:function (userId, bankId) {
				var data = {
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId,
					bankId: bankId
				};
			//	var result = deal('common/rechargeBankList', data);
				var result = deal('mobile/05/037', data);
				return result;
			},

			//----------------------proxy---------------------------------

			/**
			 * 更改下级代理配置信息
			 */
			modifyProxy:function (userId, uid, type, rebate) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId,
					uid: uid,
					type: type,
					rebate: rebate
				};
			//	var result = deal('user/ploxy/modifyProxy', data);
				var result = deal('mobile/01/003', data);
				$.tips(result.message, 1000);
				return result;
			},

			/**
			 * 获取后多少期的开奖
			 * @param userId
			 * @returns
			 */
			getNextLotteryNos:function (lotteryId,lotteryNo,addPeriods) {
				var data = {
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					lotteryId: lotteryId,
					lotteryNo:lotteryNo,
					addPeriods:addPeriods
				};
			//	var result = deal('common/getNextLotteryNos', data);
				var result = deal('mobile/05/035', data);
				var obj;
				if(result.code == 200) {
					obj = result.data;
				} else {
					message(result.message);
				};
				return obj;
			},
			/**
			 * 代理审核(用户注册并提交审核资料)
			 * @param account		用户名
			 * @param password		密码
			 * @param device		设备号 目前h5写死传 h5
			 * @param mobile		手机号码
			 * @param reason		申请理由
			 * @returns
			 */
			ploxyApply:function (account, password, device, mobile, reason,email,qq,weChat) {
				var data = {
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					account: account,
					password: password,
					device: device,
					mobile: mobile,
					reason: reason,
					email:email,
					qq:qq,
					weChat:weChat
				};
			//	var result = deal('common/ploxyRegister', data);
				var result = deal('mobile/05/012', data);
				if(result.code != 200) {
					$.tips(result.message, 1000);
				};
				return result;
			},
			dilimoney: function (userId) {
				var data = {
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					token: myStorage.getItem("token"),
					userId: userId,
					
				};
				//	var result = deal('common/ploxyRegister', data);
				var result = deal('user/ploxy/overview', data);
				if (result.code != 200) {
					$.tips(result.message, 1000);
				};
				return result;
			},
			/**
			 * 代理审核(用户注册并提交审核资料)
			 * @param userId		用户名id
			 * @param startTime		
			 * @param endTime		
			 * @returns
			 */
			reportQuery: function (userId, ploxyId, startTime, endTime) {
				var data = {
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					token: myStorage.getItem("token"),
					userId: userId,
					startTime: startTime,
					endTime: endTime,
					ploxyId: ploxyId
				};
				//	var result = deal('common/ploxyRegister', data);
				var result = deal('user/ploxy/reportQuery', data);
				if (result.code != 200) {
					$.tips(result.message, 1000);
				};
				return result;
			},
			// 47.91.168.10/user/ploxy / reportDetail ? debug = true & userId=12853& startTime=2018-08 - 20 & endTime=2018-08 - 21
			reportQuerylist: function (userId, ploxyId,startTime, endTime, pageNumber, pageSize) {
				var data = {
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					token: myStorage.getItem("token"),
					userId: userId,
					ploxyId: ploxyId,
					startTime: startTime,
					endTime: endTime,
					pageNumber: pageNumber,
					pageSize: pageSize
				};
				//	var result = deal('common/ploxyRegister', data);
				var result = deal('user/ploxy/reportDetail', data);
				if (result.code != 200) {
					$.tips(result.message, 1000);
				};
				return result;
			},
			/**
			 * 代理返点列表
			 */
			rebateList:function (userId) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId
				};
			//	var result = deal('user/ploxy/rebateList', data);
				var result = deal('mobile/01/001', data);
				if(result.code != 200) {
					$.tips(result.message, 1000);
				};
				return result;
			},
			rebateList1: function (userId) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId
				};
				//	var result = deal('user/ploxy/rebateList', data);
				var result = dealNew('mobile/01/001', data);
				// if (result.code != 200) {
				// 	$.tips(result.message, 1000);
				// };
				return result;
			},
			/**
			 * 代理-团队报表
			 * @param userId		用户id
			 * @param uid			下级id
			 * @param beginTime		格式:2016-01-01
			 * @param endTime		格式:2016-01-01
			 * @returns
			 */
			teamReport:function (userId, uid, beginTime, endTime) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId,
					beginTime: beginTime,
					endTime: endTime,
					uid: uid
				};
			//	var result = deal('user/ploxy/teamReport', data);
				var result = deal('mobile/01/013', data);
				if(result.code != 200) {
					$.tips(result.message, 1000);
				};
				return result;
			},

			/**
			 * 代理个人报表
			 * @param userId
			 * @param uid
			 * @param beginTime
			 * @param endTime
			 * @returns
			 */
			personalReport:function (userId, uid, beginTime, endTime) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId,
					beginTime: beginTime,
					endTime: endTime,
					uid: uid
				};
			//	var result = deal('user/ploxy/personalReport', data);
				var result = deal('mobile/01/012', data);
				if(result.code != 200) {
					$.tips(result.message, 1000);
				}
				return result;
			},

			/**
			 * 删除邀请码
			 * @param userId
			 * @param code
			 * @returns
			 */
			delCode:function (userId, code) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId,
					code: code
				};
			//	var result = deal('user/ploxy/delCode', data);
				var result = deal('mobile/01/008', data);
				$.tips(result.message, 1000);
				return result;
			},

			// 转账
			zhuanZhang: function (userId, uid, amount, token) {
				var data = {
					userId: userId,
					uid:uid,
					amount: amount,
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
				};
				//	var result = deal('user/ploxy/delCode', data);
				var result = deal('user/ploxyTransfer/transfer', data);
				$.tips(result.message, 1000);
				return result;
			},
			/**
			 * 根据userId和邀请码更改其他内容
			 * @param userId
			 * @param code
			 * @param type		类型 用户/代理
			 * @param status	状态 是否可用
			 * @param rebate	返利
			 * @returns
			 */
			modifyCode:function (userId, code, type, status, rebate) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId,
					code: code,
					type: type,
					status: status,
					rebate: rebate
				};
			//	var result = deal('user/ploxy/modifyCode', data);
				var result = deal('mobile/01/007', data);
				$.tips(result.message, 1000);
				return result;
			},

			/**
			 * 邀请码列表
			 * @param pageNumber
			 * @param pageSize
			 * @param userId
			 * @returns
			 */
			codeList:function (pageNumber, pageSize, userId) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId,
					pageNumber: pageNumber,
					pageSize: pageSize
				};
			//	var result = deal('user/ploxy/codeList', data);
				var result = deal('mobile/01/006', data);
				if(result.code != 200) {
					$.tips(result.message, 1000);
				};
				return result;
			},
			codeList1: function (pageNumber, pageSize, userId) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId,
					pageNumber: pageNumber,
					pageSize: pageSize
				};
				//	var result = deal('user/ploxy/codeList', data);
				var result = dealNew('mobile/01/006', data);
				// if (result.code != 200) {
				// 	$.tips(result.message, 1000);
				// };
				return result;
			},
			/**
			 * 生成邀请码并返回列表
			 * @param userId
			 * @param code
			 * @param type
			 * @param rebate
			 * @returns
			 */
			buildCode:function (userId, code, type, rebate) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId,
					code: code,
					type: type,
					rebate: rebate
				};
			//	var result = deal('user/ploxy/buildCode', data);
			var result = deal('mobile/01/005',data);
				$.tips(result.message, 1000);
				return result;
			},

			/**
			 * 获取随机邀请码
			 * @param userId
			 * @returns
			 */
			randomCode:function (userId) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId
				};
			//	var result = deal('user/ploxy/randomCode', data);
				var result = deal('mobile/01/004', data);
				if(result.code != 200) {
					$.tips(result.message, 1000);
				};
				return result;
			},

			/**
			 * 代理佣金详情	
			 * @param userId
			 * @param time		格式 2017-05-05
			 * @returns
			 */
			ploxyStatisticsDetail:function (userId, time) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId,
					time: time
				};
			//	var result = deal('user/ploxy/ploxyStatisticsDetail', data);
				var result = deal('mobile/01/011', data);
				if(result.code != 200) {
					$.tips(result.message, 1000);
				};
				return result;
			},

			/**
			 * 下级开户
			 * @param userId
			 * @param userAccount	下级用户名
			 * @param type			类型 用户/代理
			 * @param rebate		返利
			 * @returns
			 */
			ploxyRegister:function (userId, userAccount, type, rebate) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId,
					userAccount: userAccount,
					type: type,
					rebate: rebate
				};
			//	var result = deal('user/ploxy/ploxyRegister', data);
				var result = deal('mobile/01/002', data);
				$.tips(result.message, 1000);
				return result;
			},

			/**
			 * 代理佣金
			 * @param pageNumber	页数
			 * @param pageSize		每页多少条数据
			 * @param userId
			 * @param startTime		格式 2015-05-05
			 * @param endTime
			 * @returns
			 */
			ploxyStatistics:function (pageNumber, pageSize, userId, startTime, endTime) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId,
					startTime: startTime,
					endTime: endTime,
					pageNumber: pageNumber,
					pageSize: pageSize
				};
			//	var result = deal('user/ploxy/ploxyStatistics', data);
				var result = dealNew('mobile/01/010', data);
				if(result.code != 200) {
					$.tips(result.message, 1000);
				};
				return result;
			},

			/**
			 * 下级代理
			 */
			ploxyList: function (pageNumber, pageSize, userId, uid, account, beginTime, endTime) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId,
					uid: uid,
					account: account,
					pageNumber: pageNumber,
					pageSize: pageSize,
					beginTime: beginTime,
					endTime: endTime
				};
			//	var result = deal('user/ploxy/list', data);
				var result = deal('mobile/01/009', data);
				if(result.code != 200) {
					$.tips(result.message, 1000);
				};
				return result;
			},
			ploxyList1: function (pageNumber, pageSize, userId, uid, account, beginTime, endTime) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId,
					uid: uid,
					account: account,
					pageNumber: pageNumber,
					pageSize: pageSize,
					beginTime: beginTime,
					endTime: endTime
				};
				//	var result = deal('user/ploxy/list', data);
				var result = dealNew('mobile/01/009', data);
				// if (result.code != 200) {
				// 	$.tips(result.message, 1000);
				// };
				return result;
			},
			/**
			 * 代理说明
			 * @param userId
			 * @returns
			 */
			ploxyContent:function (userId) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId
				};
			//	var result = deal('user/ploxy/content', data);
				var result = deal('mobile/01/014', data);
				if(result.code != 200) {
					$.tips(result.message, 1000);
				};
				return result;
			},
			//----------------------trade---------------------------------

			/**
			 * 购彩
			 * playId			玩法id
			 * playDetailId		玩法明细id
			 * bettingValue		投注记录
			 * odds				赔率
			 * rebate			返利
			 * num				投注数
			 * amount			投注金额
			 * addPeriods		追期数
			 * version			dataBase版本号
			 * 
			 * 
			 * 
			 */
			payment:function (userId, lotteryId, lotteryNo, playId, playDetailId, bettingValue, odds, rebate, num, amount, addPeriods, version, addPeriodsStop, addPeriodsNos, addPeriodsTimes) { //type 固定1
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId,
					lotteryId: lotteryId,
					lotteryNo: lotteryNo,
					playId: playId,
					playDetailId: playDetailId,
					bettingValue: bettingValue,
					odds: odds,
					rebate: rebate,
					num: num,
					amount: amount,
					addPeriods: addPeriods,
					version: version,
					addPeriodsStop:addPeriodsStop,
					addPeriodsNos:addPeriodsNos,
					addPeriodsTimes:addPeriodsTimes
				};
			//	var result = deal('trade/payment', data);
				var result = deal('mobile/09/001', data);
				//	$.tips(result.message,1000);
				return result;
			},

			/**
			 * 用户提现
			 * @param userId		
			 * @param drawAmount	提现金额
			 * @param isPush		是否推送
			 * @param type			固定1
			 * @param cardId		绑定的银行卡ID
			 * @param drawPwd		交易密码
			 * @param cutAmount		最终扣款金额	=提现金额+手续费
			 * @param fee			手续费
			 * @returns
			 */
			draw:function (userId, drawAmount, isPush, type, cardId, drawPwd, cutAmount, fee) { //type 固定1
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId,
					drawAmount: drawAmount,
					isPush: isPush,
					type: type,
					cardId: cardId,
					drawPwd: drawPwd,
					cutAmount: cutAmount,
					fee: fee
				};
			//	var result = deal('trade/draw', data);
//				var result = deal('mobile/09/002', data);
				var result = deal('trade/drawNew', data);
				$.tips(result.message, 1000);
				return result;
			},

			/**
			 * 用户当前消费
			 * @param userId
			 * @returns
			 */
			consumption:function (userId) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId
				};
			//	var result = deal('trade/consumption', data);
				var result = deal('mobile/09/003', data);
				var obj;
				if(result.code == 200) {
					obj = result.data;
				} else {
					$.tips(result.message, 1000);
				};
				return obj;
			},

			/**
			 * 银行转账/通用二维码订单提交 免登陆版本
			 * @param userId
			 * @param bankId	银行ID
			 * @param code		充值码/验证码
			 * @param time		格式:2019-12-12 12:00:00
			 * @param amount	充值金额
			 * @param name		存款人姓名/提交人昵称
			 * @param type		转账类型(通用二维码此值传0)
			 * @returns
			 */
			bankPayCommon:function (userId, bankId, code, time, amount, name, type) {
				var data = {
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId,
					bankId: bankId,
					code: code,
					time: time,
					amount: amount,
					name: name,
					type: type
				};
				var result = deal('mobile/05/040', data);
				$.tips(result.message, 1000);
				return result;
			},

			/**
			 * 银行转账/通用二维码订单提交
			 * @param userId
			 * @param bankId	银行ID
			 * @param code		充值码/验证码
			 * @param time		格式:2019-12-12 12:00:00
			 * @param amount	充值金额
			 * @param name		存款人姓名/提交人昵称
			 * @param type		转账类型(通用二维码此值传0)
			 * @returns
			 */
			bankPay:function (userId, bankId, code, time, amount, name, type) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId,
					bankId: bankId,
					code: code,
					time: time,
					amount: amount,
					name: name,
					type: type
				};
			//	var result = deal('rsa/bankPay', data);
				var result = deal('mobile/08/003', data);
				$.tips(result.message, 1000);
				return result;
			},

			/**
			 * 支付列表(旧)
			 * @param userId
			 * @param type
			 * @returns
			 */
			SMPayList:function (userId, type) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId,
					type: type
				};
			//	var result = deal('rsa/SMPayList', data);
				var result = deal('mobile/08/002', data);
				var obj;
				if(result.code == 200) {
					obj = result.data;
				} else {
					$.tips(result.message, 1000);
				};
				return obj;
			},

			/**
			 * 查询订单(旧)
			 * @param order_no
			 * @param userId
			 * @param platformId
			 * @returns
			 */
			SMQuery:function (order_no, userId, platformId) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId,
					order_no: order_no,
					platformId: platformId
				};
			//	var result = deal('rsa/query', data);
				var result = deal('mobile/08/007', data);
				$.tips(result.message, 1000);
				return result;
			},
			
			/**
			 * 充值(旧)
			 * @param service_type
			 * @param product_name
			 * @param userId
			 * @param totalAmount
			 * @param disAmount
			 * @param disType
			 * @param platformId
			 * @returns
			 */
			SMPay:function (service_type, product_name, userId, totalAmount, disAmount, disType, platformId) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId,
					service_type: service_type,
					product_name: product_name,
					totalAmount: totalAmount,
					disAmount: disAmount,
					disType: disType,
					platformId: platformId
				};
			//	var result = deal('rsa/SMPay', data);
				var result = deal('mobile/08/006', data);
				var obj;
				if(result.code != 200) {
					$.tips(result.message, 1000);
				};
				return result;
			},

			//----------------------user---------------------------------
			/**
			 * 收藏彩种列表
			 */
			collectList:function (userId) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId
				};
			//	var result = deal('user/collectList', data);
				var result = deal('mobile/02/026', data);
				if(result.code != 200) {
					$.tips(result.message, 1000);
				};
				return result;
			},
			collectList1: function (userId) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId
				};
				//	var result = deal('user/collectList', data);
				var result = dealNew('mobile/02/026', data);
				// if (result.code != 200) {
				// 	$.tips(result.message, 1000);
				// };
				return result;
			},
			collectListnew: function (userId) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId
				};
				//	var result = deal('user/collectList', data);
				var result = dealNew('mobile/02/026', data);
				if (result.code != 200) {
					$.tips(result.message, 1000);
				};
				return result;
			},
			/**
			 * 取消收藏
			 * @param userId
			 * @param lotteryId
			 * @returns
			 */
			collectCancel:function (userId, lotteryId) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId,
					lotteryId: lotteryId
				};
			//	var result = deal('user/collectCancel', data);
				var result = deal('mobile/02/025', data);
				$.tips('取消收藏', 1000);
				return result;
			},
			collectCancel1: function (userId, lotteryId) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId,
					lotteryId: lotteryId
				};
				//	var result = deal('user/collectCancel', data);
				var result = dealNew('mobile/02/025', data);
				// $.tips('取消收藏', 1000);
				return result;
			},
			/**
			 * 收藏彩种
			 * @param userId
			 * @param lotteryId
			 * @returns
			 */
			userCollect:function (userId, lotteryId) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId,
					lotteryId: lotteryId
				};
			//	var result = deal('user/collect', data);
				var result = deal('mobile/02/024', data);
				$.tips('收藏成功', 1000);
				return result;
			},
			userCollect1: function (userId, lotteryId) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId,
					lotteryId: lotteryId
				};
				//	var result = deal('user/collect', data);
				var result = dealNew('mobile/02/024', data);
				// $.tips('收藏成功', 1000);
				return result;
			},

			/**
			 * 订单详情
			 * userId 用户ID ， bettingId 订单id
			 */
			bettingDetail:function (userId, bettingId) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId,
					bettingId: bettingId
				};
			//	var result = deal('user/betting/detail', data);
				var result = deal('mobile/02/023', data);
				var obj;
				if(result.code == 200) {
					obj = result.data;
				} else {
					$.tips(result.message, 1000);
				};
				return obj;
			},

			/**
			 * 用户投注列表
			 * @param pageSize
			 * @param pageNumber
			 * @param userId
			 * @param type
			 * @returns
			 */
			bettingList:function (pageSize, pageNumber, userId, type) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					pageSize: pageSize,
					pageNumber: pageNumber,
					userId: userId,
					type: type
				};
			//	var result = deal('user/betting/list', data);
				var result = deal('mobile/02/021', data);
				var list;
				if(result.code == 200) {
					list = result.data.userBettingList;
				} else {
					$.tips(result.message, 1000);
				};
				return list;
			},

			/**
			 * 用户中奖列表(废弃)
			 * @param pageSize
			 * @param pageNumber
			 * @param userId
			 * @returns
			 */
			winList:function (pageSize, pageNumber, userId) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					pageSize: pageSize,
					pageNumber: pageNumber,
					userId: userId
				};
			//	var result = deal('user/win/list', data);
				var result = deal('mobile/02/020', data);
				var list;
				if(result.code == 200) {
					list = result.data.userWinningList;
				} else {
					$.tips(result.message, 1000);
				};
				return list;
			},

			/**
			 * 用户反馈详情
			 * @param userId
			 * @param feedbackId
			 * @returns
			 */
			feedbackDetail:function (userId, feedbackId) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId,
					feedbackId: feedbackId
				};
			//	var result = deal('user/feedback/detail', data);
				var result = deal('mobile/02/019', data);
				var obj;
				if(result.code == 200) {
					obj = result.data.feedback;
				} else {
					$.tips(result.message, 1000);
				};
				return obj;
			},

			/**
			 * 用户反馈列表
			 * @param pageSize
			 * @param pageNumber
			 * @param userId
			 * @param type
			 * @returns
			 */
			feedbackList:function (pageSize, pageNumber, userId, type) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					pageSize: pageSize,
					pageNumber: pageNumber,
					userId: userId,
					type: type
				};
			//	var result = deal('user/feedback/list', data);
				var result = deal('mobile/02/018', data);
				var list;
				if(result.code == 200) {
					list = result.data.feedbackList;
				} else {
					$.tips(result.message, 1000);
				};
				return list;
			},

			/**
			 * 提交反馈信息
			 * @param userId
			 * @param type
			 * @param details
			 * @param mobile
			 * @returns
			 */
			feedback:function (userId, type, details, mobile) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId,
					type: type,
					details: details,
					mobile: mobile
				};
			//	var result = deal('user/feedback/add', data);
				var result = deal('mobile/02/017', data);

				return result;
			},

			/**
			 * 账户明细列表
			 * @param pageSize
			 * @param pageNumber
			 * @param userId
			 * @param type
			 * @returns
			 */
			accountDetailList:function (pageSize, pageNumber, userId, type) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					pageSize: pageSize,
					pageNumber: pageNumber,
					userId: userId,
					type: type
				};
			//	var result = deal('user/accountDetail/list', data);
				var result = deal('mobile/02/015', data);
				var list;
				if(result.code == 200) {
					list = result.data.accountDetailsList;
				} else {
					$.tips(result.message, 1000);
				};
				return list;
			},

			/**
			 * 读取消息
			 * @param userId
			 * @param id
			 * @returns
			 */
			viewMessage:function (userId, id) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId,
					id: id
				};
			//	var result = deal('user/message/view', data);
				var result = deal('mobile/02/014', data);
				if(result.code != 200) {
					$.tips(result.message, 1000);
				};
				return result;
			},

			/**
			 * 消息记录
			 * @param pageSize
			 * @param pageNumber
			 * @param userId
			 * @param type
			 * @returns
			 */
			messageList:function (pageSize, pageNumber, userId, type) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					pageSize: pageSize,
					pageNumber: pageNumber,
					userId: userId,
					type: type
				};
			//	var result = deal('user/message/list', data);
				var result = deal('mobile/02/013', data);
				var list;
				if(result.code == 200) {
					list = result.data.messageList;
				} else {
					$.tips(result.message, 1000);
				};
				return list;
			},

			/**
			 * 提款详情
			 * @param userId
			 * @param drawId
			 * @returns
			 */
			drawDetail:function (userId, drawId) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId,
					drawId: drawId
				};
			//	var result = deal('user/draw/detail', data);
				var result = deal('mobile/02/012', data);
				var obj;
				if(result.code == 200) {
					obj = result.data.draw;
				} else {
					$.tips(result.message, 1000);
				};
				return obj;
			},

			/**
			 * 提款列表
			 * @param pageSize
			 * @param pageNumber
			 * @param userId
			 * @param status
			 * @returns
			 */
			drawList:function (pageSize, pageNumber, userId, status) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					pageSize: pageSize,
					pageNumber: pageNumber,
					userId: userId,
					status: status
				};
			//	var result = deal('user/draw/list', data);
				var result = deal('mobile/02/010', data);
				var list;
				if(result.code == 200) {
					list = result.data.drawList;
				} else {
					$.tips(result.message, 1000);
				};
				return list;
			},

			/**
			 * 充值详情
			 * @param userId
			 * @param rechargeId
			 * @returns
			 */
			rechargeDetail:function (userId, rechargeId) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId,
					rechargeId: rechargeId
				};
			//	var result = deal('user/recharge/detail', data);
				var result = deal('mobile/02/009', data);
				var obj;
				if(result.code == 200) {
					obj = result.data.recharge;
				} else {
					$.tips(result.message, 1000);
				};
				return obj;
			},

			/**
			 * 充值列表
			 * @param pageSize
			 * @param pageNumber
			 * @param userId
			 * @param status
			 * @returns
			 */
			rechargeList:function (pageSize, pageNumber, userId, status) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					pageSize: pageSize,
					pageNumber: pageNumber,
					userId: userId,
					status: status
				};
			//	var result = deal('user/recharge/list', data);
				var result = deal('mobile/02/007', data);
				var list;
				if(result.code == 200) {
					list = result.data.rechargeList;
				} else {
					$.tips(result.message, 1000);
				};
				return list;
			},

			/**
			 * 充值列表  免登陆
			 * @param pageSize
			 * @param pageNumber
			 * @param userId
			 * @param status
			 * @returns
			 */
			rechargeListCommon:function (pageSize, pageNumber, userId, status) {
				var data = {
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					pageSize: pageSize,
					pageNumber: pageNumber,
					userId: userId,
					status: status
				};
				var result = deal('mobile/05/041', data);
				var list;
				if(result.code == 200) {
					list = result.data.rechargeList;
				} else {
					$.tips(result.message, 1000);
				};
				return list;
			},

			/**
			 * 用户绑卡
			 * @param userId
			 * @param bankName
			 * @param name
			 * @param bankAccount
			 * @param bankBranch
			 * @param tradePwd
			 * @returns
			 */
			tiedCard:function (userId, bankName, name, bankAccount, bankBranch, tradePwd) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId,
					bankName: bankName,
					name: name,
					bankAccount: bankAccount,
					bankBranch: bankBranch,
					'user.traderPassword': tradePwd
				};
			//	var result = deal('user/tiedCard', data);
				var result = deal('mobile/02/006', data);
				if(result.code != 200) {
					$.tips(result.message, 1000);
				};
				return result;
			},

			/**
			 * 根据用户帐号获取用户信息
			 * @param userId
			 * @param password
			 * @returns
			 */
			getUserInfoByAccoun:function t(account) {
				var data = {
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					account: account
				};
				var result = deal('mobile/05/042', data);
				if(result.code != 200) {
					$.tips(result.message, 1000);
				};
				return result;
			},

			/**
			 * 根据用户id获取用户信息
			 * @param userId
			 * @param password
			 * @returns
			 */
			getUserInfoById:function (id) {
				var data = {
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: id
				};
				var result = deal('common/getUserInfoById', data);
				if(result.code != 200) {
					$.tips(result.message, 1000);
				};
				return result;
			},

			/**
			 * 重置交易密码
			 * @param userId
			 * @param password
			 * @returns
			 */
			resettingTradePwd:function (userId, password) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId,
					password: password
				};
			//	var result = deal('user/resettingTradePwd', data);
				var result = deal('mobile/02/005', data);
				if(result.code != 200) {
					$.tips(result.message, 1000);
				};
				return result;
			},

			/**
			 * 修改交易密码
			 * @param userId
			 * @param oldPassword
			 * @param password
			 * @returns
			 */
			modifyTranPwd:function (userId, oldPassword, password) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId,
					oldPassword: oldPassword,
					password: password
				};
			//	var result = deal('user/modifyTranPwd', data);
				var result = deal('mobile/02/004', data);
				$.tips(result.message, 1000);
				return result;
			},

			/**
			 * 修改登陆密码
			 * @param userId
			 * @param oldPassword
			 * @param password
			 * @returns
			 */
			modifyPwd:function (userId, oldPassword, password) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId,
					oldPassword: oldPassword,
					password: password
				};
			//	var result = deal('user/modifyPwd', data);
				var result = deal('mobile/02/003', data);

				return result;
			},

			/**
			 * 登出
			 * @param userId
			 * @returns
			 */
			logout:function (userId) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId
				};
			//	var result = deal('user/logout', data);
				var result = deal('mobile/02/002', data);
				if(result.code == 200) {

					// myStorage.setItem("token", null);

					window.localStorage.removeItem("token");

				};
				$.tips(result.message, 1000);
				return result;
			},

			/**
			 * 用户详情
			 * @param userId
			 * @returns
			 */
			userInfonew:function (userId) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId
				};
			//	var result = deal('user/userInfo', data);
				var result = dealNew('mobile/02/001', data);
				return result;
			},
			userInfo: function (userId) {
				var data = {
					token: myStorage.getItem("token"),
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
					userId: userId
				};
				//	var result = deal('user/userInfo', data);
				var result = deal('mobile/02/001', data);
				return result;
			},
			// ----------------------notice---------------------------------

			/**
			 * 公告列表
			 */
			noticeList:function (pageSize, pageNumber) {
				var data = {
					pageSize: pageSize,
					pageNumber: pageNumber,
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0]
				};
			//	var result = deal('common/notice/list', data);
				var result = deal('mobile/06/001', data);
				var obj;
				if(result.code == 200) {
					obj = result.data.noticeList;
				} else {
					$.tips(result.message, 1000);
				};
				return obj;
			},

			// ----------------------activity-------------------------------

			/**
			 * 活动列表
			 */
			activityList:function (pageSize, pageNumber) {
				var data = {
					pageSize: pageSize,
					pageNumber: pageNumber,
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0]
				};
			//	var result = deal('common/activity/list', data);
				var result = deal('mobile/03/001', data);
				var obj;
				if(result.code == 200) {
					obj = result.data.activityList;
				} else {
					$.tips(result.message, 1000);
				};
				return obj;
			},

			/**
			 * 活动详情
			 * @param activityId
			 * @returns
			 */
			activityDetail:function (activityId,sourceType) {
				var data = {
					activityId: activityId,
					sourceType: (!!sourceType)?sourceType:'1',
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0]
				};
			//	var result = deal('common/activity/detail', data);
				var result = deal('mobile/03/002', data);
				var obj;
				if(result.code == 200) {
					obj = result.data.activity;
				} else {
					$.tips(result.message, 1000);
				};
				return obj;
			},
			activityDetail1: function (activityId, sourceType) {
				var data = {
					activityId: activityId,
					sourceType: (!!sourceType) ? sourceType : '1',
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0]
				};
				//	var result = deal('common/activity/detail', data);
				var result = dealNew('mobile/03/002', data);
				return result;
				// var result = dealNew('mobile/03/002', data);
				// var obj;
				// if (result.code == 200) {
				// 	obj = result.data.activity;
				// } else {
				// 	$.tips(result.message, 1000);
				// };
				// return obj;
			},
			// ------------------------common-------------------------------

			/**
			 * 根据彩票ID和期号获取彩票开奖结果
			 */
			getLotterResult:function (lotteryId, lotteryNo) {
				var data = {
					lotteryId: lotteryId,
					lotteryNo: lotteryNo,
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0]
				};
			//	var result = deal('common/getLotterResult', data);
				var result = deal('mobile/05/026', data);
				$.tips(result.message, 1000);
			},

			/**
			 * 根据彩票ID(逗号分割)获取彩票开奖结果集合
			 * @param lotteryIds
			 * @returns
			 */
			getNewLotterResultList:function (lotteryIds) {
				var data = {
					lotteryIds: lotteryIds,
					timestamp: new Date().getTime()
				};
				var result = deal('common/getNewLotterResultList', data);
			//	var result = deal('mobile/05/025', data);
				return result;
			},

			/**
			 * 根据彩票ID获取该彩票的最新开奖结果
			 * @param lotteryId
			 * @returns
			 */
			getNewLotterResult:function (lotteryId) {
				var data = {
					lotteryId: lotteryId,
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0]
				};
			//	var result = deal('common/getNewLotterResult', data);
				var result = deal('mobile/05/022', data);
				return result;
			},

			/**
			 * 根据彩票ID获取该彩票的最新开盘期
			 * @param lotteryId
			 * @returns
			 */
			getNewLotterResultByEndTime:function (lotteryId) {
				var data = {
					lotteryId: lotteryId,
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0]
				};
			//	var result = deal('common/getNewLotterResultByEndTime', data);
				var result = deal('mobile/05/023', data);
				return result;
			},

			/**
			 * 根据彩票ID获取彩票开奖结果的列表
			 * @param lotteryId
			 * @returns
			 */
			getLotteryDraw:function (lotteryId) {
				var data = {
					lotteryId: lotteryId,
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0]
				};
			//	var result = deal('common/getLotteryDraw', data);
				var result = deal('mobile/05/020', data);
				return result;
			},
			getLotteryDraw1: function (lotteryId) {
				var data = {
					lotteryId: lotteryId,
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0]
				};
				//	var result = deal('common/getLotteryDraw', data);
				var result = dealNew('mobile/05/020', data);
				return result;
			},
			// getLotteryDraw1: function (lotteryId) {
			// 	var data = {
			// 		lotteryId: lotteryId,
			// 		timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0]
			// 	};
			// 	//	var result = deal('common/getLotteryDraw', data);
			// 	var result = dealNew('mobile/05/020', data);
			// 	return result;
			// },
			getLotteryDrawold: function (lotteryId) {
				var data = {
					lotteryId: lotteryId,
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0]
				};
				//	var result = deal('common/getLotteryDraw', data);
				var result = deal('mobile/05/020', data);
				return result;
			},
			/**
			 * 购彩大厅接口
			 * @returns
			 */
			lottery:function () {
				var data = {
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0]
				};
			//	var result = deal('common/lottery', data);
				var result = deal('mobile/05/018', data);
				//	console.log(result);
				return result;
			},

			/**
			 * 首页中奖列表
			 * @returns
			 */
			winListHome:function () {
				var data = {
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0]
				};
			//	var result = deal('common/winList', data);
				var result = deal('mobile/05/017', data);
				if(result && result.code != 200) {
					$.tips(result.message, 1000);
				};
				return result;
			},

			/**
			 * 根据父级彩票ID获取下级彩票(目前只有pc蛋蛋下挂着北京28和幸运28)
			 * @param id
			 */
			getChildrenLottery:function (id) {
				var data = {
					id: id,
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0]
				};
			//	var result = deal('common/getChildrenLottery', data);
				var result = deal('mobile/05/016', data);
				$.tips(result.message, 1000);
			},

			/**
			 * 首页接口
			 * @param account
			 * @param password
			 * @returns
			 */
			homeData:function (account, password) {
				var data = {
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0]
				};
			//	var result = deal('common/home', data);
				var result = deal('mobile/05/015', data);
				if(result.code != 200) {
					$.tips(result.message, 1000);
				};
				return result
			},
			homeData1: function (account, password) {
				var data = {
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0]
				};
				//	var result = deal('common/home', data);
				var result = dealNew('mobile/05/015', data);
				if (result.code != 200) {
					$.tips(result.message, 1000);
				};
				return result
			},
			/**
			 * 免费试玩登陆(注册并登陆)
			 * @param account
			 * @param password
			 * @returns
			 */
			freeTrial:function (account, password) {
				var data = {
					account: account,
					password: password,
					device: 'h5',
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0]
				};
			//	var result = deal('common/freeTrial', data);
				var result = deal('mobile/05/014', data);
				if(result.code == 200) {
					myStorage.setItem("token", result.data.token);
					myStorage.setItem("currentUser", JSON.stringify(result.data.user));
				};
				$.tips(result.message, 1000);
				return result;

			},

			/**
			 * 登陆
			 * @param account
			 * @param password
			 * @returns
			 */
			login:function(account, password) {
				var data = {
					account: account,
					password: password,
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0]
				};
			//	var result = deal('common/login', data);
				var result = deal('mobile/05/008', data);
				if(result.code == 200) {
					myStorage.setItem("token", result.data.token);
				} else {
					$.tips(result.message, 1000);
				};
				return result;
			},

			/**
			* 获取基础数据
			*/
			getDict:function () {
				var data = {
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0]
				};
			//	var result = deal('common/getDict', data);
				var result = deal('mobile/05/004', data);
				// $.tips(result.message,1000);
			},

			/**
			* 获取试玩帐号账户
			* @returns {String}
			*/
			getFreeTrialAccount:function () {
				var data = {
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0]
				};
			//	var result = deal('common/getFreeTrialAccount', data);
				var result = deal('mobile/05/013', data);
				var account = "";
				if(result.code == 200) {
					account = result.data;
				} else
					$.tips(result.message, 1000);
			//	console.log(account);
				return account;
			},
			/**
			* 注册
			* @param account
			* @param password
			* @param generateCode	邀请码,非必填
			* @returns
			*/
			register: function (account, password, generateCode, mobile, email) {
				var data = {
					account: account,
					password: password,
					device: 'h5',
					inviteCode: generateCode,
					mobile: mobile,
					email: email,
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0]
				};
			//	var result = deal('common/register', data);
				var result = deal('mobile/05/009', data);
				$.tips(result.message, 1000);
				return result;
			},
			/**
			* 测试用户注册
			* @param account
			* @param password
			* @param generateCode
			* @returns
			*/
			testRegister:function (account, password, generateCode) {
				var data = {
					account: account,
					password: password,
					device: 'h5',
					generateCode: generateCode,
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0]
				};
			//	var result = deal('common/testRegister', data);
				var result = deal('mobile/05/010', data);
				$.tips(result.message, 1000);
				return result;
			},

			/**
			* type 1 关于我们 2 在线资讯 3 法律声明
			*/
			getSystemContent:function (type) {
				var data = {
					type: type,
					// timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0]
					timestamp:1492582243000
				};
			//	var result = deal('common/getSystemContent', data);
				var result = deal('mobile/05/028', data);
				var reStr = "";
				if(result.code == 200) {
					reStr = result.data;
				} else
					$.tips(result.message, 1000);
				return reStr;
			},
            phtupian:function(){
				var data = {
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0]
				};
				var result = deal('common/appImg/getPureImgUrl', data);
				return result;
			},
			phtupian1: function () {
				var data = {
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0]
				};
				var result = dealNew('common/appImg/getPureImgUrl', data);
				return result;
			},
			loadBaseData:function () {
				var data = {
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0]
				};
			//	var result = deal('common/loadBaseData', data);
				var result = deal('mobile/05/005', data);
			},

			loadBaseDataNew:function () {

				var data = {
					timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0]
				};
				data = deal1(data);

				$.ajax({
			//		url: hostUrl + 'common/loadBaseDataNew',
					url: hostUrl + 'mobile/05/006',
					type: 'post',
					data: data, // 参数
					async: false,
					success: function(data) {
						// 第二次调用
						result = eval("(" + data + ")");
						if(result.code = 200 && result.data) {
							$.ajax({
								url: result.data,
								type: 'get',
								contenttype: "application/text;charset=utf-8",
								dataType: 'json',
								// data: {},//参数
								// async:false,
								success: function(result) {
									myStorage.getItem("baseData", JSON.stringify(result.data));
								}
							});
						}

					}
				});
			},

			/**
			* 请求接口数据以及读取缓存数据
			*/




			/**
			* 封装的所有ajax请求util
			* @param url		请求地址
			* @param data		请求的参数
			* @returns
			*/




			//----------以上是实验--------------



						
						
						
						
						
						
						
						
						
						
						
						
					}
				}
}
//export default base