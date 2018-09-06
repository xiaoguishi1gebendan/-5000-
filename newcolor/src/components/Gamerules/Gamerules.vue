<template>
    <div style="overflow:hidden;position:absolute;top:0;width:100%;height:100%;background: white;z-index:1000;">
        <!-- 顶部 -->
        <div class="header_wrap" ref="headertop">
            <Header title="玩法规则"></Header>
        </div>
        <!-- 游戏目录tab -->
        <div class="game_wrap" ref="tabd"> 
            <div class="gamelisttab">
                <ul class="clear"  ref="ulie">
                    <li @click="showAll(bonusAll.id)" v-for="(bonusAll,index) in bonus" :key="index"  style="width: 103px;" class="">{{bonusAll.name}}</li>
                </ul>
            </div>
        </div>
        <!--规则内容文本-->
        <div style="overflow:scroll;" ref="texted">
            <div class="text" v-for="(rule,index) in sort" :key="index" >
            <div class="text-wrap" v-html="rule.content">
                {{rule.content}} 
            </div>
        </div>
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
        position: relative;
        /* top: 0; */
        z-index: 2000;
    }
    
    /*主内容区*/
    /*奖金分类*/
    .game_wrap{
        height: 0.8rem;
        width: 100%;
        /* position: fixed; */
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
    /* 规则内容 */
    .text{
            width: 98%;
    margin: 0 auto;
        background: #fff;
    }
    .text-wrap{
        margin:  auto 0;
        /* width: 94%; */
        font-size: 0.28rem;
        text-align: left;
    }
    .text-wrap table{
        width: 100% !important;
        overflow-x: hidden ;
    }
</style>
<script>
import Header from './../header/header'
    export default {
        data() {
        return {
            count: 0,
            bonusAll:[],
            bonus:[],
            isshow:true,
            lines:[],
            rebate: [],
            sort:[],
        }
        },
        components: {
            Header,
        },
        updated() {  
            
        },
        methods: {
           
            showAll(id) {
                this.sort = base.getApi().inroduction(id);
            },
            isstyle(){
               
            }
        },
        watch: {
        },
        beforeCreate: function() {
            document.getElementsByTagName("body")[0].style.backgroundColor='#f5f5f5';
        },
        mounted:function(){
            this.$refs.texted.style.height=document.getElementsByTagName("html")[0].offsetHeight-this.$refs.tabd.offsetHeight-this.$refs.headertop.offsetHeight+"px"
            // 彩种table切换
            $(".clear li").eq(0).addClass("onpitch");
            $('.clear').on('click','li',function(){
                $(this).eq(0).addClass("onpitch").siblings().removeClass("onpitch");
            });
            this.$refs.ulie.style.width=103*this.bonus.length+"px";
            this.isstyle()
        },
        created() {
            // 渲染基础数据
            if(this.$store.state.bonusAll){
                  this.bonusAll =this.$store.state.bonusAll
            }else{
                this.$store.state.bonusAll=base.getApi().getLotteryList().data;
               
                 this.bonusAll = this.$store.state.bonusAll;
            }
           
            this.bonus = this.bonusAll.lotteryList;
             console.log(this.bonus)
            var id=this.bonus[0].id;
            if(this.$store.state.sort){
                 this.sort=this.$store.state.sort
            }else{
                this.$store.state.sort= base.getApi().inroduction(id);
                this.sort=this.$store.state.sort
            }
           
          
        }
    }
</script>