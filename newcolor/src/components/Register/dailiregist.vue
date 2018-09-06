<template>
  <div style="height:100%;background:#fff;overflow:scroll">
    <div>
      <div class="header">
        <div @click="goBack" style="position: absolute;transform: translateY(-50%);color: #fff;">
                    <i class="iconfont icon-mjiantou-copy" style="    font-size: .45rem !important;position: absolute;line-height: 46px;margin-left: 12px;"></i>
                </div>
        <h2>注册代理账号</h2>
      </div>
    </div>
    <div class="wrap-ocontent">
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
          
          <!-- <li class="ma" v-if="ifrefre">
            <span>邀请码</span>
            <input type="邀请码" name="" id="yqm" placeholder="请输入邀请码 (选填)" ref="input5" />
          </li> -->
          <li class="telphone" v-if="iftelphone">
            <span>手机号码</span>
            <input  name="" pattern="\d" type="number"  placeholder="请输入电话号码" ref="input6" />
          </li>
          <li class="email" v-if="ifemail">
            <span>邮箱</span>
            <input  name=""  type="text"  placeholder="请输入邮箱" ref="input7" />
          </li>
          <li class="QQ" v-if="ifQQ">
            <span>QQ</span>
            <input  name=""  pattern="\d" type="number"  placeholder="请输入QQ号码" ref="input8" />
          </li>
          <li class="weChat" v-if="ifweChat">
            <span>微信</span>
            <input  name=""  type="text"  placeholder="请输入微信号" ref="input9" />
          </li>
          <li style="position: relative;">
            <span>验证码</span>
            <input type="text" name="verifyCode" id="verifyCodeInput" placeholder="请输入验证码" ref="input4" />
            <span style=" position: absolute;right:0"  @click="auth" id="canvas">{{randomNumber}}</span>
          </li>
          <li style="height:2rem">
            <textarea name="txt" placeholder="请输入申请理由" v-model="reason"  style="    width: 100%;
    height:1.8rem;
    font-size: 0.26rem;
    line-height: 0.4rem;
    padding: 0.1rem;
    border: none;"></textarea>
          </li>
        </ul>
        <div class="notice">
          <div class="pclick clear">
            <input @click="removeisclick" type="checkbox" name="checkbox" id="checkbox" value="" class="isclick"/>
            <p>我已年满18岁，并同意接受</p>
          </div>
          <span id="lawSpan" @click="goto">《法律声明》</span>
        </div>
        <div class="online">
          <div class="online-left"><a style="color:red;" href="https://f18.livechatvalue.com/chat/chatClient/chatbox.jsp?companyID=876510&configID=72957&jid=8025085340&s=1">在线客服</a> </div>
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
    
  </div>
</template>

<style scoped>
#yqm{
  outline: none;
 
  
}

  .header{
    height: 0.8rem;
    width: 100%;
    position: relative;
  }
  .header h2{
    margin: 0 auto;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    color: #fff;
    font-weight: 600;
    font-size: 0.28rem;
  }
  .header .set{
    position: absolute;
    left: 0.28rem;
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
    height: .7rem;
    line-height: .7rem;
    background: #fff;
    margin-top: .2rem;
    border: 1px solid #d9d9d9;
    border-radius: 0.04rem;
    display: flex;
  }
  .list li:nth-of-type(4){
    position: relative;
  }
  #canvas{
        display: block;
    line-height: .43rem;
    background: rgba(255,227,231,1);
    /* color: #2b9037; */
    font-size: 0.28rem;
    padding-right: 0.1rem;
    position: absolute;
    right: 0;
    padding-left: 0.1rem;
  }
  .list li span:nth-child(1){
    color: #666;
    /* text-indent: 0.28rem; */
    width: 1.3rem;
    font-size: .26rem;
    height: .7rem;
    line-height: .7rem;
    text-align: left;
    padding-left: 10px;
  }
  .list li input{
   height: .7rem;
    line-height: .7rem;
    -webkit-box-flex: 1;
    flex: 1;
    font-size: .26rem;
    color: gray;
    border: none;
    /* margin-top: 0.06rem; */
    outline: none;
  }
  .notice{
    height: .24rem;
    margin-top: .2rem;
    line-height: .24rem;
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
  .notice .isclick{
    background-color: #fa3956; 
  }
  .pclick{
    float: left;
  }
  .notice p{
    float: left;
    margin-left: .12rem;
    color: #999;
    font-size: .26rem;
  }
  .notice span{
    color: #2b9037;
    display: block;
    font-size: .26rem;
    text-align: left;
  }
  .online{
    margin-top: .5rem;
    height: .288rem;
    line-height: .288rem;
    display: flex;
    justify-content: space-between;
    color: #111;
    font-size: .26rem;
  }
  .online-right a{
    color: #111;
  }
  .btn{
    width: 100%;
    height: .8rem;
    margin: .24rem auto 0;
    line-height: .8rem;
    text-align: center;
    /* background: #2b9037; */
    color: #fff;
    border-radius: 0.06rem;
    font-size: .26rem;
  }
  .foot{
    margin-top: .32rem;
  }
  .foot p{
    line-height: .6rem;
    color: red;
    font-size: .26rem;
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
    border-radius: 0.8rem;
    font-size: 1.7rem;
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
  
  export default {
    data() {
      return {
        isShowBack: false,
        isHideTabBar: false,
        count: 0,
        result1:'',
        result2:'',
        result3:'',
        result4:'',
        result6:'',
        result7:'',
        result8:'',
        result9:'',
        randomNumber:45685,
        invitation:'',
        i:0,
        ifrefre:true,
        reason:"",
        iftelphone:'',
        ifyzphone:'',
        ifemail:'',
        ifyzemail:'',
        ifQQ:'',
        ifyzQQ:'',
        ifweChat:'',
        ifyzweChat:''
      }
    },
    updated() {  
      this.count = this.$store.getters.diyicihuoqu
    },
    created() {
      this.isShowOrHide(this.$route.path);
      this.auth()
       
    // 是否显示邀请码
     var ifrefre=JSON.parse(localStorage.getItem("sysConfigMap")).refereeShowAndValidate.cvalue;
      if(ifrefre==1){
         this.ifrefre=true;
      }else{
         this.ifrefre=false;
      }
    // 验证是否显示电话号码
      var iftelphone=JSON.parse(localStorage.getItem("sysConfigMap")).AtelephoneValidate.cvalue;
      if(iftelphone==1){
          this.iftelphone=true;
          this.ifyzphone=JSON.parse(localStorage.getItem("sysConfigMap")).AtelephoneValidate.evalue==1?true:false;
      }else{
          this.iftelphone=false;
      }
    // 是否显示邮箱
     var ifemail=JSON.parse(localStorage.getItem("sysConfigMap")).AemailValidate.cvalue;
      if(ifemail==1){
         this.ifemail=true;
          this.ifyzemail=JSON.parse(localStorage.getItem("sysConfigMap")).AemailValidate.evalue==1?true:false;
      }else{
         this.ifemail=false;
      }
    // 是否显示QQ
      var ifQQ=JSON.parse(localStorage.getItem("sysConfigMap")).AqqValidate.cvalue;
      if(ifQQ==1){
         this.ifQQ=true;
          this.ifyzQQ=JSON.parse(localStorage.getItem("sysConfigMap")).AqqValidate.evalue==1?true:false;
      }else{
         this.ifQQ=false;
      }
    // 是否显示微信
      var ifweChat=JSON.parse(localStorage.getItem("sysConfigMap")).AweChatValidate.cvalue;
      if(ifweChat==1){
         this.ifweChat=true;
          this.ifyzweChat=JSON.parse(localStorage.getItem("sysConfigMap")).AweChatValidate.evalue==1?true:false;
      }else{
         this.ifweChat=false;
      }
    },
    
     mounted:function(){
      //  $('#style').attr('src','../../assets/source/css/common/weui.min.css');
       this.ma()
       this.isstyle()
     },
    methods: {
      isstyle(){
       
      },
      ma(){
       var  cvalues = JSON.parse(myStorage.getItem("sysConfigMap")).domains.cvalue.split(",");
            console.log(cvalues)
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
       
        if(this.i==1){
          $("#checkbox").addClass("isclick");
          this.i=0;
        }else{
           $("#checkbox").removeClass("isclick");
           this.i=1;
        }
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
          this.result6 = this.$refs.input6.value;
          this.result7 = this.$refs.input7.value;
          this.result8 = this.$refs.input8.value;
          this.result9 = this.$refs.input9.value;
         
          var reg =/^[a-zA-Z0-9]{4,16}$/;  
        　if(!reg.test( this.result1)){  
            $.tips("用户名为4-16位的英文和数字组成");
             return;
      　　}   
          if(!reg.test( this.result2)){  
              $.tips("密码为4-16位的英文和数字组成");
              return;
      　　} 
      
      if(this.result1.indexOf(" ") >= 0)
        {
              $.tips("用户名不能含有空格");
             return;
        }
      if(!this.result1)
        {
              $.tips("用户名不能为空");
             return;
        }
       
        if(this.result2.indexOf(" ") >= 0)
        {
              $.tips("密码不能含有空格");
             return;
        }
        if(!this.result2)
        {
              $.tips("密码不能为空");
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
          }else if(this.randomNumber!=this.result4){
            $.tips("验证码不正确...");
            return;
          }
          // if (!(/^1[3|4|5|7|8|9][0-9]\d{8}$/.test(this.result6))) {
          //           $.tips("请输入正确的手机号", 1000);
          //           return;
          //  }
        if(!this.result4)
        {
              $.tips("验证码不能为空");
             return;
        }
        if(!this.reason){
             $.tips("申请理由不能为空");
             return;
        }
          // 验证是否显示的类型
           
        if(this.i==1){
            $.tips("请勾选法律申明");
          return;
        }

        if(this.iftelphone&&this.ifyzphone){
          if (!(/^1[3|4|5|7|8|9][0-9]\d{8}$/.test(this.result6))) {
              $.tips("请输入正确的手机号", 1000);
              return;
          }
        }
        if(this.ifemail&&this.ifyzemail){
          if (!(/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(this.result7))) {
            $.tips("请输入正确的邮箱地址", 1000);
            return;
          }
        }
        if(this.ifQQ&&this.ifyzQQ) {
          if(!(/^[1-9][0-9]{4,14}$/.test(this.result8))){
            $.tips("请输入正确的QQ号码", 1000);
            return;
          }
        }
        if(this.ifweChat&&this.ifyzweChat){
          if(!(/^[a-zA-Z\d_]{5,}$/.test(this.result9))){
            $.tips("请输入正确的微信号", 1000);
            return;
          }
        }
         

            // if(this.result5!=''){
              // this.invitation = this.result5;
            // }
            // console.log(this.result5)
            //      * @param account		用户名
			//  * @param password		密码
			//  * @param device		设备号 目前h5写死传 h5
			//  * @param mobile		手机号码
			//  * @param reason		申请理由
			//  * @returns
			//  */
			// ploxyApply:function (account, password, device, mobile, reason)



 






          var result = base.getApi().ploxyApply(this.result1, this.result2, 'h5',this.result6,this.reason,this.result7,this.result8,this.result9);
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


                  $.tips("代理审核中，清耐心等待",3000)
                  // this.$router.push({ path: 'mine' })
                  this.$router.push({path:'/home'}) 
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
      }
    },
    watch: {  //当路由改变的时候（newValue.path）获取当前的路由
      $route: function(newValue, oldValue) {
        this.isShowOrHide(newValue.path)
      }
    }
  }
</script>
