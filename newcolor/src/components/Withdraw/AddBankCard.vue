<template>
  <div style="height:100%;overflow:hidden;position:relative;width:100%;" >
      
          <headertop :title="title"> </headertop>

		<div class="content_zhuanzhang tianjiayinhangka">
			<div class="sk_xx" @click="xiajiang">请绑定持卡人本人银行卡 </div>
			<div class="first-one" @click="xiajiang">
				<div class="sk_yh_1">持卡人 </div>
				<input type="text" placeholder="请输入持卡人姓名" class="sk_yh_2" id="peeInput" v-model="valling">
				<img src="../../assets/images/chonzhitixianIcon_1_05.png" alt=""  @click="sko" class="sk_fz_1" id="sk_fz_1">

			</div>
			<div class="first-one" id="select" >
				<div class="sk_yh_1">银行名称 </div>

				<!-- <input type="hidden"> -->
                <span  id="showBank" :name='bankListIndex'  class="sk_yh_2" @click="shangshen" style="text-align:left;color:#666">{{yinhang}}</span>
				<!-- <input readonly id="showBank" placeholder="请输入银行卡" :value="yinhang" :name='bankListIndex' class="sk_yh_2" @click="shangshen"> -->
				<!-- </span> -->

				<div class="tx_right_1">
                    <img src="../../assets/images/right_1_05.png" alt="">
                </div>

			</div>

			<div class="first-one" @click="xiajiang">
				<div class="sk_yh_1">银行卡号 </div>
				<input type="tel"  placeholder="请输入银行卡号"  pattern="[0-9*]" class="sk_yh_2" id="bankAccountInput">

			</div>
			<div class="first-one" @click="xiajiang">
				<div class="sk_yh_1">开户支行 </div>
				<input type="text" placeholder="请输入开户支行" class="sk_yh_2" id="openPointInput" maxlength="15">

			</div>

			<div id="tradePwdDiv" class="first-one" @click="xiajiang" v-if="iftradePwdDiv">
				<div class="sk_yh_1">交易密码 </div>
				<input @keyup="jiaodian" type="tel" placeholder="—" maxlength="1" name="1" class="sk_yh_5" style="-webkit-text-security:disc" />
				<input @keyup="jiaodian" type="tel" placeholder="—" maxlength="1" name="2" class="sk_yh_5" style="-webkit-text-security:disc" />
				<input @keyup="jiaodian" type="tel" placeholder="—" maxlength="1" name="3" class="sk_yh_5" style="-webkit-text-security:disc" />
				<input @keyup="jiaodian" type="tel" placeholder="—" maxlength="1" name="4" class="sk_yh_5" style="-webkit-text-security:disc" />
				<img src="../../assets/images/chonzhitixianIcon_1_05.png" alt="" @click="stt" class="sk_fz_1" id="sk_fz_2">
			</div>
			<div class="btn" >

				<a id="confirmSubmitA"> <button class="btn_zf" id="btn_zf" @click="addBankCard">完成</button></a>
			</div>
        </div>
        <!-- picker --> 
        <div class="pickerr">
            <div class="pi"><p><span @click="xiajiang">取消</span><span @click="xiajiang">完成</span></p></div>
            <div class="keer">
                <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
            </div>
        </div>
          <!-- 提醒 -->
        <div class="tixing" ref="sko">
           
            <div>
                <span>持卡人说明</span>
                <span >为了您的账户安全，只能绑定持卡人本人的银行卡。获取帮助，请联系在线客服。</span><br>
                <span @click="yincangg">我知道了</span>
            </div>
             <div></div>
        </div>

        <div class="tixing" ref="stt">
           
            <div>
                <span>交易设置提醒</span>
                <span>交易密码用于余额提现，可以在账户安全中修改。</span><br>
                <span  @click="yinca">我知道了</span>
            </div>
             <div></div>
        </div>
  </div>
</template>

<script>
import headertop from "../header/header";
export default {
  components: {
    headertop
  },
  data() {
    return {
      iftradePwdDiv:true,
      title: "添加银行卡信息",
      show: false,
      yinhang: "",
      bankListIndex: "",
      valling: "",
      slots: [
        {
          flex: 1,
          values: [],
          className: "slot1",
          textAlign: "center"
        }
      ]
    };
  },
  mounted() {
    this.yincang();
    this.yinhang = "请添加银行卡信息";
    // this.onValuesChange()
  },
  created() {
    // this.yincang()
  },
  methods: {
    getapi() {
      var values = JSON.parse(myStorage.getItem("dictList"))[
        "userCard-bankName"
      ];
      for (var i = 0; i < values.length; i++) {
        values[i] = values[i].split("-")[1];
      }
      this.slots[0].values = values;
      console.log(this.slots[0].values[0]);
    },
    addBankCard() {
      var patt=/^\d{6,30}$/g;
      var localUser = JSON.parse(myStorage.getItem("currentUser"));
      if (!$("#peeInput").val()) {  
        $.tips("请填写持卡人", 1000);
        return;
      } else if (!this.bankListIndex) {
        $.tips("请选择银行", 1000);
        return;
      } else if ( !patt.test($("#bankAccountInput").val())) {
        $.tips("银行卡格式错误", 1000);
        return;
      } else if (!$("#openPointInput").val()) {
        $.tips("请填写开户银行", 1000);
        return;
      } else if (
        !localUser.userCardList ||
        localUser.userCardList.length <= 0
      ) {
        var hasPass = true;
        var passStr = "";
        $("input[class='sk_yh_5']").each(function(index, obj) {
          if (!$(this).val()) {
            hasPass = false;
          } else passStr += $(this).val();
        });
        console.log(passStr);
        if (!hasPass) {
          $.tips("请填写完整交易密码", 1000);
          return;
        }
      } /**/
      if (!localUser.userCardList || localUser.userCardList.length <= 0) {
        // 第一次添加银行卡
        console.log(
          localUser.id,
          this.bankListIndex,
          $("#peeInput").val(),
          $("#bankAccountInput").val(),
          $("#openPointInput").val(),
          passStr
        );
        var result = base
          .getApi()
          .tiedCard(
            localUser.id,
            this.bankListIndex,
            $("#peeInput").val(),
            $("#bankAccountInput").val(),
            $("#openPointInput").val(),
            passStr
          );
        console.log(result);
        if (result && result.code == 200) {
          var id = JSON.parse(window.localStorage.getItem("currentUser")).id;
          var currentUser = base.getApi().userInfo(id).data.user;
          localStorage.setItem("currentUser", JSON.stringify(currentUser));
          this.$store.state.item = currentUser.userCardList[0];
          // this.$router.push({ path: `/mine` })
          
          this.$router.go(-1);
          
        }
      } else {
        // 多次添加银行卡

        var result = base
          .getApi()
          .tiedCard(
            localUser.id,
            this.bankListIndex,
            $("#peeInput").val(),
            $("#bankAccountInput").val(),
            $("#openPointInput").val(),
            ""
          );
        console.log(result);
        if (result && result.code == 200) {
          //  this.$router.push({ path: `/tixian` })
          var id = JSON.parse(window.localStorage.getItem("currentUser")).id;
          var currentUser = base.getApi().userInfo(id).data.user;
          localStorage.setItem("currentUser", JSON.stringify(currentUser));
          this.$router.go(-2);
        }
      }
    },
    //  自动获取焦点
    jiaodian() {
      for (var i = 0; i < $("#tradePwdDiv input").length; i++) {
        if (event.currentTarget.value) {
          if ($("#tradePwdDiv input")[i] == event.currentTarget && i < 3) {
            $("#tradePwdDiv input")[i + 1].focus();
            console.log("ssss");
          }
        } else {
          if ($("#tradePwdDiv input")[i] == event.currentTarget && i > 0) {
            $("#tradePwdDiv input")[i - 1].focus();
            console.log("ssss");
          }
        }
      }
    },
    stt() {
      this.$refs.stt.style.display = "block";
    },
    sko() {
      this.$refs.sko.style.display = "block";
    },
    yinca() {
      this.$refs.stt.style.display = "none";
    },
    yincangg() {
      this.$refs.sko.style.display = "none";
    },
    xiajiang() {
      $(".pickerr").animate({ bottom: "-5rem" });
    },
    shangshen() {
      this.yinhang = this.slots[0].values[0];
      this.getapi();
      document.getElementById("showBank").style.color = "#000";
      $(".pickerr").animate({ bottom: "0px" });
    },
    onValuesChange(picker, val) {
      var values = JSON.parse(myStorage.getItem("dictList"))[
        "userCard-bankName"
      ];
      console.log(val[0]);
      this.yinhang = val[0];
      for (var i = 0; i < this.slots[0].values.length; i++) {
        if (val == values[i].split("-")[1]) {
          this.bankListIndex = values[i].split("-")[0];
          console.log(this.bankListIndex);
        }
      }
    },
    yincang() {
      console.log("dhjielfsghlhjgajwrfg;lvjerfla");
      var localUser = JSON.parse(myStorage.getItem("currentUser"));
       console.log(localUser.userCardList.length)
      if (!localUser.userCardList || localUser.userCardList.length == 0) {
       
        console.log($("#tradePwdDiv"));
        // document.getElementById("tradePwdDiv").style.display = "block";
        this.iftradePwdDiv=true;
      } else {
        this.valling = localUser.userCardList[0].name;
        document.getElementById("peeInput").disabled = "disabled";
        console.log("22222222222222222222rfds")
        this.iftradePwdDiv=false;
        // document.getElementById("tradePwdDiv").style.display = "none";
      }
    }
  }
};
</script>

<style scoped lang='less'>
.wrap_header {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 200;
}
.index_header {
  width: 100%;
  height: 0.45rem;
  display: flex;
  color: #fff;
  margin: 0 auto;
}
.index_header h3 {
  height: 0.45rem;
  line-height: 0.45rem;
  flex: 1;
  text-align: center;
  font-size: 0.16rem !important;
}
.index_header .mycollect {
  height: 0.45rem;
  line-height: 0.45rem;
  width: 0.72rem;
  text-align: center;
  font-size: 0.14rem;
}

#select {
  input::-webkit-input-placeholder {
    /* WebKit browsers */
    color: #000;
  }
}

i.back-icon {
  width: 11px;
  height: 20px;
  background-position: 0 0;
}

i.icon {
  display: inline-block;
  vertical-align: middle;
  background: url(../../assets/images/right_1_05.png) no-repeat 0 0;
  background-size: 200px auto;
}

.tx_right_1 {
  top: 85%;
  right: 4%;
  transform: translateY(-50%);
  position: absolute;
  > img {
    width: 0.12rem;
  }
}

.tixing {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  display: none;
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
    z-index: 1;
    background: #fff;
    width: 70%;
    left: 15%;
    border-radius: 10px;
    top: 40%;
    span {
      display: inline-block;
      // background: #fff;
      line-height: 26px;
      // width: 270px;
      padding: 0 15px;
    }
    span:nth-child(2) {
      color: gray;
    }
    span:nth-child(1) {
      border-radius: 6px 6px 0 0;
      line-height: 50px;
      font-size: 0.28rem !important;
      font-weight: 700;
    }
    span:last-child {
      border-radius: 0 0 6px 6px;
      line-height: 40px;
      color: red;
      width: 90%;
     border-top: 1px solid #f5f5f5;
    }
  }
}

.pi {
  position: absolute;
  z-index: 1;
  background: white;
  line-height: 0.8rem;
  top: -0.3rem;
  width: 100%;

  > p {
    overflow: hidden;
    > span:nth-child(1) {
      float: left;
      padding: 0 0.2rem;
    }
    > span:nth-child(2) {
      float: right;
      padding: 0 0.2rem;
    }
  }
}

.picker-center-highlight:after {
  background: #000 !important;
}
.pickerr {
  position: absolute;
  width: 100%;
  bottom: -5rem;
  //   display: none;
}
.keer {
  height: 4rem;
  width: 100%;
  background: gainsboro;

  //  position: absolute;
  // -webkit-mask-box-image:linear-gradient(bottom,transparent,transparent 5%);
  // -webkit-mask-box-image: linear-gradient(to bottom,transparent 5%,#c1bcbc 40%);
  //  -webkit-mask-box-image: linear-gradient(to top,transparent 1%,#c1bcbc 50%);
}

#sk_fz_1 {
  width: 0.6rem;
  height: 0.6rem;
  border: none;
  margin-right: 3%;
}

.sk_fz_1 {
  width: 0.6rem;
  height: 0.6rem;
  margin-right: 3%;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 0;
}
#btn_zf {
  width: 60%;
  // margin-left: 20%;
  margin-top: 10%;
  // background: linear-gradient(90deg, #fa3956, #ff6b52);
  height: 40px;
  outline: none;
  border: none;
  color: #fff;
  font-size: 16px;
  border-radius: 5px;
}
.tianjiayinhangka {
  > .sk_xx {
    text-align: left;
    font-size: 0.28rem !important;
    color: #666;
    padding-left: 5%;
    // height:0.5rem;
    line-height: 0.9rem;
  }
  .first-one {
    width: 100%;
    // height: 0.45rem;
    background: #fff;
    border-bottom: 1px solid whitesmoke;
    line-height: 0.9rem;
    position: relative;
    box-sizing: border-box;
    height: 0.9rem;
    overflow: hidden;
    .sk_yh_2 {
     margin-left: 25%;
    outline: none;
    border: none;
    width: 70%;
    float: left;
    height: 0.9rem;
    line-height: 0.9rem;
    margin-top: -0.8rem;
    }
  }
  .sk_yh_5 {
        width: 12%;
    height: 0.5rem;
    margin-left: 3%;
    outline: none;
    border: 1px solid #ccc;
    border-radius: 3px;
    background: #f5f5f5;
    margin-top: -1.8rem;
    vertical-align: middle;
  }
}

* {
  font-size: 0.28rem !important;
}
.oheader {
  width: 100%;
  height: 0.45rem;
  /*background: #2f9336;*/
  position: relative;
}

.set {
  height: 0.45rem;
  position: absolute;
  // left: 5%;
  line-height: 0.45rem;
}

.oheader h2 {
  height: 0.45rem;
  line-height: 0.45rem;
  text-align: center;
  font-size: 1.8rem;
  color: #fff;
  font-weight: 600;
}

input {
  -webkit-appearance: none;
}
input:disabled {
  background-color: #fff;
  color: #000;
  opacity: 1;
}
.sk_yh_5 {
  text-align: center;
}
.sk_yh_1 {
  width: 20%;
}
#showBank {
  border: 0;
}
.selclip {
  background: none;
}
.weui-picker-modal {
  background-color: #d3d6dc;
}
.first-one #sk_fz_1 {
  border-radius: 50%;
}
.weui-dialog__bd {
  font-size: 13px;
}
#sk_fz_2 {
  border-radius: 50%;
}
.weui-picker-modal .picker-item.picker-selected {
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
}
.tx_right_1 img {
  width: 62%;
}
</style>
