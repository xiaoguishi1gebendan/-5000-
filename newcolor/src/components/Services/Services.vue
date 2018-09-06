<template>
  <div style="width:100%;height:100%;">
    <!-- <div class="header_wrap" ref="headerwrap-vue">
            <div class="header">
                <div @click="goBack" style="position: absolute;transform: translateY(-50%);color: #fff;">
                    <i class="iconfont icon-mjiantou-copy" style="    font-size: .24rem;position: absolute;line-height: 45px;margin-left: 12px;"></i>
                </div>
                <h2>优惠活动</h2>
            </div>
     </div> -->
    <headertop title="优惠活动" > </headertop>
    <!-- main -->
   
    <div class="main" style="width:100%;height:100%;position:relative;top: -0.8rem;">
         <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite">   
            <ul>
                 <!-- <router-link :to="'/activityDetails/'+item.id"> -->
                <li v-for="(item,index) in activityAll" :key="index" @click="goto" :id="item.id">
                    <h3>{{item.title}}</h3>
                    <div style="    height: 120px;width: 96%;margin-left: 2%;"><img style="width:100%;height:120px" :src="userAll + item.file.fileurl" alt=""></div>
                    <p><span>活动时间:{{item.beginTime | mytime1('yyyy-MM-dd')}}至{{item.endTime | mytime1('yyyy-MM-dd')}}</span><span>查看详情 >></span> </p>
                </li>
            </ul>
        </v-scroll>
    </div>
       <transition name="slide">
           <router-view></router-view>
        </transition>
  </div>
</template>

<script>
import Scroll from "../flash/flash";
  import headertop from '../header/header'
export default {
  data() {
    return {
        counter: 1, //当前页
        num: 10, // 一页显示多少条
        pageStart: 0, // 开始页数
        pageEnd: 0, // 结束页数
        listdata: [], // 下拉更新数据存放数组
        scrollData: {
        noFlag: false
         }, //暂无更多数据显示
        numm:10,
        page:1,
        userAll:base.domain,
        activityAll:"",
        flag:0
    }
  },
 mounted(){
     this.getapi()
 },
 methods:{
    onRefresh(done) {
      console.log("下拉");
      this.getapi();
      setTimeout(() => {
           if(this.activityAll.length){
              $.tips("已经刷新当前数据")
              }
            }, 800);
      done(); // call done
    },
    onInfinite(done) {
        let more = this.$el.querySelector(".load-more");
        more.style.display='block';
        this.getapii();
        if(this.activityAll.length){
            setTimeout(() => {
                if(1){
                    more.style.display='none';
                }
            }, 800)
        }
        done();
    },
     goBack(){
         this.$router.go(-1)
     },
     goto(){
         this.$router.push({path:`/activityDetails/${event.currentTarget.id}`})
     },
    getapi(){
         this.activityAll = base.getApi().activityList(this.numm,this.page);
         console.log(this.activityAll)
    },
    getapii(){
        if(this.numm==this.activityAll.length){
            this.numm+=10;
            this.activityAll = base.getApi().activityList(this.numm,this.page);
            console.log(this.activityAll)
        }else{
            $.tips("已经加载全部消息")
        }
         
    },
 },
 components: {
     "v-scroll": Scroll,
       headertop
  },
}
</script>


<style scoped lang='less'>
.main{
    font-size:0.14rem;
    ul{
        >li{
            background: #fff;
            overflow: hidden;
            margin-top:0.2rem;
            margin-right: 10px;
            margin-left: 10px;
            >h3{
                line-height: 0.4rem;
                font-size: 0.28rem;
                color:#000;
                margin-left:10px;
                margin-right:10px;
            }
            >div{
                 margin-left:10px;
                margin-right:10px;
            }
            >p{
                line-height: 0.4rem;
                margin-left:10px;
                margin-right:10px;
                font-size:0.26rem;
                color:#666;
                >span:nth-child(1){
                    float: left;
                    // margin-left
                }
                >span:nth-child(2){
                    
                    float: right;
                }
            }
        }
    }
}
 .header_wrap{
        width: 100%;
        position: relative;
        z-index: 999;
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
        transform: translateY(-50%);
        color: #fff;
    }
    .header .set i{
        font-size: .24rem;
    }
</style>
