<template>
  <div ref="chargedetal" class="chargedetal" style="position:absolute;top:0;width:100%;;background: white;z-index:99999;overflow:hidden;">
     
        
         <headertop :title="title" :datal="datal" :goDetal="mycollect" id="sdf"> </headertop>
        
 <div class="zhushou"  ref="zhuzhein" v-if="zhuzhein">
            <div class="zhuzhein" @click="disnone"></div>
                    <ul>
                        <li></li>
                        <li @click="chongzhi">充值记录</li>
                        <li @click="serviceFuncA"><a target="_blank" style="color:gray" > 在线客服</a></li>
                    </ul>
        </div>

        <div style="height:100%;">
            <div class="inputt">
                <span >请输入充值金额</span>
                <input pattern="\d" type="number"   id="inputt" ref="inputtt" :value="val" @keyup="keyup" style="color:#D71437;">
                <span>元</span>
            </div>
            <div class="jine">
                <ul id="bgcc">
                    <li @click="jinee1">50元</li>
                     <li @click="jinee1">100元</li>
                      <li @click="jinee1" >300元</li>
                       <li @click="jinee1">500元</li>
                    <li @click="jinee1">1000元</li>
                     <li @click="jinee1">2000元</li>
                      <li @click="jinee1">3000元</li>
                       <li @click="jinee1">5000元</li>
                </ul>
            </div>

            <div class="chongzhi" >
                <p class="pp" style="    line-height: 0.7rem;
    color: gray;
    font-size: 0.28rem;
    text-align: left;
    padding-left: 0.2rem;
    background: #f5f5f5;">请选择充值方式 ( 如有问题，请联系
                    <a @click="serviceFuncA"  target="_blank"   style="color:#0090ff"> 
                        在线客服
                    </a>)
                </p>
                <div >
                    <ul class="zhifuu" ref="zhifuu">
                        <li v-for="(item,index) in list" :key="index" @click="chongzhiin" :name="item.id" >
                        	<div class="paidinn" style="position: relative;">
                                <img class="kijg" style="    width: 0.5rem !important;
    height: 0.5rem !important;;position: absolute;left: 0;" src="../../../assets/images/isHot.png" alt="" />
                                  <img :src="domain+item.logo.fileurl" alt="">
                            </div>
                          
                            <a >
                                <p>{{item.name}}</p>
                                <p class="twoHang" style="    display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;">{{item.detail}}</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
       


        <div v-if="scril"
         style="width: 50px;
            height: 50px;
            background: red;
            position: absolute;
            top: 40%;
            left: 50%;
            margin-left: -20px;
            margin-top: -5px;
            z-index: 9999;
            display: block;
            background: rgba(0,0,0,.3);" 
            id="bpp">
       
        <div class="loadingg" ></div>
     </div>
         <transition name="slide">
           <router-view></router-view>
        </transition>
  </div>
</template>

<script>
import headertop from "../../header/header";
import { kefu } from "../../../assets/api/app.js";
export default {
  components: {
    headertop
  },
  data() {
    return {
      title: "充值",
      datal: "助手",
      type: "aa",
      val: "",
      list: "",
      i: 0,
      code: false,
      domain: base.domain,
      zhuzhein: false,
      scril: false,
      onlineURL: ""
    };
  },
  created() {
    //   this.mycollect();
    //   var that=this;
    //   setTimeout(() => {
    //      that.mycollect()
    //   }, 200);
    // this.sysConfigMap = JSON.parse(myStorage.getItem("sysConfigMap"));
    this.onlineURL = JSON.parse(
      myStorage.getItem("sysConfigMap")
    ).onlineCustomService.cvalue;
  },
  mounted() {
    this.getapi();

    this.$nextTick(() => {
      var paidinns = document.getElementsByClassName("paidinn");
      var kijg = document.getElementsByClassName("kijg");
      for (var i = 0; i < this.list.length; i++) {
        console.log(this.list[i].isHot);
        if (this.list[i].isHot) {
          kijg[i].style.display = "block";
        }
      }
    });
    var that = this;
    setTimeout(() => {
      that.getulheight();
    }, 600);
  },
  methods: {
    serviceFuncA() {
      if (this.$store.state.isid) {
        kefu();
      } else {
        window.open(onlineURL);
      }
    },
    disnone() {
      //  alert("ddd")
      this.zhuzhein = false;
      this.i = 0;
    },
    getulheight() {
      // var bodyheight=document.getElementsByTagName("body")[0].offsetHeight;
      // var inputtheight=document.getElementsByClassName("inputt")[0].offsetHeight;
      // var jineheight=document.getElementsByClassName("jine")[0].offsetHeight;
      // var ppheight=document.getElementsByClassName("pp")[0].offsetHeight;
    this.$refs.zhifuu.style.height=document.getElementsByTagName("body")[0].offsetHeight-document.getElementById("sdf").offsetHeight-document.getElementsByClassName("inputt")[0].offsetHeight-document.getElementsByClassName("jine")[0].offsetHeight-document.getElementsByClassName("pp")[0].offsetHeight+"px"
      // console.log(ulheight)
    },
    chongzhi() {
      this.$store.state.rechargtype = 1;
      this.$router.push({ path: "/rechargeRecord" });
    },
    mycollect() {
      if (this.i == 0) {
        this.zhuzhein = true;
        this.i = 1;
        console.log(this.i);
      } else {
        this.zhuzhein = false;
        this.i = 0;
        console.log(this.i);
      }
    },

    getapi() {
      var flash = localStorage.getItem("flash");
      console.log(flash);
      if (flash == 1) {
        this.$refs.chargedetal.style.height =
          document.getElementsByTagName("html")[0].clientHeight + "px";
        this.list = this.$store.state.rechargedetal;
      } else {
        this.$router.push({ path: "/recharge" });
      }
    },
    keyup() {
      this.$refs.inputtt.value = this.$refs.inputtt.value.replace(
        /[^\d.]/g,
        ""
      ); //清除“数字”和“.”以外的字符
      this.$refs.inputtt.value = this.$refs.inputtt.value.replace(
        /\.{2,}/g,
        "."
      ); //只保留第一个. 清除多余的
      this.$refs.inputtt.value = this.$refs.inputtt.value
        .replace(".", "$#$")
        .replace(/\./g, "")
        .replace("$#$", ".");
      this.$refs.inputtt.value = this.$refs.inputtt.value.replace(
        /^(\-)*(\d+)\.(\d\d).*$/,
        "$1$2.$3"
      ); //只能输入两个小数
      if (
        this.$refs.inputtt.value.indexOf(".") < 0 &&
        this.$refs.inputtt.value != ""
      ) {
        //以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
        this.$refs.inputtt.value = parseFloat(this.$refs.inputtt.value);
        this.val = this.$refs.inputtt.value;
      }
      var lis = document.getElementById("bgcc").children;
      for (var i = 0; i < lis.length; i++) {
        lis[i].classList.remove("bgcc");
      }
      for (var i = 0; i < lis.length; i++) {
        if (this.val !== parseInt(lis[i].innerHTML)) {
          lis[i].style.border = "1px solid #ccc";
        } else {
        }
      }
      for (var i = 0; i < lis.length; i++) {
        if (this.val == parseInt(lis[i].innerHTML)) {
          lis[i].style.border = "none";
          lis[i].classList.add("bgcc");
        }
      }
    },
    jinee1() {
      this.val = parseInt(event.currentTarget.innerHTML);
      var lis = document.getElementById("bgcc").children;
      for (var i = 0; i < lis.length; i++) {
        lis[i].classList.remove("bgcc");
        lis[i].style.border = " 1px solid #ccc";
      }
      event.currentTarget.classList.add("bgcc");
      event.currentTarget.style.border = "none";
    },
    chongzhiin() {
      this.val = this.$refs.inputtt.value;
      var turnType = "";
      var showType = "";
      var plateformConfigId = "";
      var userId = this.$store.state.userid;
      var openDecimal = "";
      var bankid = "";
      console.log(amount);
      var idname = event.currentTarget.getAttribute("name");
      var amount = 0;
      for (var i = 0; i < this.$store.state.rechargedetal.length; i++) {
        console.log(this.$store.state.rechargedetal[i].plateformConfigId);
        if (idname == this.$store.state.rechargedetal[i].id) {
          turnType = this.$store.state.rechargedetal[i].payType.type;
          showType = this.$store.state.rechargedetal[i].payType.showType;
          openDecimal = this.$store.state.rechargedetal[i].openDecimal;
          if (!!openDecimal) {
            amount =
              Number(this.val) + Number(Math.random().toFixed(openDecimal));
          } else {
            amount = Number(this.val);
          }
          console.log(this.$store.state.rechargedetal[i]);
          this.$store.state.bankid = this.$store.state.rechargedetal[i].bankId;
          //  console.log(this.$store.state.bankid)
          //  console.log(this.$store.state.rechargedetal)
          plateformConfigId = this.$store.state.rechargedetal[i]
            .plateformConfigId;
          this.$store.state.plateformConfigId = this.$store.state.rechargedetal[
            i
          ].plateformConfigId;
          this.$store.state.headername = this.$store.state.rechargedetal[
            i
          ].name;
        }
      }
      this.$store.state.chamount = Number(amount).toFixed(2);
      console.log(amount);
      if (amount > 1) {
        if (turnType == 1 || turnType == 2) {
          //    alert(plateformConfigId)
          base
            .getApi()
            .newRechargenew(userId, amount, plateformConfigId)
            .then(res => {
              this.result = res;
              console.log(this.result);
              this.$store.state.rechargedetailin = this.result;

              console.log(this.$store.state.rechargedetailin);
              if (this.result && this.result.code == 200) {
                this.scril = false;
                if (turnType == 2) {
                  //进来一个页面
                  console.log(turnType);
                  //判断是否为uc浏览器
                  var OsObject = navigator.userAgent;
                  var qrCode = this.result.data.qrcode;
                  var jj = window.open(qrCode, "_bank" + Math.random());
                  // window.open(qrCode,'_bank'+Math.random());
                  if (OsObject.indexOf("UCBrowser") != -1) {
                    //浏览器为uc
                    window.location.href = qrCode;
                  } else {
                    if (!jj) {
                      window.location.href = qrCode;
                      //打不开的时候
                      // alert("rrr")
                      return;
                    }
                    var pash = this.$route.path;
                    this.$store.state.goNum += 1;
                    this.$router.push({ path: `/rechargedetaling` });
                  }
                } else {
                  //正常情况
                  console.log(turnType);
                  this.$store.state.chamount = Number(amount).toFixed(2);
                  var qrcodeUrl = this.result.data.qrcodeUrl;
                  var orderNo = this.result.data.order_no;
                  this.$store.state.goNum += 1;
                  this.$router.push({ path: `/zfbchonghzi` });
                }
              } else {
                // this.scril=false;
                $.tips(this.result.message, 2000);
              }
            });
        } else if (turnType == 3) {
          console.log(turnType); //银行列表
          console.log(this.result);
          this.$store.state.chamount = Number(amount).toFixed(2);
          this.$store.state.goNum += 1;
          this.$router.push({ path: `/banking` });
        } else if (turnType == 5) {
          //二维码
          console.log(turnType);
          this.$store.state.goNum += 1;
          this.scril = true;
          this.$router.push({ path: `/eweima` });
        }
      } else {
        $.tips("请输入金额", 2000);
      }
    },
    getapitwo() {
      var turnType = "";
      var showType = "";
      var plateformConfigId = "";
      var userId = this.$store.state.userid;
      var amount = this.$store.state.val;
      var idname = event.currentTarget.getAttribute("name");
      console.log(this.$store.state.rechargedetal);
      console.log();
      for (var i = 0; i < this.$store.state.rechargedetal.length; i++) {
        if (idname == this.$store.state.rechargedetal[i].id) {
          turnType = this.$store.state.rechargedetal[i].payType.type;
          showType = this.$store.state.rechargedetal[i].payType.showType;
          plateformConfigId = this.$store.state.rechargedetal[i]
            .plateformConfigId;
        }
      }
      if (amount) {
        if (turnType == 1 || turnType == 2) {
          this.result = base
            .getApi()
            .newRecharge(userId, amount, plateformConfigId);
          console.log(this.result);
          if (this.result && this.result.code == 200) {
            this.result = base
              .getApi()
              .newRecharge(userId, amount, plateformConfigId);
            console.log(this.result);

            if (turnType == 2) {
              //判断是否为uc浏览器
              var OsObject = navigator.userAgent;
              var qrCode = this.result.data.qrcode;
              window.open(qrCode, "_bank" + Math.random());
              if (OsObject.indexOf("UCBrowser") != -1) {
              } else {
                window.location.href = "/view/user/woyizhifu.html";
              }
            } else {
              var qrcodeUrl = result.data.qrcodeUrl;
              var orderNo = result.data.order_no;
            }
          } else {
            $.tips(this.result.message, 2000);
          }
        }
      } else {
        $.tips("请填写金额", 2000);
      }
    },
    nestSelf() {
      setTimeout(() => {
        this.code = true;
      }, 1000);
      //调用自己的方法
      // 若是成功 this.code=true; 不使用弹框
      //若是失败 this.code=false; 使用弹框
    }
  }
};
</script>


<style scoped lang="less">
.loadingg {
            position: fixed;
            z-index: 99;
            top: 40%;
            left: 50%;
            margin-left: -15px;
            width: 30px;
            height: 30px;
            border-radius: 50%;
               border: 5px solid #797979;
           border-left: 5px solid #fff;
            animation: load 0.5s linear infinite;
            -moz-animation: load 0.5s linear infinite;
            -webkit-animation: load 0.5s linear infinite;
            -o-animation: load 0.5s linear infinite;
        }
.kijg{
    display: none;
}
// .paidinn{
//   position: absolute;
//   top: 0.15rem;
//   left: 0.05rem;
//   display: none;
// //   background: red;
// }
// .paidinn img{
//     position: absolute;
//     top: -0.09rem;
//     right: -0.29rem;
// }
.zhifuu{
	/*margin-bottom: 0.8rem;*/
    /* height: 2.75rem; */
    overflow: scroll;
    /*overflow-x: hidden;*/
}
.zhushou{
      position: absolute;
       width: 100%;
       height: 100%;
        // top:0.45rem;
    >.zhuzhein{
        position: absolute;
    top:0;
    height: 100%;
    background: black;
    width: 100%;
    opacity: 0.2;
    }
    ul{
        position: absolute;
        right: 0.05rem;
        width: 0.9rem;
        top:0.13rem;
        height:0.8rem;
        background: white;
        border-radius: 0.06rem;
        >li{
            
            color:gray;
            font-size: 0.14rem;

        }
        >li:nth-child(1){
            position: absolute;
            // z-index: 0;
            left: 0.5rem;
            top:-0.08rem;
            width: 0.16rem;
            height:0.16rem;
            background:white;
            transform:rotate(45deg);
            
        }
        >li:nth-child(2){
            line-height: 0.4rem;
            border-bottom: 1px solid#f5f5f5;
        }
        >li:nth-child(3){
            line-height: 0.4rem;
        }
    }
}

.bgcc{
    background: url(../../../assets/images/czbj.png) no-repeat center center;
       background-size: 100% 0.6rem;
    color:#D71437;
    // font-weight: bolder;
}
.chargedetal{
   
    background: #f5f5f5;
    font-size:0.28rem;
    .inputt{
        height:0.9rem;
        line-height: 0.9rem;
        color:gray;
        background: white;
        span:first-child{
            float: left;
            width: 38%;
        }
        input{
            float: left;
            width:50%;
            border: none;
            outline: none;
            height:0.9rem;
            text-align: center;
            font-size:0.28rem;
        }
        span:last-child{
            width: 10%;
            height:0.4rem;
            line-height: 0.4rem;
        }
    }
    .jine{
         background: white;
         border-top:1px solid #f5f5f5;
        >ul{
            overflow: hidden;
            width: 100%;
            padding-top:0.2rem;
            padding-bottom: 0.3rem;
             background: white;
            >li{
                float: left;
                width: 20%;
                box-sizing: border-box;
                border: 1px solid #ccc;
                /*margin: 0.05rem 0;*/
                margin: 0.05rem 2.5% !important;
                height:0.6rem;
                line-height: 0.6rem;
               text-align: center;
            }
        }
    }
}
.chongzhi{
    background: white;
    // padding-bottom: 0.45rem;
    >div{
        ul>{
            >li{
                padding:0.06rem ;
                // margin: 0.2rem;
                height:1.4rem;
                border-bottom: 1px dashed gainsboro;
                img{
                    width: 1rem;
                    height:1rem;
                    float: left;
                    margin-top: 0.2rem;
                    // vertical-align: middle;
                }
                a{
                    float: left;
                    display: block;
                       margin-left: 0.05rem;
                    //    width:calc(100% - 0.6rem)
                    width: 79%;
                    
                    p:nth-child(1){
                        font-size:0.28rem;
                        text-align: left;
                        margin-top:0 !important;
                        color:black;
                        line-height: 0.5rem;
                    }
                    p:nth-child(2){
                        // display: -webkit-box;
                        // -webkit-box-orient: vertical;
                        // -webkit-line-clamp: 2;
                        // overflow: hidden;
                    }
                    p{
                        font-size:0.26rem;
                        // margin-top:0.02rem;
                        color:gray;
                        text-align: left;
                    }
                }
            }
            >li:last-child{
                border: none;
            }
        }
    }
}

</style>
