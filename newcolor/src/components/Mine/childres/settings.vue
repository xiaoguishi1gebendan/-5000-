<template>
    <div  style="width:100%;height:100%;background:#f5f5f5; position: absolute;top: 0;z-index:1000;position: relative;overflow:hidden">
         <headertop :title="title" style="position:" id="ferr"> </headertop>
        <!-- 顶部 -->
        
        <!-- 主内容区 -->
        <div class="content" :style="{ height: conheight + 'px' }">
            <!--未登录状态-->
            <div class="notlog">
                <div class="setting">
                    <h3>账户安全设置</h3>
                </div>
                <ul class="list">
                    <li>
                        <a to="/changeTransactionPassword">
                        <div class="licontent" id="udpateTradePwdDiv" @click="jiaoyimima">
                            <div class="lileft">
                               <span> 修改交易密码</span> 
                            </div>
                            <div class="liright">
                                <span id="unSetSpan" v-if="ifset" style=";top: 0;margin-right: 0px;">未设置</span>
                                <i class="iconfont"></i>
                            </div>
                        </div>
                        </a>
                    </li>
                    <li>
                        <a to="/updatePassword" @click="updatapassword">
                            <div class="licontent" id="udpatePwdDiv">
                                <div class="lileft">
                                    修改登录密码
                                </div>
                                <div class="liright">
                                    <i class="iconfont"></i>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="setting">
                <h3>通用</h3>
            </div>
            <ul class="list">
               <li>
                    <a  id="feedbackDiv" @click="playRuleFuncA">
                        <div class="licontent">
                            <div class="lileft">
                                玩法规则
                            </div>
                            <div class="liright">
                                <i class="iconfont"></i>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a  id="feedbackDiv" @click="settings">
                        <div class="licontent">
                            <div class="lileft">
                                详细设定
                            </div>
                            <div class="liright">
                                <i class="iconfont"></i>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a  id="feedbackDiv" @click="winAmountFuncA">
                        <div class="licontent">
                            <div class="lileft">
                                奖金详情
                            </div>
                            <div class="liright">
                                <i class="iconfont"></i>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a  id="feedbackDiv" @click="gotosuggest">
                        <div class="licontent">
                            <div class="lileft">
                                意见反馈
                            </div>
                            <div class="liright">
                                <i class="iconfont"></i>
                            </div>
                        </div>
                    </a>
                </li>
                <li  @click="gotoaboutus">
                    <a to="/aboutus">
                        <div class="licontent" id="aboutUsDiv">
                            <div class="lileft">
                                关于我们
                            </div>
                            <div class="liright">
                                <i class="iconfont"></i>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <div class="licontent" id="netpersec" @click="netpersecclick">
                        <div class="lileft">
                            网速检测
                        </div>
                        <i id="refresh" ref="iconfont" style="display:none" class="iconfont"></i>
                        <div class="liright">
                            
                            <span id="miao">{{time}}</span>
                            <i class="iconfont" ></i>
                        </div>
                    </div>
                </li>
                 <li>
                    <div class="licontent" id="netpersec" @click="removeItem">
                        <div class="lileft">
                           清空缓存
                        </div>
                      <i id="refreshh" ref="iconf" style="display:none" class="iconfont"></i>
                        <div class="liright">
                            <span>{{huancunsize}}</span>
                            <i class="iconfont " ></i>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="licontent" id="versionnumber">
                        <div class="lileft">
                            当前版本号
                        </div>
                        <div class="liright" style="margin-right: 0.3rem;">
                            <span id="version">{{version}}</span>
                        </div>
                    </div>
                </li>
               
            </ul>
            <!--退出登录-->
            <div class="logout" >
                <input type="button" @click="lay" name="" id="" value="退出登录">
            </div>
            <!-- <div class="tixing" ref="stt">
               
                 <div>
                    <p style="margin-top:0.2rem;">提示</p>
                    <p style="line-height:0.7rem;color:#999;">确定退出登录?</p>
                    <p> <span @click="quxiao">取消</span><span @click="layout">确定</span></p>
                   
                </div> 
                <div></div>
             </div> -->
        </div>
        <div ref="stt" style="display:none">
           <Dailog content="确定退出登录?"
                    :cancelQx="quxiao"
                    :confirm="layout"
                    
                    >
            </Dailog> 
           
        </div>
       <!-- <div v-if="ifcard">
          <Dailog content="您没有设置资金密码"
                    :cancelQx="know"
                    :confirm="goseting"
                    sured="去设置"
                    >
            </Dailog> 
       </div> -->

         <transition name="slide">
           <router-view></router-view>
        </transition>
    </div>
    
</template>

<script>
import headertop from "../../header/header";
import Dailog from "../../dailog/dailog";

export default {
  components: {
    headertop,
    Dailog
  },
  data() {
    return {
      title: "设置",
      time: "",
      st: "",
      version: "",
      imgrote: "",
      huancunsize: "",
      imgroteee: "",
      ifset:false,
      conheight:""
      // ifcard:false
    };
  },
  mounted: function() {
    this.st = new Date();
     this.version = myStorage.getItem("time-version").split("-")[1];
    var that = this;
    console.log(localStorage.getItem("token"));
    if (!localStorage.getItem("token")) {
      $(".logout").hide();
      $(".notlog").hide();
    } else {
      this.time = myStorage.getItem("time");
     
      console.log(this.version);
    }

    this.localitem();
    this.conheight=document.getElementsByTagName("body")[0].offsetHeight-document.getElementsByClassName("pde")[0].offsetHeight-document.getElementById("ferr").offsetHeight;
    console.log(this.conheight)
  },
  methods: {
    
     winAmountFuncA(){
      this.$router.push({ path: "/bonusdetails" });
    },
    playRuleFuncA(){
        this.$router.push({ path: "/gamerules" });
    },
     settings(){
        this.$router.push({ path: "/settings" });
    },
    // 以下周会加的
    //  goseting() {
    //   this.$router.push({ path: "/addbankcard" });
    //    this.ifcard=false
    // },
    // know() {
    //   this.ifcard=false
    // },
    lay() {
      this.$refs.stt.style.display = "block";
      
    },
    quxiao() {
      this.$refs.stt.style.display = "none";
    },
    removeItem() {
      clearInterval(this.imgroteee);
      $("#refreshh").css("display", "inline-block");
      $("#refreshh").addClass("refreshdh");
      var self = this;
      var i = 0;
      var down = this.$refs.iconf;
      console.log(down);
      this.imgroteee = setInterval(() => {
        // console.log(i)
        down.style.transform = `rotate(${i}deg)`;
        i = i + 4;
      }, 1);
      
      setTimeout(function() {
        $("#refreshh").removeClass("refreshdh");
        $("#refreshh").css("display", "none");
        self.huancunsize = "0.00M";
        clearInterval(self.imgroteee);
        myStorage.clear();
        base.getApi().loadTimestamp1().then((res)=>{
          var result = res;
          myStorage.setItem("time-version", new Date().getTime() - result.data+"-"+result.version);
          var animalsCollections = base.getApi().getAnimalsCollections();
          window.localStorage.setItem('isdonwu',JSON.stringify(animalsCollections))
        });
        self.$store.state.homeData = "";
        console.log(self.$store.state.homeDataN);
        if (!myStorage.getItem("token")) {
          $(".logout").hide();
          $(".notlog").hide();
        }
      }, 600);
      this.clearVuex();
      var lottery=window.base.getApi().lottery();
      this.$store.commit('getplaycolor', lottery);
    },
    localitem() {
      var size = 0;
      console.log(window.localStorage);
      for (var item in window.localStorage) {
        if (window.localStorage.hasOwnProperty(item)) {
          size += window.localStorage.getItem(item).length;
        }
      }
      console.log(
        "当前localStorage剩余容量为" + (size / 1024 / 1024).toFixed(2) + "M"
      );
      this.huancunsize = (size / 1024 / 1024).toFixed(2) + "M";
      console.log(this.huancunsize);
    },
    updatapassword() {
      var localUser = JSON.parse(myStorage.getItem("currentUser"));
      if (localUser.type == 2) {
        $.tips("对不起,试玩账号不能修改登录密码");
      } else {
        this.$router.push({ path: "/updatepassword" });
      }
    },
    jiaoyimima() {
      var localUser = JSON.parse(myStorage.getItem("currentUser"));
      if (localUser.type == 2) {
        $.tips("对不起,试玩账号不能修改交易密码");
      } else {
        if(localUser.userCardList.length){
          this.$router.push({ path: "/jiaoyimima" });
        }else{
           this.$router.push({ path: "/addbankcard" });
        //  this.ifcard=true
        }
        
      }
      
    },
    showspeed() {
      var st = new Date();
      var fs = 1.46 * 1024;
      var l = 2;
      var et = new Date();
      var alltime = fs * 1000 / (et - this.st);
      var Lnum = Math.pow(10, l);
      var calcspeed = Math.round(alltime * Lnum) / Lnum;
      var time = Math.round(calcspeed / 128 * Lnum) / Lnum + "M/秒";
      localStorage.setItem("time", time);
      this.time = myStorage.getItem("time");
      console.log(this.time);
    },
    netpersecclick() { 
      clearInterval(this.imgrote);
      $("#refresh").css("display", "inline-block");
      $("#refresh").addClass("refreshdh");
      var self = this;
      var i = 0;
      var down = this.$refs.iconfont;
      console.log(down);
      this.imgrote = setInterval(() => {
        down.style.transform = `rotate(${i}deg)`;
        i = i + 4;
      }, 1);
      setTimeout(function() {
        $("#refresh").removeClass("refreshdh");
        $("#refresh").css("display", "none");
        document.getElementById("miao").style.display = "inline-block";
        self.showspeed();
        clearInterval(self.imgrote);
        // console.log(this.time);
      }, 2000);
    },

    gotoaboutus() {
      localStorage.setItem("type", 1);
      this.$router.push({ path: `/aboutus` });
    },
    // 以上周会加的
    clearVuex() {
      this.$store.commit("clearVuex");
    },
    layout() {
      this.$refs.stt.style.display = "block";
      myStorage.setItem("currentUser", null);
      window.localStorage.removeItem("token");
      // this.$store.state.homeData="";
      localStorage.setItem("qdblock", 1);
      // this.$router.push({ path: "home" });
      this.$router.go(-1)
      this.clearVuex();
      var lottery=window.base.getApi().lottery();
      this.$store.commit('getplaycolor', lottery);
    },
    goBack() {
      this.$router.push({ path: "/mine" }); //底层等同于 history.back()back() 方法可加载历史列表中的前一个 URL（如果存在）。
      // 调用该方法的效果等价于点击后退按钮或调用 history.go(-1)。
    },

    gotosuggest() {
      if (myStorage.getItem("token")) {
        console.log(myStorage.getItem("token"));
        this.$router.push({ path: "/suggestion" });
      } else {
        $.tips("请登录查看", 1000);
        // that.$router.push({path:'/minesetting'})
      }
    }
  },
  watch: {},

  beforeCreate: function() {},
  created() {
    var currentUser= JSON.parse(localStorage.getItem("currentUser"))
    if(currentUser){
      var userCarlength=currentUser.userCardList.length;
      console.log(userCarlength)
      if(userCarlength){
        this.ifset=false
      }else{
        this.ifset=true
      }
    }

  }
};
</script>

<style scoped lang="less">

.tixing {
  
//   position: fixed;
//   width: 100%;
//   height: 100%;
//   top: 0;
  display: none;
//   font-size: 0.28rem;
//   > div:nth-child(2) {
//     width: 100%;
//     height: 100%;
//     position: absolute;
//     background: #000;
//     opacity: 0.3;
//     top: 0;
//   }
//   > div:nth-child(1) {
//     position: absolute;
//     border-radius: 6px;
//     z-index: 1;
//     top: 40%;
//     left: 50%;
//     margin-left: -100px;
//     // width:300px;
//     background: #fff;
//   }
}
/*主内容区*/
.content{
  overflow: scroll;
}
.setting {
  width: 100%;
}
.setting h3 {
      width: 92%;
    margin: 0 auto;
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.28rem;
    color: #a0a0a0;
    text-align: left;
}
.list li {
  height: 0.9rem;
  background: #fff;
  border-bottom: 0.01rem solid whitesmoke;
}
.list li:last-child {
  border-bottom: none;
}
.list li .licontent {
  width: 92%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  line-height: 0.9rem;
}
.list li .lileft {
  font-size: 0.28rem;
  color: #000;
}
.list li .liright {
  color: #999;
  font-size: 0.28rem;
}
.list li .liright i {
  font-size: 0.28rem;
  margin-left: 0.1rem;
}
.logout {
  margin-top: 0.12rem;
  width: 100%;
  height: 0.9rem;
  line-height: 0.9rem;
}
.logout input {
  height: 0.9rem;
  line-height: 0.9rem;
  width: 100%;
  text-align: center;
  background: #fff;
  font-size: 0.28rem;
  // color: #de4e5e;
  border: none;
  outline: none;
  vertical-align: top;
}
</style>