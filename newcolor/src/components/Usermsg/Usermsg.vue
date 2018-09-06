<template>
    <div style="overflow: hidden;position:absolute;top:0;width:100%;height:100%;background: white;z-index:1000;">
        <!-- 顶部 -->
        
        <div class="header_wrap" style="position:absolute">
            <Header title="信息公告" :goBack="goBack"></Header>

        
        </div>
        <!-- 消息tab分类 -->
        <div class="ringup">
            <div class="nav">
                <ul class="clear">
                    <li @click="one('')" class="isclick">全部</li>
                    <li v-for="(inte,index) in arrAll" :key="index" :id="inte.split('-')[0]" @click="one(inte.split('-')[0])">{{inte.split('-')[1]}}</li>
                </ul>
            </div>
            <!--订单列表-->
            <div class="listwrap" ref="listwrapVue" style="width: 100%;">
                <div class="orderlist" style="width: 100%;
    height: 100%;">
                    <!-- 无数据样式 -->
                    <div class="nodata" style="display:none;">
                        <div class="nodata-top">
                            <img src="../../assets/images/lack1.png" alt="">
                            <h4>暂无消息记录</h4>
                            <p>大奖不等待，速去购彩去吧~</p>
                        </div>
                    </div>
                    <!--有数据样式-->
                    <div class="datalist-wrap" style="display:none;width: 100%;top: -45px;
    height: 100%;
    position: relative;
}">
                       <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite">
                        <ul>
                            <li @click="readMsg(bettings.isView)" v-for="(bettings,index) in messageAll" :key="index" :id="bettings.id" :class="(bettings.isView == 1) ? 'message-read' : 'unread'">
                                <router-link :to="'/usermsg/'+bettings.id">
                                <!-- <router-link :to="'/'+bettings.id"> -->
                                    <div class="liwrap">
                                        <h3>{{bettings.title}}</h3>
                                        <div class="timer">
                                            <span>{{bettings.addTime |dateFmt('YYYY-MM-DD HH:mm')}}</span>
                                        </div>
                                        <i class="iconfont">&#xe647;</i>
                                    </div>
                                </router-link>
                            </li>
                        </ul>
                      </v-scroll>
                    </div>
                </div>
            </div>
        </div>

         <transition name="slide">
           <router-view></router-view>
        </transition>
    </div>
</template>

<style scoped>
html {
  font-size: 625%;
}
body {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  overflow-x: hidden;
}
#layout {
  width: 100%;
  height: 100%;
}
.header_wrap {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 200;
}
.header {
  height: 0.8rem;
  position: relative;
}
.header h2 {
  margin: 0 auto;
  height: 0.8rem;
  line-height: 0.8rem;
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
/*主内容区*/
.nav {
  background: #fff;
  z-index: 200;
  position: relative;
  margin-top: 0.8rem;
}
.nav ul {
  width: 100%;
  display: flex;
  position: relative;
  border-bottom: 0.01rem solid ghostwhite;
  box-sizing: border-box;
}
.nav ul li {
  width: 20%;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  color: #999;
  border-bottom: 0.02rem solid transparent;
  list-style: none;
  font-size: 0.28rem;
}
/* .nav ul .isclick {
  color: #fa3956;
  border-bottom: 0.02rem solid #ff6b52;
} */
/* 默认无数据样式 */
.nodata {
  display: none;
  overflow: hidden;
}
.nodata-top {
  width: 52%;
  margin: 0.6rem auto 0;
}
.nodata-top img {
  width: 100%;
}
.nodata-top h4 {
  height: 0.312rem;
  line-height: 0.312rem;
  text-align: center;
  color: #111;
  font-size: 0.28rem;
  font-weight: 400;
}
.nodata-top p {
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  font-size: 0.28rem;
  color: #999 !important;
}
/* 有数据时的样式 */
.orderlist {
  text-align: left;
}
.orderlist ul {
  padding-left: 0.24rem;
  box-sizing: border-box;
  background-color: white;
}
.orderlist li {
  height: 1.2rem;
  border-bottom: 0.01rem solid ghostwhite;
  overflow: hidden;
  list-style: none;
}
.orderlist li:last-child(1) {
  border-bottom: none;
}
.orderlist li .liwrap {
  width: 100%;
  margin: 0.1rem auto 0;
  position: relative;
}
.orderlist h3 {
  height: 0.6rem;
  line-height: 0.6rem;
  font-size: 0.28rem;
  color: #111;
  font-weight: 400;
}
.orderlist .timer {
  height: 0.3rem;
  line-height: 0.3rem;
}
.orderlist .timer span {
  color: #666;
  font-size: 0.24rem;
  vertical-align: bottom;
}
.orderlist li.message-read h3 {
  color: #999;
}
.unread h3 {
  color: #111;
}
.orderlist li.message-read .timer span {
  color: #999;
}
.orderlist li .liwrap i {
  position: absolute;
  right: 0.24rem;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  font-size: 0.28rem;
  font-weight: 600;
}
</style>
<script>
import Scroll from "../flash/flash";
import Header from "./../header/header";
export default {
  data() {
    return {
      messageAll: [],
      arrAll: [],
      readMessage: [],
      id: "",
      num: 10,
      pageNum:1,
      counter: 1, //当前页
      pageStart: 0, // 开始页数
      pageEnd: 0, // 结束页数
      listdata: [], // 下拉更新数据存放数组
      scrollData: {
        noFlag: false
      } //暂无更多数据显示
    };
  },
  updated() {},
  components: {
    "v-scroll": Scroll,
    Header
  },
  methods: {
    onRefresh(done) {
      console.log("下拉");
      this.one(this.id);
      setTimeout(() => {
        if (this.messageAll) {
          $.tips("已经刷新当前数据");
        }
      }, 800);
      done(); // call done
    },
    onInfinite(done) {
      let more = this.$el.querySelector(".load-more");
      more.style.display = "block";
      this.onee(this.id);

      setTimeout(() => {
        if (this.messageAll) {
          more.style.display = "none";
        }
      }, 800);

      done();
    },
    getlistheight() {
      var bodyheight = document.getElementsByTagName("body")[0].offsetHeight;
      console.log(document.getElementsByClassName("header_wrap")[0]);
      var headerheight = document.getElementsByClassName("header_wrap")[0]
        .offsetHeight;
      this.$refs.listwrapVue.style.height = bodyheight - headerheight-document.getElementsByClassName("pde")[0].offsetHeight + "px";
    },
    goBack() {
      console.log(this.$store.state.unViewNum)
      if(this.messageAll.length&&this.messageAll[0].isView==1){
            this.$store.state.unViewNum=0
          }
      this.$router.go(-1); //底层等同于 history.back()back() 方法可加载历史列表中的前一个 URL（如果存在）。
      // 调用该方法的效果等价于点击后退按钮或调用 history.go(-1)。
    },
    styleCss() {
      document.getElementsByTagName("body")[0].style.height = "100%";
      document.getElementsByTagName("html")[0].style.height = "100%";
      this.$refs.listwrapVue.style.overflow = "scroll";
      document.getElementsByClassName("listwrap")[0].style.height =
        document.getElementsByTagName("body")[0].clientHeight - 110 + "px";
    },

    readMsg(a) {
      console.log(a);
      var userMsgDetailsId = event.currentTarget.id;
      console.log(this.$route.params);
      if (a == 0) {
        var userid = JSON.parse(myStorage.getItem("currentUser")).id;
        var readMessage = base.getApi().viewMessage(userid, userMsgDetailsId);
      }
      for (var i = 0; i < this.messageAll.length; i++) {
        if (userMsgDetailsId == this.messageAll[i].id) {
          this.$store.state.messageAll = this.messageAll[i];
          console.log(this.$store.state.messageAll);
        }
      }
      console.log(this.$store.state.messageAll);
    },
    one(id) {
      this.id = id;
       this.pageNum=1;
      var userid = JSON.parse(myStorage.getItem("currentUser")).id;
      // 渲染基础数据
      if (userid) {
        this.messageAll = base
          .getApi()
          .messageList(this.num,this.pageNum, userid, this.id);
          if(this.messageAll.length){
            if(this.messageAll[0].isView==0){
               this.$store.state.unViewNum=1
            }
          }
         
      }
      this.$nextTick(() => {
        if (this.messageAll.length == 0) {
          document.getElementsByClassName("nodata")[0].style.display = "block";
          document.getElementsByClassName("datalist-wrap")[0].style.display =
            "none";
          $.tips("没有数据", 1000);
        } else {
          document.getElementsByClassName("nodata")[0].style.display = "none";
          document.getElementsByClassName("datalist-wrap")[0].style.display =
            "block";
        }
      });
    },
    onee(id) {
      this.id = id;
      var userid = JSON.parse(myStorage.getItem("currentUser")).id;
      // 渲染基础数据
      this.pageNum++
         var bettingAlled= base.getApi().messageList(this.num, this.pageNum, userid, this.id);
                            if(!bettingAlled.length){
                               $.tips("已经加载全部数据");
                           }
                            for(var i=0;i<bettingAlled.length;i++){
                                 this.messageAll.push(bettingAlled[i])

                            }


        // this.num += 10;
        // this.messageAll = base.getApi().messageList(this.num, 1, userid, this.id);
        // console.log(this.messageAll);
      
    },
    isstyleAll(){
      
    }
  },
  mounted: function() {
    this.styleCss();
    // 个人消息table切换
    $(".clear").on("click", "li", function() {
      $(this)
        .addClass("isclick")
        .siblings()
        .removeClass("isclick");
    });

    this.getlistheight();
    // 遍历要读取的数据

    // 渲染基础数据
    var dict = JSON.parse(myStorage.getItem("dictList"));
    var arr = dict["message-type"];
    this.arrAll = arr;
    this.isstyleAll()
  },
  watch: {},
  beforeCreate: function() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#f5f5f5";
  },
  created() {
    this.one("");
  }
};
</script>