<template>
    <div style="position:absolute;top:0;width:100%;background:#f5f5f5;height:100%;overflow:scroll;">
        <!-- 顶部 -->
        <div style="z-index:999;">
            <Header title="奖金详情"></Header>
        </div>
        <!-- 游戏目录tab -->
        <div class="game_wrap" style="position:absolute">
            <div class="gamelisttab">
                <ul class="clear" ref="ulid">
                    <li @click="showAll(bonusAll.id)" v-for="(bonusAll,index) in bonus" :key="index"  style="width: 103px;" class="">{{bonusAll.name}}</li>
                </ul>
            </div>
        </div>
        <!-- 赔率列表 -->
        <div style="margin-top:0.8rem;">
            <div style="height:9.2rem;overflow: scroll;">
                <div v-for="(menusAll,index) in menus" :key="index" style="font-size:00.28rem;">
                    <p style="overflow:hidden;color:#fa3956;line-height:0.8rem;">
                        <span  style="float:left;margin-left:0.1rem;" class="colorcss">{{menusAll.name}}</span>
                        <span style="float:right;margin-right:0.1rem;" class="colorcss">返利10.0%</span>
                    </p>
                    <ul>
                        <li v-for="(rebateAll,index) in rebate[menusAll.id]" :key="index" >	
                            <p  style="overflow:hidden;line-height:0.8rem;background:white;border-bottom:1px solid #f5f5f5;">
                                <span style="float:left;margin-left:0.1rem;">{{rebateAll.name}}</span>	
                                <span v-if="token" style="float:right;margin-right:0.1rem;">赔率&nbsp;&nbsp;&nbsp;{{(rebateAll.odds*(1-(1960-roto)/2000)).toFixed(2)}}</span>
                                 <span v-else style="float:right;margin-right:0.1rem;">赔率&nbsp;&nbsp;&nbsp;{{rebateAll.odds.toFixed(2)}}</span>
                            </p>	
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

    #layout{
        width: 100%;
        height: 100%;
    }
    .header_wrap{
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 200;
    }
    
    /*主内容区*/
    /*奖金分类*/
    .game_wrap{
        height: 0.8rem;
        width: 100%;
        position: fixed;
        top: 0.8rem;
        z-index: 200;
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
        color: #fa3956;
        border-bottom: 2px solid #ff6b52;
    }
    .game{
        background: #fcefe5;
    }
    .gamerule{
        height: 3rem;
        display: flex;
        line-height: 3rem;
        width: 94%;
        margin: 1rem auto 0;
    }
    .ruleleft,.rulecontent,.ruleright{
        width: 33.33333%;
    }
    .ruleright{
        text-align: right;
    }
    .gamerule span{
        font-size: 1.4rem;
        font-weight: 600;
    }
    /*游戏详情列表*/
    .gamerulelist{
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        margin-top: 0.8rem;
        font-size: 0.28rem;
    }
    .ruletitle-wrap{
        width: 100%;
    }
    .ruletitle{
        width: 94%;
        margin: 0 auto;
        height: .26rem;
        line-height: .26rem;
        display: flex;
        justify-content: space-between;
        color: #d91e38;
    }
    .ruletitle>span span{
        margin-left: .09rem;
    }
    .gamerulelist ul{
        background: #fff;
    }
    .gamerulelist ul li{
        height:.3858rem ;
        border-bottom: 0.01rem solid #f5f5f5;
    }
    .gamerulelist ul li .gamedata{
        width: 94%;
        height: .384rem;
        margin: 0 auto;
        line-height: .384rem;
        display: flex;
        justify-content: space-between;
    }
    .gamedata>span span{
        margin-left: .12rem;
    }
</style>
<script>
import Header from './../header/header'
    export default {
        data() {
            return {
                bonusAll:[],
                bonus:[],
                isshow:true,
                lines:[],
                rebate: [],
                menus:[],
                roto:"",
                token:""
            }
        },
        components:{
            Header
        },
        updated() {  
            
        },
        methods: {
            showAll(id){
                this.menus = this.lines[id];
                console.log(this.menus)
                this.bonusAll=base.getApi().getLotteryList().data;
            },
            getspi(){
                this.token=localStorage.getItem("token")
                if(this.$store.state.bonusAlled){
                    this.bonusAll=this.$store.state.bonusAlled
                }else{
                     this.$store.state.bonusAlled= base.getApi().getLotteryList().data;
                      this.bonusAll=this.$store.state.bonusAlled
                }
                
                this.bonus = this.bonusAll.lotteryList;
                console.log(this.bonusAll)
                console.log(this.bonus[0].name)
                this.lines = JSON.parse(myStorage.getItem("lotteryPlayMap"));
                console.log(this.lines)
                this.rebate = JSON.parse(myStorage.getItem("playPlayMap"));
                var lines = this.lines;
                var id=this.bonus[0].id
                this.menus = lines[id];
                this.roto=JSON.parse(myStorage.getItem("currentUser")).rebate;
                console.log( this.roto)
                console.log(this.rebate[17])
            },
            isstyleys(){
             
            }
        },
        mounted:function(){
           

            $(".clear li").eq(0).addClass("onpitch");
            $('.clear').on('click','li',function(){
                $(this).eq(0).addClass("onpitch").siblings().removeClass("onpitch");
            });
            this.$refs.ulid.style.width=103* this.bonus.length+"px"
            this.isstyleys();
            
        },
        created() {
            // 渲染基础数据
             this.getspi()
            
        }
    }
</script>
