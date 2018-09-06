<template>
  <div class="rechargee" style="position:absolute;top:0;width:100%;height:100%;background: white;z-index:99999;">
        <headertop :title="title" > </headertop>
        <div class="chongzhijindu">
            <ul >
                <li>
                    <img src="../../../assets/images/rechange.png" alt="">
                </li>
                <li>
                    <div>
                        <p style="color:#fa3956">恭喜您，您的充值申请已经提交成功</p>
                        <p style="color:#929292">充值金额<span style="color:#fa3956">{{chamount}}</span> 元</p>
                    </div>
                    <div>
                        <p style="line-height:3rem;">正在排队，等待客服进行确认。</p>
                    </div>
                    <div>
                         <p >充值成功</p>
                        <p style="color:#929292;font-size:0.24rem;">充值成功后，您的余额将会在1分钟内更新，请稍后查看，若届时未能更新，请联系在线客服。</p>
                    </div>
                </li>
            </ul>
            <div class="buttonn" @click="buttonclick" style="font-size:0.28rem;">
                确定
            </div>
        </div>
<transition name="slide">
           <router-view></router-view>
        </transition>
  </div>
</template>

<script>
import headertop from '../../header/header'
export default {
    components: {
        headertop,
    },
  data() {
    return {
        title:"充值进度",
        list:'',
        chamount:""
    }
  },
 mounted(){
     this.getapi()
 },
 methods:{
     
     getapi(){
        var flash=localStorage.getItem("flash");
            console.log(flash)
            if(flash==1){
                 this.chamount=this.$store.state.chongchamount;
            }else{
                this.$router.go( -this.$store.state.goNum )
                //  this.$router.push({path:"/recharge"})
            }
        
     } ,

      buttonclick(){
                    this.$router.go(-this.$store.state.goNum)
      }

 }
}
</script>

<style scoped lang='less'>
.chongzhijindu{
    margin-top:0.4rem;
    >ul{
        width: 100%;
        overflow: hidden;
        >li{
            float: left;
            font-size:0.28rem;
        }
        >li:nth-child(1){
            width: 26%;
            text-align: right;
            >img{
                width: 0.8rem;
            }
        }
        >li:nth-child(2){
            text-align: left;
            padding-left:0.2rem;
            width: 64%;
        }
    }
    .buttonn{
           margin: 1rem auto;
    font-size: 0.28rem;
    color: white;
    line-height: 0.7rem;
    padding: 0 0.4rem;
    border-radius: 0.15rem;
    width: 2.22rem;
    }
}

</style>
