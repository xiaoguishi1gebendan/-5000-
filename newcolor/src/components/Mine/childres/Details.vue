<template>
    <div style="overflow: hidden;width:100%;height:100%;background:white; position: absolute;top: 0;z-index:999;">
        <!-- 顶部 -->
        <div class="head">
             <headertop title="详情" > </headertop>
        </div>
       
        <!-- 主内容区 -->
        <div class="content content-head bgf">
            <div class="details-tit mylist">
                <div class="weui-cell_access weui-media-box weui-media-box_appmsg mylist-details">
                    <i class="lo-icon lo-xy28 details-img">
                        <img id="lotteryImg" :src="userAll + complainAll.lotteryLogo" alt="">
                    </i>
                    <div class="weui-media-box__bd">
                        <p class="weui-media-box__title mylist-name">
                            <font class="lotteryName">{{complainAll.lotteryName}}</font>
                            <span class="lotteryNo">第{{complainAll.lotteryNo}}期</span>
                        </p>
                        <p class="weui-media-box__title details-num ">开奖号码：
                               <span  v-if="complainAll.lotteryName=='幸运扑克'" id="lotteryName"> 
                                   <img style="width:0.25rem;margin-left:0.1rem;" v-for="(item,index) in xinyunpicimg" :key="index" :src="item" alt="">
                               </span>
                            <span v-else class="lotteryResult" >{{complainAll.winNum}}</span>
                         
                        </p>
                        <p  class="weui-media-box__title details-num" id="winInfo">
                            <span ref="winning" class="addColor"></span><span ref="sum">{{complainAll.winnerAmount | toFixed}}元</span>
                        </p>
                    </div>
                </div>
            </div>
            
            <div class="details-wrap" ref="listwrapVue">
                <div class="details-con first">
                    <h3 class="details-con-tit">订单内容</h3>
                    <span style="display: none;" class="cx">
                        <img src="../../../assets/source/imgs/button@3x.png" alt="">
                    </span>
                    <ul class="details-con-list">
                        <li class="startime"><label>开奖时间</label><span class="lotteryTime colorcss">{{complainAll.drawTime+eighttime | mytime1('yyyy-MM-dd HH:mm')}}</span></li>
                        <li><label>订单号</label><span class="orderNo mcon-txt" id="order">{{complainAll.orderNo}}</span><span @click="Copy" id="copy" type="button">复制</span> </li>
                        <li class="mcon-txt"><label>投注金额</label><span class="bettingAmount"></span>{{complainAll.amount|toFixed}}元</li>
                        <li class="mcon-txt"><label>投注注数</label><span class="bettingNum">{{complainAll.num}}</span></li>
                        <li class="mcon-txt"><label>投注返点</label><span class="bettingRebate"></span>{{complainAll.rebate|toFixed}}%</li>
                        <li class="mcon-txt"><label>返点金额</label><span class="rebateAmount"></span>{{parseFloat(complainAll.rebateAmount).toFixed(2)}}元</li>
                        <li class="mcon-txt"><label>最高赔率</label><span class="bettingOiswin">{{complainAll.odds}}</span></li>
                        <li class="mcon-txt"><label>投注时间</label><span class="bettingTime">{{complainAll.addTime+eighttime | mytime1('yyyy-MM-dd HH:mm')}}</span></li>
                        <li class="mcon-txt"><label>是否中奖</label><span class="isWin" ref="iswin"></span></li>
                        <li class="mcon-txt"><label>玩法名称</label><span class="playName">{{complainAll.lotteryPlayName}}</span></li>
                    </ul>
                </div>
                <div class="details-con last">
                    <h3 class="details-con-tit">投注号码</h3>
                    <table class="details-table" cellspacing="0">
                        <thead>
                            <tr>
                                <td>投注记录</td>
                                <td>投注金额</td>
                                <td>中奖情况</td>
                            </tr>
                        </thead>
                        <tbody id="tableTbody" v-for="(item,index) in datalist" :key="index">
                            <tr>	
                                <td>{{item.matchNo}}</td>	
                                <td>{{item.bettingAmount|toFixed}}元</td>	
                                <td ref="ccc"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- <div class="foot" :id="complainAll.lottery"> -->
             <div class="foot" @click="buycolor">
                 <a class="btn">
                <!-- <router-link to="/buycolor" class="btn" > -->
                    再来一注
                <!-- </router-link> -->
                </a>
            </div>
        </div>
        <div class="motaik">
            <!-- <div class="nr">
                
            </div> -->
            <Dailog
            titleMassage="撤销订单"
            content="您是否要撤销订单(如果是追期，取消该追期所有待开奖订单)？"
            :cancelQx="cancelQx"
            :confirm="confirm"
            ></Dailog>
        </div>

        <transition name="slide">
           <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import headertop from '../../header/header'
import Dailog from '../../dailog/dailog'
export default {
    components: {
        headertop,
        Dailog,
    },
        data(){
            return{
                complainAll:"",
                userAll:base.domain,
                list:[],
                datalist:[],
                type:[],
                typename:[],
                eighttime:"",
                ccc:"",
                xinyunpicimg:[]
                // lottery:""
            }
        },
        computed:{
            xinyunpic(){
                 return this.$store.state.xinyunpic;
            }
           
        },
        methods:{
            styleCss(){
                document.getElementsByTagName("body")[0].style.height = '100%';
                document.getElementsByTagName("html")[0].style.height = '100%';
                this.$refs.listwrapVue.style.overflow='scroll';
                document.getElementsByClassName("details-wrap")[0].style.height = document.getElementsByTagName("body")[0].offsetHeight-document.getElementsByClassName("head")[0].offsetHeight-document.getElementsByClassName("details-tit")[0].offsetHeight-document.getElementsByClassName("pde")[0].offsetHeight-document.getElementsByClassName("foot")[0].offsetHeight-10+'px';
                console.log(document.getElementsByClassName("details-tit")[0].offsetHeight)
            },
            Copy() {
                var range = document.createRange();
                range.selectNode(document.getElementById('order'));

                var selection = window.getSelection();
                if(selection.rangeCount > 0) selection.removeAllRanges();
                selection.addRange(range);

                document.execCommand('copy');
                $.tips('复制成功',1000);
            },
            getapi(){
                 var userid = JSON.parse(myStorage.getItem("currentUser")).id;
            var that = this;

            var dictListAll = JSON.parse(myStorage.getItem("dictList"))["userBetting-is_winning"];
            for(var j=0;j<dictListAll.length;j++){
                this.type.push(dictListAll[j].split('-')[0]);
                 this.typename.push(dictListAll[j].split('-')[1]);
                
            }
            if(myStorage.getItem("currentUser")){
                console.log(this.$route.params.id)
                if(!this.$route.params.id){
                    //this.$route.params.id = window.localStorage.getItem("bettingId");
                    this.complainAll = base.getApi().bettingDetail(userid,window.localStorage.getItem("bettingId"));
                }else{
                    
                    window.localStorage.setItem("bettingId",this.$route.params.id);
                    this.complainAll = base.getApi().bettingDetail(userid,this.$route.params.id);
                }
                console.log(this.$refs.iswin.innerHTML)
                if( this.complainAll.lotteryName=='幸运扑克'&& this.complainAll.isWinning!==0){
                    
                    var shuzu=this.complainAll.winNum.split(',')
                    for(var i=0;i<shuzu.length;i++){
                        var a= base.domain+this.$store.state.xinyunpic[parseInt(shuzu[i].split('-')[0])-1][parseInt(shuzu[i].split('-')[1])-1].logo.fileurl
                        // console.log(parseInt(shuzu[i].split('-')[1])-1)
                       
                      this.xinyunpicimg.push(a) 
                      
                    }
                   
                }
                console.log(this.complainAll);
                // 投诉号码列表
                this.datalist = this.complainAll.userBettingDetailList;
                // 撤销订单
                if(this.complainAll.isWinning==0||this.complainAll.isWinning==3){
                    $('.cx').show();
                }
                $('.cx img').click(function(){
                    $('.motaik').show();
                });
                $('.motaik').click(function(){
                    $(this).hide();
                });
                $('.qx').click(function(){
                    $('.motaik').hide();
                });
                $('.qd').click(function(){
                    var a = base.getApi().cx_All(userid,that.$route.params.id);

                    if(a.code==200){
                        $.tips('撤销成功',2000);
                        $('.motaik').hide();
                            that.$router.go(-1)
                    }else{
                        $('.motaik').hide();
                        $.tips('撤销失败',2000);      
                    }
                });


                
            }
            },
            buycolor(){
                base.getApi().isLotteryFix(this.complainAll.lottery.id).then((res)=>{
                    if (res.data === 1) {
                        $.tips("该彩种正在维护")
                        return
                    }
                    var str = {
                          'id':this.complainAll.lottery.id,
                          'showType':this.complainAll.lottery.showType,
                          'lotteryName':this.complainAll.lottery.name
                        }
                    window.localStorage.setItem('forthecolor',JSON.stringify(str));
                    window.localStorage.setItem('thisdatalist',this.complainAll.lottery.id)
                    this.$store.state.homecolor = 'yes';
                    this.$router.push({path:'/betterforthecolor'});
                })
                
            },
            cancelQx(){
                $('.motaik').hide();
            },
            confirm(){
                var userid = JSON.parse(myStorage.getItem("currentUser")).id;
                var that = this;
                var a = base.getApi().cx_All(userid,that.$route.params.id);

                    if(a.code==200){
                        $.tips('撤销成功',2000);
                        $('.motaik').hide();
                            that.$router.go(-1)
                    }else{
                        $('.motaik').hide();
                        $.tips('撤销失败',2000);      
                    }
            },
            isstyle(){
               
            }
            
        },
        watch: {
            
        },
        mounted:function() {
            this.isstyle();
            this.eighttime=(new Date("2018/12/25 8:0:0")).getTime()- (new Date("2018/12/25 0:0:0")).getTime();
            this.styleCss();
            this.getapi();
            console.log(this.type);
            console.log(this.typename)
            // 渲染基础数据
            this.$nextTick(()=>{
                console.log(this.complainAll.isWinning)
                console.log(this.type)
                if(this.complainAll.isWinning ==this.type[0]){
                    this.$refs.winning.innerHTML=this.typename[0];
                    this.$refs.winning.style.color="#666";
                    this.$refs.iswin.innerHTML=this.typename[0];
                    this.$refs.sum.style.display= "none";
                    for(var z=0;z< this.datalist.length;z++){
                        if(!this.datalist[z].winAmount){
                            this.$refs.ccc[z].innerHTML=this.typename[0];
                            this.$refs.ccc[z].style.color="#666";
                        }
                    }
                }else if(this.complainAll.isWinning ==this.type[1]){
                    this.$refs.winning.innerHTML=this.typename[1];
                    this.$refs.winning.style.color="#666";
                    this.$refs.iswin.innerHTML=this.typename[1];
                    this.$refs.sum.style.display= "none";
                    for(var z=0;z< this.datalist.length;z++){
                        if(!this.datalist[z].winAmount){
                            this.$refs.ccc[z].innerHTML=this.typename[1];
                            this.$refs.ccc[z].style.color="#666";
                        }
                    }
                }else if(this.complainAll.isWinning ==this.type[2]){
                    this.$refs.winning.innerHTML="中奖金额：";
                    this.$refs.winning.style.color="#666";
                    this.$refs.iswin.innerHTML=this.typename[2];
                    this.$refs.sum.style.marginLeft= ".03rem";

                    for(var z=0;z< this.datalist.length;z++){
                        if(this.datalist[z].winAmount){
                            this.$refs.ccc[z].innerHTML=`中${this.datalist[z].winAmount.toFixed(2)}元`;
                            this.$refs.ccc[z].style.color="red";
                        }else{
                             this.$refs.ccc[z].innerHTML=`未中奖`;
                        }
                    }
                }else if(this.complainAll.isWinning ==this.type[3]){
                    this.$refs.winning.innerHTML=this.typename[3];
                    this.$refs.winning.style.color="#666";
                    this.$refs.iswin.innerHTML=this.typename[3];
                    this.$refs.sum.style.display= "none";
                    for(var z=0;z< this.datalist.length;z++){
                        if(!this.datalist[z].winAmount){
                            this.$refs.ccc[z].innerHTML=this.typename[3];
                            this.$refs.ccc[z].style.color="#666";
                        }
                    }
                }
                else if(this.complainAll.isWinning ==4){
                    this.$refs.winning.innerHTML="撤销注单";
                    this.$refs.winning.style.color="#666";
                    this.$refs.iswin.innerHTML="撤销注单";
                     this.$refs.iswin.style.color="#666";
                    this.$refs.sum.style.display= "none";
                    for(var z=0;z< this.datalist.length;z++){
                        if(this.datalist[z].winAmount){
                            this.$refs.ccc[z].innerHTML=`中${this.datalist[z].winAmount}元`;
                            this.$refs.ccc[z].style.color="red";
                        }else{
                            this.$refs.ccc[z].innerHTML="撤销注单";
                            this.$refs.ccc[z].style.color="#666";
                        }
                    }
                }
            })
        },
        beforeCreate: function() {
        },
        created(){
           
        }
    }
</script>

<style scoped>
    #lotteryName  img:nth-child(1){
      
            margin-left:0rem !important;
        
    }
    /*主内容区*/
    /*content*/
    .content{
    }
    .mylist{
        margin-bottom: .01rem;
    }
    .bgf {
        background:#f5f5f5;
    }
    .details-con.first{
        border: 0;
        position: relative;
    }
    .details-con {
        background: #fff;
    }
    .mylist-details .weui-media-box__bd {
        padding-top: 0;
            width: 100%;
    }
    .details-wrap{
        overflow-y: scroll;
        background: #fff;
        -webkit-overflow-scrolling: touch;
        margin-top:0.1rem;
    }
    .btn {
          display: block;
    width: 4rem;
    height: .8rem;
    margin: .2rem auto 0;
    border-radius: .07rem;
    font-size: 0.28rem;
    color: #fff;
    line-height: .8rem;
    text-align: center;
    margin-top: .15rem;
    }
    .foot {
           width: 100%;
    height: 1.2rem;
    background: #fff;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    }
    #copy{
        display: inline-block;
    width: 1rem;
    height: .4rem;
    line-height: .4rem;
    text-align: center;
    border-radius: 0.06rem;
    margin-left: .2rem;
    font-size: 0.24rem;
    }
    .cx{
        position: absolute;
        right: 6%;
        height:0;
    }
    .cx img{
        width: .72rem;
    }
    .motaik{
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.5);
        position: absolute;
        top: 0;
        display: none;
    }
    .nr{
        /* background-color: white; */
        width: 80%;
        /* height: 27%; */
        position: absolute;
        left: 10%;
        border-radius: 10px;
        top: 35%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding: .01rem 0 .04rem .1rem;
        box-sizing: border-box;
        font-size: 0.26rem;
        text-align: left;
    }
    /* .nr span:nth-of-type(3){
        display: inline-block;
        width: 100%;
        display: flex;
        justify-content:space-around;
    } */
    .qx{
        display: inline-block;
        width: .54rem;
        height: .26rem;
        background-color: gainsboro;
        border-radius: .05rem;
        text-align: center;
        line-height: .26rem;
    }
    .qd{
        display: inline-block;
        width: .54rem;
        height: .26rem;
        background-color: yellowgreen;
        border-radius: .05rem;
        text-align: center;
        line-height: .26rem;
        lor: yellowgreen;
    }
    .details-con-tit{
        border-bottom: .01rem solid ghostwhite;
    }
    .details-con-list{
        font-size: 0.26rem;
    }
    .details-con-list li{
        text-align: left;
    }
    .details-table thead{
        background:rgba(119,24,235,1);
    }
    .details-img{
        /* width: .6rem;
        margin-right: .15rem; */
        height: 1rem;
    }
    .details-img img{
        width: 1rem;
        margin-right: .15rem;
    }
    .mylist-details{
        align-items: flex-start;
    }
    .details-num{
        font-size: 0.26rem;
        color: #666;
    }
    .details-num span{
        /* margin-left: .03rem; */
        font-size: 0.26rem;
        color: #d91e38;
    }
    .addColor {
        color: #666 !important;
    }
     
    .mylist-details .mylist-name span{
        color: #999;
    }
    .details-con{
        padding: .1rem .15rem;
        border-top: .1rem solid #f5f5f5;
    }
    .details-con-tit{    
        font-size: 0.28rem;
        margin-bottom: .02rem;
        display: block;
        height: 0.5rem;
        width: 100%;
        border-bottom: .01rem solid #eae8e8;
        text-align: left;
    }
    .details-con-list li{
        line-height: 0.6rem;
    }
    .startime{
        color: #d91e38;
    }
    .details-con-list label{
        display: inline-block;
        width: 1.2rem;
        color: #666;
    }
    .copybtn{
        width: .45rem;
        margin-left: .15rem;
        padding-top: .01rem;
        font-size: .1rem;
        color: #2b9037;
        border: .01rem solid #2b9037;
        border-radius: .02rem;
        text-align: center;
        background: #fff;
    }
    .details-table{
        width: 100%;
        margin-top: .03rem;
        table-layout: fixed;
    }
    .details-table td{
        text-align: center;
    }
    .details-table thead td{
        color: #fff;
        line-height: .25rem;
        font-size: 0.22rem;
    }
    .details-table tbody{
        background: #f5f5f5;
    }
    .details-table tbody td{
        line-height: 30px;
        font-size: 0.22rem;
    }
    .gray{
        color: #666;
    }
    .details-table .colorred{
        color: #d91e38;
    }
    .mylist{
        margin-top: 0;
        border-bottom: 0.01rem solid #eee;
        /* position: relative; */
    }
    .mylist .weui-media-box{
        width: 100%; 
        border-bottom: .01rem solid #d9d9d9;
        padding: .1rem;
        background: #fff;
    }
    .mylist .weui-media-box:last-child{
        border: none;
        display: flex;
    }
    .mylist .weui-media-box__title{
        position: relative;
        line-height: 0.4rem;
        text-align: left;
    }
    .mylist-name{
        width: 100%;
        font-size: 0.28rem;
        color: #111;
        /* padding-right: 2rem; */
        box-sizing: border-box;
    }
    .mylist-num{
        font-size: 0.22rem;
        color: #999;
        padding-right: 1.2rem;
    }
    .mylist-name span{
       float:right;
       margin-right:00.6rem;
        font-size: 0.22rem;
        color: #d91e38;
        max-width: 2rem;
    }
    .mylist-num span{
        position: absolute;
        right: .05rem;
        bottom: 0; 
        font-size: 0.22rem;
        color: #999;
        max-width: 2rem;
    }
    .mcon-txt{
        color: #666;
    }
</style>