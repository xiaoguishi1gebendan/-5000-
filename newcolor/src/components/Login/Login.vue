<template>
    <div class="root" style="overflow: hidden;position:fixed;top:0;width:100%;height:100%;background: #EEEEEE;z-index:1000;    position: relative;">
       
         <headertop title="登录" :goBack="goBack"> </headertop>
        <div class="ocontent">
            <h1>欢迎来到{{isbiaoti}}</h1>
            <ul>
                <li>
                    <div class="img">
                        <img src="../../assets/source/imgs/images/person.png" alt="">
                    </div>
                    <input type="text" name="userName" id="userName" placeholder="请输入您的帐号" :value="username" ref="input1"/>
                </li>
                <li>
                    <div class="img">
                        <img src="../../assets/source/imgs/images/lock.png" alt="">
                    </div>
                    <input type="password" name="password" id="password" placeholder="请输入您的密码"  ref="input2"/>
                </li>
            </ul>
            <div class="help">
                <span id="customServiceOnlineA"> 
                     <router-link to="/onlineSevice" style="color:#666;">在线客服</router-link>
                    <!-- <a  target="_blank" style="color:#666;" href="https://f18.livechatvalue.com/chat/chatClient/chatbox.jsp?companyID=876510&configID=72957&jid=8025085340&s=1">
                    在线客服</a> -->
                </span>
                 <span id="forgotPwdA"> 
                     <!-- <router-link :to="xianluurl" style="color:#666;">{{xianlu}}</router-link> -->
                     <a   :href="xianluurl" style="color:#666" class="zxjc">{{xianlu}}</a> 
                          <!-- <a  target="_blank" :href="xianluurl" style="color:#666">{{xianlu}}
                         </a>  -->
                </span>
                <span id="forgotPwdA" @click="forgetpass">忘记密码</span>
            </div>
            <div class="btn" @click="currentLogin" id="wx_loginSubmit_1">
                登录
            </div>
            <div class="func">
                <router-link to='/register'>
                    立即注册 
                </router-link> 
                <router-link to='/dailiregist' v-if="ifdaili &&!ifSpecialAgentIpcvalue">代理注册</router-link>
                <a v-if="ifSpecialAgentIpcvalue" :href="SpecialAgentJumpAddress">特殊代理注册</a>
                <router-link to="/trialGame">免费试玩</router-link>
                <!-- <a href="/trialGame">免费试玩</a> -->
            </div>
        </div>


        <div class="ttixing" ref="stt">
           
                <div>
                    <p></p>
                    <p style="line-height:0.7rem;color:#999;">请联系在线客服修改密码</p>
                    <p style="font-size:0.18rem;line-height:0.5rem;color:red;" @click="knowss">我知道了</p>
                   
                </div>
                <div></div>
             </div>
        
    </div>
</template>
   
<style scoped lang="less">
.func {
  width: 100%;
  a {
    width: 33.33%;
  }
}
.ttixing {
  position: fixed;

  width: 100%;
  height: 100%;
  top: 0;
  display: none;
  font-size: 0.28rem;
  > div:nth-child(2) {
    width: 100%;
    height: 100%;
    position: absolute;
    background: #000;
    opacity: 0.3;
    top: 0;
  }
  > div:nth-child(1) {
    position: absolute;
    border-radius: 6px;
    z-index: 1;
    top: 5rem;
    left: 50%;
    margin-left: -2.5rem;
    height: 2rem;
    width: 5rem;
    background: #fff;
    > p:nth-child(3) {
      border-top: 1px solid #cecaca;
      overflow: hidden;
      line-height: 0.4rem;
      span {
        float: left;
        box-sizing: border-box;
        width: 50%;
      }
      > span:nth-child(2) {
        border-left: 1px solid #cecaca;
        color: red;
      }
    }
  }
}
html {
  font-size: 625%;
}
body {
  width: 100%;
  height: 100%;
  overflow: auto;
  /* background: white !important; */
}
input[type="checkbox"],
input[type="text"],
input[type="password"] {
  -webkit-appearance: none;
  appearance: none;
  outline: none;
}
#layout {
  width: 100%;
  // height: 100%;
}
// .header_wrap{
//     width: 100%;
//     position: fixed;
//     top: 0;
//     z-index: 200;
// }
.header {
  height: 0.45rem;
  position: relative;
}
.header h2 {
  margin: 0 auto;
  height: 0.45rem;
  line-height: 0.45rem;
  text-align: center;
  color: #fff;
  font-weight: 600;
  font-size: 0.18rem;
}
.header .set {
  position: absolute;
  left: 0.18rem;
  transform: translateY(-50%);
  color: #fff;
}
.header .set i {
  font-size: 0.24rem;
}
.ocontent {
  margin-top: 0.32rem;
}
.ocontent h1 {
  font-size: 0.6rem;
  font-weight: 700;
  // margin-top: 0.7rem;
  text-align: center;
  /* font-family: myFirstFont; */
}

.ocontent ul {
  margin: 0.32rem auto 0;
  border: 0.01rem solid ghostwhite;
  border-radius: 0.06rem;
  background: #fff;
  width: 92%;
}
.ocontent ul li {
  height: 0.88rem;
  display: flex;
}
.ocontent ul li .img {
  // width: .48rem;
  padding-right: 0.1rem;
}
.ocontent ul li img {
      width: 0.45rem;
    height: 0.45rem;
    margin: 0.25rem 0 0 0.12rem;
}
.ocontent ul li:first-child {
  border-bottom: 0.01rem solid ghostwhite;
}
.ocontent ul li input {
  height: 0.78rem;
  line-height: 0.78rem;
  flex: 1;
  color: #b6b6b6;
  margin-right: 0.06rem;
  margin-top: 0.1rem;
  font-size: 0.28rem;
  border: none;
  padding-left: 0px;
}
.ocontent ul li #password {
  color: #111;
  padding-left: 0.1rem;
}
.ocontent ul li #userName {
  color: #111;
  padding-left: 0.1rem;
}
.ocontent .help {
     height: 0.7rem;
    margin: 0.3rem auto;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    color: #666;
    width: 92%;
}
.ocontent .help span {
  display: block;
  height: 0.39rem;
  line-height: 0.39rem;
  font-size: 0.24rem !important;
}
.ocontent .btn {
      height: 0.8rem;
    text-align: center;
    line-height: 0.8rem;
    color: #fff;
    font-size: 0.28rem;
    border-radius: 0.18rem;
    margin: 0.37rem auto 0;
    width: 90%;
}
.ocontent .func {
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  font-size: 0.26rem;
  height: 0.8rem;
  line-height: 0.8rem;
}
.weui-dialog__bd {
  color: #111;
}
.weui-dialog__ft > a {
  color: #2a9af7;
}
.iconfont.icon-mjiantou-copy {
  position: relative;
  // top:0;
}
</style>
<script>
import headertop from "../header/header";
export default {
  data() {
    return {
      isShowBack: false,
      isHideTabBar: false,
      username: "",
      // password:'',
      // usernamee:""
      version: "",
      xianlu: "",
      xianluurl: "",
      ifdaili: true,
      isbiaoti: "",
      documentdomain:"",
      ifSpecialAgentIpcvalue: false,
      SpecialAgentJumpAddress:''
    };
  },
  mounted: function() {
    this.getname();
    this.isonly();
  },
  computed: {},
  components: {
    headertop
  },
  updated() {},
  created() {
    this.isbiaoti = JSON.parse(
      window.localStorage.getItem("sysConfigMap")
    ).H5Title.cvalue;
    this.isShowOrHide(this.$route.path);
    var sysConfigMap = JSON.parse(myStorage.getItem("sysConfigMap"));
    if (sysConfigMap) {
      this.xianlu = sysConfigMap.lineDetection.name;

      this.xianluurl = sysConfigMap.lineDetection.cvalue;
      //   $('.zxjc').attr('href',this.xianluurl)
      if (sysConfigMap.isAllowProxyRegist.cvalue == 1) {
        this.ifdaili = true;
      } else {
        this.ifdaili = false;
      }
    };
    this.SpecialAgentJumpAddress =window.homedatasedk.SpecialAgentJumpAddress.cvalue
    this.documentdomain=returnCitySN["cip"];
    // alert(returnCitySN["cip"])
    // console.log();
    var SpecialAgentIp = JSON.parse(myStorage.getItem("sysConfigMap")).SpecialAgentIp;
    if (SpecialAgentIp) {
      var SpecialAgentIpcvalue = SpecialAgentIp.cvalue.split(",");
      for (var i = 0; i < SpecialAgentIpcvalue.length; i++) {
        if (SpecialAgentIpcvalue[i] == this.documentdomain) {
          // alert(SpecialAgentIpcvalue[i])
          this.ifSpecialAgentIpcvalue = true;
        }
      }
    }
  },
  methods: {

    isonly() {},
    forgetpass() {
      document.getElementsByClassName("ttixing")[0].style.display = "block";
    },
    knowss() {
      document.getElementsByClassName("ttixing")[0].style.display = "none";
    },
    getname() {
      //    this.usernamee=myStorage.getItem("username")
      this.username = this.$store.state.username;
      // this.password=this.$store.state.password;
    },
    //这个返回的代码在修改姝雯提出的2级bug之前是没有被调用的
    goBack() {
      // this.$router.push({'path':"/bet"})
      // this.$router.push({ path: '/mine' })
      if (this.$store.state.uppassword == 1) {
        this.$router.push({ path: "/mine" });
        this.$store.state.uppassword = "";
      } else if (this.$store.state.minelogin) {
        this.$router.push({ path: "/mine" });
        this.$store.state.minelogin = "";
      } else {
        // this.$router.go(-1)  仔细看了一些测试提的bug，这个地方应该是不管怎么样都是跳转到到首页的。
        this.$router.push({ path: "/home" });
      }
    },
    isShowOrHide(path) {
      if (path != "/Home") {
        this.isShowBack = true;
        this.isHideTabBar = true;
      } else {
        //首页
        this.isShowBack = false;
        this.isHideTabBar = false;
      }
    },
    currentLogin() {
      this.$store.state.username = this.$refs.input1.value;
      this.$store.state.password = this.$refs.input2.value;
      if (!this.$refs.input1.value) {
        $.tips("请填写用户名");
        return;
      }
      if (!this.$refs.input2.value) {
        $.tips("请填写密码");
        return;
      }
      console.log(this.$refs.input1.value);
      console.log(this.$refs.input1.value);
      var cdataAll = base
        .getApi()
        .login(this.$refs.input1.value, this.$refs.input2.value);
      var currentUser = cdataAll.data;
      if (cdataAll.code == 200) {
        window.localStorage.setItem("token", currentUser.token);
        myStorage.setItem("currentUser", JSON.stringify(currentUser.user));
        var data = base.getApi().userInfo(currentUser.user.id).data;
        console.log(base.getApi().userInfo(currentUser.user.id));
        this.$store.state.unViewNum = data.unViewNum;
        this.$store.state.noDrawRedCount = data.noDrawRedCount;
        this.version = cdataAll.version;
        window.updata(this.version);
        if (this.$store.state.isjixuan == "yes") {
          this.$store.state.isjixuan = "no";
          this.$store.state.homegocolor = true;
          // this.$router.push({ path: '/forthecolor' })
          this.$store.state.istankuang = false;
          this.$router.go(-1);
          return;
        } else {
          this.$router.push({ path: "mine" });
        }

        // this.$router.push({ path: 'mine' })
        // this.$router.go(-1)
      }
      // console.log(this.$store.username)
    }
  },
  watch: {
    //当路由改变的时候（newValue.path）获取当前的路由
    $route: function(newValue, oldValue) {
      this.isShowOrHide(newValue.path);
    }
  },
  beforeCreate: function() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#f5f5f5";
  }
};
</script>