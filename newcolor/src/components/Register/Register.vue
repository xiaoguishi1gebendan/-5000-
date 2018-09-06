<template>
  <div style="height:100%;background:#fff;overflow:hidden">
    <div class="ghd">
       <headertop title="注册" > </headertop>
    </div>
    <div class="wrap-ocontent" style="overflow: scroll;">
      <div class="ocontent">
        <ul class="list">
          <li>
            <span>用户账号</span>
            <input type="text" name="username" id="username" placeholder="请输入您的用户名" ref="input1" />
          </li>

          <li>
            <span>登录密码</span>
            <input type="password" name="password" id="passWord" placeholder="请输入您的密码" ref="input2" />
          </li>
          <li>
            <span>重复密码</span>
            <input type="password" name="password" id="repassWord" placeholder="请再次输入您的密码" ref="input3" />
          </li>
          <li style="position: relative;">
            <span>验证码</span>
            <input @focus="auto11" type="text" name="verifyCode" id="verifyCodeInput" placeholder="请输入验证码" ref="input4" />
            <span style=" position: absolute;right:0"  @click="auth"  id="canvas">{{randomNumber}}</span>
          </li>
           <li class="telphone" v-if="iftelphone">
            <span>手机号</span>
            <input  name=""  placeholder="请输入电话号码" ref="input6" v-model="result6" />
          </li>
          <li class="email" v-if="ifemail">
            <span>邮箱</span>
            <input  name=""  placeholder="请输入邮箱" ref="input7" v-model="result7" />
          </li>
          <li class="ma" v-if="ifrefre">
            <span>邀请码</span>
            <input type="邀请码" name="" id="yqm" placeholder="请输入邀请码 (选填)" ref="input5" />
          </li>

        </ul>
        <div class="notice">
          <div class="pclick clear">
            <p style="    width: 0.4rem;
    height: 0.4rem;
    margin-left: 0px;
    border: 1px solid #d9d9d9;" @click="removeisclick"> 
              <img src="../../assets/source/imgs/images/yes_05.png" alt="" :class="{ bgroung: ifchoose }" style="width: 0.4rem;">
            </p>
           
            <!-- <input @click="removeisclick" type="checkbox" name="checkbox" id="checkbox" value="" /> -->
            <p>我已年满18岁，并同意接受</p>
          </div>
          <span id="lawSpan" @click="goto" style="float:left">《法律声明》</span>
        </div>
        <div class="online">
          <div class="online-left">
            <router-link to="/onlineSevice" style="color:red;">在线客服</router-link>
            <!-- <a style="color:red;" href="https://f18.livechatvalue.com/chat/chatClient/chatbox.jsp?companyID=876510&configID=72957&jid=8025085340&s=1">在线客服</a> -->
             </div>
          <div class="online-right">
            <router-link to='/login'>
              <span>已有账号</span>
              <span>直接登录</span>
            </router-link>
          </div>
        </div>
        <div class="btn" @click="regsterClick">
          注册
        </div>
        <div class="foot">
          <p>1:账号输入4-16个英文字母或数字，不能用中文</p>
          <p>2:密码输入4-16个英文字母或数字</p>
        </div>
      </div>
    </div>
    <transition name="slide">
           <router-view></router-view>
        </transition>
  </div>
</template>

<style scoped>
.bgroung{
  background: #fa3956
}
#yqm{
  outline: none;


}

  .header{
    height: 0.45rem;
    position: relative;
  }
  .header h2{
    margin: 0 auto;
    height: 0.45rem;
    line-height: 0.45rem;
    text-align: center;
    color: #fff;
    font-weight: 600;
    font-size: .18rem;
  }
  .header .set{
    position: absolute;
    left: .18rem;
    transform: translateY(-50%);
    color: #fff;
  }
  .header .set i{
    font-size: .24rem;
  }
  .wrap-ocontent{
    width: 100%;
    height:100%;
    background: #fff;
  }
  .ocontent{
    width: 92%;
    margin: 0 auto;
    overflow: hidden;
  }
  .list li{
       height: .9rem;
    line-height: .9rem;
    background: #fff;
    margin-top: .12rem;
    border: 1px solid #d9d9d9;
    border-radius: 0.15rem;
    display: flex;
  }
  .list li:nth-of-type(4){
    position: relative;
  }
  .list li input{
    border:none !important;
    outline: none;
  }
  #canvas{
    display: block;
    line-height: .7rem;
    margin-top: 0.1rem;
    background: rgba(255,227,231,1);
    font-size: .28rem;
    padding-right: 0.1rem;
    margin-right: 0.1rem;
    padding-left: 0.1rem;
  }
  .list li span:nth-child(1){
        color: #666;
    width: 1.5rem;
    font-size: .28rem;
    height: .9rem;
    line-height: .9rem;
    text-align: left;
    padding-left: 0.3rem;
  }
  .list li input{
     height: .9rem;
    line-height: .9em;
    border-radius: 0.3rem;
    flex: 1;
    font-size: .28rem;
    color: gray;
  }
  .notice{
    height: .5rem;
    margin-top: .3rem;
    line-height: .5rem;
    font-size: 0.28rem;
  }
  .notice input{
    width: .24rem;
    height: .24rem;
    float: left;
    border: .01rem solid #d9d9d9;
    background: #fff;
    border-radius: .05rem;
    box-sizing: border-box;
  }
  .notice .isclick{
    background: url('../../assets/source/imgs/images/yes_05.png') no-repeat 0 0;
    background-size: 106%;
  }
 
  .pclick{
    float: left;
  }
  .notice p{
        float: left;
    margin-left: .12rem;
    color: #999;
    font-size: .28rem;
  }
  .notice span{
    color: #2b9037;
    display: block;
    font-size: .28rem;
    text-align: left;
  }
  .online{
        margin-top: .3rem;
    height: .4rem;
    line-height: .4rem;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    color: #111;
    font-size: .28rem;
  }
  .online-right a{
    color: #111;
  }
  .btn{
        width: 70%;
    height: .88rem;
    margin: .4rem auto 0;
    line-height: .88rem;
    text-align: center;
    color: #fff;
    border-radius: 0.18rem;
    font-size: .28rem;
  }
  .foot{
    margin-top: .32rem;
  }
  .foot p{
        line-height: .5rem;
    font-size: .28rem;
    text-align: left;
  }
  /*弹出窗口提示*/
  .weui-dialog__btn.primary{
    color: #2a9af7;
  }
  #wx_1{
    width: 100%;
    height: 4rem;
    margin: 2rem auto 0;
    line-height: 4rem;
    text-align: center;
    background: #2b9037;
    color: #fff;
    border-radius: 0.45rem;
    font-size: 1.6rem;
  }
  .iconfont.icon-mjiantou-copy{
    position: relative;
     top: 0;
  }
  html,body,#app{
    height: 100%;
  }
</style>
<script>
  import { Toast } from 'mint-ui';
  import headertop from '../header/header'
  export default {
    data() {
      return {
        ifchoose:true,
        isShowBack: false,
        isHideTabBar: false,
        count: 0,
        result1:'',
        result2:'',
        result3:'',
        result4:'',
        result5:'',
        randomNumber:45685,
        invitation:'',
        i:"0",
        iftelphone:"",
        ifrefre:true,
        result6:"",
        result7:"",
        ifyzphone:"",
        ifyzemail:""
      }
    },
    updated() {
      this.count = this.$store.getters.diyicihuoqu
    },
    components:{
      headertop
    },
    created() {
      localStorage.setItem("returnHome",1)
      // 验证是否显示电话号码
      var iftelphone=JSON.parse(localStorage.getItem("sysConfigMap")).telephoneShowAndValidate.cvalue;
      if(iftelphone==1){
         this.iftelphone=true;
         this.ifyzphone=JSON.parse(localStorage.getItem("sysConfigMap")).telephoneShowAndValidate.evalue==1?true:false;
        //  alert(this.ifyzphone)
      }else{
         this.iftelphone=false;
      }
      // 是否显示验证码
     var ifrefre=JSON.parse(localStorage.getItem("sysConfigMap")).refereeShowAndValidate.cvalue;
      if(ifrefre==1){
         this.ifrefre=true;
      }else{
         this.ifrefre=false;
      }
    // 是否显示邮箱
     var ifemail=JSON.parse(localStorage.getItem("sysConfigMap")).emailShowAndValidate.cvalue;
      if(ifemail==1){
         this.ifemail=true;
          this.ifyzemail=JSON.parse(localStorage.getItem("sysConfigMap")).emailShowAndValidate.evalue==1?true:false;
      }else{
         this.ifemail=false;
      }


      this.isShowOrHide(this.$route.path);
      this.auth()
    },
     mounted:function(){
      //  $('#style').attr('src','../../assets/source/css/common/weui.min.css');
       this.ma()
       this.isstyle();
       var query = this.GetQueryString('code')
       if(query){
          document.getElementById('yqm').value = query
       }
      this.$nextTick(()=>{
        console.log(document.getElementsByClassName("ghd")[0])
        document.getElementsByClassName("wrap-ocontent")[0].style.height=document.getElementsByTagName("body")[0].offsetHeight
        - document.getElementsByClassName("pde")[0].offsetHeight
        -document.getElementsByClassName("ghd")[0].offsetHeight+'px'
      })
     },
    methods: {
      GetQueryString(name){
        var after = window.location.hash.split("?")[1];
        if(after){
          var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
          var r = after.match(reg);
          if(r != null){
            return  decodeURIComponent(r[2]);
          }else{
              return null;
          }
        }
      },
      isstyle(){
       
      },
      ma(){
       var  cvalues = JSON.parse(myStorage.getItem("sysConfigMap")).domains.cvalue.split(",");
       var domain=document.domain;
       for(var i=0;i<cvalues.length;i++){
          if(cvalues[i]==domain){
              $(".list").prepend($(".ma"));
              document.getElementById("yqm").placeholder="请输入邀请码 (必填)";
              return;  
            }
       }

      },
      removeisclick(){
        
        this.ifchoose=!this.ifchoose

        // if(this.i==1){
        //   $("#checkbox").addClass("isclick");
        //   this.i=0;
        // }else{
        //    $("#checkbox").removeClass("isclick");
        //    this.i=1;
        // }
      },
      goto(){
         localStorage.setItem("type",3)
        this.$router.push({ path: `/aboutus` })

      },
      goBack() {
        this.$router.go(-1)//底层等同于 history.back()back() 方法可加载历史列表中的前一个 URL（如果存在）。
        // 调用该方法的效果等价于点击后退按钮或调用 history.go(-1)。
      },
      isShowOrHide(path) {
        if (path != '/Home') {
          this.isShowBack = true
          this.isHideTabBar = true
        } else {//首页
          this.isShowBack = false
          this.isHideTabBar = false
        }
      },
      regsterClick(){
          this.result1 = this.$refs.input1.value;
          this.result2 = this.$refs.input2.value;
          this.result3 = this.$refs.input3.value;
          this.result4 = this.$refs.input4.value;
          this.result5 = this.$refs.input5.value;
          var reg =/^[a-zA-Z0-9]{4,16}$/;
        　if(!reg.test( this.result1)){
              $.tips("用户名为4-16位的英文和数字组成");
              return;
        　　}
         // 验证是否显示的类型


         if(!this.result2)
        {
              $.tips("密码不能为空");
             return;
        }
        var regmima =/^[a-zA-Z0-9]{4,16}$/;
        if(!regmima.test( this.result2)){
              $.tips("密码为4-16位的英文和数字组成");
              return;
        　　}

        if(!this.result3)
        {
              $.tips("重复密码不能为空");
             return;
        }
      if(this.$refs.input2.value != this.$refs.input3.value) {
            console.log();
            $.tips("密码输入不一致...");
            return;
          }else if(this.randomNumber!=this.$refs.input4.value){
            $.tips("验证码不正确...");
            return;
          }
      if(this.result1.indexOf(" ") >= 0)
        {
              $.tips("用户名不能含有空格");
             return;
        }
        if(this.result2.indexOf(" ") >= 0)
        {
              $.tips("密码不能含有空格");
             return;
        }
        　  if(!this.result4)
        {
              $.tips("验证码不能为空");
             return;
        }
          if(this.iftelphone&&this.ifyzphone){
            console.log(this.result6)
             if (!(/^1[3|4|5|7|8|9][0-9]\d{8}$/.test(this.result6))) {
                    $.tips("请输入正确的手机号", 1000);
                    return;
           }
          }

            if(this.ifemail&&this.ifyzemail){
            var regyouxiang = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); //正则表达式

            if(!regyouxiang.test(this.result7)){
              $.tips("邮箱填写不正确");
                return;
            }
          }

          if(!this.ifchoose){
              $.tips("请勾选法律声明");
                      return;
          }




            // if(this.result5!=''){
              // this.invitation = this.result5;
            // }
            console.log(this.result5)
          var result = base.getApi().register(this.result1, this.result2, this.result5,this.result6,this.result7);
          // console.log(result);
          if(result.code==200){
              var r = base.getApi().login(this.result1,this.result2);
              // console.log(r);
              if(r && r.code==200){
                  // console.log('cgggg');
                  // window.location.href = "user.html";
                  // myStorage.setItem("currentUser", JSON.stringify(r.data.user));
                  window.localStorage.setItem("currentUser", JSON.stringify(r.data.user));
                  this.$store.state.unViewNum= r.data.unViewNum;
                  this.$store.state.noDrawRedCount= r.data.noDrawRedCount
                  // myStorage.setItem("token", r.data.token);
                  window.localStorage.setItem("token", r.data.token);
                  // this.$router.push({ path: 'mine' })
                  this.$router.push({path:'/mine'})
              }
          }
      },
      auth(){
          var str = '';
          for(var i = 0; i < 5; i++) {

            var oNumber = Math.random();
            //判断出现数字
            str += parseInt(Math.random() * 10);

          };
          this.randomNumber = str;
      },
      auto11(){
        // alert('aa')
        // console.log('aa')
        // $('.app_bg').css({
        //   'position': 'absolute',
        //   'top': '1.5rem',
        //   'transition': 'all 2s'
        // })
      }
    },
    watch: {  //当路由改变的时候（newValue.path）获取当前的路由
      $route: function(newValue, oldValue) {
        this.isShowOrHide(newValue.path)
      }
    }
  }
</script>
