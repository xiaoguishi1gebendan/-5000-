<template>
    <div style="position:absolute;top:0;width:100%;height:100%;background:#fff;">
        <!-- 顶部 --> 
        <div class="header_wrap">

            <Header title="详细设定"></Header>
        </div>
        <!-- 游戏目录tab -->
        <div class="game_wrap" >
            <div class="gamelisttab">
                <ul class="clear" ref="ulid" >
                    <li @click="showAll(bonusAll.id)" v-for="(bonusAll,index) in bonus" :key="index"  style="width: 103px;">{{bonusAll.name}}</li>
                </ul>
            </div>
        </div>
        <!-- 游戏项目详情 -->
        <div class="gamerulelist" >
            <!--游戏项目详情-->
            <div class="game">
                <div class="gamerule">
                    <div class="ruleleft">
                        <span>项目</span>
                    </div>
                    <div class="rulecontent">
                        <span>单项（号）限额</span>
                    </div>
                    <div class="ruleright">
                        <span>单注限额</span>
                    </div>
                </div>
            </div>
            <ul class="list" style="height:8.2rem;" ref="listwrapVue">
                <li v-for="(sortAll,index) in sort" :key="index">
                    <div class="gamedata" v-for="(rebateAll,index) in rebate[sortAll.id]" :key="index">
                        <span>{{sortAll.name}}-{{rebateAll.name}}</span>
                        <span>{{sortAll.noteMaxAmount}}</span>
                        <span>{{sortAll.itemMaxAmount}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    html{
        font-size: 625%;
    }
    body{
        width: 100%;
        height: 100%;
        background: #f5f5f5;
        overflow-x: hidden;
    }
    #layout{
        width: 100%;
        height: 100%;
    }
    .header_wrap{
        width: 100%;
      
    }
    /*主内容区*/
    .game_wrap{
        height: 0.8rem;
        width: 100%;
     
        overflow-y: hidden;
        background: #fff;
    }
    .gamelisttab{
        width: 100%;
        -webkit-overflow-scrolling: touch;
    }
    .gamelisttab ul{
        background: #fff;
        width: 600%;
    }
    .gamelisttab ul li{
        height: 0.8rem;
        line-height: 0.8rem;
        text-align: center;
        border-bottom: .01rem solid transparent;
        box-sizing: border-box;
        color: #a0a0a0;
        width: 4.4%;
        float: left;
        list-style: none;
        font-size: 0.28rem;
    }
    .gamelisttab ul li.onpitch{
        /* color: #fa3956; */
        /* border-bottom: 2px solid #ff6b52; */
    }
    .game{
        background: #fcefe5;
        position: relative;
        overflow: hidden;
    }
    .gamerule{
           height: 0.8rem;
            display: flex;
            line-height: 0.8rem;
            width: 94%;
            margin-left: 3%;
    }
    .ruleleft,.rulecontent,.ruleright{
        width: 33.33333%;
        text-align: left;
    }
    .rulecontent{
        text-align: center;
    }
    .ruleright{
        text-align: right;
    }
    .gamerule span{
        font-size: 0.28rem;
        color: #000;
        display: block;
    }
    /*游戏详情列表*/
    .gamerulelist ul{
        background: #fff;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
            /* margin-bottom: 1rem; */
    }
    .gamerulelist ul li{
        /* height:0.8rem ; */
        list-style: none;
    }
    .gamerulelist ul li .gamedata{
        width: 94%;
        height: 0.8rem;
        border-bottom: .01rem solid #ECECEC;
        margin: 0 auto;
            box-sizing: border-box;
    }
    .gamerulelist ul li span{
        display: block;
        width: 33.33333%;
        font-size: 0.22rem;
        float: left;
        font-weight: 400;
        color: #111;
    }
    .gamerulelist ul li span:first-child{
        line-height: 0.28rem;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        text-align: left;
    }
    .gamerulelist ul li span:nth-of-type(2){
        text-align: center;
        line-height: .5rem;
    }
    .gamerulelist ul li span:last-child{
        text-align: right;
        line-height: .5rem;
    }
</style>
<script>
import Header from './../header/header'
    export default {
        data() {
            return {
                bonusAll:[],
                bonus:[],
                lines:[],
                rebate: [],
                sort: []
            }
        },
        components:{
            Header,
        },
        updated() {  
            
        },
        methods: {
            showAll(id) {
                this.sort = this.lines[id];
            },
            styleCss(){
                document.getElementsByTagName("body")[0].style.height = '100%'
                document.getElementsByTagName("html")[0].style.height = '100%'
                this.$refs.listwrapVue.style.overflow='scroll';
                document.getElementsByClassName("list")[0].style.height = document.getElementsByTagName("body")[0].clientHeight-142+'px'
            },
            isstyle(){
             
            },
        },
        watch: {

        },
        beforeCreate: function() {
            document.getElementsByTagName("body")[0].style.backgroundColor='#f5f5f5';
            $('.list').css('height',($(document.body).height()-$('.header_wrap').height()-$('.foottab').height()-$('.game_wrap').height()-$('.game').height()));
        },
        mounted:function(){
            this.styleCss();
            // 彩种table切换
            $(".clear li").eq(0).addClass("onpitch");
            $('.clear').on('click','li',function(){
                $(this).eq(0).addClass("onpitch").siblings().removeClass("onpitch");
            });
            this.$refs.ulid.style.width=103*this.bonus.length+"px"
            this.isstyle()
        },
        created() {
            // 渲染基础数据
            if(this.$store.state.settingAll){
                 this.bonusAll=this.$store.state.settingAll
            }else{
                 this.$store.state.settingAll = base.getApi().getLotteryList().data;
                 this.bonusAll=this.$store.state.settingAll
            }
           
            this.bonus = this.bonusAll.lotteryList;
            this.lines = JSON.parse(myStorage.getItem("lotteryPlayMap"));
            this.rebate = JSON.parse(myStorage.getItem("playPlayMap"));
            var lines = JSON.parse(myStorage.getItem("lotteryPlayMap"));
            var id=this.bonus[0].id
            this.sort = lines[id];

        }
    }
</script>
