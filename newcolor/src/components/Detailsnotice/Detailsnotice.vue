<template>
    <div  style="position:absolute;top:0;width:100%;height:100%;background: white;z-index:999;overflow:hidden">
        <!-- <div class="header_wrap" style="position:absolute">
            <div class="header">
                <div v-show="isShowBack" @click="goBack" class="set">
                    <i class="iconfont icon-mjiantou-copy"></i>
                </div>
                <h2>{{dataAll.title}}</h2>
            </div>
        </div> -->
        <div id="ee">
          <headertop :title="dataAll.title" > </headertop>
        </div>
        
        <div class='cocntent' >
            <div class="banner">
                <img :src="uerAll+dataAll.logo.fileurl" alt="">
            </div>
            <div class="title" v-html="dataAll.details">
                {{dataAll.details}}
            </div>
        </div>
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
  height: 0.45rem;
  width: 100%;
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
  left: 0.14rem;
  transform: translateY(-50%);
  color: #fff;
  top: -3px;
}
.header .set i {
  font-size: 0.24rem;
}
/*主内容区*/
.ocontent {
  width: 100%;
  margin-top: 0.44rem;
}
.cocntent {
  
  text-align: left;
  /* height: 100%; */
  overflow: scroll;
}
.banner {
  width: 100%;
  height: 1.6rem;
  margin: 0 auto;
}
.banner img {
  width: 100%;
}
.title {
  width: 96%;
  margin: 0 auto;
  font-size: 0.26rem;
}
.banner img {
  height: 1.6rem;
}
.title p {
  color: #000 !important;
}
</style>
<script>
import headertop from "../header/header";
export default {
  data() {
    return {
      isShowBack: false,
      isHideTabBar: false,
      eventAll: [],
      event: [],
      detailsnoticeId: this.$route.params.detailsnoticeId,
      dataAll: [],
      uerAll: base.domain
    };
  },
  updated() {},
  components: {
    headertop
  },
  methods: {
    isstyle() {
     
    },
    goBack() {
      setTimeout(function() {
        $(".hint-wrap").hide();
      }, 100);
      this.$store.state.xiazaishow = true;
      this.$router.go(-1);
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
    }
  },
  mounted: function() {
    $("p").css("color", "#000");
    this.isstyle();
    this.$nextTick(()=>{

       
    })
    setTimeout(() => {
        document.getElementsByClassName("cocntent")[0].style.height=document.getElementsByTagName("body")[0].offsetHeight
        -document.getElementsByClassName("pde")[0].offsetHeight
        -document.getElementById("ee").offsetHeight+"px"
    }, 500);
    
  },
  watch: {
    //当路由改变的时候（newValue.path）获取当前的路由
    $route: function(newValue, oldValue) {
      this.isShowOrHide(newValue.path);
    },
   
     
  },
  beforeCreate: function() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#f5f5f5";
  },
  created() {
    this.$store.state.xiazaishow = false;
    //  base.getApi().homeData1().then((res)=>{
    //    console.log(res)
    //    this.eventAll =res.data
    //     this.event = this.eventAll.bannerList;
    //    this.isShowOrHide(this.$route.path);
    // });
    // console.log(this.eventAll);
   
    // console.log(this.detailsnoticeId);
    // console.log(activityDetail(this.detailsnoticeId));
     base.getApi().activityDetail1(this.detailsnoticeId).then((res)=>{
       console.log(res)
       this.dataAll =res.data.activity
    });
    // console.log(this.dataAll);
  }
};
</script>
