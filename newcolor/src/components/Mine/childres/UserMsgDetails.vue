<template>
    <div style="overflow: hidden;position:absolute;top:0;width:100%;height:100%;background: white;z-index:1000;">
        <!-- 顶部 -->
        <!-- <div class="header_wrap"> -->
            <div class="header toUser">
                 <div @click="goBack" style="position: absolute;transform: translateY(-50%);color: #fff;">
                    <i class="iconfont icon-mjiantou-copy" style="    font-size: .45rem !important;position: absolute;line-height: 45px;margin-left: 12px;"></i>
                </div>
                <h2>{{item}}</h2>
                
            </div>
            <!-- <Header style="position:fixed:top:0" :title="item"></Header> -->
        <!-- </div> -->
        <!-- <div>fadshjf</div> -->
        <!-- 主内容区 -->
        <div class="content content-head">
            <div class="message-con bgf">
                <h3 class="mcon-tit">{{list.title}}</h3>
                <p class="mcon-time">{{list.addTime | dateFmt('YYYY-MM-DD HH:mm:ss')}}</p>
                <p class="mcon-txt">{{list.details}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "./../../header/header";
export default {
  components: {
    Header
  },
  data() {
    return {
      rechargeAll: [],
      list: "",
      item: ""
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1); //底层等同于 history.back()back() 方法可加载历史列表中的前一个 URL（如果存在）。
      // 调用该方法的效果等价于点击后退按钮或调用 history.go(-1)。
    },
    isstyleAll(){
      
    }
  },
  watch: {},
  mounted: function() {
    this.list = this.$store.state.messageAll;
    if(!this.list){
      this.list=""
      this.$router.go(-1);
      retrun 
    }
    
    console.log(this.list);
    this.item = JSON.parse(myStorage.getItem("dictDetailList"))[
      "message-type-" + this.list.type
    ];
    this.isstyleAll();
  },
  beforeCreate: function() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#f5f5f5";
    // document.getElementsByTagName("body")[0].style.overflowY='hidden';
  },
  created() {}
};
</script>

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
  font-size: 00.28rem;
}
.header .set {
  position: absolute;
  left: 00.28rem;
  transform: translateY(-50%);
  color: #fff;
}
.header .set i {
  font-size: 0.24rem;
}
/*主内容区*/
.content {
  margin-top: 0.1rem;
}
.message-con {
  display: flex;
  flex-direction: column;
  padding: 0.1rem 0.15rem;
}
.message-con h3.mcon-tit {
  font-size: 0.28rem;
  display: inline-block;
  /* color: red; */
}
.mcon-time {
  font-size: 0.24rem;
  color: #999;
  display: inline-block;
  margin-left: 0;
  margin-top: 0.05rem;
}
.mcon-txt {
  color: #666;
  margin-top: 0.07rem;
  font-size: 0.28rem;
}
.bgf {
  background-color: white;
  text-align: left;
}
</style>