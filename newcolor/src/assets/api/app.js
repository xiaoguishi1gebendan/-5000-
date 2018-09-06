
//判断是不是安卓环境
function isAndroid(){
	var u = navigator.userAgent, app = navigator.appVersion;   
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器   
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端  
	if(isAndroid){  
	    return true;  
	    }else{
	    	return false;
	    }
}
// 打开浏览器链接
function geturlIos() {
	window.webkit.messageHandlers.jumpSatWithURLString.postMessage('https://f18.livechatvalue.com/chat/chatClient/chatbox.jsp?companyID=876510&configID=72957&jid=8025085340&s=1')
}
function geturlAnd() {
	// $.tips("hahah")
	javascript: js2android.jumpCustomerService('https://f18.livechatvalue.com/chat/chatClient/chatbox.jsp?companyID=876510&configID=72957&jid=8025085340&s=1');

}

export function kefu () {
	if (isAndroid()) {
		window.ifonser=false
		geturlAnd()
	} else {
		window.ifonser = false
		geturlIos()
	}
}
 








/**
 * 清除返回缓存大小
 * @param {Object} userId
 */
function cacheSize(){
	if(isAndroid()){
		getFileSize()
	}else{
		getFileSizeIos()
	}
}

/**
 * 清除App缓存
 * @param {Object} userId
 */

function clearCache(){
	 if(isAndroid()){
    	clearCacheAndroid();
    }else{
    	clearCacheIOS()
    }
}
/**
 * 清除安卓缓存方法
 * @param {Object} id
 */
function clearCacheAndroid(){
	javascript:js2android.clearH5Data();
	
}

/**
 * 清除IOS缓存方法
 * @param {Object} id
 */
function clearCacheIOS(){
	window.webkit.messageHandlers.cleanCache.postMessage('q')
}

/**
 * 发送userID给安卓或者iOS
 * @param {Object} id
 */
function sendUserId(id){
	var userId = id;
    if(isAndroid()){
    	invokeAndroidJPush(userId);
    }else{
    	invokeIOSJPush(userId)
    }
}

/**
 * 调用安卓极光推送设置别名方法
 * @param {Object} userId
 */
function invokeAndroidJPush(userId){
	　javascript:js2android.registerJPush(userId);
}

/**
 * 调用安卓极光推送设置别名方法
 * @param {Object} userId
 */
function invokeIOSJPush(userId){
//	window.webkit.messageHandlers.callFunction.postMessage(userId)
	window.webkit.messageHandlers.registerAlias.postMessage(userId);
}

/**
 * 退出安卓或者iOS
 * @param {Object} id
 */
function userExit(){
    if(isAndroid()){
    	invokeAndroidJPushExit();
    }else{
    	invokeIOSJPushExit()
    }
}

/**
 * 调用安卓极光推送退出登录
 * @param {Object} userId
 */
function invokeAndroidJPushExit(){
	　　javascript:js2android.unRegisterJPush();
}

/**
 * 调用ios极光推送退出登录
 * @param {Object} userId
 */
function invokeIOSJPushExit(){
//	window.webkit.messageHandlers.callFunction.quitApp()
	window.webkit.messageHandlers.deleteAlias.postMessage('n')
}


/**
 * 调用安卓返回缓存大小
 * @param {Object} userId
 */
function getFileSize(){
	javascript:js2android.getFileSize();	
}

/**
 * 调用IOS返回缓存大小
 * @param {Object} userId
 */
function getFileSizeIos(){
	window.webkit.messageHandlers.getCacheSize.postMessage('n')
}

