<template>
    <div  style="width:100%;height:100%;background:#f5f5f5; position: absolute;top: 0;z-index:1000;">
        <!-- 顶部 -->
        <headertop :title="title" > </headertop>
        <!-- 主内容区 -->
        <div class="content">
            <div class="password-wrap">
                <div class="oldpassword" id="oldpassword">
                    <span class="mima"> 旧密码：</span>
                    <div class="inputtt">
                         <input @keyup="jiaodian" type="tel" placeholder="—" maxlength="1" name="oldPassInput" style="-webkit-text-security:disc;  margin-left: 0rem;">
                         <input @keyup="jiaodian" type="tel" placeholder="—" maxlength="1" name="oldPassInput" style="-webkit-text-security:disc">
                         <input @keyup="jiaodian" type="tel" placeholder="—" maxlength="1" name="oldPassInput" style="-webkit-text-security:disc">
                        <input @keyup="jiaodian" type="tel" placeholder="—" maxlength="1" name="oldPassInput" style="-webkit-text-security:disc">
                    </div>
                           
                </div>
                <div class="newpassword" id="newpassword">
                  <span class="mima"> 新密码：</span> 
                  <div class="inputtt">
                      <input @keyup="jiaodian" type="tel" placeholder="—" maxlength="1" name="newPassInput" style="-webkit-text-security:disc; margin-left: 0rem;">
                      <input @keyup="jiaodian" type="tel" placeholder="—" maxlength="1" name="newPassInput" style="-webkit-text-security:disc">
                      <input @keyup="jiaodian" type="tel" placeholder="—" maxlength="1" name="newPassInput" style="-webkit-text-security:disc">
                      <input @keyup="jiaodian" type="tel" placeholder="—" maxlength="1" name="newPassInput" style="-webkit-text-security:disc">
                  </div>
                     
                </div>
                <p>
                    如果旧密码输错3次，将冻结您的账号，如果忘记交易密码，请点击重置按钮。
                </p>
                <div class="btn">
                    <input type="button" value="立即修改" id="resetTradePwd" @click="resetTradePwd">
                    <input type="button" value="重置交易密码" class="opentxtbox"  @click="opentxtbox">
                </div>
            </div>
        </div>
        <div>
        </div>
        <div>

        </div>
    <div class="chongzhi"  ref="chongzhi">
      <div></div>
      <div >
        <ul>
          <li>重置交易密码</li>
          <li><input type="password" placeholder="请输入登录密码" ref="pass" :value="value"></li>
          <li><span @click="quxiao">取消</span><span @click="queding">确定</span></li>
        </ul>
     </div>
    </div>
    
      <div  ref="tishi" style="display:none;position: relative;"  >
            <Dailog content="您的交易密码已重置，初始密码为4321，请尽快修改！"
                    :ifcancelQx="false"
                    :knowed="zhidaole"
                    >
            </Dailog> 
        </div>

      
    </div>
</template>

<script>
import headertop from '../../header/header'
import Dailog from "../../dailog/dailog";

export default {
  components: {
    headertop,
    Dailog
  },
  data() {
    return {
      title: "修改交易密码",
      hasOldPass: "",
      newPassStr: "",
      value: ""
    };
  },
  methods: {
    zhidaole() {
      this.$refs.tishi.style.display = "none";
    },
    opentxtbox() {
      this.$refs.chongzhi.style.display = "block";
    },
    quxiao() {
      this.$refs.chongzhi.style.display = "none";
      this.value = "";
    },
    queding() {
      var localUser = JSON.parse(myStorage.getItem("currentUser"));

      var password = this.$refs.pass.value;
      console.log(localUser.id);
      console.log(password);
      if (password) {
        var result = base.getApi().resettingTradePwd(localUser.id, password);
        if (result.code == 200) {
          this.$refs.chongzhi.style.display = "none";
          this.$refs.tishi.style.display = "block";
          this.value = "";
        }
      } else {
        $.tips("请填写登录密码");
      }
    },
    resetTradePwd() {
      this.hasOldPass = "";
      this.newPassStr = "";
      for (var i = 0; i < $("#oldpassword input").length; i++) {
        this.hasOldPass += $("#oldpassword input")[i].value;
      }
      for (var i = 0; i < $("#newpassword input").length; i++) {
        this.newPassStr += $("#newpassword input")[i].value;
      }
      var userid = JSON.parse(localStorage.getItem("currentUser")).id;
      if (this.hasOldPass && this.hasOldPass.length == 4) {
        if (this.newPassStr && this.newPassStr.length == 4) {
          console.log(this.hasOldPass);
          console.log(this.newPassStr);
          var result = base
            .getApi()
            .modifyTranPwd(userid, this.hasOldPass, this.newPassStr);
          if (result.code == 200) {
            // debugger
            // this.$router.push({ path: "/mine" });
            this.$router.go(-1);
          }
        } else {
          $.tips("请填写完整的新密码", 1000);
        }
      } else {
        $.tips("请填写完整的旧密码", 1000);
      }
    },
    jiaodian() {
      for (var i = 0; i < $("#oldpassword input").length; i++) {
        if (event.currentTarget.value) {
          if ($("#oldpassword input")[i] == event.currentTarget && i < 3) {
            $("#oldpassword input")[i + 1].focus();
            console.log("ssss");
          }
        } else {
          if ($("#oldpassword input")[i] == event.currentTarget && i > 0) {
            $("#oldpassword input")[i - 1].focus();
            console.log("ssss");
          }
        }
      }
      for (var i = 0; i < $("#newpassword input").length; i++) {
        if (event.currentTarget.value) {
          if ($("#newpassword input")[i] == event.currentTarget && i < 3) {
            $("#newpassword input")[i + 1].focus();
            console.log("ssss");
          }
        } else {
          if ($("#newpassword input")[i] == event.currentTarget && i > 0) {
            $("#newpassword input")[i - 1].focus();
            console.log("ssss");
          }
        }
      }
    },
    goBack() {
      this.$router.go(-1); //底层等同于 history.back()back() 方法可加载历史列表中的前一个 URL（如果存在）。
      // 调用该方法的效果等价于点击后退按钮或调用 history.go(-1)。
    },
    isstyle(){
    }
  },
  watch: {
    //当路由改变的时候（newValue.path）获取当前的路由
  },
  mounted: function() {this.isstyle()},
  beforeCreate: function() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "white";
  },
  created() {}
};
</script>

<style scoped lang="less" >
input{
  -webkit-appearance: none;
}
.chongzhi {
  
  display: none;
  position: fixed;
  top: 40%;
  width: 100%;
  font-size: 0.28rem;
  > div:nth-child(1) {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.3;
    z-index: 3;
  }
  > div:nth-child(2) {
    position: absolute;
    width: 100%;
    z-index: 999;
  }
  ul {
    margin: 0 auto;
    width: 76%;
    background: #fff;
    border-radius: 6px;
    > li:nth-child(1) {
      line-height: 0.9rem;
      font-size: 0.28rem;
    }
    > li:nth-child(2) {
      padding-bottom: 0.2rem;
      border-bottom: 1px solid #eee;

      > input {
        margin: 0rem 0;
        outline: none;
        border: none;
        line-height: 0.7rem;
        width: 80%;
        border-radius: 4px;
        background: #eee;
        font-size: 0.28rem;
      }
    }
    > li:nth-child(3) {
      line-height: 0.8rem;
      span {
        display: inline-block;
        width: 50%;
        line-height: 0.8rem;
      }
      > span:nth-child(1) {
        box-sizing: border-box;
        border-right: 1px solid #eee;
      }
    }
  }
}
/*主内容区*/
/*content*/

.password-wrap {
  width: 7rem;
  margin: 0 auto;
  padding-top: 0.01rem;
}
.oldpassword {
  width: 7rem;
  height: 0.9rem;
  line-height: 0.9rem;
  background: #fff;
  border: 0.01rem solid #eee;
  border-radius: 0.04rem;
  margin-top: 0.1rem;
  text-indent: 0.26rem;
  font-size: 0.28rem;
  color: #666;
}
.newpassword {
  width: 100%;
  height: 0.9rem;
  line-height: 0.9rem;
  background: #fff;
  border: 0.01rem solid #eee;
  border-radius: 0.04rem;
  margin-top: 0.1rem;
  text-indent: 0.26rem;
  font-size: 0.28rem;
  color: #666;
}
.password-wrap input {
  width: 1.2rem;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  border: 0.01rem solid #e4e4e4;
  // background: #f5f5f5;
  // margin-left: 0.1rem;
  border-radius: 0;
  font-size: 0.28rem;
  float: left;
  margin-top: 0.2rem;
  margin-left: 0.1rem;
}
// .password-wrap input:nth-child(1){
//    margin-left: 0rem;
// }
.password-wrap p {
  margin-top: 0.28rem;
  font-size: 0.26rem;
  color: #999;
  text-align: left;
}
.btn input {
  display: block;
  height: 0.8rem;
  border-radius: 0.06rem;
  color: #fff;
  font-size: 0.28rem;
  line-height: 0.8rem;
  text-align: center;
  width: 74%;
  // background: linear-gradient(90deg, #fa3956, #ff6b52);
  margin: 0.3rem auto 0;
  outline: none;
  margin-left: 13%;
}
.mima {
  float: left;
  width: 1.5rem;
  // text-align: right;
}
.inputtt {
  float: left;
  // width:calc(100% - 0.8rem)
  width: 5.5rem;
}
</style>