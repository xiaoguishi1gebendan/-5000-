<template>
  <div style="overflow: hidden;position:absolute;top:0;width:100%;height:100%;background: #f5f5f5;z-index:1000;">
			<Header-top title="代理中心"></Header-top>
      
      <div class="wrapper"> 
          
		
			<div class="content content-head">
				<div class="weui-media-box weui-media-box_appmsg head" style="overflow:hidden;">
					<img class="headimg"  src="../../../../assets/images/headd.png" style="float:left; background: transparent" />
                    <!-- <img title="" /> -->
					<div class="weui-media-box__bd user" style="float:left;margin-left:0.2rem;">
						<p><label>用户名：</label><span id="agentNameFont">{{user.account}}</span></p>
						<p><label>彩票返点：</label><span id="agentRebateFont">{{user.rebate}}</span></p>
						<p><label>账号余额：</label><span id="agentBanlanceFont">{{balance}}</span></p>
					</div>
				</div>

        <div class="tuanDui" v-if="data">
          <ul v-if="isAgency">
            <li ><span style=" background:#fb8420;    border-radius: 3px;"></span><span>团队人数</span> <span>{{data.teamNum}}人</span></li>
            <li><span style=" background:#dc0e22;    border-radius: 3px;"></span><span>团队总余额</span> <span>{{ data.teamBalance.toFixed(2)}}</span></li>
            <li><span style=" background: #298ffd;    border-radius: 3px;"></span><span>昨日佣金</span> <span>{{data.yesterdayBrokerage.toFixed(2)}}</span></li>
            <li><span style=" background: #17983b;    border-radius: 3px;"></span><span>累计佣金</span> <span>{{data.teamSumBrokerage.toFixed(2)}}</span></li>
          </ul>
        </div>
                <ul class="mainop">
                    <li id="dailione">
                        <span>代理说明</span><span class="iconfont"></span>
                    </li>
                     <li id="dailitwo">
                        <span>下级开户</span><span class="iconfont"></span>
                    </li>
                     <li id="agencyDown">
                        <span>团队管理</span><span class="iconfont"></span>
                    </li>
                     <li id="dailiMoney">
                        <span>代理佣金</span><span class="iconfont"></span>
                    </li>
                     
                     <li id="gotoreportQuery">
                        <span>报表查询</span><span class="iconfont"></span>
                         
                    </li>
                   
                </ul>
				

			</div>
  
		</div>
         <transition name="slide">
           <router-view></router-view>
        </transition>
  </div>
</template>

<script>
import HeaderTop from "./../../../header/header";
export default {
  data() {
    return {
      user: "",
      data: "",
      isAgency: true
    };
  },
  components: {
    HeaderTop
  },
  computed: {
    balance() {
      return this.$store.state.money;
    }
  },
  created() {},
  mounted() {
    this.Agency();
    this.getapi();

    this.$nextTick(() => {
      this.displ();
    });
    var that = this;

    $("#dailione").on({
      click: function() {
        that.$router.push({ path: "/daili/dailione" });
      }
    });
    $("#dailitwo").on({
      click: function() {
        that.$store.state.daiLiType = 1;
        that.$router.push({ path: "/daili/dailitwo" });
      }
    });

    $("#gotoreportQuery").on({
      click: function() {
        that.$store.state.reportQueryType = 1;
        that.$router.push({ path: "/daili/reportQuery" });
      }
    });
    $("#dailiMoney").on({
      click: function() {
        that.$router.push({ path: "/daili/dailiMoney" });
      }
    });

    $("#agencyDown").on({
      click: function() {
        that.$router.push({ path: "/daili/agencyDown" });
      }
    });
  },
  methods: {
    Agency() {
      let useType = JSON.parse(localStorage.getItem("currentUser")).type;
      if (useType == 1) {
        this.isAgency = false;
      }
    },
    displ() {
      if (this.$store.state.userType == 3) {
        var childs = document.getElementsByClassName("mainop")[0].children;
        for (var i = 0; i < childs.length; i++) {
          childs[i].style.display = "block";
        }
      }
    },
    getapi() {
      this.user = JSON.parse(localStorage.getItem("currentUser"));
      this.data = base.getApi().dilimoney(this.user.id).data;
    }
  }
};
</script>

<style scoped lang='less'>
.tuanDui {
  ul {
    overflow: hidden;
    padding: 0.1rem 0;
    background: #fff;
    border-top: 1px solid #e5e5e5;
    > li {
      float: left;
      width: 50%;
      line-height: 0.6rem;
      > span:nth-child(2) {
        color: #666;
      }
      > span:nth-child(1) {
        margin-left: 0.2rem;

        display: inline-block;
        width: 0.1rem;
        height: 0.1rem;

        margin-right: 0.05rem;
      }
    }
  }
}
.user {
  p {
    line-height: 0.55rem;
    span {
      font-size: 0.28rem;
    }
  }
}
.wrap_header {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 200;
}

.wrapper {
  font-size: 0.28rem !important;
  text-align: left;
  //    font-size:0.28rem;
}
.head {
  padding: 10px 15px;
  background-color: white;
}
.headimg {
      width: 1.2rem;
    margin-right: 0.1rem;
}
.mainop {
  width: 100%;
  margin-top: 0.1rem;
  background: #fff;
  color: #666;
  > li {
    line-height: 0.8rem;
    padding: 0 5%;
    border-bottom: 1px solid #f5f5f5;
    overflow: hidden;
    display: none;
    span:nth-child(1) {
      float: left;
    }
    span:nth-child(2) {
      float: right;
    }
  }
  > li:nth-child(1) {
    // line-height:0.8rem;
    // padding:0 5%;
    // border-bottom: 1px solid #f5f5f5;
    // overflow: hidden;
    display: block;
    // span:nth-child(1){
    //     float: left;
    // }
    // span:nth-child(2){
    //     float: right;
    // }
  }
}
.dailiMoney {
  height: 0.46;
  width: 100%;
}
</style>
