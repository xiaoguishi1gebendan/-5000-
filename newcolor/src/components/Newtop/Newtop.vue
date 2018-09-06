<template>
    <div style="position:absolute;width:100%;top:0;z-index:999;">
        <!-- <div class="header_wrap" style="position: absolute;">
            <div class="header">
                <div @click="goBack" style="position: absolute;transform: translateY(-50%);color: #fff;">
                    <i class="iconfont icon-mjiantou-copy" style="    font-size: .24rem;position: absolute;line-height: 45px;margin-left: 12px;"></i>
                </div>
                <h2>最新中奖榜</h2>
            </div>
        </div> -->
         <headertop title="最新中奖榜" > </headertop>
        <div class="ocontent" id="ocontent" style="overflow:scroll;width:100%;">
			<ul class="list">
			    <li v-for="item in newestList">
                    <div class="text">
                        <span>{{item.user.account.substring(0, 3) + "****"}}</span>
                        <span>{{item.lottery.name}}</span>
                        <span>{{'喜中' + (item.amount>10000?((''+item.amount/10000).split('.')[0]+'万'):item.amount.toFixed(2)) + '元'}}</span>
                    </div>
                </li>
            </ul>
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
  position: absolute;
  top: 0;
  z-index: 200;
}
.header {
  height: 0.45rem;
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
  left: 0.18rem;
  transform: translateY(-50%);
  color: #fff;
}
.header .set i {
  font-size: 0.24rem;
}
/*主内容区*/

.list li {
  border-bottom: 0.01rem whitesmoke dashed;
  background: #fff;
  position: relative;
}
.list .text {
  width: 92%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  text-align: left;
}
.list .text span {
  display: block;
  width: 33.333333%;
  line-height: 0.8rem;
  color: gray;
  font-size: 0.26rem;
}
.list .text span:nth-of-type(3) {
  text-align: right;
  color: #f00b0d;
  /* margin-top: 0.08rem; */
}
.text span:nth-of-type(2) {
  /* position: absolute; */
  top: 0.19rem;
  left: 0.16rem;
}
.text span:nth-of-type(1) {
  margin-left: 0.5rem;
}
.text span:nth-of-type(1):before {
  content: "";
  display: block;
  position: absolute;
  width: 0.4rem;
  height: 0.4rem;
  background-image: url("../../assets/source/imgs/jbs.png");
  background-size: cover;
  top: 0.19rem;
  left: 0.16rem;
}
</style>
<script>
import headertop from "../header/header";
export default {
  data() {
    return {
      isShowBack: false,
      isHideTabBar: false,
      newestAll: [],
      newestList: []
    };
  },
  updated() {},
  methods: {
    isstyle() {
      
    },
    goBack() {
      this.$store.state.xiazaishow = true;
      this.$router.go(-1); //底层等同于 history.back()back() 方法可加载历史列表中的前一个 URL（如果存在）。
      // 调用该方法的效果等价于点击后退按钮或调用 history.go(-1)。
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
  watch: {
    //当路由改变的时候（newValue.path）获取当前的路由
    $route: function(newValue, oldValue) {
      this.isShowOrHide(newValue.path);
    }
  },
  beforeCreate: function() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#f5f5f5";
    this.$store.state.xiazaishow = false;
  },
  mounted: function() {
    this.isstyle();
    // 渲染基础数据
    this.newestAll = base.getApi().homeData().data;
    this.newestList = this.newestAll.userWinningList;
    this.$nextTick(() => {
      
      document.getElementById("ocontent").style.height =
      document.getElementsByTagName("body")[0].offsetHeight - 45 + "px";
    });
  },
  components: {
    headertop
  },
  created() {
    this.isShowOrHide(this.$route.path);
  }
};
</script>
