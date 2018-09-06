<template>
    <div style="position:absolute;top:0;width:100%;height:100%;background: white;z-index:1000;">
        <headertop style="background: transparent !important;position:absolute" :title="title" :goDetal="guize" :datal="datal"> </headertop>
        <div class="qiandao">
           
            <p class="days" >连续签到{{this.qmList.num}}天</p>
            <div class="mouth">
                <ul>
                    <li v-for="(item,index) in data" :key="index" class="dd">{{item}}</li>
                </ul>
                <ul class="zhucei">
                    <li>总投注</li>
                    <li>{{qmList.bettingCount}}元</li>
                </ul>
            </div>
            <transition name="slide">
           <router-view></router-view>
        </transition>
        </div>
    </div>     
</template>

<script>
import headertop from '../../header/header'
  export default{
    components: {
        headertop,
    },
        data() {
            return {
                title:"",
                qmList:"",
                data:[],
                datal:"签到规则"
            }
        },
        mounted(){
            this.getapione();
            this.$nextTick(function(){
                this.getapitwo();
            })
        },
        methods:{
            guize(){
                this.$router.push({path:"/guize"});
            },
            mGetDate(year, month){
                var d = new Date(year, month, 0);
                return d.getDate();
            },
            goBack(){
                this.$router.go(-1);
            },
            getapione(){
                var date=new Date();
                var year=date.getFullYear(); 
                var month=date.getMonth()+1;
                var data= this.mGetDate(year, month);
                for(var i=1;i<=30;i++){
                    this.data.push(i);
                }
            },
            getapitwo(){
                var user=JSON.parse(localStorage.getItem("currentUser"));
                this.qmList= base.getApi().qmList(user.id).data;
                localStorage.setItem('activeId',this.qmList.activeId);
                var dds= document.getElementsByClassName("dd");
             
                
                if(this.qmList.num){
                    for(var i=0;i<this.qmList.num;i++){
                        dds[i].innerHTML=" <img class='imgd' style='width:0.28rem;vertical-align: middle !important;' src=''>";
                        dds[i].style.background="transparent";
                    }
                    var imgs= document.getElementsByClassName("imgd");
                    for(var i=0;i<this.qmList.num;i++){
                        if(i<this.qmList.num-1){
                            imgs[i].src=require('../../../assets/images/yqc.png');
                        }else{
                            imgs[i].src=require('../../../assets/images/dt.png');
                        } 
                    }
                }


                for(var i=0;i<this.qmList.rules.length;i++){
                    for(var j=0;j<this.data.length;j++){
                        if(this.qmList.rules[i].times==this.data[j]){
                            
                            if(dds[j].children.length){
                                console.log(dds[j].children)
                                 dds[j].innerHTML=`${this.qmList.rules[i].money}￥`;
                                dds[j].style.background="#c1c3c0";
                                dds[j].style.color="#8b8c8a";
                            }else{
                                console.log(dds[j].children)
                                 dds[j].innerHTML=`${this.qmList.rules[i].money}￥`;
                            dds[j].style.background="#fcd50f";
                            dds[j].style.color="#b06c00";
                            }
                            // if(dds[j].children)
                           
                        }
                    }
                }
            },
        },

    }
</script>

<style scoped lang='less'>
.qiandao{
    
    width: 100%;
    height:calc(100% - 0.8rem);
    background: url("../../../assets/images/bgqd.png") no-repeat center top;
    background-size: contain;
    // margin-top:0.6rem;
 
    .days{
        // font-size: 0.24rem;
        // line-height: 1.3rem;
        font-weight:500;
        color: white;
        font-size:0.28rem;
        line-height: 0.8rem;
        padding-top:48%;
    }
    .mouth{
        >ul:nth-child(1){
            margin: 0 auto;
            width: 5rem;
            overflow: hidden;
            background: #fff;

            li{
                font-size:0.26rem;
                float: left;
                margin: 0.1rem 0.11rem;
                width: 0.6rem;
                line-height: 0.6rem;
                border-radius: 50%;
            }
        }
    }
    .zhucei{
       background: linear-gradient(90deg, #fa3956, #ff6b52);
        margin: 0 auto;
        width: 5rem;
        overflow: hidden;
        font-size: 0.28rem;
        border-radius: 0 0 10px 10px;
        >li{
           text-align: left;
            line-height: 0.8rem;
            color:#fff;
            padding: 0 0.2rem;
           }
        >li:nth-child(1){
             float: left;  
        }
        >li:nth-child(2){
             float: right;  
        }
    }
}
</style>
