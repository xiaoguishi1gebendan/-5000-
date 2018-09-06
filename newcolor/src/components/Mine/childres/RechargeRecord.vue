<template>
    <div style="overflow: hidden;position:absolute;top:0;width:100%;height:100%;background: white;z-index:1000;">
        <!-- 顶部 -->
         <headertop :title="title" :goBack="goBack"> </headertop>
        <!-- 消息tab分类 -->
        <div class="nav-wrap">
            <div class="nav">
                <ul class="navlist"  ref="dingDan">
                    <li @click="one('')" class="isclick" style="width:103px;font-size:0.28rem;">全部</li>
                    <li v-for="(inte,index) in dictListAll" :key="index"  @click="one(inte.split('-')[0])" style="width:103px;font-size:0.28rem;">{{inte.split('-')[1]}}</li>
                </ul>
            </div>
        </div>
        <!-- 明细列表 -->
        <div class="datalist-wrap"  ref="listwrapVue">
            <!-- 无数据样式 -->
            <div class="nodata" style="display:none;">
                <div class="nodata-top">
                    <img src="../../../assets/images/lack1.png" alt="">
                    <h4>暂无充值记录</h4>
                    <p>不要让大奖溜走，赶紧购彩去~</p>
                </div>
                <div class="nodatabtn">
                    <router-link to="/recharge">
                        <input type="button" name="" id="" value="立即充值" class="btn">
                    </router-link>
                </div>
            </div>
            <!-- 有数据样式 -->
            <div class="detaillistt" style="display:none;position: relative;width:100%;height:100%;top:-45px;">
                 <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite">
                    <ul class="detaillist" >
                        <li v-for="(bettings,index) in rechargeAll" :key="index" :name="bettings.id" :id="bettings.status" @click="click">
                                <div class="detailtext" >			
                                    <div class="texttop">				
                                        <h4 ref="winning"></h4>				
                                        <span class="bgspan">+{{bettings.finalAmount|mory(bettings.amount)}}￥</span>			
                                    </div>			
                                    <div class="textbottom">				
                                        <div class="odd">单号
                                            <span>{{bettings.orderNo||"未知"}}</span>
                                        </div>				
                                        <div class="timer">{{bettings.addTime | dateFmt('YYYY-MM-DD HH:mm:ss')}}
                                            <img style="display: inline-block; width:15px;" src="../../../assets/source/imgs/images/youjt.jpg" alt="">
                                        </div>			
                                    </div>		
                                </div>
                        </li>
                    </ul>
             </v-scroll>
            </div>
           
        </div>

         <transition name="slide">
           <router-view></router-view>
        </transition>
    </div>
</template>

<style scoped>
    /*主内容区*/
    /* 消息tab切换 */
    .nav-wrap{
        width: 100%;
        position: relative;
        z-index: 200;
        background: #fff;
    }
    .nav{
        position: relative;
        -webkit-overflow-scrolling: touch;
        height: 0.8rem;
        overflow: scroll;
    }
    .navlist{
        height: 0.8rem;
    }
    .navlist li{
        float: left;
        height: 0.8rem;
        line-height: 0.8rem;
        border-bottom: .02rem solid transparent;
        text-align: center;
        color: #999;
        box-sizing: border-box;
        border-bottom: .01rem solid whitesmoke;
        list-style: none;
        font-size: 0.28rem;
    }
    /* .navlist li.isclick{
        color: #fa3956;
        border-bottom: .02rem solid #ff6b52;
    } */
    /* 账户明细 */
    /* 无数据的样式 */
    .nodata{
        display: none;
    }
    .nodata-top{
        width: 100%;
        margin: .768rem auto 0;
    }
    .nodata-top img{
        width: 50%;
    }
    .nodata-top h4{
        height: 0.6rem;
        line-height: 0.6rem;
        text-align: center;
        color: #111;
        font-size: 0.28rem;
        font-weight: 400;
    }
    .nodata-top p{
        height: 0.6rem;
        line-height: 0.6rem;
        text-align: center;
        font-size: 0.28rem;
        color: #999;
    }
    .nodatabtn{
        margin-top: .5rem;
    }
    .nodatabtn .btn{
        width: 72%;
        height: 0.8rem;
        line-height: 0.8rem;
        text-align: center;
        border-radius: .04rem;
        margin: 0 auto;
        display: block;
        font-size: 0.28rem;
        color: #fff;
        /* background: linear-gradient(90deg, #fa3956, #ff6b52); */
        border: none;
        outline: none;
    }
    /* 有数据样式 */
    .datalist-wrap{
        overflow-y: scroll;
        -webkit-overflow-scrolling:touch;
    }
    .detaillist{
        padding-left: .1rem;
        box-sizing: border-box;
        background-color: white;
    }
    .detaillist li{
        height: 1.2rem;
        background: #fff;
        overflow: hidden;
        border-bottom: .01rem solid whitesmoke;
    }
    .detaillist li:last-child{
        border-bottom: 0;
    }
    .detailtext{
        width: 92%;
        margin: 0 auto;
    }
    .detailtext .texttop{
        height: .5rem;
        line-height: .5rem;
        margin-top: .1rem;
        display: flex;
        justify-content: space-between;
    }
    .detailtext .texttop h4{
        font-size: 0.28rem;
        font-weight: 400;
        color: #000;
    }
    .detailtext .texttop span{
        font-size: 0.28rem;
        /* color: #2b9037; */
    }
    .detailtext .texttop .bgspan{
        /* color: red; */
    }
    .detailtext .textbottom{
        height: .6rem;
        line-height: .6rem;
        display: flex;
        justify-content: space-between;
        color: #999;
        font-size: 0.24rem;
    }
    .detailtext .textbottom .timer{
        top: .3rem;
        right: 0;
        display: flex;
        align-items: center;
    }
</style>
<script>
import Scroll from "../../flash/flash";
import headertop from '../../header/header'
  export default{
        data() {
            return {
                title:"充值记录",
                rechargeAll:[],
                dictListAll:"",
                // arrAll:[],
                list:'',
                numed:1,
                type:[],
                typename:[],
                id:"",
                num:10,
                counter: 1, //当前页
                pageStart: 0, // 开始页数
                pageEnd: 0, // 结束页数
                listdata: [], // 下拉更新数据存放数组
                scrollData: {
                    noFlag: false
                } //暂无更多数据显示
            }
        },
        updated() {  

        },
         components: {
            "v-scroll": Scroll,
              headertop,
        },
        methods: {
         onRefresh(done) {
            console.log("下拉");
            this.one(this.id);
                if(this.rechargeAll){
                    $.tips("已经刷新当前数据")
                    }
            done(); // call done
            },
            onInfinite(done) {
            let more = this.$el.querySelector(".load-more");
            more.style.display='block'
                this.onee(this.id);
                if(this.rechargeAll){
                    more.style.display='none';
                }
                done();
            },
             getlistheight(){
                    var bodyheight=document.getElementsByTagName("body")[0].offsetHeight;
                    console.log(document.getElementsByClassName("header_wrap")[0])
                    // var headerheight=document.getElementsByClassName("header_wrap")[0].offsetHeight;
                    this.$refs.listwrapVue.style.height=bodyheight-45-
                    document.getElementsByClassName("pde")[0].offsetHeight
                    +'px'
             },
            goBack() {
                this.rechargeAll=""
                // if(this.$store.state.rechargtype==1){
                    console.log("222222222222")
                    // this.$router.go(-2);
                // }else{
                    this.$router.go(-1);
                // }
                 
            },
            styleCss(){
                document.getElementsByTagName("body")[0].style.height = '100%';
                document.getElementsByTagName("html")[0].style.height = '100%';
                this.$refs.listwrapVue.style.overflow='scroll';
                document.getElementsByClassName("datalist-wrap")[0].style.height = document.getElementsByTagName("body")[0].clientHeight-110+'px';
            },
            winner(){
                
                console.log()
                for(var j=0;j<this.dictListAll.length;j++){
                    this.type.push(this.dictListAll[j].split('-')[0]);
                    this.typename.push(this.dictListAll[j].split('-')[1]);
                }
                for(var i=0;i<this.rechargeAll.length;i++){
                    if(this.rechargeAll[i].status ==this.type[0]){
                        this.$refs.winning[i].innerHTML=this.typename[0];
                        this.$refs.winning[i].style.color="#000";
                    }else if(this.rechargeAll[i].status ==this.type[1]){
                        this.$refs.winning[i].innerHTML=this.typename[1];
                        this.$refs.winning[i].style.color="#000";
                    }else if(this.rechargeAll[i].status ==this.type[2]){
                        this.$refs.winning[i].innerHTML=this.typename[2];
                        this.$refs.winning[i].style.color="#000";
                    }else if(this.rechargeAll[i].status ==this.type[3]){
                        this.$refs.winning[i].innerHTML=this.typename[3];
                        this.$refs.winning[i].style.color="#000";
                    }
                }
            },
            one(id){
                this.numed=1
                var userid = JSON.parse(myStorage.getItem("currentUser")).id;
                // condolr.log(userid)
                console.log(id)
                this.id=id;
                // 渲染基础数据
             



                if(userid){
                        this.rechargeAll= base.getApi().rechargeList(this.num,1,userid,this.id);
                        //  this.rechargeAll=this.$store.state.rechargeAll
                }
				this.$nextTick(()=>{
                    if (this.rechargeAll == '') {
	                   	document.getElementsByClassName("nodata")[0].style.display="block";
	                	document.getElementsByClassName("detaillistt")[0].style.display="none";
	                    $.tips("没有数据",1000);
	                }else{
	                	document.getElementsByClassName("nodata")[0].style.display="none";
	                	document.getElementsByClassName("detaillistt")[0].style.display="block";
                        this.winner();
	                }
                })
            },
             onee(id){
                    var userid = JSON.parse(myStorage.getItem("currentUser")).id;
                    console.log(id)
                    this.id=id;
                     if (myStorage.getItem("currentUser")) {
                            
                           this.numed++
                           var bettingAlled=base.getApi().rechargeList(this.num,this.numed,userid,this.id);
                           if(!bettingAlled.length){
                               $.tips("已经加载全部数据");
                               return;
                           }
                            for(var i=0;i<bettingAlled.length;i++){
                                this.rechargeAll.push(bettingAlled[i])
                            }
                            
                       
                        
                     }
				this.$nextTick(()=>{
                    if (this.rechargeAll == '') {
	                   	document.getElementsByClassName("nodata")[0].style.display="block";
	                	document.getElementsByClassName("detaillistt")[0].style.display="none";
	                    $.tips("没有数据",1000);
	                }else{
	                	document.getElementsByClassName("nodata")[0].style.display="none";
	                	document.getElementsByClassName("detaillistt")[0].style.display="block";
                        this.winner();
	                }
                })
            },
            onefirst(id){
                var userid = JSON.parse(myStorage.getItem("currentUser")).id;
                // condolr.log(userid)
                console.log(id)
                this.id=id;
                // 渲染基础数据
                if(userid){
                  
                         this.$store.state.rechargeAll = base.getApi().rechargeList(this.num,1,userid,this.id);
                         this.rechargeAll=this.$store.state.rechargeAll
                   
                       
                }
				this.$nextTick(()=>{
                    if (this.rechargeAll == '') {
	                   	document.getElementsByClassName("nodata")[0].style.display="block";
	                	document.getElementsByClassName("detaillistt")[0].style.display="none";
	                    $.tips("没有数据",1000);
	                }else{
	                	document.getElementsByClassName("nodata")[0].style.display="none";
	                	document.getElementsByClassName("detaillistt")[0].style.display="block";
                        this.winner();
	                }
                })
            },
            click() {
                var status=event.currentTarget.id;
                var name=event.currentTarget.getAttribute("name");
                if(status !=4){
                    this.$router.push({path:'/rechargeRecord/' +name});
                }
            }
        },
        mounted:function(){
            this.styleCss();
            // 个人消息table切换
            $('.navlist').on('click','li',function(){
                $(this).addClass("isclick").siblings().removeClass("isclick");
            });
            this.dictListAll = JSON.parse(myStorage.getItem("dictList"))["userRecharge-status"]; 
            var dictDetail = JSON.parse(myStorage.getItem("dictDetailList"));
                this.list = dictDetail["userRecharge-status-"+this.rechargeAll.status];           
            this. getlistheight()
            this.$refs.dingDan.style.width=(this.dictListAll.length+1)*103+"px"
        },
        created() {
            this.onefirst('');
        }
    }
</script>