<template>
  <div>
    <!-- 顶部栏 -->
    <div class="wrap_header">
      <div class="header">
        <router-link to='/Buycolornew'>
            <a class="header-oper">
              <i class="icon style-icon" id="showTypeI"></i>
            </a>
        </router-link>
        
        <h1 class="title">购彩大厅</h1>
      </div>
    </div>
    <!-- 购彩分类 -->
    <div class="wrap-trend">
			<div class="trend">
				<div class="trend-ul">
          <ul id="trend">
            <li @click="showAll()" class="on">全部</li>
            <li @click="showType(lottery1.split('-')[0])" v-for="lottery1 in lotteryType"  class="">{{lottery1.split('-')[1]}}</li>
          </ul>
        </div>
			</div>
		</div>
    <!-- 彩种 -->
    <div class="wrapper">
			<div class="content content-trend content-tabbar">
				<div class="lottery">
          <div class="divAll" v-for="(item,index) in datalist">
            <!-- 彩种名称 -->
            <a :index="index" :id="item.id" :name="item.showType" :lname="item.name" :status="item.status" v-if="item.status!=8" class="weui-media-box weui-media-box_appmsg bgf">
              <div class="weui-media-box__hd">
                <img :src="uerAll + item.logo.fileurl">
              </div>
              <div class="weui-media-box__bd">
                <div class="weui-media-box__title lo-name">
                  {{item.name}}
                  <!-- <span id="lotteryNoSpan_2">{{'第' + item.lotteryDraw.lotteryNo + '期'}}</span> -->
                </div>
                <div class="weui-media-box__title lo-num" :id="'lotteryResultDiv_'+item.id" v-if="item.showType != '4' && item.showType != '11' && item.lotteryDraw.closeTime > 0 && !!item.lotteryDraw.result">
                  <!--  -->
                  {{item.lotteryDraw.result.replace(/,/g,'&nbsp;')}}
                  <span>
                    <i class="icon goto-icon"></i>
                  </span>
                </div>
                <div style="color:red" class="weui-media-box__title lo-num" :id="'lotteryResultDiv_'+item.id" v-else-if="item.showType != '4' && item.showType != '11' && item.lotteryDraw.closeTime <= 1">
                  正在开奖...
                </div>
                <div class="weui-media-box__title lo-num" :id="'lotteryResultDiv_'+item.id" v-else-if="item.showType == '11' && item.lotteryDraw.closeTime > 0 && !!item.lotteryDraw.result">
                  <img style="display: inline-block;width: 20px;" :src="flowersnew[item.lotteryDraw.result.split(',')[0].split('-')[0]-1][item.lotteryDraw.result.split(',')[0].split('-')[1]-1]" class="first_img">
                  <img style="display: inline-block;width: 20px;" :src="flowersnew[item.lotteryDraw.result.split(',')[1].split('-')[0]-1][item.lotteryDraw.result.split(',')[1].split('-')[1]-1]" class="first_img">
                  <img style="display: inline-block;width: 20px;" :src="flowersnew[item.lotteryDraw.result.split(',')[2].split('-')[0]-1][item.lotteryDraw.result.split(',')[2].split('-')[1]-1]" class="first_img">
                  <span>
                    <i class="icon goto-icon"></i>
                  </span>
                </div>
                <div class="weui-media-box__title lo-num" :id="'lotteryResultDiv_'+item.id" v-else-if="item.showType == '11' && item.lotteryDraw.closeTime <= 1">
                  <img style="display: inline-block;width: 20px;" src="../../statics/images/assets/texiao.png">&nbsp;<img style="display: inline-block;width: 20px;" src="../../statics/images/assets/texiao.png">&nbsp;<img style="display: inline-block;width: 20px;" src="../../statics/images/assets/texiao.png">
                </div>
                <div class="weui-media-box__title lo-num" :id="'lotteryResultDiv_'+item.id" v-else-if="item.showType == '4' && item.lotteryDraw.closeTime > 0 && !!item.lotteryDraw.result">
                  <div class="hong">{{item.lotteryDraw.result.split(',')[0]}}</div><div class="hong" id="jia">+</div>
                  <div class="hong">{{item.lotteryDraw.result.split(',')[1]}}</div><div class="hong" id="jia">+</div>
                  <div class="hong">{{item.lotteryDraw.result.split(',')[2]}}</div><div class="hong" id="jia">=</div>
                  <div class="hui">{{item.lotteryDraw.result.split(',')|capitalize}}</div>
                  <span>
                    <i class="icon goto-icon"></i>
                  </span>
                </div>
                <div style="color:red" class="weui-media-box__title lo-num" :id="'lotteryResultDiv_'+item.id" v-else-if="item.showType == '4' && item.lotteryDraw.closeTime <= 1">
                  正在开奖...
                </div>
                <div style="color:red" class="weui-media-box__title lo-num" :id="'lotteryResultDiv_'+item.id" v-else>
                  正在开奖...
                </div>
                <div class="weui-media-box__title lo-endtime">
                  距离<font id="lotteryNoFont_2">{{item.lotteryDraw.shortNextNo}}</font>期截止还有
                  <span class="spanmax" :id="'timeDown'+item.id">
                    <section class="spanAll">{{item| mytime('shi')}}</section>:<section class="spanAll">{{item| mytime('fen')}}</section>:<section class="spanAll">{{item| mytime('miao')}}</section>
                  </span>
                </div>
              </div>
            </a>
            <a v-else class="weui-media-box weui-media-box_appmsg bgf">
              <div class="weui-media-box__hd">
                <img :src="uerAll + item.logo.fileurl">
              </div>
              <div class="weui-media-box__bd">
                <div class="weui-media-box__title lo-name">
                  {{item.name}}
                  <span id="lotteryNoSpan_2">{{'第_ _ _ _期'}}</span>
                </div>
                <div style="color:red" class="weui-media-box__title lo-num">
                  正在维护...
                </div>
              </div>
            </a>
            <!-- 走势、玩法、收藏 -->
            <div class="gnAll">
              <span :index="item.id" :name="item.code" typeall="4" class="zsAll">
                <img src="../../assets//source/imgs/zs.png" alt="">
                <span class="toward">&nbsp; 走势</span>
              </span>
              <span :index="item.id" class="wfAll">                 
              <img src="../../assets//source/imgs/wf.png" alt="">
              <span class="toward">&nbsp; 玩法</span>  
              </span>
              <span :index="item.id" :name="item.code" class="scAll">
                <img src="../../assets/source/imgs/wsc.png" alt="">
                <span class="toward">&nbsp; 收藏</span> 
              </span>
            </div>
          </div>
				</div>
      </div>
    </div>
  </div>
</template>

 <style scoped src="../../assets/source/css/common/buy.css"></style>
 <style scoped src="../../assets/source/css/common/base.css"></style>

<style scoped>
  .wrap-header .header .header-oper{
    right: 1.5rem;
  }
  i.icon{
    background: url('../../assets/source/imgs/images/fankuai.png') no-repeat 0 0;
    background-size: contain;
  }
  .header-oper{
    right: .18rem;
  }
  .hong{
		text-align: center;
    font-size: .15rem;
    background: white;
    display: flex;
    float: left;
	}
  .hong:nth-child(6){
    margin: 0 .05rem;
  }
  .foottab ul li:nth-of-type(2) a.router-link-active dl dt .dtbg {
    background-position: -93px -2px!important;
}
.foottab ul li:nth-of-type(2) dl dd{
    color:#E53333!important
}
.lo-name,.lo-num,.lo-endtime{
  text-align: left;
}
</style>
<script>
  // import '../../assets/source/css/common/jquery-weui.min.css';
  export default {
    data(){
			return{
        datalistAll:[],
        datalist:[],
        flowersnew:[],
        lotteryType:[],
        hour:[],
        minute:[],
        second:[],
        uerAll:base.domain,
        collect:[],
        version:"",
        shujuAlls:{},
        // cache_timeout_id_:null
      }
    },
    updated(){

    },
     created(){
      this.gettime();
      this.getFlower();
      var dict = JSON.parse(myStorage.getItem("dictList"));
      this.lotteryType = dict['lottery-type'];
     // 渲染基础数据
    //  if(this.$store.getters.getcolorsj.length!=0){
    //       this.shujuAlls = this.$store.getters.getcolorsj;
    //   }else{
    //       this.shujuAlls = base.getApi().lottery();
    //       this.$store.commit('getplaycolor', this.shujuAlls);
    //   }
      // this.datalistAll =this.shujuAlls.data;
      //var lottery=base.getApi().lottery();
      //this.$store.commit('getplaycolor', lottery)
     
      //加载缓存
      // if(!!this.$store.state.lotteryList){
      //   this.datalistAll = this.$store.state.lotteryList.data;
      // }else{
      //   var result = base.getApi().lottery();
      //   if(result.code == 200){
      //     this.$store.state.lotteryList = result;
      //     this.datalistAll = this.$store.state.lotteryList.data;
      //   }
      // }//this.$store.state.lotteryList = '';
       this.datalistAll = this.$store.getters.getcolorsj.data;
       console.log("===============")
       console.log(this.datalistAll)
      var lottery = this.datalistAll;
      // ---------------版本号更新,更新基础数据
      
      this.datalist = this.datalistAll.lotteryList;
      console.log(this.datalist);
      var $thisnwea = this;
      
      // if(!this.$store.state.isLoadBuyTimer){
      //   this.$store.state.isLoadBuyTimer = true;
      //   this.cache_timeout_id_ = setInterval(function(){
      //     $thisnwea.zzz(baseSokectQueue);
      //   },1000);
      // }

      window.localStorage.removeItem('buycolorAll')
    },
    methods:{
      homeert(){
        // console.log(this.$store.state.homeType);
        for(var i = 0;i<$('#trend li').length;i++){
            if(this.$store.state.homeType==$($('#trend li')[i]).html()){
              this.$store.state.homeType='no'
               $($('#trend li')[i]).click();
            }
        }
        
      },
      getFlower() {
        this.collect.push(require('../../assets/source/imgs/wsc.png'));
        this.collect.push(require('../../assets/source/imgs/sc.png'));
        $($('.scAll')[2]).find('img').attr('src',this.collect[0]);
        
        var ss = [];
        for(var y  = 1;y<5;y++){
          for(var v = 1;v<14;v++){
            ss.push(require('../../assets/source/assets/'+y+'-'+v+'.png'));
          }
          this.flowersnew.push(ss);
          ss = [];
        }
      },
       gettime(){
              if(window.ifcvalue){
                 this.version= base.getApi().getPTimestamp().version;
                //  console.log(base.getApi().getPTimestamp())
              }else{
                this.version= base.getApi().loadTimestamp().version;
              }
              
              window.updata(this.version)
           },
       showType(a){
        var k = [];
        this.datalist = this.datalistAll.lotteryList;
        for(var j = 0;j<this.datalist.length;j++){
          if(a==this.datalist[j].type){
            k.push(this.datalist[j])
          }
        }
        this.datalist = k;
        k = [];
      },
      showAll(){
        this.datalist = this.datalistAll.lotteryList;
      },
    //    zzz(baseSokectQueue){
		// 	    // for(var y = 0;y<this.itmeAll.length;y++){		
		// 		// }
    //     var lotteryDraw = baseSokectQueue.shift();
		// 		for(var a = 0;a<this.datalistAll.lotteryList.length;a++){
    //       if(this.datalistAll.lotteryList[a].status!=8){
    //         this.datalistAll.lotteryList[a].lotteryDraw.closeTime -= 1000;
    //       }
          
		// 			if(lotteryDraw!=undefined){
		// 				if(this.datalistAll.lotteryList[a].id==lotteryDraw.lotteryId){
		// 					 this.datalistAll.lotteryList[a].lotteryDraw.closeTime = lotteryDraw.remainTime;
    //            this.datalistAll.lotteryList[a].lotteryDraw.lotteryNo = lotteryDraw.lotteryNo;
		// 					 this.datalistAll.lotteryList[a].lotteryDraw.result = lotteryDraw.result;
		// 				}
		// 			}
    //     }	
    // },
    tap(){
       $('#trend').on('click','li',function(){
         $(this).addClass("on").siblings().removeClass("on");
       });
    },
    colornew(){
      //去掉请求特定几个彩种的请求
      // var yhuserId = JSON.parse(myStorage.getItem("currentUser"));
      //   if(yhuserId!=null){
      //     var sccz =  base.getApi().collectList(yhuserId.id);
      //     for(var i = 0;i<$('.scAll').length;i++){
      //       for(var t = 0;t<sccz.data.length;t++){
      //         if($($('.scAll')[i]).attr('name')==sccz.data[t].lottery.code){
      //             $($('.scAll')[i]).find('img').attr('src',this.collect[1]);
      //           }
      //         }
      //     }
      //   }
    },
     reoter(){
                var $this = this;
                $('.lottery').on('click','a',function(){
                    if($(this).attr('status')!=1){
                        $.tips("该彩种正在维护,请稍后再投注");return;
                    }
                    if($(this).attr('name') == 0) {
                        // setArgument("shouye 2 buyColor type", 3);
                        // window.location.href = "/view/buy/buycolor.html";
                        $this.$router.push({path:'/buycolor'});
                    } else {
                        // return;
                        // window.location.href = base.skip+'&&id='+$(this).attr('id')+'&&showType='+$(this).attr('name')+'&&lotteryName='+$(this).attr('lname');
                        var str = {
                          'id':$(this).attr('id'),
                          'showType':$(this).attr('name'),
                          'lotteryName':$(this).attr('lname')
                        }
                        window.localStorage.setItem('forthecolor',JSON.stringify(str));
                        window.localStorage.setItem('thisdatalist',$(this).attr('id'));
                        $this.$router.push({path:'/forthecolor'});
                    }
                })
                var yhuserId = JSON.parse(myStorage.getItem("currentUser"));
               
                $('.lottery').on('click','.scAll',function(){
                    if(yhuserId!=null){
                       var type=yhuserId.type;
                      if(type!==2){
                          if($(this).children('img').attr('src')==$this.collect[0]){//wei
                          $(this).children('img').attr('src',$this.collect[1])
                          base.getApi().userCollect(yhuserId.id, $(this).attr('index'));
                        }else{
                          $(this).children('img').attr('src',$this.collect[0])
                          base.getApi().collectCancel(yhuserId.id,$(this).attr('index'));
                        }
                      }else{
                          $.tips("非代理账户不能收藏")
                      }
                    }else{
                      $.tips("请登录后收藏");
                    }
                });
                $('.lottery').on('click','.wfAll',function(){
                    $this.$router.push({path:'/rule/'+$(this).attr('index')+''}) 
                });
                $('.lottery').on('click','.zsAll',function(){
                    if($(this).attr('name')=='xglhc'||$(this).attr('name')=='jslhc'||$(this).attr('name')=='xypk'||$(this).attr('name')=='ssq'){
                      $.tips('该功能暂未开放，敬请期待');
                      return;
                    }
                    $this.$router.push({path:'/trentMap/'+$(this).attr('index')+''});
                });
            }
    
    },
     mounted:function() {
       this.colornew();
       this.reoter();
       this.tap();
       this.homeert();
    },
    beforeCreate: function() {
      document.getElementsByTagName("body")[0].style.backgroundColor='#f5f5f5';
    },
    // beforeDestroy() {
    //    clearInterval(this.cache_timeout_id_);
    // },
  }
</script>