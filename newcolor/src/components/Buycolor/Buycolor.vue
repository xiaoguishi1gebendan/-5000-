
<template>
  <div class="maxonly" style="font:0.28rem '黑体'!important;position: relative;height: 100%;">
    <!-- 顶部栏 -->
    <div class="wrap_header" style="position:absolute">
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
    <div class="wrap-trend" >
			<div class="trend">
				<div class="trend-ul">
          <ul id="trend">
            <li @click="showAll()" class="dataall on">全部</li>
            <li :datatype="lottery1.split('-')[0]" v-for="lottery1 in lotteryType"  class="litype">{{lottery1.split('-')[1]}}</li>
          </ul>
        </div>
			</div>
		</div>
    <!-- 彩种 -->
    <div class="wrapper" id="wrapper" style="width:100%;overflow:scroll">
			<div class="content content-trend content-tabbar" style="margin-top:1.6rem;">
				<div style="" class="lottery">
          <div class="divAll" v-for="(item,index) in datalist">
            <!-- 彩种名称 -->
            <a :index="index" :id="item.id" :name="item.showType" :lname="item.name" :status="item.status" v-if="item.status!=8" class="weui-media-box weui-media-box_appmsg bgf">
              <div class="weui-media-box__hd">
                <img :src="uerAll + item.logo.fileurl">
              </div>
              <div class="weui-media-box__bd">
                <div class="weui-media-box__title lo-name">
                  {{item.name}}
                  <span id="lotteryNoSpan_2">{{'第' + item.lotteryDraw.lotteryNo + '期'}}</span>
                </div>
                <div  style="height: .2rem;" class="weui-media-box__title lo-num" :id="'lotteryResultDiv_'+item.id" v-if="item.showType != '4' && item.showType != '11' && item.lotteryDraw.closeTime > 0 && !!item.lotteryDraw.result">
                  <!--  -->
                  {{item.lotteryDraw.result.replace(/,/g,'&nbsp;')}}
                  <span>
                    <i class="icon goto-icon"></i>
                  </span>
                </div>
                <div style="color:red;height: .2rem;"class="weui-media-box__title lo-num" :id="'lotteryResultDiv_'+item.id" v-else-if="item.showType != '4' && item.showType != '11' && item.lotteryDraw.result == ''">
                  <span data-v-7e22253c=""><i data-v-7e22253c="" class="icon goto-icon"></i></span>
                  正在开奖...
                </div>
                <div class="weui-media-box__title lo-num" :id="'lotteryResultDiv_'+item.id" v-else-if="item.showType == '11' && item.lotteryDraw.closeTime > 0 && !!item.lotteryDraw.result">
                  <img style="display: inline-block;width: 23px;" :src="uerAll+puke[(+item.lotteryDraw.result.split(',')[0].split('-')[0])-1][(+item.lotteryDraw.result.split(',')[0].split('-')[1])-1].logo.fileurl" class="first_img">
                  <img style="display: inline-block;width: 23px;" :src="uerAll+puke[(+item.lotteryDraw.result.split(',')[1].split('-')[0])-1][(+item.lotteryDraw.result.split(',')[1].split('-')[1])-1].logo.fileurl" class="first_img">
                  <img style="display: inline-block;width: 23px;" :src="uerAll+puke[(+item.lotteryDraw.result.split(',')[2].split('-')[0])-1][(+item.lotteryDraw.result.split(',')[2].split('-')[1])-1].logo.fileurl" class="first_img">
                  <span>
                    <i class="icon goto-icon"></i>
                  </span>
                </div>
                <div class="weui-media-box__title lo-num" :id="'lotteryResultDiv_'+item.id" v-else-if="item.showType == '11' && item.lotteryDraw.result==''" >
                  <img style="display: inline-block;width: 23px;" src="../../statics/images/assets/texiao.png"  class="first_img">
                  <img style="display: inline-block;width: 23px;" src="../../statics/images/assets/texiao.png"  class="first_img">
                  <img style="display: inline-block;width: 23px;" src="../../statics/images/assets/texiao.png"  class="first_img">
                  <span>
                    <i class="icon goto-icon"></i>
                  </span>
                </div>
                <!-- <div class="weui-media-box__title lo-num" :id="'lotteryResultDiv_'+item.id" v-else-if="item.showType == '11' && item.lotteryDraw.closeTime <= 1">
                  <img style="display: inline-block;width: 20px;">&nbsp;<img style="display: inline-block;width: 20px;" src="">&nbsp;<img style="" src="">
                </div> -->
                <div style="font: 0.28rem 黑体 !important;height: .2rem;" class="weui-media-box__title lo-num" :id="'lotteryResultDiv_'+item.id" v-else-if="item.showType == '4' && item.lotteryDraw.closeTime > 0 && !!item.lotteryDraw.result">
                  <div class="hong">{{item.lotteryDraw.result.split(',')[0]}}</div><div class="hong" id="jia">+</div>
                  <div class="hong">{{item.lotteryDraw.result.split(',')[1]}}</div><div class="hong" id="jia">+</div>
                  <div class="hong">{{item.lotteryDraw.result.split(',')[2]}}</div><div class="hong" id="jia">=</div>
                  <div class="hui">{{item.lotteryDraw.result.split(',')|capitalize}}</div>
                  <span>
                    <i class="icon goto-icon"></i>
                  </span>
                </div>
                <div style="color:red;height: .2rem;" class="weui-media-box__title lo-num" :id="'lotteryResultDiv_'+item.id" v-else-if="item.showType == '4' && item.lotteryDraw.result == ''">
                  <span data-v-7e22253c=""><i data-v-7e22253c="" class="icon goto-icon"></i></span>
                  正在开奖...
                </div>
                <div style="color:red" class="weui-media-box__title lo-num" :id="'lotteryResultDiv_'+item.id" v-else>
                  <span data-v-7e22253c=""><i data-v-7e22253c="" class="icon goto-icon"></i></span>
                  正在开奖...
                </div>
                <div class="weui-media-box__title lo-endtime">
                  距离<font id="lotteryNoFont_2">{{item.lotteryDraw.shortNextNo}}</font>期截止还有
                  <span v-if="item.code=='ff11x5'||item.code=='jsssq'||item.code=='fflhc'||item.code=='js3d'" class="spanmax" :id="'timeDown'+item.id" >
                    <section class="spanAll">{{item| mytimejs('shi')}}</section>:<section class="spanAll">{{item| mytimejs('fen')}}</section>:<section class="spanAll">{{item| mytimejs('miao')}}</section>
                  </span>
                  <span v-else class="spanmax" :id="'timeDown'+item.id">
                    <section class="spanAll">{{item| mytime('shi')}}</section>:<section class="spanAll">{{item| mytime('fen')}}</section>:<section class="spanAll">{{item| mytime('miao')}}</section>
                  </span>
                </div>
              </div>
            </a>
            <a v-else class="weui-media-box weui-media-box_appmsg bgf">
              <div class="weui-media-box__hd">
                <img style="    filter: grayscale(1);"  :src="uerAll + item.logo.fileurl">
              </div>
              <div class="weui-media-box__bd" style="padding-top: .05rem;">
                <div class="weui-media-box__title lo-name">
                  {{item.name}}
                  <!-- <span id="lotteryNoSpan_2">{{'第_ _ _ _期'}}</span> -->
                </div>
                <div style="color:#666" class="weui-media-box__title lo-num">
                  正在维护...
                </div>
              </div>
            </a>
            <!-- 走势、玩法、收藏 -->
            <div v-if="item.status!=8" class="gnAll">
              <span :index="item.id" :name="item.code" typeall="4" class="zsAll">
                <img v-if="ifred" src="../../assets//source/imgs/zs.png" alt="">
                <img v-if="ifpurple" src="../../assets//source/imgs/zzs.png" alt="">
                <img v-if="ifyellow" src="../../assets//source/imgs/yzs.png" alt="">
                 <img v-if="ifblue" src="../../assets//source/imgs/bzs.png" alt="">
               <img v-if="ifgreen" src="../../assets//source/imgs/gzs.png" alt="">
                <span class="toward">&nbsp; 走势</span>
              </span>
              <span :index="item.id" class="wfAll">
               <img  v-if="ifred"  src="../../assets//source/imgs/wf.png" alt="">
                <img v-if="ifpurple" src="../../assets//source/imgs/zwf.png" alt="">
                <img v-if="ifyellow" src="../../assets//source/imgs/ywf.png" alt="">
                 <img v-if="ifblue" src="../../assets//source/imgs/bwf.png" alt="">
               <img v-if="ifgreen" src="../../assets//source/imgs/gwf.png" alt="">
              <span class="toward">&nbsp; 玩法</span>
              </span>
              <span :index="item.id" :name="item.code" class="scAll">
                <img src="../../assets/source/imgs/wsc.png" alt="">
                
                <span class="toward">&nbsp; 收藏</span>
              </span>
            </div>
            <div style="height:0px" v-else class="gnAll">
            </div>
          </div>
				</div>
      </div>
    </div>
    <!-- <transition name="slide"> -->
      <router-view></router-view>
    <!-- </transition> -->
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
  .lottery .divAll i.goto-icon{
    background: url('../../assets/source/imgs/jtou.png') no-repeat 0 0;
    background-size: contain;
    /* border:1px solid red; */
    margin-right: .07rem;
    /* margin-bottom: 0.1rem; */
    margin-bottom: 0rem;

  }
   .divAll:nth-child(1){
    border-top: none;
  }
  .divAll{
    border-top: 0.2rem solid #f5f5f5;
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
  /* .foottab ul li:nth-of-type(2) a.router-link-active dl dt .dtbg {
    background-position: -93px -2px!important;
} */
.foottab ul li:nth-of-type(2) dl dd{
    color:#E53333!important
}
.lo-name,.lo-num,.lo-endtime{
  text-align: left;
}
.lottery {
    padding-bottom: .5rem;
    background: #fff;
}
.weui-media-box__title div{
  font-size:0.28rem;
  font-weight:700;
}
.content-tabbar{
  margin-bottom: 0 !important;
}
#trend::-webkit-scrollbar {display:none}
.trend-ul::-webkit-scrollbar {display:none}
.divAll:last-child .gnAll{
  height:0.6rem;
}
</style>
<script>
  // import '../../assets/source/css/common/jquery-weui.min.css';
  export default {
    data(){
			return{
        ifred:window.ifred ,
        ifyellow:window.ifyellow ,
        ifblue: window.ifblue ,
        ifgreen:window.ifgreen,
        ifpurple:window.ifpurple,
        datalistAll:[],
        datalist:[],
        flowersnew:[],
        lotteryType:[],
        hour:[],
        minute:[],
        second:[],
        uerAll:base.domain,
        collect:[],
        //快三图片
        puke:[]
      }
    },
    created(){
      // if(!!this.$store.state.isphtuAll){
         this.puke = this.$store.state.isphtuAll.result
      // }else{
        /*base.getApi().phtupian1().then((res)=>{
          this.$store.state.isphtuAll = res.data
          this.puke = this.$store.state.isphtuAll.result
          window.localStorage.removeItem('buycolorAll');
          window.localStorage.removeItem('iswfsm');
          this.getFlower();
          var dict = JSON.parse(myStorage.getItem("dictList"));
          this.lotteryType = dict['lottery-type'];
          this.datalistAll = this.$store.getters.getcolorsj.data;
          this.datalist = this.datalistAll.lotteryList;
          var $thisnwea = this;
          if(this.$store.state.iserji){
            this.$store.state.iserji.yi = 0;
            this.$store.state.iserji.er = 0;
          }
        })*/
        // this.$store.state.isphtuAll = base.getApi().phtupian().data
        // console.log(base.getApi().phtupian().data)
        // this.puke = this.$store.state.isphtuAll.result
      // }
       
        // window.localStorage.removeItem('buycolorAll');
        window.localStorage.removeItem('iswfsm');
        this.getFlower();
        var dict = JSON.parse(myStorage.getItem("dictList"));
        this.lotteryType = dict['lottery-type'];
        this.datalistAll = this.$store.getters.getcolorsj.data;
        this.datalist = this.datalistAll.lotteryList;
        var $thisnwea = this;
       if(this.$store.state.iserji){
        this.$store.state.iserji.yi = 0;
        this.$store.state.iserji.er = 0;
       }

    },
    methods:{
      getApiFirst(){
        this.getFlower();
        var dict = JSON.parse(myStorage.getItem("dictList"));
        this.lotteryType = dict['lottery-type'];
        this.datalistAll = this.$store.getters.getcolorsj.data;
        this.datalist = this.datalistAll.lotteryList;
        var $thisnwea = this;
      },
      getFlower() {
        // ifred:window.ifred ,
        // ifyellow:window.ifyellow ,
        // ifblue: window.ifblue ,
        // ifgreen:window.ifgreen,
        // ifpurple:window.ifpurple,

        if(this.ifred){
          this.collect.push(require('../../assets/source/imgs/wsc.png'));
         this.collect.push(require('../../assets/source/imgs/sc.png'));
        }else if(this.ifyellow){
           this.collect.push(require('../../assets/source/imgs/ywsc.png'));
         this.collect.push(require('../../assets/source/imgs/ysc.png'));
        }else if(this.ifblue){
           this.collect.push(require('../../assets/source/imgs/bwsc.png'));
         this.collect.push(require('../../assets/source/imgs/bsc.png'));
        }else if(this.ifgreen){
           this.collect.push(require('../../assets/source/imgs/gwsc.png'));
         this.collect.push(require('../../assets/source/imgs/gsc.png'));
        }else if(this.ifpurple){
           this.collect.push(require('../../assets/source/imgs/zwsc.png'));
         this.collect.push(require('../../assets/source/imgs/zsc.png'));
        }
        
      
      },
      showAll(){
        $('.dataall').addClass('on').siblings('li').removeClass('on')
        console.log(this.datalistAll.lotteryList);
        this.datalist = this.datalistAll.lotteryList;
         var $this = this;
         console.log(this.datalist);
          setTimeout(function(){
            $this.colornew();
          },10)
      },
    tap(){
      var $this = this;
        $('#trend').on('click','.litype',function(){
          $(this).addClass("on").siblings().removeClass("on");
          var k = [];
          $this.datalist = $this.datalistAll.lotteryList;
          for(var j = 0;j<$this.datalist.length;j++){
            if($(this).attr('datatype')==$this.datalist[j].type){
              k.push($this.datalist[j])
            }
          }
          // console.log(k);
          $this.datalist = k;
          k = [];
          // var $this = this;

          setTimeout(function(){
            $this.colornew();
          },10)
      });
    },
    
    colornew(){
      for(var z = 0;z<$('.lottery .scAll').length;z++){
        $($('.lottery .scAll')[z]).find('img').attr('src',this.collect[0]);
      }

      // $('.foottab ul li:nth-of-type(2) a.router-link-active dl dt .dtbg').css('background-position','-93px -2px');
      // $('.foottab ul li:nth-of-type(2) dl #gc').css('color','#E53333!important');
      var yhuserId = JSON.parse(myStorage.getItem("currentUser"));
        if(yhuserId!=null){
           if(yhuserId.type!=2){
             if(!!this.$store.state.iscollect[yhuserId.id+'']){
               var sccz = this.$store.state.iscollect[yhuserId.id+'']
               for(var i = 0;i<$('.lottery .scAll').length;i++){
                 for(var t = 0;t<sccz.data.length;t++){
                   // console.log($($('.lottery .scAll')[i]).attr('name'));
                   // console.log(sccz.data[t].lottery.code+'----');
                   // console.log($($('.lottery .scAll')[i]).attr('name')==sccz.data[t].lottery.code);
                   if($($('.lottery .scAll')[i]).attr('name')==sccz.data[t].lottery.code){
                     $($('.lottery .scAll')[i]).find('img').attr('src',this.collect[1]);
                     $($('.lottery .scAll')[i]).find('.toward').html('&nbsp;已收藏')
                   }
                 }
               }
             }else{
               base.getApi().collectList1(yhuserId.id).then((res)=>{
                 this.$store.state.iscollect[yhuserId.id+''] = res
                 var sccz = this.$store.state.iscollect[yhuserId.id+'']
                 for(var i = 0;i<$('.lottery .scAll').length;i++){
                   for(var t = 0;t<sccz.data.length;t++){
                     // console.log($($('.lottery .scAll')[i]).attr('name'));
                     // console.log(sccz.data[t].lottery.code+'----');
                     // console.log($($('.lottery .scAll')[i]).attr('name')==sccz.data[t].lottery.code);
                     if($($('.lottery .scAll')[i]).attr('name')==sccz.data[t].lottery.code){
                       $($('.lottery .scAll')[i]).find('img').attr('src',this.collect[1]);
                       $($('.lottery .scAll')[i]).find('.toward').html('&nbsp;已收藏')
                     }
                   }
                 }
               })
                /*this.$store.state.iscollect[yhuserId.id+''] = base.getApi().collectList(yhuserId.id)
                var sccz = this.$store.state.iscollect[yhuserId.id+'']*/
             }

              // console.log(sccz);
              /*for(var i = 0;i<$('.lottery .scAll').length;i++){
                for(var t = 0;t<sccz.data.length;t++){
                  // console.log($($('.lottery .scAll')[i]).attr('name'));
                  // console.log(sccz.data[t].lottery.code+'----');
                  // console.log($($('.lottery .scAll')[i]).attr('name')==sccz.data[t].lottery.code);
                  if($($('.lottery .scAll')[i]).attr('name')==sccz.data[t].lottery.code){
                      $($('.lottery .scAll')[i]).find('img').attr('src',this.collect[1]);
                       $($('.lottery .scAll')[i]).find('.toward').html('&nbsp;已收藏')
                  }
                }
              }*/
           }

        }
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
                        $this.$store.state.isgoucaidt = 'yes';
                        var str = {
                          'id':$(this).attr('id'),
                          'showType':$(this).attr('name'),
                          'lotteryName':$(this).attr('lname')
                        }
                        window.localStorage.setItem('forthecolor',JSON.stringify(str));
                        window.localStorage.setItem('thisdatalist',$(this).attr('id'));
                        $this.$store.state.islodershow='yes'
                        // $this.$router.push({path:'/forthecolor'});

                        // setTimeout(function(){
                        //     $this.$store.state.ishistorydraw['34'] = base.getApi().getLotteryDraw(34).data.lotteryDrawList
                        //     // $this.lottershi = $this.$store.state.ishistorydraw[adds];
                        // },300);
                        $this.$store.state.urlgoucai = $(this).find('img').attr('src');
                        $this.$store.state.islsjl = $(this).attr('id');
                        window.localStorage.setItem('urlgoucai',$(this).find('img').attr('src'))
                        $this.$router.push({path:'/buycolortestnew'});


                    }
                })
                var yhuserId = JSON.parse(myStorage.getItem("currentUser"));
                $('.lottery').on('click','.scAll',function(){

                    if(yhuserId!=null){
                      // $this.$store.state.isshoucan = base.getApi().collectList(yhuserId.id);
                      if(yhuserId.type!=2){
                          if($(this).children('img').attr('src')==$this.collect[0]){
                            base.getApi().userCollect1(yhuserId.id, $(this).attr('index')).then((res)=>{
                              $(this).children('img').attr('src',$this.collect[1])
                              $.tips('收藏成功', 1000)
                              $(this).find('.toward').html('&nbsp;已收藏')
                              base.getApi().collectList1(yhuserId.id).then((res)=>{
                                if(res.code !== 200) {
                                  $.tips(res.message, 1000);
                                }
                                $this.$store.state.iscollect[yhuserId.id+''] = res
                              })
                            })
                          /*$(this).children('img').attr('src',$this.collect[1])
                          base.getApi().userCollect(yhuserId.id, $(this).attr('index'));
                          $(this).find('.toward').html('&nbsp;已收藏')*/
                        }else{
                            base.getApi().collectCancel1(yhuserId.id,$(this).attr('index')).then((res)=>{
                              $(this).children('img').attr('src',$this.collect[0])
                              $.tips('取消收藏', 1000)
                              $(this).find('.toward').html('&nbsp;收藏')
                              base.getApi().collectList1(yhuserId.id).then((res)=>{
                                if(res.code !== 200) {
                                  $.tips(res.message, 1000);
                                }
                                $this.$store.state.iscollect[yhuserId.id+''] = res
                              })
                            })
                          /*$(this).children('img').attr('src',$this.collect[0])
                          base.getApi().collectCancel(yhuserId.id,$(this).attr('index'));
                          $(this).find('.toward').html('&nbsp;收藏')*/
                        }
                      }else{
                        $.tips("试玩账号不能收藏");
                        base.getApi().collectList1(yhuserId.id).then((res)=>{
                          if(res.code !== 200) {
                            $.tips(res.message, 1000);
                          }
                          $this.$store.state.iscollect[yhuserId.id+''] = res
                        })
                      }

                    }else{
                      $.tips("请登录后收藏");
                      base.getApi().collectList1(yhuserId.id).then((res)=>{
                        if(res.code != 200) {
                          $.tips(res.message, 1000);
                        }
                        $this.$store.state.iscollect[yhuserId.id+''] = res
                      })
                    }
                    /*$this.$store.state.iscollect[yhuserId.id+''] = base.getApi().collectList(yhuserId.id)*/
                });
                $('.lottery').on('click','.wfAll',function(){
                    $this.$router.push({path:'/rule/'+$(this).attr('index')+''})
                });
                // $('.lottery').on('click','.zsAll',function(){
                //     $this.$router.push({path:'/trentMap/'+$(this).attr('index')+''})
                // });
                $('.lottery').on('click','.zsAll',function(){
                    if($(this).attr('name')=='xypk'){
                      $.tips('该功能暂未开放，敬请期待');
                      return;
                    }
                    $this.$router.push({path:'/trentMap/'+$(this).attr('index')+''});
                });
                $('.title').click(function(){
                    $this.colornew();
                })
            },
            colornewa(){
              // $('.foottab ul li:nth-of-type(2) dl dd').css('color',window.mapcolor)
              // $('.foottab ul li:nth-of-type(2) dl dt .dtbg').css('background-position','-93px 0px')
             
            },
            gettime(){
            if(window.ifcvalue){
              base.getApi().getPTimestamp1().then((res)=>{
                this.version= res.version
                window.updata(this.version,2);
              })
               /*this.version= base.getApi().getPTimestamp().version;
               window.updata(this.version,2);*/
            }else{
              base.getApi().loadTimestamp1().then((res)=>{
                this.version= res.version
                window.updata(this.version,1)
              })
              /*this.version= base.getApi().loadTimestamp().version;
              window.updata(this.version,1)*/
            }

           },
           ishomea(){
             var g;
             for(var a = 0;a<$('#trend li').length;a++){
              //  console.log($($('#trend li')[a]).html())
              //  console.log(this.$store.state.homeType)
               if($($('#trend li')[a]).html()==this.$store.state.homeType){
                 g = a;
                   setTimeout(function(){
                      $($('#trend li')[g]).click();
                    },500)


                 this.$store.state.homeType = '';
               }
             }
           }

    },
     mounted:function() {
       var $this = this;
       this.colornewa();
       this.gettime();
       var version= localStorage.getItem("time-version");
        if(version){
          this.getApiFirst();

          this.colornew();
          this.reoter();
          setTimeout(function(){
            $this.tap();
          },500)

        }else{

            var that=this;
            setTimeout(() => {
             this.getApiFirst();
             this.colornewa();
             this.colornew();
             this.reoter();
             this.tap();
          }, 200);
        }
        // this.colornew();

        this.$nextTick(()=>{
          document.getElementById("wrapper").style.height=document.getElementsByTagName("body")[0].offsetHeight-35- 
          document.getElementsByClassName("pde")[0].offsetHeight
          +"px";
          $this.ishomea();
        })
    },
    beforeCreate: function() {
    },
  }
</script>

