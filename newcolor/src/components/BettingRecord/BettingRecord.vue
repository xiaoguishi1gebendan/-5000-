<template>
   <div style="overflow: hidden; position:absolute;top:0;height:100%;background:#fff;z-index:1000;width:100%;">
        
        <!-- 顶部 -->
         <headertop :title="touzhu" :goBack="goBack"></headertop>
        <div class="ringup" style="width:100%;">
            <div class="nav" style="overflow:scroll;">
                <ul class="clear" ref="dingDan">
                    <li @click="one('')" id="a_lotteryType_all" class="isclick" style="width：103px ！important">全部订单</li>
                    <li v-for="(inte,index) in arrAll" :key="index" style="width：103px ！important"  @click="one(inte.split('-')[0])">{{inte.split('-')[1]}}</li>
                </ul>
            </div>
            <!-- 订单列表 -->
      
           <div class="datalist-wrap"  ref="listwrapVue">
            
                    <!-- 没数据时的样式 -->
                    <div class="nodata" style="display:none;">
                        <div class="nodata-top">
                            <img src="../../assets/images/lack1.png" alt="">
                            <h4>暂无订单记录</h4>
                            <p>不要让大奖溜走，赶紧购彩去~</p>
                        </div>
                        <div class="nodatabtn">
                            <router-link to="/buycolor">
                                <input type="button" name="" id="" value="立即购彩" class="btn">
                            </router-link>
                        </div>
                    </div>
                  
                    <!--有数据时的样式-->
                    <div class="datalist-wrapp" style="display:none;    position: relative;
    width: 100%;
    height: 100%;top:-45px;">
                       <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite">
                        <ul id="message-all" class="detaillist">
                            <li v-for="(bettings,index) in bettingAll" :key="index">
                                <router-link :to="'/bettingRecord/'+bettings.id">
                                    <div class="liwrap">
                                        <div class="litop">
                                            <h3>{{bettings.lotteryName}}</h3>
                                           
                                            <span ref="winning">

                                            </span>
                                            <span style="float:right">|</span>
                                             <span class="periods" style="float:right;color:#666;">第{{bettings.lotteryNo}}期</span>

                                        </div>
                                        <div class="libottom">
                                             <span class="money" style="    font-size: 0.28rem;">
                                                 {{bettings.amount.toFixed(2)}}元
                                                 </span>
                                                  <!-- {{249852>10000?((249852/1000).toFixed(2)+'万'):(249852)}}元</span> -->
                                            <div class="timer">
                                                <span>{{bettings.addTime+eighttime | mytime1('yyyy-MM-dd HH:mm')}}</span>
                                                <img style="display: inline-block;width:15px;" src="../../assets/source/imgs/images/youjt.jpg" alt="">
                                            </div>
                                            <div class="result">
                                                
                                            </div>
                                        </div>
                                    </div>
                                </router-link>
                            </li>
                        </ul>
                     </v-scroll>
                    </div>
                
              
            </div>
        
        </div>
         
       <transition name="slide">
           <router-view></router-view>
        </transition>


    </div>
</template>

<style scoped lang="less">

.nodatabtn .btn{
				-webkit-animation:animations 1.5s infinite linear;
			}
	@-webkit-keyframes animations {
			 	0%{
			        -webkit-transform: scale(.65);
			    }
			    20%{
			    	-webkit-transform: scale(.8);
			    }
			    40%{
			        -webkit-transform: scale(.65);
			    }
			    60%{
			        -webkit-transform: scale(.65);
			    }
			    60%{
			        -webkit-transform: scale(.8);
			    }
			    80%{
			        -webkit-transform: scale(.65);
			    }
			    100%{
			        -webkit-transform: scale(.65);
			    }
			}
.liwrap{
    padding: 0.1rem 0 0 0;
    border-bottom: 1px solid #f5f5f5;
    line-height:0.6rem;
    width:100%;
    text-indent: 0.1rem;
    >.litop{
         width:100%;
         height:0.6rem;
         
        h3{
            float: left;
            // width:38%;
            color:black;
            font-size: 0.28rem;
        }
        >span:nth-child(2){
            float: right;
            // width:38%;
            margin-right:0.1rem;
            font-size:0.24rem;
            color:#666;
        }
        >span:nth-child(3){
              color:#666;
            float: right;
            // margin-right:0.05rem;
        }
    }
    >.libottom{
        color:#666;
        overflow: hidden;
        text-align: center;
        span{
            float: left;
        }
        .timer{
            float: right;
            margin-right: 0.1rem;
            img{
                vertical-align: middle!important; 
            }
        }
    }
}
.detaillist{
    font-size:0.24rem !important;
}
   
    /*主内容区*/
    /* 消息tab切换 */
    .nav{
        background: #fff;
        z-index: 200;
        position: relative;
    }
    .nav ul{
        width: 100%;
        display: flex;
        position: relative;
        border-bottom: .01rem solid ghostwhite;
    }
    .nav ul li{
        width: 20%;
        height: 0.8rem;
        line-height: 0.8rem;
        text-align: center;
        color: #999;
        border-bottom: .02rem solid transparent;
        list-style: none;
        font-size: 0.28rem;
    }
    
    /* 订单列表 */
    .listwrap{
        position: relative;
    }
   .nodata {
  display: none;
}
.nodata-top {
  width: 100%;
  margin: 0.768rem auto 0;
}
.nodata-top img {
  width: 50%;
}
.nodata-top h4 {
  height: 0.6rem;;
  line-height: 0.6rem;;
  text-align: center;
  color: #111;
  font-size: 0.28rem;
  font-weight: 400;
}
.nodata-top p {
  height: 0.6rem;;
  line-height: 0.6rem;;
  text-align: center;
  font-size: 0.28rem;
  color: #999;
}
.nodatabtn {
  margin-top: 0.6rem;
}
.nodatabtn .btn {
    // background: transparent;
  width: 72%;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  border-radius: 0.04rem;
  margin: 0 auto;
  display: block;
  font-size: 0.3rem;
  color: #fff;
//   background: linear-gradient(90deg, #fa3956, #ff6b52);
  border: none;
  outline: none;
}
    /* 有数据的样式 */
    
</style>
<script>
import Scroll from "../flash/flash";
  import headertop from '../header/header'
    export default {
        data() {
            return {
                bettingAll:[],
                betting:[],
                arrAll:[],
                type:[],
                n:10,
                id:"",
                version:"",
                eighttime:"",
                numed:1
            }
        },
         components: {
            "v-scroll": Scroll,
             headertop,
        },
        updated() {  

        },
        computed: {
            touzhu () {
                return this.$store.state.touzhu
            },
        },
        methods: {
                onRefresh(done) {
                    this.one(this.id);
                        if(this.bettingAll){
                            $.tips("已经刷新当前数据")
                         }
                    done(); 
                },
                onInfinite(done) {
                      let more = this.$el.querySelector(".load-more");
                      more.style.display='block'
                     this.onee(this.id);
                    
                            if(this.bettingAll){
                            more.style.display='none';
                             }
                   
                    done();
                },
                getlistheight(){
                    var bodyheight=document.getElementsByTagName("body")[0].offsetHeight;
                    // console.log(document.getElementsByClassName("header_wrap")[0])
                    // var headerheight=document.getElementsByClassName("header_wrap")[0].offsetHeight;
                    this.$refs.listwrapVue.style.height=bodyheight-45-10-
                    document.getElementsByClassName("pde")[0].offsetHeight
                    +'px'
                },
            goBack() {

                this.bettingAll=""
                 this.$store.state.xiazaishow=true


                this.$router.go(-1)
                $('.oshade').click();
                // this.$router.push({path:pathing})
            },
            styleCss(){
                document.getElementsByTagName("body")[0].style.height = '100%';
                document.getElementsByTagName("html")[0].style.height = '100%';
            },
            winner(){
                var dictListAll = JSON.parse(myStorage.getItem("dictList"))["userBetting-is_winning"];

                for(var j=0;j<dictListAll.length;j++){
                    this.type.push(dictListAll[j].split('-')[0]);
                }
                for(var i=0;i<this.bettingAll.length;i++){
                    if(this.bettingAll[i].isWinning ==this.type[0]){
                        this.$refs.winning[i].innerHTML="待开奖";
                        this.$refs.winning[i].style.color="#999";
                    }else if(this.bettingAll[i].isWinning ==this.type[1]){
                        this.$refs.winning[i].innerHTML="未中奖";
                        this.$refs.winning[i].style.color="#999";
                    }else if(this.bettingAll[i].isWinning ==this.type[2]){
                        var amout=this.bettingAll[i].winnerAmount.toFixed(2)
                        this.$refs.winning[i].innerHTML=`中${amout}元`;
                        this.$refs.winning[i].style.color=window.mapcolor;
                    }else if(this.bettingAll[i].isWinning ==this.type[3]){
                        this.$refs.winning[i].innerHTML="异常订单";
                        this.$refs.winning[i].style.color="#999";
                    }else if(this.bettingAll[i].isWinning ==4){
                        this.$refs.winning[i].innerHTML="撤销注单";
                        this.$refs.winning[i].style.color="#999";
                    }else{
                         this.$refs.winning[i].innerHTML="未知";
                        this.$refs.winning[i].style.color="#999";
                    }
                }
            },
            one(id){
                this.id=id;
                 this.numed=1;
                console.log(this.id)
                var user=JSON.parse(myStorage.getItem("currentUser"));
                
                if(user){
                     var userid =user.id;
                    // 渲染基础数据
                    if (myStorage.getItem("currentUser")) {
                        
                            console.log(this.n, 1, userid, this.id)
                             this.bettingAll=base.getApi().bettingList(this.n, this.numed, userid, this.id);
                            // this.bettingAll = this.$store.state.bettingAll;
                            console.log(this.bettingAll)
              
                    }
                    this.$nextTick(()=>{
                        if (this.bettingAll == '') {
                            document.getElementsByClassName("nodata")[0].style.display="block";
                            document.getElementsByClassName("datalist-wrapp")[0].style.display="none";
                            $.tips("没有数据",1000);
                        }else{
                            document.getElementsByClassName("nodata")[0].style.display="none";
                            document.getElementsByClassName("datalist-wrapp")[0].style.display="block";
                            this.winner();
                        }
                    })
                }
               
            },
            onee(id){
                this.id=id;
                console.log(this.id)
                var userid = JSON.parse(myStorage.getItem("currentUser")).id;
                // 渲染基础数据
                  if (myStorage.getItem("currentUser")) {
                            console.log(this.n)
                            console.log(this.id)
                            this.numed++;
                            var bettingAlled=base.getApi().bettingList(this.n, this.numed, userid, this.id);
                            if(!bettingAlled.length){
                               $.tips("无更多数据");
                           }
                            for(var i=0;i<bettingAlled.length;i++){
                                this.bettingAll.push(bettingAlled[i])

                            }
                            console.log( this.bettingAll)
                       
                }
				this.$nextTick(()=>{
                    if (this.bettingAll == '') {
	                   	document.getElementsByClassName("nodata")[0].style.display="block";
	                	document.getElementsByClassName("datalist-wrapp")[0].style.display="none";
	                    $.tips("没有数据",1000);
	                }else{
	                	document.getElementsByClassName("nodata")[0].style.display="none";
	                	document.getElementsByClassName("datalist-wrapp")[0].style.display="block";
                        this.winner();
	                }
                })
            },
            onefirst(id){


                 this.id=id;
                console.log(this.id)
                var user=JSON.parse(myStorage.getItem("currentUser"));
                if(user){
                     var userid =user.id;
                    // 渲染基础数据
                    if (myStorage.getItem("currentUser")) {
                    
                            console.log(this.n, 1, userid, this.id)
                            this.bettingAll= base.getApi().bettingList(this.n, this.numed, userid, this.id);
                            // this.bettingAll=this.$store.state.bettingAll
                            console.log(this.bettingAll)
                        
                    }
                    this.$nextTick(()=>{
                        if (this.bettingAll == '') {
                            document.getElementsByClassName("nodata")[0].style.display="block";
                            document.getElementsByClassName("datalist-wrapp")[0].style.display="none";
                            $.tips("没有数据",1000);
                        }else{
                            document.getElementsByClassName("nodata")[0].style.display="none";
                            document.getElementsByClassName("datalist-wrapp")[0].style.display="block";
                            this.winner();
                        }
                    })
                }
               
            },
        },
        mounted:function(){
            
                this.eighttime=(new Date("2018/12/25 8:0:0")).getTime()- (new Date("2018/12/25 0:0:0")).getTime();
                // console.log(eighttime)
        //    var  self=this
            // setTimeout(() => {
                 this.$store.state.touzhu="投注记录"
                var dict = JSON.parse(myStorage.getItem("dictList"));
                var arr = dict['userBettingDetail-is_win'];
                this.arrAll = arr;
                console.log(this.arrAll)
            // }, 500);
                
           this.$refs.dingDan.style.width=(this.arrAll.length+1)*103+"px"
            this.styleCss();
            // 个人消息table切换
            $('.clear').on('click','li',function(){
                $(this).addClass("isclick").siblings().removeClass("isclick");
            })

            this.getlistheight()
         
        },
        watch: {

        },
        beforeCreate: function() {
            //   window.updataa();
            // document.getElementsByTagName("body")[0].style.backgroundColor='#f5f5f5';
        },
        created() {
            this.onefirst("");
           var  userid=JSON.parse(myStorage.getItem("currentUser")).id
            //  this.bettingAll=base.getApi().bettingList(10, this.numed, userid, this.id);
        }
    }
</script>