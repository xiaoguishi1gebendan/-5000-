// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
window.ifred = false;
window.ifyellow = false;
window.ifblue = false;
window.ifgreen = false;
window.ifpurple = false;
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import Vuex from "vuex";
import store from "./vuex/store";
import moment from 'moment';
import utils from "@/assets/api/geturlkey";
import VueLazyload from 'vue-lazyload'
Vue.use(Vuex);
Vue.use(MintUI);

import './assets/source/font/iconfont.css'
import './assets/source/css/common/subject_Color.css'
import './assets/source/css/common/index.css'
import './assets/source/font/QuartzEF.css'
import "./assets/source/css/common/color-red.css"
    window.mapcolor = "#fa3956"
    window.bgmapcolor = "linear-gradient(90deg,  #fa3956, #ff6b52)"
    window.ifred = true
//-------------------------------以下是base需要jq,md5和myStorage
// import $ from 'jquery'
import md5 from 'js-md5'
$.md5 = md5


// import FastClick from 'fastclick'

// FastClick.attach(document.body);
// ---------------------基础网址


// 时间过滤器
window.getFotmatTime=function getFotmatTime(times, format) {
//   function getFotmatTime(times, format) {
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
    } else if (format == "yyyy-MM-dd HH:mm") {
        return year + "-" + month + "-" + day + " " + hour + ":" + minutes + ":" + second;
    }
}

Date.prototype.toLocaleString = function () {
    return this.getFullYear() + "-" + (this.getMonth() + 1) + "-" + this.getDate() + "  " + this.getHours() + ":" + this.getMinutes() + ":" + this.getSeconds();
};
// by zouyunxia start

Date.prototype.YMD = function (AddDayCount) {
  var dd = new Date();
  dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期
  var y = dd.getFullYear();
  var m = dd.getMonth() + 1;
      m=m>=10?m:("0"+m)
  var d = dd.getDate();
    d = d >= 10 ? d : ("0" + d)
  return y + "-" + m + "-" + d;
}

window.returnFloat= function(value) {
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
}

Vue.use(VueLazyload, {
    preLoad: 1,    //预加载高度的比例
    error: 'http://cdn.uehtml.com/201402/1392662591495_1140x0.gif',  //图像的src加载失败
    loading: 'http://cdn.uehtml.com/201402/1392662591495_1140x0.gif', //src的图像加载
    attempt: 1,  //尝试计数
    listenEvents: [ 'scroll', 'mousewheel' ] //你想要监听的事件,我个人喜欢全部监听，方便
});

Vue.filter('dateFmttime', (input) => {

    return  window.returnFloat(input)
})


Vue.filter('wei', (input) => {
    if(input==0){
        return '万'
    }else if(input==1){
        return '千'
    }else if(input==2){
        return '百'
    }else if(input==3){
        return '十'
    }else if(input==4){
        return '个'
    }

})
Vue.filter('isweishuAll',(value) => {
    var strA = ''
    for(var a = 0;a<value.length;a++){
        if(value.length-1==a){
            strA+=' '+value[a]+'： '
        }else{
            strA+=' '+value[a]+' '
        }

    }
    return strA;
})
Vue.filter('stringFilter',(input)=>{
    var str = ''+input
    if(str.indexOf('-')>-1){
        return str.split('-')[0];
    }else{
        return str;
    }
})
Vue.filter('toFixed2',(input)=>{
   var val = parseInt(input).toFixed(2);
   return val;
})
Vue.filter('tofixed',(input)=>{
    var val = Number(input).toFixed(2);
   return val;
})
Vue.filter('deleteZero',(number)=>{
    var newNumber = Number(number)
    return newNumber
})
Vue.filter('capitalizenew', (value) => {
    // const lastFmtString = dateFmtString || 'YYYY-MM-DD HH:mm:ss'
    /**
     * 参数1：要格式化的原始时间
     * 参数2：格式化的字符串
     */
    if(((+value[0]) + (+value[1]) + (+value[2]))>=10){
        return (+value[0]) + (+value[1]) + (+value[2])
    }else{
        return " "+((+value[0]) + (+value[1]) + (+value[2]))
    }

})
Vue.filter('capitalize', (value) => {
    // const lastFmtString = dateFmtString || 'YYYY-MM-DD HH:mm:ss'
    /**
     * 参数1：要格式化的原始时间
     * 参数2：格式化的字符串
     */
    return (+value[0]) + (+value[1]) + (+value[2])
})
Vue.filter('toFixed', (value) => {
  // const lastFmtString = dateFmtString || 'YYYY-MM-DD HH:mm:ss'
  /**
   * 参数1：要格式化的原始时间
   * 参数2：格式化的字符串
   */
  return  window.returnFloat(value)

})


Vue.filter('capitalizea', (value) => {
    // const lastFmtString = dateFmtString || 'YYYY-MM-DD HH:mm:ss'
    /**
     * 参数1：要格式化的原始时间
     * 参数2：格式化的字符串
     */
    return Math.floor(value)
})
Vue.filter('jointAll', (value) => {
    var str = '';
    // for(var key in value){
    //     str+=value[key]+' '
    //     }
    for(var key in value){
        for(var keymin in value[key]){
            str+=value[key][keymin]+' '
        }
    }
    return str;
})

Vue.filter('jointAllmax', (value) => {
    var str = 0;
    // for(var key in value){
    //     str+=value[key]+' '
    //     }
    for(var key in value){
        for(var keymin in value[key]){
            str+=Object.keys(value[key][keymin]).length
        }
    }
    return str*2;
})

Vue.filter('jointAllmaxw', (value) => {
    var str = 0;
    // console.log(value)
    // for(var key in value){
    //     str+=value[key]+' '
    //     }
    for(var key in value){
        for(var keymin in value[key]){
            str+=Object.keys(value[key][keymin]).length
        }
    }
    return str;
})

Vue.filter('jointAlls', (value,as) => {
    var str = '';
    if(as==1){
        for(var key in value){
            for(var keymin in value[key]){
                str+=value[key][keymin]+' '
            }
        }
    }else{
        var n=0;
        for(var key in value){
            n++;
            for(var keymin in value[key]){
                str+=value[key][keymin]+' '
            }
            if(n==as){
            str+=''
            }else{
            str+='|'
            }

        }
    }

    return str;
})
// 时
Vue.filter('mytime', (value, judeg) => {
    if (value.lotteryDraw.closeTime > 0) {
        if (judeg == 'miao') {
            // console.log(getFotmatTime(value.lotteryDraw.closeTime, 'HH:mm:ss').split(':')[2])
            return getFotmatTime(value.lotteryDraw.closeTime, 'HH:mm:ss').split(':')[2]
        } else if (judeg == 'fen') {
            return getFotmatTime(value.lotteryDraw.closeTime, 'HH:mm:ss').split(':')[1]
        } else if (judeg == 'shi') {
            return getFotmatTime(value.lotteryDraw.closeTime, 'HH:mm:ss').split(':')[0]
        }
    } else {
        if (value.lotteryDraw.nextTime - value.lotteryDraw.addTime + value.lotteryDraw.closeTime < 0) {
            if (judeg == 'miao') {
                return '00'
            } else if (judeg == 'fen') {
                return '00'
            } else if (judeg == 'shi') {
                return '00'
            }
        } else {
            if (judeg == 'miao') {
                return getFotmatTime(value.lotteryDraw.nextTime - value.lotteryDraw.addTime + value.lotteryDraw.closeTime, 'HH:mm:ss').split(':')[2]
            } else if (judeg == 'fen') {
                return getFotmatTime(value.lotteryDraw.nextTime - value.lotteryDraw.addTime + value.lotteryDraw.closeTime, 'HH:mm:ss').split(':')[1]
            } else if (judeg == 'shi') {
                return getFotmatTime(value.lotteryDraw.nextTime - value.lotteryDraw.addTime + value.lotteryDraw.closeTime, 'HH:mm:ss').split(':')[0]
            }
        }

    }
})
Vue.filter('mytimejs', (value, judeg) => {
    if (value.lotteryDraw.closeTime > 0) {
        if (judeg == 'miao') {
            // console.log(getFotmatTime(value.lotteryDraw.closeTime, 'HH:mm:ss').split(':')[2])
            return getFotmatTime(value.lotteryDraw.closeTime, 'HH:mm:ss').split(':')[2]
        } else if (judeg == 'fen') {
            return '00'
        } else if (judeg == 'shi') {
            return '00'
        }
    } else {
        if (value.lotteryDraw.nextTime - value.lotteryDraw.addTime + value.lotteryDraw.closeTime < 0) {
            if (judeg == 'miao') {
                return '00'
            } else if (judeg == 'fen') {
                return '00'
            } else if (judeg == 'shi') {
                return '00'
            }
        } else {
            if (judeg == 'miao') {
                return getFotmatTime(value.lotteryDraw.nextTime - value.lotteryDraw.addTime + value.lotteryDraw.closeTime, 'HH:mm:ss').split(':')[2]
            } else if (judeg == 'fen') {
                return '00'
            } else if (judeg == 'shi') {
                return '00'
            }
        }

    }
})
// 时
Vue.filter('mytimeAll', (value, judeg) => {
    // if(Math.floor(value.lotteryDraw.closeTime/1000)==0){
    //     value.lotteryDraw.lotteryNo++
    //     value.lotteryDraw.nextNo++
    //     value.lotteryDraw.shortNextNo++
    //     value.lotteryDraw.shortNo++
    //     value.lotteryDraw.closeTime = ((+value.lotteryDraw.nextTime) - (+value.lotteryDraw.addTime))
    // }else
    //  if  (value.lotteryDraw.closeTime > 0) {
        if (judeg == 'miao1') {
            return getFotmatTime(value.lotteryDraw.closeTime, 'HH:mm:ss').split(':')[2].split('')[0]
        }else if(judeg == 'miao2'){
            return getFotmatTime(value.lotteryDraw.closeTime, 'HH:mm:ss').split(':')[2].split('')[1]
        } else if (judeg == 'fen1') {
            return getFotmatTime(value.lotteryDraw.closeTime, 'HH:mm:ss').split(':')[1].split('')[0]
        } else if(judeg == 'fen2'){
            return getFotmatTime(value.lotteryDraw.closeTime, 'HH:mm:ss').split(':')[1].split('')[1]
        } else if(judeg == 'shi1'){
            return getFotmatTime(value.lotteryDraw.closeTime, 'HH:mm:ss').split(':')[0].split('')[0]
        } else if (judeg == 'shi2') {
            return getFotmatTime(value.lotteryDraw.closeTime, 'HH:mm:ss').split(':')[0].split('')[1]
        }

})
// 时
Vue.filter('mytimeAlljs', (value, judeg) => {
    // if(Math.floor(value.lotteryDraw.closeTime/1000)==0){
    //     value.lotteryDraw.lotteryNo++
    //     value.lotteryDraw.nextNo++
    //     value.lotteryDraw.shortNextNo++
    //     value.lotteryDraw.shortNo++
    //     value.lotteryDraw.closeTime = ((+value.lotteryDraw.nextTime) - (+value.lotteryDraw.addTime))
    // }else
    //  if  (value.lotteryDraw.closeTime > 0) {
        if (judeg == 'miao1') {
            return getFotmatTime(value.lotteryDraw.closeTime, 'HH:mm:ss').split(':')[2].split('')[0]
        }else if(judeg == 'miao2'){
            return getFotmatTime(value.lotteryDraw.closeTime, 'HH:mm:ss').split(':')[2].split('')[1]
        } else if (judeg == 'fen1') {
            return '0'
        } else if(judeg == 'fen2'){
            return '0'
        } else if(judeg == 'shi1'){
            return '0'
        } else if (judeg == 'shi2') {
            return '0'
        }

})
// 分分28
Vue.filter('ffeb', (value,a) => {
    if(a=='ge'){
        return value.split(',')[0]
    }else if(a=='shi'){
        return value.split(',')[1]
    }else if(a=='bai'){
        return value.split(',')[2]
    }else if(a=='he'){
        return ((+value.split(',')[0])+(+value.split(',')[1])+(+value.split(',')[2]))
    }
    // return "<span>"+(value.split(',')[0]) +"</span>+<span>"+ (value.split(',')[1]) +"</span>+<span>"+ (+value.split(',')[2])+"</span>=<span>"+((+value.split(',')[0])+(+value.split(',')[1])+(+value.split(',')[2]))+"</span>"
})
//走势判断生肖
Vue.filter('isany', (value) => {
    var any = JSON.parse(window.localStorage.getItem('isdonwu'));
    var str = '';
    for(var a = 0;a<any.data.length;a++){
        for(var p = 0;p<any.data[a].val.split(',').length;p++){
            if(value==any.data[a].val.split(',')[p]){
                str=any.data[a].name;
                break;
            }
        }

    }
    return  str
})



Vue.filter('maxomit', (value) => {
    Array.prototype.max = function(){
     return Math.max.apply({},this)
    }
    return value.max()
})

Vue.filter('addZero',(input) => {
    if (input.toString().substr(0,1) != 0 && input.toString().length<4){
        return "0"+input.toString()
    } else {
        return input
    }
})

Vue.filter('winnumyil', (value,yilou) => {
    var num = 0;
    for(var a = 0;a<yilou.length;a++){
        num+=yilou[a]
    }
    if(Math.ceil(num/value)==Infinity){
       return 0
    }
    return Math.ceil(num/value)
})



Vue.filter('continuoua', (value) => {
    Array.prototype.max = function(){
    return Math.max.apply({},this)
    }
    return value.max()
})
//判断走势单双

Vue.filter('isdanshuang', (value) => {
    if(value%2==1){
        return '单'
    }else{
        return '双'
    }
})
//走势判断合单双

Vue.filter('ishedan', (value) => {
    var num = 0;
    for(var l = 0;l<value.length;l++){
        if(l!=value.length-1){
            num+=value[l]
        }
    }
    if(num%2==1){
        return '合双'
    }else{
        return '合单'
    }
})
//判断跨度

Vue.filter('iskadu', (value) => {
    var atty = [];
    for(var a = 0;a<value.length;a++){
        atty.push(+value[a])
    }
    Array.prototype.max = function(){
    return Math.max.apply({},this)
    }
    Array.prototype.min = function(){
    return Math.min.apply({},this)
    }
    return atty.max()-atty.min()
})
//判断五行

// Vue.filter('iswuxin', (value) => {
// // 选号渲染
// console.log(value);
// var duoshao = JSON.parse(myStorage.getItem("playDetailMap"))[90][0].playValueList;


// var ste = '';
// for(var a = 0;a<duoshao.length;a++){
//     for(var u = 0;u<duoshao[a].detailValue.split(',').length;u++){
//         if(value==duoshao[a].detailValue.split(',')[u]){
//             ste = duoshao[a].value;
//             return ste;
//         }
//     }

// }

// })
Vue.filter("mytime1", (value, judeg) => {
  return getFotmatTime(value, judeg);
});

Vue.filter('dateFmt', (input, dateFmtString) => {
    const lastFmtString = dateFmtString || 'YYYY-MM-DD HH:mm:ss'
    return moment(input).format(lastFmtString)
})

Vue.filter("mory", (value) => {
  return  window.returnFloat(value);
});


Vue.filter('toFixeda',(value) => {
    // console.log(value.toFixed(2))
    return (value.toFixed(2))
})


// ----------myStorage----------------------------------------------------
window.myStorage = (new (function () {
    var storage; //声明一个变量，用于确定使用哪个本地存储函数
    if (window.localStorage) {
        storage = localStorage; //当localStorage存在，使用H5方式
    } else {
        storage = cookieStorage; //当localStorage不存在，使用兼容方式
    }
    this.setItem = function (key, value) {
        storage.setItem(key, value);
    };

    this.getItem = function (name) {
        return storage.getItem(name);
    };

    this.removeItem = function (key) {
        storage.removeItem(key);
    };
    this.clear = function () {
        storage.clear();
    };
})());



//------------------------------------以上是base需要jq,md5和myStorage
import base from './assets/api/base.js'
//切换一个直接访问端口号不经过cdn加速的地址
// if(document.domain == "www.444c39.com" || document.domain == "444c39.com"){
//     window.base.getApi().changeDomain();
// }
// ------------------------------以下是webscode
import { openWebSocket } from './assets/api/websocket.js'

import { jszip } from './assets/api/jszipbase.js'
import { ajax } from './assets/api/ajax.js'
 jszip()
        ajax()
window.bpp = document.getElementById("bpp");
function jichushuju(params) {
 bpp.style.display = "block"
    jszip(),
    ajax()
    setTimeout(() => {
        bpp.style.display = "none";

    }, 300);
}
/**
 *
 * @param {*} version
 * @param {1:普通版本 2：推广版本} type
 */
window.updata=function(version,type) {

    var timeversion= myStorage.getItem('time-version').split('-')[1];
    var timeversiontwo = (myStorage.getItem('time-version2'))?myStorage.getItem('time-version2').split('-')[1]:"";
    if (!JSON.parse(localStorage.getItem("dictDetailList"))) {
        jichushuju()
    }
    if ((timeversion != version && type == 1) || (timeversiontwo && timeversiontwo!=version && type==2) ){

        jichushuju()
    }
    if (!version){
        jichushuju()
    }
    // console.log(timeversion)
    // console.log(version)

}

window.updataa = function () {

    var timeversion = myStorage.getItem('time-version').split('-')[1];
    if (!JSON.parse(localStorage.getItem("dictDetailList"))) {
        jichushuju()
    }
}
window.changeLocal=function () {
    var currentUser=JSON.parse(localStorage.getItem('currentUser'))
    if (currentUser){
        var id = currentUser.id;
        // console.log(id)
        var currentUe=window.base.getApi().userInfo(id);
        if (currentUe.code==200){
            var currentUser1 = currentUe.data.user;
              localStorage.setItem("currentUser", JSON.stringify(currentUser1))
        }
        if (currentUe.code == 401){
            if (window.vm) {
                window.vm.$router.push({ path: "/login" })
            }
        }
    }

}

Vue.config.productionTip = false
localStorage.setItem("flash", 0)
Vue.prototype.msg= function (msg) {
    var colorAll = {}
    colorAll["01"] = "#ffc411";colorAll["011"] = "#ffdd11";colorAll["02"] = "#3585f2";colorAll["021"] = "#34c3f2";colorAll["03"] = "#808080";colorAll["031"] = "#a3a3a3";colorAll["04"] = "#ff8a00";colorAll["041"] = "#ffa200";colorAll["05"] = "#17d6df";colorAll["051"] = "#17dfd8";colorAll["06"] = "#5203fd";colorAll["061"] = "#5379e1";colorAll["07"] = "#bbbbbb";colorAll["071"] = "#d7d7d7";colorAll["08"] = "#ed3848"; colorAll["081"] = "#fb565a";colorAll["09"] = "#7f471d";colorAll["091"] = "#a95f2e";colorAll["10"] = "#2bc792";colorAll["101"] = "#86e36d";
    var str = ''
    for(var a = 0;a<msg.length;a++){
        str+='<span style="display: inline-block;margin-top: .02rem;width: .5rem;height: .5rem;margin-right: .03rem;text-shadow: 0 1px #000, 1px 0 #000, -1px 0 #000, 0 -1px #000;background: linear-gradient(90deg, '+colorAll[msg[a]]+', '+colorAll[msg[a]]+');color: white;line-height: .5rem;text-align: center;border-radius: 15%;font-size: .28rem;">'+Number(msg[a])+'</span>'
    }
    return str

};





window.vm=new Vue({

    // watch: {
    //     '$route': 'getPath'
    //   },

    watch: {
        $route: 'getPath',
      },

    el: '#app',
    router,
    components: { App },
    template: '<App/>',
    store,
    beforeCreate(){
        var currentUser = JSON.parse(localStorage.getItem("currentUser"))
        if (currentUser) {
            this.$store.state.currentUser = currentUser;
            this.$store.state.userid = currentUser.id;
        } else {
            // this.$router.push({path:"/login"})
        }

        openWebSocket()

    },
    mounted:function(){
    
      this.ishaph()
        this.onlosd()
    },
    methods: {
        openAgain(){            
            //监听浏览器当前页面是否被激活的事件
            var hiddenProperty = 'hidden' in document ? 'hidden' :'webkitHidden' in document ? 'webkitHidden' :'mozHidden' in document ? 'mozHidden' : null;
            var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
            var onVisibilityChange = function(){
                if(!document[hiddenProperty]){ 
                    var url = window.location.href
                    window.location.reload()
                }
            }
            document.addEventListener(visibilityChangeEvent, onVisibilityChange);
        },
        ishaph(){
            var $this = this;
            setTimeout(function(){
                //   if (window.location.hash.match("#/register")||window.location.hash.match("#/home")){
                  if($this.$route.path=='/register'||$this.$route.path=='/home'){
                    console.log('没有刷新数据')
                  } else {
                    $this.$router.push({ path: "/home" })
                  }
            },500)
        },
        getrulcanshu(){
            let id = utils.getUrlKey('id');
            var lociosAndroid=localStorage.getItem("iosAndroid")
            if(id!=null){
                if(id == 'iosAndroid'){
                    this.$store.state.isid = 'yes'
                } 
                else{
                    this.$store.state.isid = 'no'
                }
            }
            if (lociosAndroid) {
                // alert("dd")
                this.$store.state.isid = 'yes'
            }
           
            
        },
         getPath() {
             console.log(this.$route.path);
             
            if(this.$route.path == "/bet"){
                $('body').css('overflow','hidden')
              }else{
                $('body').css('overflow','scroll')
              }
             if (this.$store.state.loadingBlock[this.$route.path.split("/")[1]] == 1){

                 window.bpp.style.display = "block";
                 this.$store.state.loadingBlock[this.$route.path.split("/")[1]]=2
                    setTimeout(() => {
                        window.bpp.style.display = "none";
                    },800);
             }

             if (this.$route.path == "/Buycolornew" ||this.$route.path == "/buycolor"){
                $('.foottab ul li:nth-of-type(3) dl dd').css('color', 'red')
                 var dtbgg = document.getElementsByClassName("dtbggo")[0];
                 dtbgg.classList.add("foted");
            }else{
                 $('.foottab ul li:nth-of-type(3) dl dd').css('color', '#999');
                 var dtbgg = document.getElementsByClassName("dtbggo")[0];
                 dtbgg.classList.remove("foted");
            }
         },
        onlosd() {
            var oHtml = document.getElementsByTagName('html')[0];
            var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
            oHtml.style.fontSize = oWidth / 750 * 100 + 'px';
        },
        zzz(baseSokectQueue){
            var lotteryDraw = baseSokectQueue.shift();
            // console.log(lotteryDraw);
            for(var a = 0;a<this.$store.getters.getcolorsj.data.lotteryList.length;a++){
               
                if(this.$store.getters.getcolorsj.data.lotteryList[a].status!=8){
                    if(Math.floor(this.$store.getters.getcolorsj.data.lotteryList[a].lotteryDraw.closeTime/1000)<=0){
                        var shortNextNoLen = this.$store.getters.getcolorsj.data.lotteryList[a].lotteryDraw.shortNextNo.length;
                        var shortNoLen = this.$store.getters.getcolorsj.data.lotteryList[a].lotteryDraw.shortNo.length;
                        this.$store.getters.getcolorsj.data.lotteryList[a].lotteryDraw.lotteryNo++
                        this.$store.getters.getcolorsj.data.lotteryList[a].lotteryDraw.nextNo++
                        this.$store.getters.getcolorsj.data.lotteryList[a].lotteryDraw.shortNextNo++;
                        this.$store.getters.getcolorsj.data.lotteryList[a].lotteryDraw.shortNo++;
                        this.$store.getters.getcolorsj.data.lotteryList[a].lotteryDraw.closeTime = JSON.parse(window.localStorage.getItem('isstrArry'))[a];
                        this.$store.getters.getcolorsj.data.lotteryList[a].lotteryDraw.result = '';
                        if(shortNextNoLen!=this.$store.getters.getcolorsj.data.lotteryList[a].lotteryDraw.shortNextNo.length){
                            for(var ii=0;ii<(shortNextNoLen-this.$store.getters.getcolorsj.data.lotteryList[a].lotteryDraw.shortNextNo.length);ii++){
                                this.$store.getters.getcolorsj.data.lotteryList[a].lotteryDraw.shortNextNo = "0"+this.$store.getters.getcolorsj.data.lotteryList[a].lotteryDraw.shortNextNo;
                            }
                        }
                        if(shortNextNoLen!=(this.$store.getters.getcolorsj.data.lotteryList[a].lotteryDraw.shortNo).toString.length){
                            for(var ii=0;ii<(shortNextNoLen-this.$store.getters.getcolorsj.data.lotteryList[a].lotteryDraw.shortNo.length);ii++){
                                this.$store.getters.getcolorsj.data.lotteryList[a].lotteryDraw.shortNo = "0"+this.$store.getters.getcolorsj.data.lotteryList[a].lotteryDraw.shortNo;
                            }
                        }
                    }
                    this.$store.getters.getcolorsj.data.lotteryList[a].lotteryDraw.closeTime -= 1000;
                }

                if(lotteryDraw!=undefined){
                    if (!this.$store.getters.getcolorsj.data.lotteryList) {
                        return
                    }
                    if(this.$store.getters.getcolorsj.data.lotteryList[a].id==lotteryDraw.lotteryId){
                        this.$store.getters.getcolorsj.data.lotteryList[a].lotteryDraw.closeTime = lotteryDraw.remainTime;
                        this.$store.getters.getcolorsj.data.lotteryList[a].lotteryDraw.lotteryNo = lotteryDraw.lotteryNo;
                        this.$store.getters.getcolorsj.data.lotteryList[a].lotteryDraw.shortNo = lotteryDraw.shortNo;
                        this.$store.getters.getcolorsj.data.lotteryList[a].lotteryDraw.nextNo = lotteryDraw.nextNo;
                        this.$store.getters.getcolorsj.data.lotteryList[a].lotteryDraw.shortNextNo = lotteryDraw.shortNextNo;
                        this.$store.getters.getcolorsj.data.lotteryList[a].lotteryDraw.result = lotteryDraw.result;
                        // if(!!lotteryDraw.addTime){
                        this.$store.getters.getcolorsj.data.lotteryList[a].lotteryDraw.addTime = lotteryDraw.addTime;
                        // }
                    }

                }
            }

            if(lotteryDraw!=undefined){
                   var str = {}
                   //历史开奖记录
                // if(!!$this.$store.state.ishistorydraw[adds]){

                //  }else{
                //      $this.$store.state.ishistorydraw[adds] = base.getApi().getLotteryDraw(adds).data.lotteryDrawList
                //      $this.lottershi = $this.$store.state.ishistorydraw[adds];
                //  }
                if(!!this.$store.state.ishistorydraw[lotteryDraw.lotteryId]){
                    this.$store.state.ishistorydraw[lotteryDraw.lotteryId].splice((this.$store.state.ishistorydraw[lotteryDraw.lotteryId].length)-1,1)
                    str.closeTime = lotteryDraw.remainTime;
                    str.lotteryNo = lotteryDraw.lotteryNo;
                    str.shortNo = lotteryDraw.shortNo;
                    str.nextNo = lotteryDraw.nextNo;
                    str.shortNextNo = lotteryDraw.shortNextNo;
                    str.result = lotteryDraw.result;
                    str.addTime = lotteryDraw.addTime;
                    str.lottery = this.$store.state.ishistorydraw[lotteryDraw.lotteryId][1].lottery
                    // console.log(this.$store.state.ishistorydraw[lotteryDraw.lotteryId])
                    // str.lottery.name =  this.$store.state.ishistorydraw[lotteryDraw.lotteryId][2].lottery.name
                    this.$store.state.ishistorydraw[lotteryDraw.lotteryId].unshift(str);
                    // var a;

                    // for(var i = 0;i<this.$store.state.ishistorydraw[lotteryDraw.lotteryId].length;i++){
                    //     if(i==this.$store.state.ishistorydraw[lotteryDraw.lotteryId].length-1){

                    //     }else{
                    //         a = this.$store.state.ishistorydraw[lotteryDraw.lotteryId][i+1]
                    //         this.$store.state.ishistorydraw[lotteryDraw.lotteryId][i] = a
                    //     }
                    //     // console.log(this.$store.state.ishistorydraw[lotteryDraw.lotteryId][i].lotteryNo);
                    // }
                    // console.log(lotteryDraw)
                    // this.$store.state.ishistorydraw[lotteryDraw.lotteryId][0].closeTime = lotteryDraw.remainTime;
                    // this.$store.state.ishistorydraw[lotteryDraw.lotteryId][0].lotteryNo = lotteryDraw.lotteryNo;
                    // this.$store.state.ishistorydraw[lotteryDraw.lotteryId][0].shortNo = lotteryDraw.shortNo;
                    // this.$store.state.ishistorydraw[lotteryDraw.lotteryId][0].nextNo = lotteryDraw.nextNo;
                    // this.$store.state.ishistorydraw[lotteryDraw.lotteryId][0].shortNextNo = lotteryDraw.shortNextNo;
                    // this.$store.state.ishistorydraw[lotteryDraw.lotteryId][0].result = lotteryDraw.result;
                    // this.$store.state.ishistorydraw[lotteryDraw.lotteryId][0].addTime = lotteryDraw.addTime;
                }else{
                    // this.$store.state.ishistorydraw[lotteryDraw.lotteryId] = window.base.getApi().getLotteryDraw(lotteryDraw.lotteryId).data.lotteryDrawList
                }
            }
        },
    },
    created(){
        //   window.cpp = document.getElementById("cpp");
        window.base.getApi().phtupian1().then((res)=>{
            this.$store.state.isphtuAll =res.data;
            this.$store.state.xinyunpic = res.data.result
        })

        window.localStorage.removeItem('isyiji')
        window.localStorage.removeItem('iserji')
        //存基础数据
        this.$store.state.sysConfigMap = JSON.parse(localStorage.getItem("sysConfigMap"));
        // var localHomeTitle = window.base.getApi().homeqmList(1).data[0];
        //     if(!!this.$store.state.homePopData){
        //         var localHomeTitle=this.$store.state.homePopData;
        //    }else{
        //        console.log("111111111111111111")
        //         this.$store.state.homePopData=window.base.getApi().homeqmList(1).data[0];
        //         var localHomeTitle=this.$store.state.homePopData;
        //    }
       if (window.localStorage.getItem("popInf")){
            var localHomeTitle=JSON.parse(window.localStorage.getItem("popInf"));
       } else {
            var pop = window.base.getApi().homeqmList(1)
            if (pop.code === 200) {
                var popData = pop.data
                var localHomeTitle= popData
                window.localStorage.setItem("popInf",JSON.stringify(popData))
            }  
       }
        var animalsCollections =  window.base.getApi().getAnimalsCollections();
        window.localStorage.setItem('isdonwu',JSON.stringify(animalsCollections))
        this.$store.state.ishometankuangtesxt = localHomeTitle[0];
        // console.log(this.$store.state.ishometankuangtesxt)
        this.$store.state.ishometankuang = 'yes';
        if(Object.keys(this.$store.getters.getcolorsj).length){
            // this.shujuAlls = this.$store.getters.getcolorsj;
        }else{
            var lottery=window.base.getApi().lottery();
            // alert(lottery.data.lotteryList.length)
            var strArry = [];
            for(var a = 0;a<lottery.data.lotteryList.length;a++){
                strArry.push(lottery.data.lotteryList[a].lotteryDraw.nextTime-lottery.data.lotteryList[a].lotteryDraw.addTime)
            }
            // console.log(strArry);
           
                window.localStorage.setItem('isstrArry',JSON.stringify(strArry))
           
            // this.shujuAlls = lottery;
            this.$store.commit('getplaycolor', lottery);
            // console.log(this.$store.getters.getcolorsj);
        }
        //Sokect下的数据
        // if(!this.$store.state.isLoadBuyTimer){
        //     this.$store.state.isLoadBuyTimer = true;
        var $this = this;
        setInterval(function(){
            $this.zzz(baseSokectQueue);
            if(!!location.href.split('?')[1]){
                if(location.href.split('?')[1].split('=')[1]==1){
                    $('.isgaodu').show();
                    $('.footer').css('position','fixed');
                 }
            }
            $this.getrulcanshu()
          
        },1000);
        // }

        var timmmer = setInterval(function(){
            if(window.base.zipLoading){
                var lotteryPlayMap = JSON.parse(window.localStorage.getItem('lotteryPlayMap'));
                $this.$store.commit('suoyoucaizhong', lotteryPlayMap);
                $this.$store.commit('yijiwanfa', JSON.parse(window.localStorage.getItem('playPlayMap')));
                $this.$store.commit('erjiwanfa', JSON.parse(window.localStorage.getItem('playDetailMap')));
                // $this.$store.getcolorsj(JSON.parse(window.localStorage.getItem('lotteryPlayMap')));
                //  $this.$store.getter.getawnfaAll('2')
                // console.log(lotteryPlayMap)

                // for(var variable  of lotteryPlayMap){   //variable  为 index
                //     console.log(variable )   //0 1 2
                //   }
                 $this.$store.getters.getawnfaAll(34);
                clearInterval(timmmer);
            }
        },10);
        // console.log(222222222222)
    //    console.log( $this.$store.state.colorplay)
// 
    }

})


var $this = this;
setTimeout(() => {
    // if (JSON.parse(localStorage.getItem("playDetailValueMap"))){
        // window.onlineURL = JSON.parse(myStorage.getItem("sysConfigMap")).onlineCustomService.cvalue;
         bpp.style.display = "none"
    // }
   

}, 800);


