<template>
  <div  style="overflow: hidden;position:absolute;top:0;width:100%;height:100%;background: #f5f5f5;z-index:1000;">
      <div class="index_header" style="">
			 <!-- <div @click="goBack" style="position: absolute;transform: translateY(-50%);color: #fff;">
                      <i class="iconfont icon-mjiantou-copy" style="    font-size: .24rem;position: absolute;line-height: 45px;margin-left: 12px;"></i>
             </div>
			<h3 style="margin-left:72px;">分享赚钱</h3>
			<div class="mycollect" @click="gohowmoney">
				如何赚钱
			</div> -->
            <Header title="分享赚钱" datal="如何赚钱" :goDetal="gohowmoney" :goBack="goBack"></Header>
		</div>
        <p class="maintop">
              <span @click="sharemony" ref="sharemony">分享赚钱</span>
              <span @click="mymoney" ref="mymoney">我的佣金</span>
          </p>
      <div class="main">
          
          <ul>
              <li> 
              <span>邀请码</span>
                  <input class="usernameipt" maxlength="6" :value="modata" type="tel" placeholder="6位数字组合" style="font-size:0.28rem;">
              <span style="" @click="mode">
                <span class="zingd" >随机选码</span> </span></li>
              <li> <span>彩票返点</span><input type="button"  :value="localRebate"  style="padding-left:0;background: transparent;text-align:left;font-size:0.28rem;" class="jin"><span class="jin" ><span></span > </span></li>
          </ul>
          <p ref="pp" style="font-size:0.28rem;line-height:0.5rem;height:0.5rem;color:red;position: absolute;width: 100%;">{{pp}}</p>
          <div class="robate" > 
              <ul>
                  <li :id="index" :name="item.rebateValue" @click="slect" v-for="(item,index) in result" :key="index">
                      {{item.rebateText}}
                  </li>
              </ul>
          </div>
          <div class="sharebox button"  @click="sharelink">生成邀请链接分享</div>
          <div class="sharebox btnbor" style="top:65%;box-sizing:border-box;" @click="checkma">查看已有邀请码</div>
      </div>
      
       
     <commission id="commission"> </commission>
     
        <div>
      </div>

      
     <div class="tixing" ref="stt">
                <div>
                    <p >复制链接分享:</p>
                    <p ref="nuim" style="margin-bottom: 0.4rem;">{{url}}</p>
                    <p @click="copyArticle"> 复制</p>
                   
                </div>
                <div></div>
        </div> 
         <transition name="slide">
           <router-view></router-view>
        </transition>       
  </div>
</template>

<script>
import commission from "./commission.vue";
import Header from "./../header/header";
export default {
  data() {
    return {
      result: "",
      val: "",
      i: "",
      localRebate: "",
      modata: "",
      userid: "",
      url: "",
      pp: ""
    };
  },
  components: {
    Header,
    commission: commission
  },
  mounted:function() {
    this.userid = JSON.parse(myStorage.getItem("currentUser")).id;
    this.robate();
    this.i = 0;
    var self = this;
    $(".jin").click(function() {
      self.i++;
      var div = $(".robate");
      if (self.i % 2 == 1) {
        div.animate({ height: "330px" }, "slow");
      } else {
        div.animate({ height: "0" }, "slow");
      }
    });
    this.isstyleAll();
  },
  methods: {
    sharelink() {
       this.modata=document.getElementsByClassName("usernameipt")[0].value;
       var reg =/^[0-9]{6}$/;
      if (this.modata&&reg.test( this.modata)) {
        if (this.localRebate) {
          var ploxyRegister = base
            .getApi()
            .buildCode(this.userid, this.modata, 1, this.localRebate);
          console.log(ploxyRegister);
          if (ploxyRegister.message == "成功") {
            
            var that = this;
          
            that.url =JSON.parse(localStorage.getItem("sysConfigMap")).webLink.cvalue + "?code=" + this.modata;
            
            that.$refs.stt.style.display = "block";
            //  }, 500);
          }
        } else {
          $.tips("请选择彩票返点");
        }
      } else {
        $.tips("请输入六位数字邀请码");
      }
    },
    copyArticle() {
      var range = document.createRange();
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
    checkma() {
      this.$store.state.daiLiType = 2;
      this.$router.push({ path: "/daili/dailitwo" });
    },
    mymoney() {
      document.getElementsByClassName("main")[0].style.display = "none";
      event.currentTarget.style.borderBottom = "2px solid "+window.mapcolor;
      event.currentTarget.style.color = window.mapcolor;
      this.$refs.sharemony.style.border = "none";
      this.$refs.sharemony.style.color = "#000";
      document.getElementById("commission").style.display = "block";
    },
    sharemony() {
      //  this.$refs.nextt.style.borderBottom="2px solid "+window.mapcolor;
      event.currentTarget.style.borderBottom = "2px solid "+window.mapcolor;
      event.currentTarget.style.color =  window.mapcolor;
      this.$refs.mymoney.style.border = "none";
      this.$refs.mymoney.style.color = "#000";
      document.getElementById("commission").style.display = "none";
      document.getElementsByClassName("main")[0].style.display = "block";
    },
    mode() {
      //  console.log(base.getApi().randomCode(userid).data)
      this.modata = base.getApi().randomCode(this.userid).data;
    },
    gohowmoney() {
      this.$router.push({ path: "/share/howmoney" });
    },
    slect() {
      this.val = event.currentTarget.innerText.split("(")[0];
       this.modata=document.getElementsByClassName("usernameipt")[0].value;
      this.localRebate = event.currentTarget.getAttribute("name");
      // //  console.log(this.localRebate)
      if (event.currentTarget.id == 0) {
        this.pp = "您的赔率与下级相同,您将没有佣金";
        //  $.tips("您的赔率与下级相同,您将没有佣金")
      } else {
        this.pp = "";
      }
      this.i++;
      $(".robate").animate({ height: "0" }, "slow");
      //  event.currentTarget.value;
    },
    goBack() {
      this.$router.go(-1)
      $('.oshade').click();
    },
    robate() {
      this.result = base.getApi().rebateList(this.userid).data;
      //  console.log(this.result)
    },
    isstyleAll(){
    
    }
  },
//   components: {
    
//   }
};
</script>

<style scoped lang='less'>
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
    // width: 80%;
    // height: 300px;
    top: 300px;
    left: 50%;
    margin-left: -150px;
    // height: 150px;
    width: 300px;
    background: #fff;
    > p:nth-child(1) {
      line-height: 0.7rem;
      font-size: 0.28rem;
      font-weight: 600;
    }
    > p:last-child {
      border-top: 1px solid whitesmoke;
      overflow: hidden;
      line-height: 0.4rem;
      // line-height:0.7rem;
    }
  }
}

.zingd {
  // border: 1px solid red;
  // color: red;
  line-height: 0.4rem;
  font-size: 0.24rem;
  display: inline-block;
  border-radius: 6px;
  // color: #000;
  padding: 0 0.2rem;
}
#commission {
  display: none;
  margin-top: 0.1rem;
}
.maintop {
  overflow: hidden;
  width: 100%;
  // border-bottom: 1px solid gray;
  background: #fff;
  font-size: 0.28rem;
  span {
    float: left;
    width: 50%;
    line-height: 0.8rem;
    font-size: 0.28rem;
  }
  span:nth-child(1) {
    box-sizing: border-box;
    // border-bottom: 2px solid #fc4a55;
    // color: #fa3855;
    font-size: 0.28rem;
  }
}
.sharebox {
  width: 70%;
  position: absolute;
  top: 55%;
  line-height: 0.8rem;
  left: 15%;
  color: #fff;

  border-radius: 0.05rem;
  font-size: 0.28rem;
}
.main {
  font-size: 0.28rem !important;
  color: #999999;

  > ul {
    margin-top: 0.1rem;
    width: 100%;
    > li {
      line-height: 0.7rem;
      // border-radius:
      background: #fff;
      border: 1px solid #f5f5f5;
      overflow: hidden;
      > span {
        float: left;
        overflow: hidden;
      }
      > span:nth-child(1) {
        width: 30%;
        text-indent: 1em;
        text-align: left;
      }

      > span:last-child {
        width: 30%;
        float: right;
        font-size: 0.28rem;
      }
      > input {
        width: 40%;
        float: left;
        border: none;
        outline: none;
        height: 0.5rem;
        margin-top: 0.1rem;
        color: #000;
      }
      > .jin {
        span {
          border-top: 1px solid #3c3232;
          border-left: 1px solid#3c3232;
          height: 0.1rem;
          display: inline-block;
          transform: rotate(-135deg);
          width: 0.1rem;
        }

        //
        //     padding:0;
        //     margin-top:0.13rem;
        //
      }
    }
  }
  > .robate {
    width: 80%;
    margin: 0 auto;
    height: 0;
    overflow: scroll;
    background: #f5f5f5;
    // margin-top:0.1rem;
    position: absolute;
    z-index: 10;
    left: 50%;
    margin-left: -40%;
    color: #000;
    li {
      line-height: 0.8rem;
    }
  }
}
.wrap_header {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 200;
}
.index_header {
  width: 100%;
  height: 0.8rem;
  display: flex;
  color: #fff;
  margin: 0 auto;
  background-color: linear-gradient(90deg, #fa3956, #ff6b52);
}
.index_header h3 {
  height: 0.8rem;
  line-height: 0.8rem;
  flex: 1;
  text-align: center;
  font-size: 0.28rem;
}
.index_header .mycollect {
  height: 0.8rem;
  line-height: 0.8rem;
  width: 0.72rem;
  text-align: center;
  font-size: 0.28rem;
}
</style>
