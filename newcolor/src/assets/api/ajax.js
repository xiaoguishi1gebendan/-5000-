// import { JSZipUtils } from '../source/js/plugins/jszip-utils.js'
export function ajax() {
    
    var hostUrl = base.hostUrl;//http://47.91.168.10/;
    var zipUrl = base.zipUrl;
    // var hostUrl = "http://192.168.0.136:8090/";
    var isLoadingDataBase = false;
    // alert("ajax")
    function loadTimestamp() {
        var data={}
        var result = deal('mobile/05/001', data);
        window.ifcvalue = false;
        myStorage.setItem("time-version", Math.abs(new Date().getTime() - result.data) + "-" + result.version);
    }
    loadTimestamp()
    function getPTimestamp() {
        var data = {};
        var result = deal('common/getPTimestamp', data);
        window.ifcvalue = true;
        myStorage.setItem("time-version2", Math.abs(new Date().getTime() - result.data) + "-" + result.version);
    }
    
    function loadTimestamp2() {
        var data = {
            timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0],
            code: "domains,H5Title,appUrl,onlineCustomService,SpecialAgentIp,SpecialAgentJumpAddress"
        };
        var result = deal('common/getBaseConfig', data);
        console.log(result)
        window.homedatasedk = result.data
        console.log(window.homedatasedk)
        window.SpecialAgentIp = result.SpecialAgentIp
        window.onlineURL = result.data.onlineCustomService.cvalue
        console.log(result.data)
        if (result.data.domains && result.data.domains.cvalue ){
            window.kehucval = result.data.domains.cvalue.split(",");
        }else{
            window.kehucval =[];
        }
        
       var domain=document.domain;
 
    //    特殊域名判断

        for(var i=0;i<window.kehucval.length;i++){
            if (window.kehucval[i] == domain){
            // if (1) {
             zipUrl=base.newurl[0];
              getPTimestamp();
              break;
            }
       } 
        
    }
    loadTimestamp2()
    var hashMap = {
        Set: function (key, value) { this[key] = value },
        Get: function (key) { return this[key] },
        Contains: function (key) { return this.Get(key) == null ? false : true },
        Remove: function (key) { delete this[key] }
    };

    var hashMap2 = {
        Set: function (key, value) { this[key] = value },
        Get: function (key) { return this[key] },
        Contains: function (key) { return this.Get(key) == null ? false : true },
        Remove: function (key) { delete this[key] }
    };
    console.log("zhouhui")
   
    // var divisor = "lottery@alpha";
    var data = {
        timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0]
    };
    data = deal1(data);
    function deal1(data) {
        var divisor = "lottery@alpha";
        var tmp = [];
        $.each(data, function (key, val) {
            tmp[tmp.length] = key;
        });
        tmp.sort();
        var allParameters = "";
        $.each(tmp, function (i, key) {
            allParameters += key + data[key];
        }); // alert(allParameters);
        	// console.log(divisor + allParameters);
        var sign = $.md5(divisor + allParameters).toLocaleUpperCase();
        // console.log(sign);
        data.sign = sign;
        return data;
    }
    $.ajax({
       
        //		url: hostUrl + 'common/loadBaseDataZip',
        url: hostUrl + zipUrl,//'common/loadBaseDataZipH5',
        // url: hostUrl + 'mobile/05/007',
        type: 'post',
        data: data, // 参数
        async: true,
        success: function (data) {
           
            // 第二次调用
            var result = eval("(" + data + ")");
            if (result.code = 200 && result.data) {
                var fileName = result.data;
                fileName = fileName.replace("\\", "\/").replace("\\", "\/").replace("\\", "\/").replace("\\", "\/").replace("\\", "\/").replace("\\", "\/");
                var index = fileName.lastIndexOf("\/");
                fileName = fileName.substring(index + 1, fileName.length);
                JSZipUtils.getBinaryContent(result.data,
                    function (err, data) {
                        if (err) {
                            alert("err" + err);
                        };
                        try {
                            JSZip.loadAsync(data).then(function (zip) {
                                zip.file(fileName.replace("zip", "txt")).async("string").then(function (data1) {
                                    var baseData = eval('(' + data1 + ')');
                                    var dictList = baseData.data.dictList;
                                    for (var d in dictList) {
                                        var key = "";
                                        key = dictList[d].tableName + "-" + dictList[d].fieldName;

                                        if (!hashMap.Get(key)) {
                                            hashMap.Set(key, [dictList[d].dictKey + "-" + dictList[d].dictValue]);
                                        } else {
                                            var arr = hashMap.Get(key);
                                            if (arr.indexOf(dictList[d].dictKey + "-" + dictList[d].dictValue) == -1) {
                                                arr[arr.length] = dictList[d].dictKey + "-" + dictList[d].dictValue;
                                                hashMap.Set(key, arr);
                                            }
                                        }
                                    }
                                    for (var d in dictList) {
                                        var key = "";
                                        key = dictList[d].tableName + "-" + dictList[d].fieldName + "-" + dictList[d].dictKey;
                                        hashMap2.Set(key, dictList[d].dictValue);
                                    }
                                    myStorage.setItem("dictList", JSON.stringify(hashMap));
                                    myStorage.setItem("dictDetailList", JSON.stringify(hashMap2));
                                    //hashMap = null;
                                    myStorage.setItem("playDetailMap", JSON.stringify(baseData.data.lotteryData.playDetailMap));
                                    myStorage.setItem("lotteryPlayMap", JSON.stringify(baseData.data.lotteryData.lotteryPlayMap));
                                    myStorage.setItem("playPlayMap", JSON.stringify(baseData.data.lotteryData.playPlayMap));
                                    myStorage.setItem("sysConfigMap", JSON.stringify(baseData.data.lotteryData.sysConfigMap));
                                    //									myStorage.setItem("playContentMap", JSON.stringify(baseData.data.lotteryData.playContentMap));
                                    myStorage.setItem("playDetailValueMap", JSON.stringify(baseData.data.lotteryData.playDetailValueMap));
                                    // myStorage.setItem("time-version", myStorage.getItem("time-version").split("-")[0] + "-" + baseData.version.replace(/\"/g, ""));
                                    //数据请求
                                    base.zipLoading = true;
//                                   if (baseData.data.lotteryData.sysConfigMap.closeWebSite.cvalue==9){
//                                      document.getElementById("cpp").style.display="block"
//                                  }else{
//                                      document.getElementById("app").style.display = "block"
//                                  }
//                                  
                                    setTimeout(function () {
                                        hashMap = null;
                                        //										verdict = true;
                                    }, 200)
                                });
                            })
                        } catch (e) {
                            alert("e1" + e);
                        }

                    });
            }

        }
    });
    function loadBaseDataZip() {
        var data = {
            timestamp: new Date().getTime() - myStorage.getItem("time-version").split("-")[0]
        };
        data = deal1(data);
    }
    // -----------------------------获取时间戳--------------------------------
    function deal(url, data) {
        data = deal1(data);
        // console.log(window)
        // console.log(hostUrl)
        var result;
        $.ajax({
            url: hostUrl + url,
            type: 'post',
            data: data, // 参数
            async: false,
            dataType: 'json',
            contenttype: "application/text;charset=utf-8",
            success: function(data1) {
               
                result = data1;
                // if(myStorage.getItem("time-version")!= null && result.version && result.version != myStorage.getItem("time-version").split("-")[1] && !isLoadingDataBase) {
                //     loadBaseDataZip();
                // }
            },
            error: function() {
                // 跳转到登陆页面
               
                // console.log(url)
                // console.log( data)
            }
        });
      
        if (result && result.code == 401) { //
            console.log("登陆状态过期")
            localStorage.removeItem("token")
            localStorage.setItem("currentUser", null)
          
        };
      
        return result;

    }
    // function loadTimestamp() {
	// 	var data = {};
	// //	var result = deal('common/getTimestamp', data);
	// 	var result = deal('mobile/05/001', data);
    //     myStorage.setItem("time-version", new Date().getTime() - result.data+"-"+result.version);
       
    // }
    $(function() {
        // console.log('hhhllllll');
		if(myStorage.getItem("time-version")){
            var timeDiff = myStorage.getItem("time-version").split("-")[0];
			if(timeDiff == null) {
				// loadTimestamp();//获取时间戳
			};
			var localVersion = myStorage.getItem("time-version").split("-")[1];
			if(localVersion == null && !isLoadingDataBase) {
				loadBaseDataZip();//获取基础数据存入缓存
			};
		}else{
			// loadTimestamp();
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
}