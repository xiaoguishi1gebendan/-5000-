window.baseSokectQueue = [];
export function openWebSocket() {
     var divisor = "lottery@alpha";

    // var domain = "https://lottery-test-bucket2.oss-cn-hongkong.aliyuncs.com/";
    var domain = base.domain;
    var hostUrl = base.hostUrl;//http://47.91.168.10/
    var socketType = base.socketType;

    function deal1(data) {
        var tmp = [];
        $.each(data, function (key, val) {
            tmp[tmp.length] = key;
        });
        tmp.sort();
        var allParameters = "";
        $.each(tmp, function (i, key) {
            allParameters += key + data[key];
        }); // alert(allParameters);
        //	console.log(allParameters);
        var sign = $.md5(divisor + allParameters).toLocaleUpperCase();
        data.sign = sign;
        return data;
    }
    if ("WebSocket" in window) {
        var ddd = { timestamp: "" + new Date().getTime() - myStorage.getItem("time-version").split("-")[0] };
        ddd = deal1(ddd);
        // 打开一个 web socket
        // var ws = new WebSocket(socketType+"://"+window.location.host+"/common/socket?timestamp="+ddd.timestamp+"&sign="+ddd.sign);
        var ws = new WebSocket(socketType + base.local + ddd.timestamp + "&sign=" + ddd.sign);
        ws.onopen = function () {
            // Web Socket 已连接上，使用 send() 方法发送数据
            ws.send("发送数据");
            console.log("数据发送中...");
            //baseSokectQueue = new SokectQueue();
        };
        ws.onmessage = function (evt) {
            var received_msg = evt.data;
            if (received_msg) {
                baseSokectQueue.push(JSON.parse(received_msg));
            }
        };
        ws.onclose = function () {
            // 关闭 websocket
            setTimeout(function(){
                openWebSocket();
            },1000);
            console.log("连接已关闭...正在重新链接");

        };
        ws.error = function () {
            // 关闭 websocket
            console.log("连接异常...");
        };
    } else {
        // 浏览器不支持 WebSocket
        console.log("您的浏览器不支持 WebSocket!");
    }
}