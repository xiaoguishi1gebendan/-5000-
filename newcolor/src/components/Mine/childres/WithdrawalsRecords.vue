<template>
    <div style="overflow: hidden;position:absolute;top:0;width:100%;height:100%;background: white;z-index:1000;">
     
         <headertop title="提款记录" > </headertop>
        <!-- 消息tab分类 -->
        <div class="nav-wrap">
            <div class="nav">
                <ul class="navlist" ref="dingDan">
                    <li @click="one('')" class="isclick" style="width: 103px;">全部</li>
                    <li v-for="(inte,index) in dictListAll" :key="index" :id="inte.split('-')[0]" @click="one(inte.split('-')[0])" style="width: 103px;">{{inte.split('-')[1]}}</li>
                </ul>
            </div>
        </div>
        <!-- 明细列表 -->
        <div class="datalist-wrap"  ref="listwrapVue">
            <!-- 无数据样式 -->
            <div class="nodata" style="display:none;">
                <div class="nodata-top">
                    <img src="../../../assets/images/lack1.png" alt="">
                    <h4>暂无提款记录</h4>
                    <p>大奖不等待，速去购彩吧~</p>
                </div>
            </div>
            <!-- 有数据样式 -->
            <div class="detaillistt" style="display: none; top:-45px;   position: relative;
    width: 100%;
    height: 100%;">
                <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite">
                 <ul id="message-0" class="detaillist" >
                    <li v-for="(bettings,index) in drawingsAll" :key="index">
                        <router-link :to="'/withdrawalsRecords/'+bettings.id">
                            <div class="detailtext">
                                <div class="texttop">
                                    <h4 ref="winning"></h4>
                                    <span class="bgspan">-{{bettings.finalAmount|mory(bettings.finalAmount)}}￥</span>
                                </div>
                                <div class="textbottom">
                                    <div class="odd">单号
                                        <span>{{bettings.orderNo}}</span>
                                    </div>
                                    <div class="timer">{{bettings.addTime | dateFmt('YYYY-MM-DD HH:mm')}}&nbsp;&nbsp;
                                        <img style="display: inline-block; width:8px;" src="../../../assets/source/imgs/shangjt.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </router-link>
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
        overflow-x: scroll;
        -webkit-overflow-scrolling: touch;
        height: 0.8rem;
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
    .navlist li.isclick{
        color: #fa3956;
        border-bottom: .02rem solid #ff6b52;
    }
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
        border-bottom: 1px solid whitesmoke;
    }
    .detaillist li:last-child{
        /* border-bottom: 0; */
    }
    .detailtext{
        width: 92%;
        margin: 0 auto;
    }
    .detailtext .texttop{
        height: .6rem;
        line-height: .6rem;
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
        height: .5rem;
        line-height: .5rem;
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
export default {
        data() {
            return {
                drawingsAll:[],
                type:[],
                num:10,
                id:"",
                dictListAll:"",
                counter: 1, //当前页
                pageStart: 0, // 开始页数
                pageEnd: 0, // 结束页数
                listdata: [], // 下拉更新数据存放数组
                scrollData: {
                    noFlag: false
                }, //暂无更多数据显示
                typename:[],
                numed:1
            }
        },
        updated() {  

        },
         components: {
            "v-scroll": Scroll,
            headertop
        },
        methods: {
            onRefresh(done) {
                console.log("下拉");
                this.one(this.id);
                    if(this.drawingsAll){
                        $.tips("已经刷新当前数据")
                        }
                done(); // call done
                },
                onInfinite(done) {
                let more = this.$el.querySelector(".load-more");
                more.style.display='block'
                    this.onee(this.id);
                                
                    if(this.drawingsAll){
                        more.style.display='none';
                    }
                            
                    done();
                },
            goBack() {
                this.$router.go(-1)//底层等同于 history.back()back() 方法可加载历史列表中的前一个 URL（如果存在）。
                // 调用该方法的效果等价于点击后退按钮或调用 history.go(-1)。
            },
            styleCss(){
                document.getElementsByTagName("body")[0].style.height = '100%';
                document.getElementsByTagName("html")[0].style.height = '100%';
                this.$refs.listwrapVue.style.overflow='scroll';
                document.getElementsByClassName("datalist-wrap")[0].style.height = document.getElementsByTagName("body")[0].clientHeight-110+'px';
            },
             getlistheight(){
                    var bodyheight=document.getElementsByTagName("body")[0].offsetHeight;
                    // console.log(document.getElementsByClassName("header_wrap")[0])
                    // var headerheight=document.getElementsByClassName("header_wrap")[0].offsetHeight;
                    this.$refs.listwrapVue.style.height=bodyheight-45
                    -document.getElementsByClassName("pde")[0].offsetHeight
                    +'px'
             },
            winner(){
               
                for(var j=0;j<this.dictListAll.length;j++){
                    this.type.push(this.dictListAll[j].split('-')[0]);
                }
                 for(var j=0;j<this.dictListAll.length;j++){
                    this.typename.push(this.dictListAll[j].split('-')[1]);
                }
                 console.log( this.typename)
                for(var i=0;i<this.drawingsAll.length;i++){
                    if(this.drawingsAll[i].status ==this.type[0]){
                        this.$refs.winning[i].innerHTML=this.typename[0];
                        this.$refs.winning[i].style.color="#000";
                    }else if(this.drawingsAll[i].status ==this.type[1]){
                        this.$refs.winning[i].innerHTML=this.typename[1];
                        this.$refs.winning[i].style.color="#000";
                    }else if(this.drawingsAll[i].status ==this.type[2]){
                        this.$refs.winning[i].innerHTML=this.typename[2];
                        this.$refs.winning[i].style.color="#000";
                    }else if(this.drawingsAll[i].status ==this.type[3]){
                        this.$refs.winning[i].innerHTML=this.typename[3];
                        this.$refs.winning[i].style.color="#000";
                    }else if(this.drawingsAll[i].status ==this.type[4]){
                        this.$refs.winning[i].innerHTML=this.typename[4];
                        this.$refs.winning[i].style.color="#000";
                    }else if(this.drawingsAll[i].status ==this.type[5]){
                        this.$refs.winning[i].innerHTML=this.typename[5];
                        this.$refs.winning[i].style.color="#000";
                    }else if(this.drawingsAll[i].status ==this.type[6]){
                        this.$refs.winning[i].innerHTML=this.typename[6];
                        this.$refs.winning[i].style.color="#000";
                    }
                }
            },
             onefirst(id){
                this.id=id;
                var userid = JSON.parse(myStorage.getItem("currentUser")).id;
                // 渲染基础数据
                if(userid){
                    // if(this.$store.state.drawingsAll){
                    //      this.drawingsAll = this.$store.state.drawingsAll;
                    // }else{
                          this.drawingsAll =base.getApi().drawList(this.num,1,userid,this.id);
                        // this.drawingsAll = this.$store.state.drawingsAll;
                    // }
                        
                }
				this.$nextTick(()=>{
                    if (this.drawingsAll == '') {
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
            one(id){
                $('.detaillist').scrollTop(0);
                console.log($('.detaillist'))
                this.id=id;
                this.numed=1;
                var userid = JSON.parse(myStorage.getItem("currentUser")).id;
                // 渲染基础数据
                if(userid){
                         this.drawingsAll = base.getApi().drawList(this.num,1,userid,this.id);
                            // this.drawingsAll = this.$store.state.drawingsAll;
                }
				this.$nextTick(()=>{
                    if (this.drawingsAll == '') {
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
                this.id=id;
                var userid = JSON.parse(myStorage.getItem("currentUser")).id;
                if (userid) {
                        this.numed++;
                          var bettingAlled=base.getApi().drawList(this.num, this.numed, userid, this.id);
                            if(!bettingAlled.length){
                               $.tips("已经加载全部数据");
                               return;
                           }
                            for(var i=0;i<bettingAlled.length;i++){
                                this.drawingsAll.push(bettingAlled[i])
                            }
                        
                   
                    
                 }
				this.$nextTick(()=>{
                    if (this.drawingsAll == '') {
	                   	document.getElementsByClassName("nodata")[0].style.display="block";
	                	document.getElementsByClassName("detaillistt")[0].style.display="none";
	                    $.tips("没有数据",1000);
	                }else{
	                	document.getElementsByClassName("nodata")[0].style.display="none";
	                	document.getElementsByClassName("detaillistt")[0].style.display="block";
                        this.winner();
	                }
                })
            }
        },
        mounted:function(){
            this.styleCss();
            // 个人消息table切换
            $('.navlist').on('click','li',function(){
                $(this).addClass("isclick").siblings().removeClass("isclick");
            });
             this.getlistheight()
             this.$refs.dingDan.style.width=(this.dictListAll.length+1)*103+"px"
        },
        watch: {

        },
        beforeCreate: function() {
            document.getElementsByTagName("body")[0].style.backgroundColor='#f5f5f5';
        },
        created() {
            this.onefirst('');
            // 渲染基础数据
            this.dictListAll = JSON.parse(myStorage.getItem("dictList"))["userDraw-status"];
        }
    }
</script>