<template>
    <div class="server">
        <div class="header_wrap">
            <div class="header">
                <div @click="goBack" class="set">
                    <i class="iconfont icon-mjiantou-copy"></i>
                </div>
                <h2>优惠活动</h2>
            </div>
        </div>
      <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite">  
        <div class="ocontent-wrap">
            <div class="ocontent">
                <div class="list weui-pull-to-refresh" style="height: 614px;overflow:scroll">
            
                    <ul style="margin-left:10px;margin-right:10px;">
                        <li class="lii" v-for="(item,index) in activityAll" :key="index">
                            <router-link :to="'/activityDetails/'+item.id">
                                <div class="liall">
                                    <h3>{{item.title}}</h3>
                                    <img class="imgg" :src="userAll + item.logo.fileurl">
                                    <p class="shiji">
                                        <span>活动时间 :</span>
                                        <span>{{item.beginTime | mytime1('yyyy-MM-dd')}}</span>至
                                        <span>{{item.endTime | mytime1('yyyy-MM-dd')}}</span>
                                        <span class="ckxq">查看详情 </span>
                                        <img class="iimg" src="../../assets/source/imgs/images/youjt.png" alt="">
                                    </p>
                                    
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
      </v-scroll>
      <!-- <div class="bott"></div> -->
    </div>
</template>
<style>

.yo-scroll .inner .pull-refreshed {
    margin-top: 0 !important;
}
</style>


<style scoped lang="less">

.liall{
    >.imgg{
        width:100%;
        height: 1.2rem;
    }
}
.shiji{
    color:#666;
    line-height: 0.34rem;
    text-align: center;
    font-size:0.13rem !important;
}
.lii{
    background:#fff;
    
    margin: 0 auto;
    margin-top: 0.1rem;
    color:black !important;
}
.liall{
    >h3{
        text-align:left;
        margin-left:0.2rem;
        line-height:0.35rem;
    }
}
.header_wrap{
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 200;
    }
    .header{
        height: 0.45rem;
        position: relative;
    }
    .header h2{
        margin: 0 auto;
        height: 0.45rem;
        line-height: 0.45rem;
        text-align: center;
        color: #fff;
        font-weight: 600;
        font-size: .18rem;
    }
    .header .set{
           position: absolute;
        left: .18rem;
        top: 0.25rem;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        vertical-align: bottom;
        color: #fff;
    }
    .header .set i{
        font-size: .24rem;
    }
    .server{
        font-size:0.14rem;
    }
    .bott{
       position: fixed;
    bottom: 0;
    height: 0.4rem;
    width: 100%;
    background: whitesmoke;
    }
    .weui-pull-to-refresh{
        /* margin-top: .628rem !important; */
    }
   
    .iimg{
        width: .1rem !important;
        height: .13rem !important;
            vertical-align: middle !important;
    }
    .list ul li{
        height: 1.85rem;
    }
    .liall > h3{
        color:black;
        font-size:0.16rem;
    }
</style>
<script>
import Scroll from "../flash/flased";
export default {
    data() {
      return {
        activityAll:[],
        userAll:base.domain,
        counter: 1, //当前页
        num: 10, // 一页显示多少条
        pageStart: 0, // 开始页数
        pageEnd: 0, // 结束页数
        listdata: [], // 下拉更新数据存放数组
        scrollData: {
            noFlag: false
        } ,//暂无更多数据显示
        num:10,
        page:1
      }
    },
     components: {
        "v-scroll": Scroll
    },
  mounted:function(){
        // 下拉刷新
        this.getapi()
    },
    methods: {
         onRefresh(done) {
            console.log("下拉");
            this.getapi();
            setTimeout(() => {
                if(this.activityAll){
                    $.tips("已经刷新当前数据")
                    }
                    }, 800);
            done(); // call done
         },
        onInfinite(done) {
            console.log("哈哈哈")
        let more = this.$el.querySelector(".load-more");
        more.style.display='block'
            this.getapii();
                        
            setTimeout(() => {
            if(this.activityAll){
                more.style.display='none';
            }
                }, 800);
                    
        done();
        },
        getapi(){
             this.activityAll = base.getApi().activityList(this.num,this.page);
             console.log(this.activityAll)
        },
         getapii(){
            
             if(this.activityAll.length==this.num){
                  this.num+=10;
                  this.activityAll = base.getApi().activityList(this.num,this.page);
             }else{
                 $.tips("已经加载全部数据")
             }
             
        },
        goBack() {
            this.$router.go(-1)//底层等同于 history.back()back() 方法可加载历史列表中的前一个 URL（如果存在）。
            // 调用该方法的效果等价于点击后退按钮或调用 history.go(-1)。
        },
         loadTop() {
                var self=this;  
                setTimeout(function(){
                    self.getapi();
                    self.$refs.loadmore.onTopLoaded();
                },800)
            },
           loadBottom(){
                var self=this; 
               setTimeout(() => {
                    
                    self.getapi();
                   self.$refs.loadmore.onBottomLoaded();
               }, 800);
              
           }
    },
    watch: {

    },
   
    beforeCreate: function() {
        // document.getElementsByTagName("body")[0].style.backgroundColor='#f5f5f5';
        // document.getElementsByTagName("body")[0].style.width = '100%';
        // document.getElementsByTagName("body")[0].style.height = '100%';
        // document.getElementsByTagName("html")[0].style.width = '100%';
        // document.getElementsByTagName("html")[0].style.height = '100%';
    },
    created() {
       
    }
}
</script>
