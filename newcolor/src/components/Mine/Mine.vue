<template>
    <div style="    position: relative;height: 100%;overflow: hidden;background:#fff;"> 
       
        <div  ref="mineFirst" id="mineFirst">
            <!--主内容区-->
            <div class="usercontent" style="width:100%;">
                <!--未登录状态-->
                <div v-if="islog==null" class="details afterlogin" id="unLoginDiv">
                    <!-- <img :src="domain+'upload/img/popUp/other/background.png'" alt="" style=" position: absolute;top:0;width:100%;height:130px;"> -->
                     <!-- <headertop class="afterlogin" :title="title" :datal="datal"  :ifback='false' ifbackgo="false" :goBack="goBack"> </headertop> -->
                     <div class="afterlogined">
                            <div class="details_left">
                                <img src="../../assets/images/me_tx_nor@2x.png" alt="">
                            </div>
                            <div class="details_right" style="width:100%;">
                                <span class="spannode">未登录</span>
                                <div class="btn">
                                    <router-link to="/login">
                                        <input type="button" name="" id="loginInput" value="登录"  class="reg" style="background:#fff" @click="ccde" />
                                    </router-link>
                                    <router-link to="/register">
                                        <input type="button" name="" id="registerInput" value="注册" style="color: #fff !important;"/>
                                    </router-link>
                                </div>
                            </div>
                     </div>
                   
                </div>
                <!--登录状态-->
                <div v-else class="details beforelogin" id="loginDiv">
                      <!-- <img  :src="domain+'upload/img/popUp/other/background.png'" alt="" style=" position: absolute;top:0;width:100%;height:130px;"> -->
                     <!-- <headertop style="position:absolute" class="beforelogintop" :title="title" :datal="datal" :goDetal="goDetal" :ifback='false' ifbackgo="false" :goBack="goBack"> </headertop> -->
                    <div class="beforelogined">
                        <div class="details_left" >
                            <img src="../../assets/images/headd.png" title="" />
                        </div>
                        <div class="details_right">
                            <h3 id="userName">{{account}}</h3>
                            <p>
                                <!-- <img src="../../assets/source/imgs/img-user/me_icon_money@2x.png" /> -->
                                <span id="userBalanceP" style="margin-left:0">￥{{balance}}</span>
                                <span ><img  ref="iconfont1" @click="getmoney" src="../../assets/images/shuaxin.png" alt=""></span>
                            </p>
                        </div>
                         <div  @click="qiandaoo" class="qiandaoing" style="">
                           
                            <img style="height: 0.7rem;
    border-radius: 50%;" src="../../assets/images/qiandaoed.png" title="" />
                            <!-- <span> {{qiandao}}</span> -->
                        </div>
                    </div>
                    
                </div>
                <!--隔离-->
                <div class="quarantine">
                    <div class="bottomquarantine"></div>
                    <div class="topquarantine"></div>
                </div>
                <!--tab切换-->
                <div class="tab" style="">
                    <div @click="chongzhi" class="tabcontent " id="rechargeFuncA">
                    <p><span><img src="../../assets/images/cun.png" alt=""></span> <span style="    text-align: left;
    line-height: 1rem;    border-right: 1px solid #c1c0c0;
    box-sizing: border-box;"> 充值</span></p>
                        <!-- <span>充值</span> -->
                    </div>
                    <div  class="tabcontent" id="drawingsA" @click="tabcontent">
                        <p><span><img  src="../../assets/images/qu.png" alt=""> </span><span style="    text-align: left;
    line-height: 1rem;"> 提现</span></p>
                        <!-- <span>提现</span> -->
                    </div>
                </div>
                <div class="quarantine">
                    <div class="topquarantine"></div>
                    <div class="bottomquarantine"></div>
                </div>
                <!--个人记录列表-->
                <div id="topmylist" style="   
    position: absolute;
    width: 100%;
       border-top: 0.15rem solid #f5f5f5;
    background:#fff;
        top: 3rem;
        
    ">
                   <div class="mylist" ref="mylist" >
                    <ul>
                        <li id="redPacket" style="position: relative;" @click="redPacket">
                                <img src="../../assets/source/imgs/img-user/hb.png" />
                                <p >领取红包</p>
                                <div ref="pag" class="pag" v-if="noDrawRedCount"></div>
                        </li>
                        <li id="bettingListFuncA"  @click="bettingListFuncA">
                                <img src="../../assets/source/imgs/img-user/me_icon_stake@2x.png" />
                                <p>投注记录</p>
                        </li>
                        <li id="accountDetailListFuncA"  @click="accountDetailListFuncA">
                                <img src="../../assets/source/imgs/img-user/me_icon_account@2x.png" />
                                <p>账户明细</p>
                        </li>
                        <li id="rechargeListFuncA"  @click="rechargeListFuncA">
                                <img src="../../assets/source/imgs/img-user/me_icon_store@2x.png" />
                                <p>充值记录</p>
                        </li>
                        <li id="drawFuncA"   @click="drawFuncA">
                                <img src="../../assets/source/imgs/img-user/me_icon_take@2x.png" />
                                <p>提款记录</p>
                        </li>
                        <li id="Daili"   @click="Daili">
                                <img src="../../assets/source/imgs/img-user/dlzx_03.png" />
                                <p>代理中心</p>
                        </li>
                        
                         <li id="colletingFuncA" @click="colletingFuncA">
                                <img src="../../assets/source/imgs/img-user/me_icon_collection@2x.png" />
                                <p>我的收藏</p>
                        </li>
                        <li id="zhengqian"   @click="zhengqian">
                                <img id="shared" src="../../assets/source/imgs/img-user/me_icon_fx.png" />

                                <p> {{zhuan}}</p>
                        </li>
                        <li id="messageListFuncA" style="position: relative;"  @click="messageListFuncA" >
                                <img src="../../assets/source/imgs/img-user/me_icon_msg@2x.png" />
                                <p ref="mesg">信息公告</p>
                                <div ref="pag" class="pagg app_bgg" v-if="isview"></div>
                        </li>
                         <li id="serviceFuncA" @click="serviceFuncA">
                            <a target="_blank" v-if="onlineURL" style="color:black" >
                                <img src="../../assets/source/imgs/img-user/me_icon_service@2x.png" />
                                <p v-if="OnlineRemark">{{OnlineRemark}}</p>
                                <p v-else>在线客服</p>
                            </a>
                            <!-- <a target="_blank" v-else style="color:black" href="https://f18.livechatvalue.com/chat/chatClient/chatbox.jsp?companyID=876510&configID=72957&jid=8025085340&s=1">
                                <img src="../../assets/source/imgs/img-user/me_icon_service@2x.png" />
                                <p v-if="OnlineRemark">{{OnlineRemark}}</p>
                                <p v-else>在线客服</p>
                            </a> -->
                            
                        </li>
                        <li  ref="serviceFuncAqq" @click="serviceFuncAqq">
                                <img src="../../assets/source/imgs/img-user/me_icon_service@2xx.png" />
                                <p v-if="qqRemark">{{qqRemark}}</p>
                                <p v-else>QQ客服</p>
                                <!-- <i class="iconfont">&#xe647;</i> -->
                            <!-- </a> -->
                        </li>
                        <li id="settingNew" @click="goDetal">
                                <img src="../../assets/source/imgs/img-user/me_icon_setting@2x.png" />
                                <p>系统设置</p>
                        </li>
                        <!-- <li id="playRuleFuncA"  @click="playRuleFuncA">
                                <img src="../../assets/source/imgs/img-user/me_icon_rule@2x.png" />
                                <p>玩法规则</p>
                        </li>
                        <li id="settings"  @click="settings">
                                <img src="../../assets/source/imgs/img-user/me_icon_setting@2x.png" />
                                <p>详细设定</p>
                        </li>
                        <li id="winAmountFuncA" @click="winAmountFuncA">
                                <img src="../../assets/images/jjxq.png" />
                                <p>奖金详情</p>
                        </li> -->
                       
                    </ul>
                </div>
                </div>
               
            </div>
            <div class="tixing" ref="stt">
                    <div>
                        <p >请手动添加QQ客服:
                            <span v-if="uin" ref="nuim"> {{uin}}</span>
                            <span v-else> "暂时没有QQ客服"</span>
                        </p>
                        <p @click="copyArticle" > 复制</p>
                    </div>
                    <div @click="deson"></div>
            </div>
            <div class="tixingg" >
                        <!-- <img src="../../assets/images/tipd.png" alt=""> -->
                    <div>
                       <img src="../../assets/images/tipd.png" style="width:1.8rem;" alt="">
                        <p style="margin-top:0.2rem;font-size:0.38rem;">陛下</p>
                        <p style="line-height:0.8rem;color:#000;font-size:0.3rem;">您还没有绑定银行卡</p>
                        <p style="line-height:1rem;color:#999;font-size:0.3rem;">请第一时间绑定银行卡</p>
                        <p style="line-height:0.4rem;line-height: 0.8rem;width: 60%; margin-left: 20%;background:#fa3956;border-radius: 20px;color:#fff"   @click="goseting">去设置</p>
                        <p style="line-height:0.4rem;line-height: 0.8rem;width: 60%; margin-left: 20%; border-radius: 20px;margin-top:0.5rem;" class="app_border"  @click="know">我知道了</p>
                        <!-- <p> <span > 知道了</span><span  >去设置</span></p> -->
                    
                    </div>
                    <div></div>
            </div>
        </div>
          <div class="tixied" v-if="iftixied">
                <div>
                    <p >复制链接分享:</p>
                    <p ref="nuimin" style="margin-bottom: 0.2rem;">{{url}}</p>
                    <p @click="copyArticleed"> 复制</p>
                </div>
                <div  @click="desonn"></div>
          </div> 
       <!-- <transition name="slide"> -->
           <router-view></router-view>
        <!-- </transition> -->
    </div>
</template>

<style scoped lang="less">
.tixied {
  position: fixed;

  width: 100%;
  height: 100%;
  top: 0;
  // display: none;
  font-size: 0.24rem;
  z-index: 9999;
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
    // width: 80%;
    // height: 300px;
    top: 5rem;
    left: 50%;
    margin-left: -2.5rem;
    // height: 150px;
    width: 5rem;
    background: #fff;
    > p:nth-child(1) {
      line-height: 0.8rem;
      font-size: 0.28rem;
      font-weight: 600;
    }
    > p:last-child {
      border-top: 1px solid whitesmoke;
      overflow: hidden;
      line-height: 0.8rem;
      // line-height:0.5rem;
    }
  }
}
.top {
  background: transparent !important;
}
.details{
   
}
.afterlogin {
      width:100%;
      position: absolute;
      top: 0;
      >.beforelogintop{
          width:100%;
  
      }
    
    .afterlogined {
        width:100%;
        position: absolute;
        top: 20px;
      .details_left {
        background: transparent;
            float: left;
                margin-left: 0.1rem;
      }
    .details_right {
      background: transparent;
    }
  }
  
}
  .beforelogined{
       width: 100%;
    position: absolute;
    top: 0.4rem;
       >div{
         float: left;
       }
       >div:nth-child(1){
             margin-left: 5%;
       }
       >div:nth-child(2){
          margin-left: 3%;
       }
     }
.pag {
  width: 0.1rem;
  height: 0.1rem;
  border-radius: 50%;
  background: #fb4055;
  position: absolute;
  top: 11px;
  right: 30%;
  display: none;
}
.pagg {
  width: 0.1rem;
  height: 0.1rem;
  border-radius: 50%;
  background: #fb4055;
  position: absolute;
  top: 11px;
  right: 30%;
  display: block;
}
.tixingg {
  position: fixed;

  width: 100%;
  height: 100%;
  top: 0;
  display: none;
  font-size: 0.28rem !important;
  z-index: 10000;
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
    top: 3rem;
    left: 50%;
    margin-left: -130px;
    height: 280px;
    width: 260px;
    background: #fff;
    > p:nth-child(3) {
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
.tixing {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  display: none;
  font-size: 0.28rem;
  z-index: 9999;
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
    width: 5rem;
    background: #fff;
    > p:nth-child(1) {
         margin-top: 0.2rem;
    line-height: 1rem;
    font-size: 0.32rem;
    font-weight: 600;
    }
    > p:nth-child(2) {
     border-top: 1px solid whitesmoke;
    overflow: hidden;
    line-height: 0.7rem;
    }
  }
}
/*主内容区*/

/* 登录与未登录 */
.details {
      height: 2.5rem;
    margin: 0 auto;
    display: flex;
}
.details_left {
}
.details_left img {
      width: 1.3rem;
    border-radius: 50%;
}
.details_right {
  flex: 1;
}
.details_right h3 {
      height: 0.6rem;
    line-height: 0.5rem;
    margin-top: 0.12rem;
    font-size: 0.3rem;
    text-align: left;
    color: #fff;
}
.details_right .spannode {
  color: #fff;
  display: block;
  line-height: 1.4rem;
  float: left;
  font-size: 0.3rem;
  padding-left: 0.1rem;
}
.details_right .btn {
  float: right;
  height: 0.84rem;
  margin-right: 0.1rem;
}
.details_right .btn input {
  margin-left: 0.1rem;
    width: 1.4rem;
    border: 1px solid #ffdfdd;
    border-radius: 0.03rem;
    line-height: 0.6rem;
    text-align: center;
    margin-top: 0.24rem;
    font-size: 0.3rem;
    float: left;
    outline: none;
}

.details_right p {
  position: relative;
  width: 100%;
}
.details_right p img {
      width: 0.4rem;
    height: 0.4rem;
    margin-top: -0.04rem;
    float: left;
    margin-left: 0.1rem;
}
.details_right p span {
 display: block;
    line-height: 0.32rem;
    float: left;
    position: relative;
    color: #fff;
    font-size: 0.28rem;
}
.details_right p i {
  font-size: 0.24rem;
  color: #999;
  font-weight: 600;
  vertical-align: top;
  position: absolute;
  right: -0.25rem;
  top: 0;
}
.qiandaoing{
     z-index: 99;
    height: 0.7rem;
    background: #fff;
    font-size: 0.28rem;
    float: right !important;
    margin-top: 0.2rem;
    border-radius: 20px 0 0 20px;
    padding-right: 0.08rem;
    color: #fbb531;
}
.sign_inmax {
  // display: flex;
  justify-content: center;
  align-items: center;
  margin-right: -0.15rem;
}
.sign_inmax .iconfont {
  // height: .4rem;
  line-height: 0.4rem;
  font-size: 0.13rem;
  background-color: #f5a623;
  color: white;
  position: absolute;
  right: 0;
}
.sign_in {
 font-size: 0.28rem;
}
/*隔离*/
.quarantine {
  width: 100%;
  background: #f5f5f5;
}
.topquarantine {
  height: 1rem;
  border-bottom: 0.01rem solid #f8f8f8;
}
/* tab切换 */
.tab {
       background: #fff;
    display: flex;
    font-size: 0.16rem;
    position: absolute;
    width: 100%;
    top: 2rem;
    border-radius: 6px;
}
.tabcontent {
       width: 50%;
    text-align: center;
    position: relative;
    height: 1rem;
}
.tabcontent p {
  overflow: hidden;
}
.tabcontent span {
  float: left;
  width:50%;
  font-size: 0.28rem;
}
.tabcontent img {
        width: 0.78rem;
    float: right;
    margin-top: 0.2rem;
}
// .tabcontent:first-child:after{
//     content: '';
//     display: block;
//     height: .2rem;
//     width: 0.1rem;
//     transform: scaleX(0.5);
//     position: absolute;
//     right: 0;
//     top: .15rem;
// }
// .tabcontent span{
//     font-size: .16rem;
//     line-height: 0.4rem;
//     vertical-align: middle;
// }
.pitch {
  /* color: #d91e38; */
  // border-top: 1px solid whitesmoke;
  // border-right: 1px solid whitesmoke;
}
/*个人记录列表*/
.mylist {
  overflow: scroll;
    font-size: 0.28rem;
    position: absolute;
    width: 100%;

}
.mylist::-webkit-scrollbar {display:none}
.mylist ul {
  // margin-top: .1rem;
  overflow: hidden;
  // padding-bottom: 0.45rem;
}
.mylist ul:first-child {
  margin-top: 0;
  padding-bottom:0.5rem;
}
.mylist ul li {
    border-bottom: 1px solid #f5f5f5;
    float: left;
    width: 33.33%;
    box-sizing: border-box;
    position: relative;
    height: 1.8rem;
}
.mylist ul li:last-child {
  border-bottom: none;
}
.mylist ul li:nth-child(10) {
  border-bottom: none;
}
.mylist ul li:nth-child(11) {
  border-bottom: none;
}
// .mylist ul li a{
//     color: #111;
//     font-size: .14rem;
//     display: block;
//     // height: 0.45rem;
//     width: 92%;
//     margin: 0 auto;
//     position: relative;
// }
.mylist ul li img {
  width: 1.4rem;
      height: 1.4rem;
  margin-top: 0.1rem;
  // float: left;
}
.mylist ul li p {
  display: block;
    // padding-bottom: 0.1rem;
    position: absolute;
    width: 100%;
    // top: 0;
    bottom: 0.05rem;
    font-size: 0.22rem;
}

.mylist ul li a .announcement {
  width: 0.12rem;
  height: 0.12rem;
  border-radius: 50%;
  background: #d91e38;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0.18rem;
}

#shade {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.3);
  display: none;
  z-index: 1000;
}

.setpassword {
  display: none;
  width: 79.333%;
  background-size: contain;
  background-color: #fff;
  border-radius: 0.45rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  box-sizing: border-box;
  z-index: 1200;
}
.setpassword h3 {
  height: 2.5rem;
  line-height: 2.5rem;
}
.setpassword h3:first-child {
  margin-top: 1rem;
  font-size: 18px;
  font-weight: 100;
}
.setpassword p {
  height: 2.2rem;
  line-height: 4.2rem;
  color: #666;
  font-size: 14px;
}
.setpassword .setbtn {
  display: flex;
  justify-content: space-around;
}
.setpassword input {
  line-height: 3rem;
  margin-top: 3rem;
  background: #fff;
  font-size: 15px;
  flex: 1;
}
.setpassword input:nth-of-type(1) {
  color: gray;
  border: none;
  border-top: 1px solid ghostwhite;
  border-right: 1px solid ghostwhite;
}
.setpassword input:nth-of-type(2) {
  border-top: 1px solid ghostwhite;
}
.setpassword .gobtn {
  color: #fff;
}
.topquarantine {
  display: none;
}
.wrap-header .header .header-oper {
  right: 1.5rem;
}
// #loginDiv {
//   > div {
//     float: left;
//   }
//   > div:nth-child(1) {
//     width: 20%;
//   }
//   > div:nth-child(2) {
//     width: 60%;
//   }
//   > div:nth-child(3) {
//     width: 30%;
//     position: relative;
//     top: 0.2rem;
//   }
// }
</style>

<script>
import headertop from "../header/header";

import { kefu } from '../../assets/api/app.js'
export default {
  components: {
    headertop
  },
  data() {
    return {
      title: "",
      datal:"",
      islog: "",
      interval: "",
      qiandao: "",
      currentUser: "",
      userid: "",
      sysConfigMap: "",
      OnlineRemark: "",
      qqRemark: "",
      uin: "",
      onlineURL: "",
      url:"",
      iftixied:false,
      token:"",
      account:"",
      unViewNum:"",
      noDrawRedCount:"",
      zhuan:'分享赚钱',
      domain:base.domain
    };
  },
  computed: {
     balance(){
      return this.$store.state.money;
    },
    isview(){
      return this.$store.state.unViewNum;
    }
  },
  created(){
    this.token=localStorage.getItem("token");
    this.gettime();
    this.getOnlineRemark();
      var currentUsered = JSON.parse(myStorage.getItem("currentUser"));
      if (currentUsered){
        this.currentUser = base.getApi().userInfo(currentUsered.id).data.user;
        localStorage.setItem(
          "currentUser",
          JSON.stringify(this.currentUser)
        );
      }
      // this.currentUser = base.getApi().userInfo(currentUsered.id).data.user;
      // localStorage.setItem(
      //   "currentUser",
      //   JSON.stringify(this.currentUser)
      // );
  },
  mounted: function() {
    this.islog =  this.token;
  
    if (this.currentUser) {
      if(this.$store.state.firMine){
        window.base.getApi().userInfonew(this.currentUser.id).then((res)=>{
           var currentUser1=res;
           this.$store.state.unViewNum=currentUser1.data.unViewNum;
        
          this.$store.state.noDrawRedCount=currentUser1.data.noDrawRedCount;
          this.currentUser=currentUser1.data.user;
          console.log( currentUser1)
          this.$store.state.money=this.currentUser.balance.toFixed(2)
          this.$store.state.firMine=false;
          this.type = this.currentUser.type;
          this.$store.state.userType=this.currentUser.type;
          console.log(this.$store.state.userType);
          this.topee()
         });
         
         
      }else{
        base.getApi().getBalacenew(this.currentUser.id).then((res)=>{
                 var usered=res.user;
                  this.$store.state.money= usered.balance.toFixed(2);
             this.type = usered.type;
              this.$store.state.userType= usered.type;
               console.log(this.$store.state.userType);
                this.topee()
        })
         
      }
     
    }
    this.$nextTick(() => {
        this.colornew()
      if (this.currentUser) {
        this.type = this.currentUser.type;
        // 标记红包
        // this.getredradio();
        // 标记未读信息
        // this.getmeg();
        // 标记签到记录
        // this.getuserinfo();
      
        if(this.type==1){
           document.getElementById("shared").src=require('../../assets/images/shared.png');
           this.zhuan="邀请好友"
        }else{
          document.getElementById("shared").src=require('../../assets/source/imgs/img-user/me_icon_fx.png');
          this.zhuan="分享赚钱"
         }
      }
      
      
    });
   
    this.$nextTick(() => {
      this.getHeight();
    });
  },
  methods: {
    ccde(){
      this.$store.state.minelogin=true;
    },
    serviceFuncA(){
     if(this.$store.state.isid){
                     kefu()
                }else{
                    window.open(onlineURL) 
                }
    },
    topee(){
       this.unViewNum= this.$store.state.unViewNum;
         this.noDrawRedCount=this.$store.state.noDrawRedCount
      this.account= this.currentUser.account
      this.userid = this.currentUser.id;
      this.$store.state.userid = this.userid;
      localStorage.setItem("flash", 1);
       console.log(this.$store.state.unViewNum)
    },
    desonn(){
      this.iftixied=false;
    },
    deson(){
      // tixing
      document.getElementsByClassName("tixing")[0].style.display="none"
    },
    
   
    Daili(){
         if ( this.token) {
             this.$store.state.userType=base.getApi().getBalace(this.currentUser.id).user.type
          if (this.type !== 2) {
            this.$router.push({ path: "/daili" });
          } else {
            $.tips("试玩账号没有代理功能", 1000);
          }
        } else {
          $.tips("请登录查看", 1000);
        }
    },
    zhengqian(){
      if ( this.token) {
          if (this.type == 3) {
            this.$router.push({ path: "/share" });
          } else if(this.type == 1){
                this.iftixied=true
                this.url = JSON.parse(localStorage.getItem("sysConfigMap")).userLink.cvalue
                console.log(this.url)
           
          }else{
             $.tips("非代理账户不能分享赚钱", 1000);
          }
        } else {
          $.tips("请登录查看", 1000);
        }
    },
    redPacket(){
       if ( this.token) {
          if (this.type !== 2) {
            this.$router.push({ path: "/redPacket" });
          } else {
            $.tips("试玩账号没有领取红包功能", 1000);
          }
        } else {
          $.tips("请登录查看", 1000);
        }
    },
    bettingListFuncA(){
       if ( this.token) {
          this.$store.betterRouter = "/mine";
          this.$router.push({ path: "/bettingRecord" });
        } else {
          $.tips("请登录查看", 1000);
        }
    },
    accountDetailListFuncA(){
       if ( this.token) {
          this.$router.push({ path: "/accountDetails" });
        } else {
          $.tips("请登录查看", 1000);
        }
    },
    rechargeListFuncA(){
       if ( this.token) {
          if (this.type == 2) {
            $.tips("试玩账号不能查看充值记录", 1000);
          } else {
            this.$router.push({ path: "/rechargeRecord" });
          }
        } else {
          $.tips("请登录查看", 1000);
        }
    },
    drawFuncA(){
       if ( this.token) {
          if (this.type == 2) {
            $.tips("试玩账号不能查看提款记录", 1000);
          } else {
            this.$router.push({ path: "/withdrawalsRecords" });
          }
        } else {
          $.tips("请登录查看", 1000);
        }
    },
    colletingFuncA(){
        if ( this.token) {
          if (this.type !== 2) {
            this.$router.push({ path: "/mycollect" });
          } else {
            $.tips("对不起，试玩账号不能查看收藏列表", 1000);
          }
        } else {
          $.tips("请登录查看", 1000);
        }
    },
    messageListFuncA(){
     if ( this.token) {
          this.$router.push({ path: "/usermsg" });
        } else {
          $.tips("请登录查看", 1000);
        }
    },
   
      goBack(){},
       gettime(){
              if(window.ifcvalue){
                base.getApi().getPTimestamp1().then((res)=>{
                             this.version= res.version;
                              window.updata(this.version,2);
                 });
                
              }else{
               base.getApi().loadTimestamp1().then((res)=>{
                        this.version= res.version;
                        window.updata(this.version,1)
                });
                
              }
              
           },
    getHeight() {
      if(localStorage.getItem("token")){
        this.$refs.mylist.style.height =
        document.getElementsByTagName("body")[0].offsetHeight-document.getElementById("loginDiv").offsetHeight-document.getElementById("drawingsA").offsetHeight-document.getElementsByClassName("foottab")[0].offsetHeight+20+
        "px";
      }else{
        this.$refs.mylist.style.height =
        document.getElementsByTagName("body")[0].offsetHeight-document.getElementById("unLoginDiv").offsetHeight-document.getElementById("drawingsA").offsetHeight-document.getElementsByClassName("foottab")[0].offsetHeight+20+
        "px";
       
      }
      

      
        
    },
    goDetal() {
      this.$router.push({ path: "/minesetting" });
    },
    goseting() {
      this.$router.push({ path: "/addbankcard" });
    },
    know() {
      document.getElementsByClassName("tixingg")[0].style.display = "none";
    },

    serviceFuncAqq() {
      
      this.$refs.stt.style.display = "block";
      this.uin = this.sysConfigMap.QqCustomService.cvalue;

    },
     copyArticleed() {
      var range = document.createRange();
      var nuimin = this.$refs.nuimin;
      range.selectNode(nuimin);

      var selection = window.getSelection();
      if (selection.rangeCount > 0) selection.removeAllRanges();
      selection.addRange(range);

      document.execCommand("copy");
      $.tips("复制成功");
      this.iftixied=false
     
    },
    copyArticle(event) {
      var range = document.createRange();
      console.log(event.currentTarget.parentNode.children[1]);
      var nuim = this.$refs.nuim;
      range.selectNode(nuim);

      var selection = window.getSelection();
      if (selection.rangeCount > 0) selection.removeAllRanges();
      selection.addRange(range);

      document.execCommand("copy");
      $.tips("复制成功");
      self = this;
      setTimeout(() => {
        self.$refs.stt.style.display = "none";
      }, 200);
    },
  
    tabcontent() {
      if (this.islog) {
        if (this.currentUser.type == 2) {
          $.tips("试玩账号不能提现");
        } else {
          var currentUser = JSON.parse(
            window.localStorage.getItem("currentUser")
          );
          if (currentUser.userCardList.length) {
            this.$router.push({ path: "/tixian" });
          } else {
            document.getElementsByClassName("tixingg")[0].style.display =
              "block";
          }
        }
      } else {
        $.tips("您还未登录", 1000);
      }
    },
    qiandaoo() {
      if (this.currentUser.type == 2) {
        $.tips("试玩账号不能签到");
      } else {
        if (!this.currentUser.isSign) {
          var result = base.getApi().qd_All(this.currentUser.id);
          // this.currentUser = base.getApi().userInfo(this.userid).data.user;
          if (result.code == 200) {
            this.currentUser = base.getApi().userInfo(this.userid).data.user;
            console.log(this.currentUser);
            localStorage.setItem(
              "currentUser",
              JSON.stringify(this.currentUser)
            );
            $.tips(result.message);
          }
        }
        this.qiandao = "已签到";
        this.$router.push({ path: "/qiandao" });
      }
    },
    getmoney() {
       clearInterval(this.interval);
       var data=base.getApi().userInfo(this.currentUser.id).data
       this.$store.state.money= data.user.balance.toFixed(2);
       this.$store.state.unViewNum=data.unViewNum;
        
         this.$store.state.noDrawRedCount=data.noDrawRedCount;
      myStorage.setItem("currentUser", JSON.stringify(data.user));
      var i = 0;
      var self = this;
      this.interval = setInterval(() => {
        self.$refs.iconfont1.style.transform = `rotateZ(${i}deg)`;
        i = i + 5;
      }, 1);

      setTimeout(() => {
        clearInterval(this.interval);
        $.tips("已刷新金额");
      }, 1000);
    },
    chongzhi() {
      if (this.islog) {
        if (this.currentUser.type == 2) {
          $.tips("试玩账号不能充值", 1000);
        } else {
          this.$router.push({ path: "/recharge" });
        }
      } else {
        $.tips("请登录查看", 500);
      }
    },
    tixian() {
      $.tips("请登录查看", 500);
    },

    colornew() {
      $(".foottab ul li:nth-of-type(2) dl dd").css("color", "#999");
      $(".foottab ul li:nth-of-type(2) dl dt .dtbg").css(
        "background-position",
        "-93px -26px"
      );
 
    },
    getOnlineRemark() {
      this.sysConfigMap = JSON.parse(myStorage.getItem("sysConfigMap"));
       this.onlineURL = this.sysConfigMap.onlineCustomService.cvalue;
      console.log(this.sysConfigMap);
      this.OnlineRemark = this.sysConfigMap.onlineCustomService.remark;
      this.qqRemark = this.sysConfigMap.QqCustomService.remark;
      //在线路由
     
    }
  }
};
</script>
