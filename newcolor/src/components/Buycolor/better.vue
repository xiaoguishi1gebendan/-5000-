<template>
   <div style="overflow: hidden; position:absolute;top:0;height:100%;background:#fff;z-index:1000;width:100%;">
        
        <!-- 顶部 -->
         <div class="index_header" style="position:fixed;top:0">
			<div @click="goBack" style="position: absolute;transform: translateY(-50%);color: #fff;width:20%;">
                    <i class="iconfont icon-mjiantou-copy" style="    font-size: .24rem;position: absolute;line-height: 45px;margin-left: 12px;left:0"></i>
             </div>
			<h3 >投注记录</h3>
			
		</div>
        <div class="ringup" style="width:100%;margin-top:0.45rem">
            <div class="nav">
                <ul class="clear">
                    <li @click="one('')" id="a_lotteryType_all" class="isclick">全部订单</li>
                    <li v-for="(inte,index) in arrAll" :key="index"  @click="one(inte.split('-')[0])">{{inte.split('-')[1]}}</li>
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
                                            <span class="periods">第{{bettings.lotteryNo}}期</span>
                                            <span ref="winning">

                                                </span>
                                        </div>
                                        <div class="libottom">
                                             <span class="money" style="    font-size: 0.14rem;">{{bettings.amount|toFixed}}元</span>
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
    line-height:0.36rem;
    width:100%;
    text-indent: 0.1rem;
    >.litop{
         width:100%;
         height:0.4rem;
         
        h3{
            float: left;
            width:38%;
            color:black;
            font-size: 0.16rem;
        }
        >span:nth-child(2){
            float: left;
            width:38%;
            font-size:0.12rem;
            color:#666;
        }
        >span:nth-child(3){
            float: right;
            margin-right:0.1rem;
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
    font-size:0.14rem !important;
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
        height: 0.45rem;
        line-height: 0.45rem;
        text-align: center;
        color: #999;
        border-bottom: .02rem solid transparent;
        list-style: none;
        font-size: .13rem;
    }
    .nav ul .isclick{
        color: #fa3956;
        border-bottom: .02rem solid #ff6b52;
    }
    /* 订单列表 */
    .listwrap{
        position: relative;
    }
   .nodata {
  display: none;
}
.nodata-top {
  width: 48%;
  margin: 0.768rem auto 0;
}
.nodata-top img {
  width: 100%;
}
.nodata-top h4 {
  height: 0.312rem;
  line-height: 0.312rem;
  text-align: center;
  color: #111;
  font-size: 0.16rem;
  font-weight: 400;
}
.nodata-top p {
  height: 0.312rem;
  line-height: 0.312rem;
  text-align: center;
  font-size: 0.12rem;
  color: #999;
}
.nodatabtn {
  margin-top: 0.36rem;
}
.nodatabtn .btn {
    // background: transparent;
  width: 72%;
  height: 0.45rem;
  line-height: 0.48rem;
  text-align: center;
  border-radius: 0.04rem;
  margin: 0 auto;
  display: block;
  font-size: 0.16rem;
  color: #fff;
  background: linear-gradient(90deg, #fa3956, #ff6b52);
  border: none;
  outline: none;
}
    /* 有数据的样式 */
    .wrap_header{
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 200;
    }
    .index_header{
        width: 100%;
        height: 0.45rem;
        display: flex;
        color: #fff;
        margin: 0 auto;
    }
    .index_header h3{
        height: 0.45rem;
        line-height: 0.45rem;
        flex: 1;
        text-align: center;
        font-size: .16rem;
    }
    .index_header .mycollect{
        height: 0.45rem;
        line-height: 0.45rem;
        width: .72rem;
        text-align: center;
        font-size: .14rem;
    }
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
                eighttime:""
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
                    this.$refs.listwrapVue.style.height=bodyheight-45-10+'px'
                },
            goBack() {
                if(this.$store.state.isgoucai=='yes'){
                    this.$router.push({path:'/forthecolor'})
                    this.$store.state.isgoucai=='no'
                }
               
                // let pathing=this.$store.state.betterRouter;
                this.$router.go(-1)
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
                        this.$refs.winning[i].innerHTML=`中${this.bettingAll[i].winnerAmount.toFixed(2)}元`;
                        this.$refs.winning[i].style.color="red";
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
                console.log(this.id)
                var user=JSON.parse(myStorage.getItem("currentUser"));
                if(user){
                     var userid =user.id;
                    // 渲染基础数据
                    if (myStorage.getItem("currentUser")) {
                        
                            console.log(this.n, 1, userid, this.id)
                             this.$store.state.bettingAll=base.getApi().bettingList(this.n, 1, userid, this.id);
                            this.bettingAll = this.$store.state.bettingAll;
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
                        if(this.bettingAll.length==this.n){
                            console.log(this.n)
                            console.log(this.id)
                        this.n+=10;
                            this.bettingAll = base.getApi().bettingList(this.n, 1, userid, this.id);
                            console.log(this.bettingAll)
                        }else{
                           $.tips("已经加载全部信息")
                        }
                        
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
                        if(this.$store.state.bettingAll){
                             this.bettingAll=this.$store.state.bettingAll
                        }else{
                            console.log(this.n, 1, userid, this.id)
                            this.$store.state.bettingAll= base.getApi().bettingList(this.n, 1, userid, this.id);
                            this.bettingAll=this.$store.state.bettingAll
                            console.log(this.bettingAll)
                        }
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
                var arr = dict['userBetting-is_winning'];
                this.arrAll = arr;
                
            // }, 500);
                
           
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
        }
    }
</script>