<template>
    <div style="position:relative;height:100%;">
        <!-- <p style="font-family:QuartzEF">123456</p> -->
         <headertop style="position:absolute;z-index:11;top:0;" :title="title" :lefthtml="lefthtml" :datal="datal" :ifhome="ifhome" :ifback="false" :goBack="goto" :goDetal="init" :ifhomeleft="ifhomeleft"> </headertop>
       <div style="overflow:Scroll" id="loadmore">
            <mt-loadmore :top-method="loadTop"  style="background:white;position: relative;z-index:10;"   ref="loadmore"  :max-distance="150" @top-status-change="handleTopChange" >
            <!-- <p slot="top" class="mint-loadmore-top" style="font-size:0.16rem">
                <img  class="rotate1" :class="{ 'rotate': topStatus === 'pull' }" ref="pp" src="../../statics/images/jtou.png" style="position:absolute;left:0.1rem;width:20px;bottom:0.15rem;" alt="">
                <span class="imgdown" style=" position:absolute;left:0.1rem;width:0.2rem;height:0.2rem;bottom:0.15rem;" ref="imgdown" ></span>
                <span style="position:absolute;right:0.1rem">最后更新：{{nowdata}}</span>
                <span style="position:absolute;left:0.3rem" v-show="topStatus === 'pull'" >下拉刷新</span>
                <span style="position:absolute;left:0.3rem" v-show="topStatus === 'loading'">正在加载</span>
                <span style="position:absolute;left:0.3rem" v-show="topStatus === 'drop'">释放更新</span>
            </p> -->
            <div  class="homebanner" id="homebanner" style="overflow:hidden" >
                <mt-swipe class="homeswipe" :auto="3000" >
                    <mt-swipe-item v-for="(item,index) in list" :key="index" >
                        <!-- <router-link  :to="'/detailsnotice'+item.activityId"> -->
                            <img class="imse" :style="{ height: activeheight}" @click="goBanner" :type="item.type" :url="item.url" :link="'/detailsnotice'+item.activityId" :src="domain+item.bannerLogo.fileurl"  alt="">
                        <!-- </router-link> -->
                    </mt-swipe-item>
                </mt-swipe>
            </div>
            <!--通知  -->
            <div id="wrap_content">
                <div class="index_content">
                    <div class="broadcast">
                        <div class="broad_top">
                            <div class="broad_topleft"></div>
                            <div class="shade">
                                <div ref="scrollSpan">
                                    <router-link to='/announcement' style="color:#7f7f7f !important;">
                                      <span ref="showNews" style="color:#7f7f7f;padding-right:150px;padding-left:20px" v-for="(item2,index) in list2" :key="index">
                                           {{item2.details}}  
                                      </span>
                                </router-link>
                                <router-link to='/announcement' style="color:#7f7f7f !important;">
                                      <span ref="showNews" style="color:#7f7f7f;padding-right:150px;padding-left:20px" v-for="(item2,index) in list2" :key="index">
                                           {{item2.details}}  
                                      </span>
                                </router-link>
                                </div>
                                
                            </div>
                        </div>

                        <div class="section1" >
                            <ul>
                                <li v-if="islog == null">
                                    <router-link to='/login'>
                                        <img src="../../assets/source/imgs/images/title_1_11.png" alt="" class="teshuIMG">
                                        <p>存/取款</p>
                                    </router-link>
                                </li>
                                <li v-else>
                                    <router-link to='/mine'>
                                        <img src="../../assets/source/imgs/images/title_1_11.png" alt="">
                                        <p>存/取款</p>
                                    </router-link>
                                </li>
                                <li v-if="islog">
                                    <router-link to='/trialGame'>
                                        <img src="../../assets/source/imgs/images/playFree.png" alt="">
                                        <p>免费试玩</p>
                                    </router-link>
                                </li>
                                <li v-if="!islog" @click="bettingRecord">
                                    <router-link to='/bettingRecord'>
                                        <img src="../../assets/source/imgs/images/title_1_13.png" alt="">
                                        <p>投注记录</p>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link to='/services'>
                                        <img src="../../assets/source/imgs/images/title_1_15.png" alt="">
                                        <p>优惠活动</p>
                                    </router-link>
                                </li>
                                <li @click="onserver">
                                   <!-- <a  target="_blank" :href="onlineURL">  -->
                                    <img src="../../assets/source/imgs/images/title_1_17.png" alt="">
                                    <p>在线客服 </p>
                                    <!-- </a> -->
                                </li>
                            </ul>
                        </div>
 
                        <!--广播结束-->
                        <!--彩票列表-->
                        <div class="lotterylist">
                            <div class="lottery_title color" style="    margin-top: 0.15rem;">
                                <span>热门彩种</span>
                            </div>
                            <ul class="list" id="hotListUl">
                                <li class="lii" :id="item3.id" 
                                :name="item3.showType" 
                                :lname="item3.name" 
                                :status="item3.status" 
                                :codes="item3.code" 
                                :index="index" 
                                v-for="(item3,index) in list3" :key="index">
                                    <a>
                                        <div class="lottlist_left">
                                            <img v-if="item3.status!=8"  v-lazy="domain + item3.logo.fileurl"   >
                                            <img style="filter: grayscale(1);" v-else  v-lazy="domain + item3.logo.fileurl"   >
                                        </div>
                                        <div class="lottlist_right">
                                            <h3>{{item3.name}}</h3>
                                            <p v-if="item3.status!=8">{{item3.remark}}</p>
                                            <p v-else>正在维护...</p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                            <div class="lottery_title color" style="    margin-top: 0.15rem;">
                                <span>今日最热门彩种推荐</span>
                            </div>
                            <ul class="list" id="moreListUl">
                                <li class="lii" :id="item4.id" :name="item4.showType" :lname="item4.name" :status="item4.status"  :codes="item4.code" :index="index"  v-for="(item4,index) in list4" :key="index">
                                    <a>
                                        <div class="lottlist_left">
                                            <img v-if="item4.status!=8"  v-lazy="domain + item4.logo.fileurl"   >
                                            <img style="filter: grayscale(1);" v-else  v-lazy="domain + item4.logo.fileurl"   >
                                        </div>
                                        <div class="lottlist_right">
                                            <h3>{{item4.name}}</h3>
                                            <p v-if="item4.status!=8">{{item4.remark}}</p>
                                            <p v-else>正在维护...</p> 
                                        </div>
                                    </a>
                                </li>
                                <li id='lisd' style='width: 50%;float: left;height: 1.44rem;'>
                                    <a style='    width: 80%;height: 100%;float: left;'>
                                        <div style='width: 1.2rem;
    margin-top: 0.22rem;
    margin-left: .3rem;
    margin-right: .1rem;'>
                                            <img id='imging'  style='width: 1.1rem;' src='../../assets/images/more+_05.jpg' />
                                        </div>
                                        <div style='float: left;font-size: 0.24rem;'>
                                            <h3 style='line-height: 1.44rem;margin-left:0.1rem;'>更多</h3>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                            <div class="lottery_title bonus">
                                <span>最新中奖榜</span>
                            </div>
                        </div>
                        <div id="card_footer" class="myscroll" >
                            <a id="winnerListA">
                                <div class="news" id="news" ref="news">
                                    <router-link to="/newtop">
                                        <div class="windiv" ref="windiv" style="top:0">
                                            <ul id="winListUl" ref="winListUl">
                                                <li v-for="(item5,index) in list5" :key="index">
                                                    <span><img style="width: 0.34rem;
    margin-top: 0.33rem;" src="../../assets/source/imgs/jbs.png" alt=""> {{item5.user.account.substring(0, 3) + "****"}}</span>
                                                    <span>{{item5.lottery.name}}</span>
                                                    <span style="color:red"> {{'喜中' + (item5.amount>10000?((''+item5.amount/10000).split('.')[0]+'万'):item5.amount.toFixed(2)) + '元'}} </span>
                                                </li>
                                            </ul>
                                             <ul id="winListUl" ref="winListUl">
                                                <li v-for="(item5,index) in list5" :key="index">
                                                    <span >{{item5.user.account.substring(0, 3) + "****"}}</span>
                                                    <span>{{item5.lottery.name}}</span>
                                                    <span style="color:red">
                                                       {{'喜中' + (item5.amount>10000?((''+item5.amount/10000).split('.')[0]+'万'):item5.amount.toFixed(2)) + '元'}} 
                                                        <!-- {{'喜中' + item5.amount.toFixed(2) + '元'}} -->
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </router-link>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </mt-loadmore>
       </div>
        <div class="home-tankuang" v-if="storetankuang && popWin.pop" ref="homenoc" style="height:100%;" :class="{'none':none}">
            <div style="position:absolute;width:100%;height:100%; background-color: rgba(0,0,0,0.8)"></div>
            <div style="margin: 0 auto;" class="aaa"  ref="noticil">
                <div id="quni" style="font-size:0.16rem; position: relative;background:#fff;    border-radius: 10px 10px 0px 0px;" >
                    <img id="qunimg" v-if="format" :src="domain+tankuangims.imgUrl"  alt="">
                    <span v-if="iftet" v-html="tankuangims.title"></span>
                    <span v-if="iftet"  v-html="tankuangims.text"></span>
                </div>
                <p style="font-size:0.16rem;background:#fff;line-height:0.5rem;position: relative;  border-radius: 0 0 10px 10px;">
                    <span style="color:red;width:50%;display:inline-block;
                    border-right:1px solid #f5f5f5;
        box-sizing: border-box" @click="notic">不再提醒</span><span style="width:50%;display:inline-block" @click="noticnoe">我知道了</span>
                </p>
            </div>
           
        </div>
       <div class="xiazai" ref="xiazai" v-if="xiazaishow" id="homexia">
            <p></p>
            <p style="margin-bottom:0.05rem;"> 
                <span @click="xiaoshi"> <i><img style="width:0.5rem;" src="../../assets/images/xx.png" alt=""></i> </span>
                <span >下载 APP 体验更多购彩乐趣</span><a target="_blank" class="app_color" :href="appurl">下载app</a>
            </p>
        </div>
	
        <!-- <transition name="slide"> -->
           <router-view></router-view>
        <!-- </transition> -->
    </div>
</template>

<script>
    import headertop from '../header/header'
    import { kefu } from '../../assets/api/app.js'
    export default {
        components: {
            headertop
        },
        data(){
            return{
                onlineURL:window.onlineURL,
                ifhomeleft:true,
                ifhome:false,
                title:"",
                lefthtml:"注册",
                datal:"登录",
                islog:false,
                listAll:[],
                list:[],
                list2:[],
                list3:[],
                list4:[],
                list5:[ ],
                nowdata:'马上更新',
                topStatus: '',
                timeout:'',
                imgrote:'',
                version:"",
                n:1,
                // domain:"",
                appurl:"",
                homeqmList:"",
                shujuAlls:{},
                domain:base.domain,
                localHomeTitle:{},
                timeoutt:"",
                localpop:"",
                tankuang:true,
                format:true,
                iftet:false,
                Android:false,
                tp:false,
                none:true,
                homeqmListData:'',
                popWin:{},
                activeheight: document.getElementsByTagName("body")[0].offsetWidth/3+"px"
            }
        },
          computed: {
            xiazaishow() {
              return this.$store.state.xiazaishow;
            },
            storetankuang(){
                return this.$store.state.storetankuang
            },
            tankuangims(){
                return this.$store.state.tankuangims
            }
        },
        methods:{
            onserver(){
                if(this.$store.state.isid){
                     kefu()
                }else{
                    window.open(onlineURL) 
                }
               
            },
            is_weixin() {
            //           var u = navigator.userAgent;
            //          var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
            // var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            //      if(isAndroid){
            //         this.Android=true;
            //        this.tp=true
            //     }
            //     if(isiOS){
            //           this.Android=false;
            //        this.tp=false
            //     }

            },
            noticnoe(){
                var popWin = {
                    pop:true
                }
                window.localStorage.setItem('popWin',JSON.stringify(popWin))
                this.popWin = popWin
                this.$store.state.storetankuang=false;
            },
            notic(){
                var popWin = {
                    pop:false
                }
                window.localStorage.setItem('popWin',JSON.stringify(popWin))
                this.popWin = popWin
                this.$store.state.storetankuang=false;
            },
            tankuangg(){
              base.getApi().homeqmList1(1).then((res)=>{
                if (res.code === 200) {
                    if(res.data[0].text == JSON.parse(window.localStorage.getItem("popInf"))[0].text && res.data[0].imgUrl == JSON.parse(window.localStorage.getItem("popInf"))[0].imgUrl){
                        this.homeqmListData = JSON.parse(window.localStorage.getItem("popInf"))
                    } else {
                        window.localStorage.setItem("popInf", JSON.stringify(res.data))
                        this.homeqmListData = res.data
                    }
                    if(this.homeqmListData.length){
                       this.none=false;
                       if(this.homeqmListData[0].formart==1  ){
                            if(this.homeqmListData[0].formart!==this.$store.state.formart){
                                this.$store.state.formart=this.homeqmListData[0].formart
                                   
                                        this.$store.state.storetankuang=true;
                                    
                            }
                                
                                this.iftet=false;
                                this.format=true;
                                 
                            if(this.homeqmListData[0].imgUrl){
                                    
                                 if(this.$store.state.tankuangims.imgUrl!==this.homeqmListData[0].imgUrl){
                                     
                                        this.$store.state.storetankuang=true
                                     
                                     this.$store.state.tankuangims=this.homeqmListData[0]
                                 }
                            }else{
                                
                                this.$store.state.storetankuang=false
                                
                            }
                        }else{
                              this.iftet=true;
                              this.format=false;
                            if(this.homeqmListData[0].title){
                                 if(this.$store.state.tankuangims.text!==this.homeqmListData[0].text){
                                     
                                         this.$store.state.storetankuang=true
                                     
                                     this.$store.state.tankuangims=this.homeqmListData[0]
                                 }
                            }else{
                                this.$store.state.storetankuang=false
                                
                            }
                        }
                        
                   }else{
                       this.$store.state.storetankuang=false
                   }
                }        
              })
            },
            goBanner(){
               var type=event.currentTarget.getAttribute("type");
               var url=event.currentTarget.getAttribute("url");
               var link=event.currentTarget.getAttribute("link");
               console.log(url)
               if(type==1){
                   this.$router.push(link)
               }else{
                   window.open(url); 
               }

            },  
            getbannerheight(){
                document.getElementById('homebanner').style.height=( 25*document.getElementsByTagName("body")[0].offsetWidth)/75+"px";
                // var imse=document.getElementsByClassName("imse");
                // if(imse && homebanner){
                //     for (var i = 0; 1 < imse.length; i++) {
                //         if (!imse[i]){
                //             return
                //         } else {
                //             imse[i].style.height= document.getElementsByTagName("body")[0].offsetWidth/3+"px"
                //         }
                //     }
                // }
            },
            latgo(){
                this.$router.push({path:"/buycolor"})
            },
            goto(){
                if(localStorage.getItem("token")){
                    this.$router.push({path:"/mine"})
                }else{
                     this.$router.push({path:"/register"})
                }
            },
            gettitle(){
                // alert('aaaa')
                if( localStorage.getItem("token")){
                    this.datal="我的收藏",
                    this.ifhome=true,
                    this.ifhomeleft=false,
                    this.islog=false;
                }else{
                    this.islog=true
                    this.datal="登录",
                    this.ifhome=false,
                    this.ifhomeleft=true
                }
            },
            bettingRecord(){
                this.$store.state.xiazaishow=false
                this.$store.betterRouter="/home"
            },
            gettime(){
              if(window.ifcvalue){
                base.getApi().getPTimestamp1().then((res)=>{
                             this.version= res.version;
                              window.updata(this.version,2);
                 });
                
              }else{
               base.getApi().loadTimestamp1().then((res)=>{
                        this.version= res.version;
                        window.updata(this.version,1)
                });
                
              }
              
           },
            // 初始化数据
            initialize(){
                var $this = this;
                $('.lotterylist').on('click','.lii',function(){
                    var lottery=$this.$store.getters.getcolorsj.data.lotteryList;
                    if($(this).attr('status')!=1){
                        $.tips("该彩种正在维护,请稍后再投注");return;
                    }
                    if($(this).attr('name') == 0) {
                        $this.$store.state.homeType = $(this).attr('lname');
                        $this.$router.push({path:'/buycolor'});
                    } else {
                        var str = {
                          'id':$(this).attr('id'),
                          'showType':$(this).attr('name'),
                          'lotteryName':$(this).attr('lname')
                        }
                        window.localStorage.setItem('forthecolor',JSON.stringify(str));
                        $this.$store.state.urlgoucai = $(this).find('img').attr('src');
                        $this.$store.state.islsjl = $(this).attr('id');
                        window.localStorage.setItem('thisdatalist',$(this).attr('id'))
                        $this.$store.state.homecolor = 'yes';
                        $this.$store.state.ishomecolorclick = 'yes';
                        $this.$store.state.islodershow='yes'
                        $this.$router.push({path:'/homecolor'});

                    }
                })


                var that=this;
                $('.lotterylist').on('click','#lisd',function(){
                    that.$router.push("/buycolor")
                })
            },
            xiazaii(){
                 
                
                this.appurl=JSON.parse(localStorage.getItem("sysConfigMap")).appUrl.cvalue  
               
            },
           
            xiaoshi(){
                this.$refs.xiazai.style.display="none"
            },
           
            loadTop() {
                var self=this; 
                this.$store.state.homeData=""
                setTimeout(function(){
                    self.homegetapi();
                    self.scroll(100);
                    self.$refs.loadmore.onTopLoaded();
                },800)
                    var data=new Date();
                    var hour=data.getHours()<10?(`0${data.getHours()}`):data.getHours();
                    var minutes=data.getMinutes()<10?(`0${data.getMinutes()}`):data.getMinutes();
                    this.nowdata=`今日${hour}:${minutes}`;
            },
            // 刷新时调用方法
            handleTopChange(status) {
                this.topStatus = status;
                
                if(this.topStatus=='loading'){
                    var  pp= this.$refs.pp;
                    var  down=this.$refs.imgdown;
                    pp.style.display="none";
                    down.style.display="block";
                    var i=1;
                    this.imgrote=setInterval(()=>{
                        down.style.transform=`rotateZ(${i}deg)`;
                        i=i+2;
                    },1)
                }else{
                    this.$refs.pp.style.display="block";
                    this.$refs.imgdown.style.display="none";
                    clearInterval(this.imgrote)
                }
            },
            // 数据重组
            homegetapi() {
               
                var homeData;
                this.domain=base.domain
                // 缓存
                if(!!this.$store.state.homeData){
                     homeData=this.$store.state.homeData;
                      this.listAll =homeData.data;
                        this.list =  this.listAll.bannerList;
                        this.list2 =  this.listAll.noticeList;
                        // debugger;
                        this.list3 = this.listAll.hotLotteryList;
                        this.list4 =  this.listAll.moreLotteryList;
                        console.log(this.list4 )
                        this.list5 = this.listAll.userWinningList;
                        if(!!this.$store.state.homePopData){
                            this.homeqmList=this.$store.state.homePopData;   
                        }else{
                            this.$store.state.homePopData = this.homeqmListData[0]
                            if(this.$store.state.homePopData==undefined){
                                return;
                            }
                            this.homeqmList=this.$store.state.homePopData;
                            // base.getApi().homeqmList1(1).then((res)=>{
                            //     console.log("88888888")
                            //             this.$store.state.homePopData=res.data[0];
                            //             if(this.$store.state.homePopData==undefined){
                            //                     return;
                            //             }
                            //             this.homeqmList=this.$store.state.homePopData;
                            // });
                        }
            //              var $li_3= $("<li id='lisd' style='width: 50%;float: left;height: 0.83rem;'><a style='    width: 80%;height: 100%;float: left;margin-left: 10%;'>"+
            // "<div style='height: 0.9rem;float: left;'><img id='imging'  style='width: 0.73rem;margin-top: 0.05rem' src='' /></div><div style='float: left;font-size: 0.14rem;'><h3 style='line-height: 0.83rem;margin-left:0.1rem;'>更多</h3></div></a></li>");
            //                 setTimeout(() => {
            //                         $("#moreListUl").append($li_3);
            //                          document.getElementById("imging").src=require('../../assets/images/more+_05.jpg');
            //                 }, 200);
                }else{
                     base.getApi().homeData1().then((res)=>{
                         this.$store.state.homeData=res;
                          homeData=this.$store.state.homeData;
                           this.listAll =homeData.data;
                            this.list =  this.listAll.bannerList;
                            this.list2 =  this.listAll.noticeList;
                            // debugger;
                            this.list3 = this.listAll.hotLotteryList;
                            this.list4 =  this.listAll.moreLotteryList;
                            console.log(this.list4 )
                            this.list5 = this.listAll.userWinningList;
                            //加载弹出信息配置
                            if(!!this.$store.state.homePopData){
                                this.homeqmList=this.$store.state.homePopData;
                            }else{
                                this.$store.state.homePopData = this.homeqmListData[0]
                                if (this.$store.state.homePopData==undefined){
                                            return;
                                }
                                this.homeqmList=this.$store.state.homePopData;
                                // base.getApi().homeqmList1(1).then((res)=>{
                                //      this.$store.state.homePopData=res.data[0];
                                //      if(this.$store.state.homePopData==undefined){
                                //             return;
                                //      }
                                //       this.homeqmList=this.$store.state.homePopData;
                                // });
                                // if(base.getApi().homeqmList(1).data[0]==undefined){
                                //     return;
                                // }
                                // this.$store.state.homePopData=base.getApi().homeqmList(1).data[0];
                                // this.homeqmList=this.$store.state.homePopData;
                            }
                             
                             
                     });
                    
                }
               
            },
            //   无缝滚动
            scroll(time) {
                clearInterval(this.timeout);  
                var windiv=this.$refs.windiv;
                this.timeout=setInterval(()=>{
                    windiv.style.top=windiv.offsetTop-1+'px';
                    if(windiv.offsetTop<=-600){
                        windiv.style.top=0+'px'
                    }
                },time)
            },
               scrollte(time) { 
                var windiv=this.$refs.scrollSpan;
                 var windivwidth=this.$refs.scrollSpan.offsetWidth/2;
                var a=1
                this.timeoutt=setInterval(()=>{
                        a++
                    windiv.style.left=-a+'px';
                    if(a>windivwidth){
                      a=0
                    }
                },time)
            },
            wl(){
                window.location.href = base.getApi().getSystemContent(2).aboutUs.content;
            },
            init(){
                setTimeout(function(){
                    $('.hint-wrap').hide();
                },100)
                
                var localUser = JSON.parse(myStorage.getItem("currentUser"));
                if(localUser){
                     if(localUser.type == 2) {
					$.tips("对不起，试玩账号不能查看收藏列表");
			     	}else{
                        this.$store.state.xiazaishow=false;
                         this.$router.push({ path: '/soucang' });
                     }
                }else{
                     this.$router.push({ path: '/login' });
                }
               
            },
            colornew(){
                $('.foottab ul li:nth-of-type(2) dl dd').css('color','#999')
                $('.foottab ul li:nth-of-type(2) dl dt .dtbg').css('background-position','-93px -26px')
                
            },
           
            tapp(){
                 if(window.localStorage.getItem('ishomesuzju')!=window.localStorage.getItem('titleArrnew')){
                     $('.hint-wrap').show();
                     window.localStorage.setItem('ishomesuzju',window.localStorage.getItem('titleArr'))
                    // var localHomeTitle = window.base.getApi().homeqmList(1).data[0];
                    if(!!this.$store.state.homePopData){
                        var localHomeTitle=this.$store.state.homePopData;
                    }else{
                        if(this.homeqmListData[0]==undefined){
                            return;
                        }
                        this.localpop= this.homeqmListData;
                        if(this.localpop.length){
                             this.$store.state.homePopData=this.localpop[0];
                        var localHomeTitle=this.$store.state.homePopData;
                        }
                       
                    }
                    // var localHomeTitle = that.localHomeTitle
                    this.$store.state.ishometankuangtesxt = localHomeTitle;
                    window.localStorage.setItem('ishomeshow','yes')
                   //我知道了
                    var that = this;
                    $('.iknow').click(function(){
                        that.$store.state.ishometankuang = 'no'
                        $('.hint-wrap').hide();
                    })    
                    //不在提示
                    $('.iknowno').click(function(){
                        // that.$store.state.ishometankuang = 'yes'
                         window.localStorage.setItem('ishomeshow','no')
                        $('.hint-wrap').hide();
                    })
                    return;
                }
                if(this.$store.state.ishometankuang == 'yes'){
                    $('.hint-wrap').show();
                }else{
                    $('.hint-wrap').hide();
                    return;
                }
                if(window.localStorage.getItem('ishomeshow')=='yes'){
                    $('.hint-wrap').show();
                }else{
                    $('.hint-wrap').hide();
                    return
                }
                //我知道了
                var $this = this;
                $('.iknow').click(function(){
                    $this.$store.state.ishometankuang = 'no'
                    $('.hint-wrap').hide();
                })    
                //不在提示
                $('.iknowno').click(function(){
                    // that.$store.state.ishometankuang = 'yes'
                    window.localStorage.setItem('ishomeshow','no')
                    $('.hint-wrap').hide();
                })
            }
        },
        mounted:function() {
            console.log(window.onlineURL)
            //进入主页清空投注篮记录
            if (window.localStorage.getItem("buycolorAll")) {
                window.localStorage.removeItem("buycolorAll")
            }
            //弹窗设定
            if (!window.localStorage.getItem("popWin")){
                var popWin = {
                    pop:true
                }
                window.localStorage.setItem("popWin",JSON.stringify(popWin))
            }
            this.popWin = JSON.parse(window.localStorage.getItem("popWin"))
             //滚动公告
            var timer = null;
            var timeNUM = 0;
           
            this.gettitle()
            this.colornew()
            this.homegetapi();
            this.scroll(40);
            this.initialize();
            
            
            // var $li_3= $("<li id='lisd' style='width: 50%;float: left;height: 0.83rem;'><a style='    width: 80%;height: 100%;float: left;margin-left: 10%;'>"+
            // "<div style='height: 0.9rem;float: left;'><img id='imging'  style='width: 0.73rem;margin-top: 0.05rem' src='' /></div><div style='float: left;font-size: 0.14rem;'><h3 style='line-height: 0.83rem;margin-left:0.1rem;'>更多</h3></div></a></li>");
            // setTimeout(() => {
            //         $("#moreListUl").append($li_3);
            //          document.getElementById("imging").src=require('../../assets/images/more+_05.jpg');
            // }, 200);
            
            this.$nextTick(()=>{
                if(this.popWin.pop){
                    document.getElementById('quni').style.height=document.getElementById('quni').offsetWidth/6*8+"px"
                    document.getElementById('qunimg').style.height=document.getElementById('quni').offsetWidth/6*8+"px"    
                }
                  var tope=(document.getElementsByTagName("body")[0].offsetHeight-this.$refs.noticil.offsetHeight)/2
                  this.$refs.noticil.style.marginTop=tope-8+"px"
                    // setTimeout(() => {
                    //     document.getElementById("imging").src=require('../../assets/images/more+_05.jpg');
                    // }, 200);
            })
            

           
           var that=this
            setTimeout(() => {
                that.scrollte(40);   
                document.getElementById('loadmore').style.height=document.getElementsByTagName("body")[0].offsetHeight-45+"px"; 
                this.getbannerheight();
                       
            }, 400);
         
        },
        beforeCreate() {
           
        },
        created(){
            this.is_weixin()
            this.tankuangg()
            this.title=window.homedatasedk.H5Title.cvalue;
             this.appurl=window.homedatasedk.appUrl.cvalue;

             
            if(this.$store.state.firstHomeGo){
                 this.gettime();
            }else{
                this.$store.state.firstHomeGo=true
            }
            
              this.$store.state.xiazaishow=true
            console.log(this.$store.state.ishometankuangtesxt);
            if(!!window.localStorage.getItem('ishomeshow')){
                // console.log('1111');
            }else{
                window.localStorage.setItem('ishomeshow','yes')
            }
            
            console.log(this.$store.state.ishometankuang);
            window.localStorage.removeItem('buycolorAll')
            console.log(this.$store.getters.getcolorsj);
                this.shujuAlls = this.$store.getters.getcolorsj;
            if(!!this.$store.state.homePopData){
                this.localHomeTitle =this.$store.state.homePopData;
                if(this.localHomeTitle.formart==2){
                        window.localStorage.setItem('titleArr',this.localHomeTitle.text);
                        var $this = this;
                        setTimeout(function(){
                            $('.hintcontentimg').hide();
                        },500)
                    }else{
                        window.localStorage.setItem('titleArr',this.localHomeTitle.imgUrl);
                    }


                    if(this.$store.state.ishometankuangtesxt.formart==2){
                        window.localStorage.setItem('titleArrnew',this.$store.state.ishometankuangtesxt.text);
                    }else{
                        window.localStorage.setItem('titleArrnew',this.$store.state.ishometankuangtesxt.imgUrl);
                    }
                
                //    if(this.$store.state.isxianshi = 'yes'){}
                if(!!window.localStorage.getItem('ishomesuzju')){

                } else{
                    window.localStorage.setItem('ishomesuzju',window.localStorage.getItem('titleArr'))
                }
            }else{

                    this.$store.state.homePopData = this.homeqmListData[0]
                    if(this.$store.state.homePopData==undefined){
                        return;
                    }
                    this.localHomeTitle =this.$store.state.homePopData;

                    if(this.localHomeTitle.formart==2){
                        window.localStorage.setItem('titleArr',this.localHomeTitle.text);
                        var $this = this;
                        setTimeout(function(){
                            $('.hintcontentimg').hide();
                        },500)
                    }else{
                        window.localStorage.setItem('titleArr',this.localHomeTitle.imgUrl);
                    }


                    if(this.$store.state.ishometankuangtesxt.formart==2){
                        window.localStorage.setItem('titleArrnew',this.$store.state.ishometankuangtesxt.text);
                    }else{
                        window.localStorage.setItem('titleArrnew',this.$store.state.ishometankuangtesxt.imgUrl);
                    }
           
            //    if(this.$store.state.isxianshi = 'yes'){}
                    if(!!window.localStorage.getItem('ishomesuzju')){

                    } else{
                        window.localStorage.setItem('ishomesuzju',window.localStorage.getItem('titleArr'))
                    }

                
            }
            
            // console.log(this.localHomeTitle);
            
        },
        
    }
</script>

<style scoped lang="less">
.none{
    visibility: hidden;
    
}

.home-tankuang{
    position: fixed;
    
    top:0;
    z-index: 9999;
    width:100%;
    >div{
        width:75%;
        // height:300px;
      
        >div{
             
            height:300px;
            >img{
                width:100%;
                
                 border-radius: 10px 10px 0 0;
            }
        }
    }
}
    .tixing{
        position: fixed;
       
        width: 100%;
        height: 100%;
        top:0;
        display: none;
        font-size:0.14rem;
    >div:nth-child(2){
        width: 100%;
        height: 100%;
        position: absolute;
        background: #000;
        opacity: 0.3;
        top: 0;
    }
    >div:nth-child(1){
        position: absolute;
        border-radius: 6px ;
        border-radius: 10px;
        z-index: 1;
        top:200px;
        left:50%;
        margin-left:-150px;
        width:300px;
        
        >p:nth-child(3){
            border-top: 1px solid #cecaca;
            overflow: hidden;
            line-height: 0.4rem;
          span{
              float: left;
              box-sizing: border-box;
              width:50%;
              
          }
          >span:nth-child(2){
              border-left:1px solid #cecaca;
              color:red;
          }
        }
        
    }
}
.xiazai{
    position: fixed;
    bottom: 1rem;
    font-size: 0.15rem;
    width: 100%;
    color: white;
    line-height: 0.8rem;
    z-index: 99;
    >p:nth-child(1){
        img{
            width:100%;
            height:65px;
        }
    }
    >p:nth-child(2){
        position: absolute;
        bottom: 0.04rem;
        width: 99%;
        >span{
            float: left;
        }
        >span:nth-child(1){
            width: 14%;
            i{
               line-height: 0.5rem;
    display: inline-block;
    width: 0.5rem;
    background: #fff;
    color: #000;
    border-radius: 50%;
            }
        }
         >span:nth-child(2){
          width: 60%;
    font-size: 0.24rem;
        }
         >a:nth-child(3){
              float: right;
            width: 26%;
            background: white;
            border-radius: 0.06rem;
            line-height: 0.6rem;
            font-size: 0.24rem;
        }
    }
}
.hidden{
    display: none !important;
}
.block{
    display: block !important;
}
    /* 无缝滚动 */
    #news{
        position: relative;
    }
    .windiv{
        position: absolute;
        width: 100%;
        /* top:0; */
    }
    /* 下拉刷新 */
    .imgdown{
        background: url('../../statics/images/refresh.png') no-repeat left center;
        background-size: contain;
        display:inline-block;
    }
    .rotate1{
        transform: rotate(180deg);  
        transition: all 0.5s; 
    }
    .rotate{
        transform: rotate(0deg);  
    }
    .section1{
      height: 1.73rem;
      width: 100%;
      background: white;
    }
    .section1 ul{
      width: 100%;
       height: 1.73rem;
    }
    .section1 ul li{
       float: left;
    width: 25%;
    height: 1.73rem;
    text-align: center;
    position: relative;
    }
     .section1 ul li a{
      
        display: inline-block;
    }
    .section1 ul li img{
            top: 0.8rem;
    left: 0.26rem;
    width: 1rem;
    }
    .section1 ul li p{
          position: absolute;
    width: 100%;
    text-align: center;
    top: 1.1rem;
    left: 0;
    color: #000;
    font-size: 0.26rem;
    font-size: 600;
    }
    .homeswipe {
    // height: 138px;
    background: #f5f5f5;
    }
    .homebanner img{
      width: 100%;
    //   height: 1.5rem;;
    }
    input[type="button"], input[type="submit"], input[type="reset"] {
        -webkit-appearance: none;
    }
    #layout {
        width: 100%;
        height: 623px;
    }
    /*头部*/
    .wrap_header {
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 1000;
        background-size: 100% 100%;
    }
    .index_header {
        width: 100%;
        height: 0.45rem;
        display: flex;
        color: #fff;
    }
    .index_header .login {
        margin-left: 0;
        position: relative;
        width: .72rem;
        height: 0.45rem;
        font-size: .14rem;
    }
    .index_header .login a {
        display: block;
        height: 0.45rem;
        line-height: 0.45rem;
        color: #fff;
    }
    .index_header .login img {
        width: 0.2rem;
        height: 0.2rem;
        position: absolute;
        top: 50%;
        left: 0.1rem;
        transform: translateY(-50%);
        display: block;
        -webkit-transform: translateY(-50%);
    }
    .index_header h3 {
        height: 0.45rem;
        line-height: 0.45rem;
        flex: 1;
        text-align: center;
        font-size: 19px;
        // font-family: myFirstFont;
        font-family: myFirstFont!important;
    }
    // @font-face{
    //     font-family: myFirstFont;
    //     src: url('../../assets/source/font/hyn3gjm.ttf')
    //     ,url('/example/css3/hyn3gjm.eot'); 
    
    // }
    .index_header .mycollect {
        height: 0.45rem;
        line-height: 0.45rem;
        margin-right: 0;
        width: .72rem;
        text-align: center;
        font-size: .14rem;
    }
    .index_header .mycollect a{
        color: #fff;
    }
    /*主内容区*/
    #wrap_content {
        width: 100%;
        background: #f5f5f5;
    }
    .index_content {
        width: 100%;
        margin: 0 auto;
    }
    /*广播*/
    .index_content .broadcast {
        /* background: #fff; */
    }
    .broadcast .broad_top {
           width: 100%;
    height: .6rem;
    line-height: .6rem;
    margin-top: 0 !important;
    font-size: .24rem;
    color: #7f7f7f !important;
    border-bottom: 1px solid whitesmoke;
    display: flex;
    background-color: white;
        padding-bottom:5px;
    }
    .broadcast .broad_top:after {
        display: block;
        content:'';
        height:0;
        overflow: hidden;
        clear: both;
    }
    .broad_topleft {
           margin-top: 0.1rem;
    width: 0.9rem;
    float: left;
    height: .4rem;
   
        background: url('../../assets/source/imgs/images/laba-5.png') no-repeat .1rem center;
        background-size: 0.8rem 0.4rem;
    }
    .shade {
       width: 80%;
    overflow: hidden;
    white-space: nowrap;
    float: left;
    position: relative;
    }
    .shade div:nth-child(1){
        position: absolute;
        left:0;
    }
    .broad_top ul {
        position: absolute;
        height: 3rem;
    }
    .broad_top ul li {
        height: 3rem;
        line-height: 3rem;
        color:gray;
        float: left;
        font-size: 1.2rem;
        font-weight: 500;
        white-space:nowrap;
    }
    .broad_top ul li:first-child{
        margin: 0;
    }
    .broadcast .broad_bottom {
        width: 100%;
        height: 1.08rem;
        background-color: white;
    }
    .broad_bottom ul {
        height: 1.08rem;
        width: 100%;
        display: flex;
    }
    .broad_bottom ul li {
        height: 100%;
        overflow-y: hidden;
        width: 25%;
        box-sizing: border-box;
    }
    .broad_bottom a {
        display: block;
        margin-top: .11rem;
        text-align: center;
        width: 100%;
    }
    .broad_bottom dl {
        text-align: center;
    }
    .broad_bottom dl dt {
        text-align: center;
        height: 60px;
        background: red;
        position: relative;
    }
    .broad_bottom dl dt img {
        width: .66rem;
        height: .6rem;
        display: inline;
        position: absolute;
        left: 0.15rem;
        top: 0;
    }
    .broad_bottom dl dd {
        margin-top: -.14rem;
    }
    .broad_bottom span{
        font-size: .14rem;
        color: #111 !important;
    }
    /*广播结束*/
    .lottery_title.color {
       
        background: url('../../assets/source/imgs/images/fire-1_05.png') no-repeat 0.1rem center;
           height: .58rem;
    width: 100%;
    background-size: .4rem .4rem;
    overflow: hidden;
    background-color: white;
    }
    .lotterylist .lottery_title.color{
        border-bottom: 1px solid whitesmoke;
    }
    .lottery_title.color span {
             text-align: left;
    display: block;
    line-height: .58rem;
    text-indent: .6rem;
    font-size: .24rem;
    color: #111;
    font-weight: 500;
    }
    .lottery_title.bonus {
           height: 0.56rem;
    width: 100%;
    font-size: .24rem;
    font-weight: 500;
        background: url("../../assets/source/imgs/images/star_05.png") no-repeat 0.1rem center;
        background-size: .4rem .4rem;
        overflow: hidden;
        background-color: white;
        margin-top: .15rem;
        border-bottom: 1px solid whitesmoke;
        text-align: left;
    }
    .lottery_title.bonus span {
        display: block;
        height: .6rem;
        line-height: .6rem;
        // margin-top: .17rem;
        text-indent: .6rem;
        font-size: .24rem;
    }
    .lotterylist .list {
          background: #fff;
    }
    .lotterylist .list:after {
        display: block;
        content: '';
        height: 0;
        overflow: hidden;
        clear: both;
    }
    .lotterylist .list li {
     float: left;
    height: 1.44rem;
    overflow-y: hidden;
    width: 50%;
    border-bottom: 0.02rem solid whitesmoke;
    padding-right: 5px;
    box-sizing: border-box;
    }
    .lotterylist .list li:nth-child(odd) {
        border-right:  0.02rem solid whitesmoke;
    }
    .lotterylist li a {
            // width: 90%;
    // margin-left: 10%;
        height: 100%;
        display: flex;
        display: -webkit-flex;
    }
    .lotterylist .lottlist_left {
             width: 1.2rem;
    margin-top: 0.12rem;
    margin-left: .3rem;
    margin-right: .1rem;
    }
    .lottlist_left img {
        width:1.2rem;
        // height: 98%;
    }
    .lotterylist .lottlist_right {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    .lottlist_right h3 {
           margin-top: .22rem;
    font-size: .26rem;
    line-height: .5rem;
    text-align: left;
    color: #111;
    }
    .lottlist_right p {
       font-size: .26rem;
    color: #999;
    text-align: left;
    }
    /*给li去掉特定的边框*/
    .noborder {
        border-bottom: none !important;
    }
    /*新闻滚动*/
    #card_footer {
        height:3.5rem;
        width: 100%;
        background: #fff;
        border-radius: .04rem;
    }
    .news {
        height: 100%;
        overflow: hidden;
        color: #2f9aed;
        font-size: .24rem;
        line-height: 1.8rem;
        text-decoration: none;
    }
    .news ul {
        color:gray;
        width: 100%;
    }
    .news ul li {
           height: 1rem;
    line-height: 1rem;
    display: flex;
    position: relative;
    border-bottom: 1px #eee dashed
    }
    .news ul li span {
          display: block;
    height: 1rem;
    width: 33.33333%;
    }
    .news ul li span.left_num {
        position: relative;
        top: -.08rem;
    }
    .left_num:before{
        content: '';
        display: block;
        position: absolute;
        width: .14rem;
        height: .14rem;
        background-image: url('../../assets/source/imgs/jbs.png');
        background-size: cover;
        top: .17rem;
        left: .16rem;
    }
    .news ul li span.center_cq {
        position: absolute;
        top: .12rem;
    }
    .news ul li span.right_red {
        // color: red;
        text-align: right;
        padding-right: .15rem;
        margin-top: .06rem;
        margin-left: 1.08rem;
    }
    .gap {
        width: 100%;
    }
    .wrap-header .header .header-oper{
        right: 1.5rem;
    }
    * {
        box-sizing: content-box;
        margin: 0;
        padding: 0;
    }
    .updateFont {
        right: 10px;
        position: absolute;
    }
    .weui-cells.cl-list.cl-listsc {
        margin-top: -50px;
        z-index: 0;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
    }
    .down {
        width: 90%;
        text-align: left;
    }
    .up {
        width: 90%;
        text-align: left;
    }
    .refresh {
        width: 90%;
        text-align: left;
    }
    .weui-cells:after {
        border-bottom: 0 !important;
    }
    .lottlist_right .last {
        margin-top: 2.9rem;
    }
    /*弹出提示窗口框*/
    .hint-wrap{
        // display: none;
        display: flex;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.6);
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;
    }
    .hint{
        width: 90.83%;
        margin: 27% auto;
        border-radius: 0.05rem 0.05rem 0 0;
        // background: #fff;
        text-align: center;
    }
    .hint h3{
        height: .34rem;
        line-height: .34rem;
        font-weight: 600;
        font-size: .16rem;
    }
    .hint .time{
        height: .23rem;
        line-height: .23rem;
        color: #d44350;
    }
    .hint h4{
        height: .23rem;
        line-height: .23rem;
        color: #d44350;
    }
    .hint p{
        line-height: .23rem;
    }
    .hint p:first-child{
        margin-top: .23rem;
    }
    .btn{
        width: 100%;
        height: .48rem;
        line-height: .48rem;
        display: flex;
        border-top: 0.01rem solid #d1d1d1;
    }
    .btn input{
        display: block;
        width: 100%;
        border: none;
        background: #f2f2f2;
    }
    .btn input:first-child{
        border-radius: 0 0 0 0.1rem;
    }
    .btn input:first-child {
        border-radius: 0 0 0 0.1rem;
    }
    .btn input:last-child{
        border-radius: 0 0 0.1rem 0rem;
    }
    .btn input:last-child{
        color: #7db1d9;
        border-left: 0.01rem solid #D1D1D1;
        box-sizing: border-box;
        
        display: block;
        width: 100%;
        height: 100%;
    }
    /*弹出层后阻止滚动条*/
    .ovf{
        overflow: hidden;
    }
    /*进度条*/
    .schedule{
        width: 100%;
        height: 100px;
        position: fixed;
        top: 50%;
        transform: translateY(-50%);
    }
    .schedule h3{
        color: #272000;
        line-height: 3.2rem;
        text-align: center;
    }
    .schedule .box{
        width: 200px;
        height: 0.8rem;
        border: 0.1rem solid #247926;
        margin: 3rem auto 0;
        border-radius: 0.4rem;
    }
    .schedule .box .boxchild{
        width: 0;
        border-radius: 0.4rem;
        height: 0.8rem;
        background: #247926;
    }
    .articleSuspemded{
        width: 100%;
        height: 45px;
        background-color: rgba(0,0,0,0.7);
        position: fixed;
        bottom: 50px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        z-index: 9;
    }
    .articleSuspemded span:nth-of-type(1){
        background-color: white;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        text-align: center;
        line-height: 14px;
    }
    .articleSuspemded span:nth-of-type(2){
        font-size: 15px;
        color: white;
    }
    .articleSuspemded span:nth-of-type(3){
        display: inline-block;
        width: 100px;
        height: 30px;
        background-color: #e32424;
        line-height: 30px;
        border-radius: 7px;
        text-align: center;
        color: white;
    }
    @media(min-height: 780px){
        .index_header h3{
            height: .529rem;
            line-height: .529rem;
            flex: 1;
            text-align: center;
            font-size: 19px;
        }
    }
    .sw-bullet{
        bottom: 15%!important;
    }
    .swipslider .sw-slide > img{
        height:1.7rem;
    }
    .weui-pull-to-refresh{
        margin-top: 0px !important;
    }
    img[lazy=loading] {
        margin-top: 0px !important;
        width: 40px !important;
        height: 40px !important;
        margin: auto !important;
    }
    .hint-wrap .hint p:first-child{
        margin-top:.24rem;
    }
    .hint-wrap .hint p {
        line-height: 2.3rem;
    }
</style>

