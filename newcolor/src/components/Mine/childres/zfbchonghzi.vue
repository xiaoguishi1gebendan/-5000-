<template>
  <div>
        <!-- <div class="index_header" style="position:fixed;top:0">
			<div @click="goBack" style="position: absolute;transform: translateY(-50%);color: #fff;width:20%;">
                    <i class="iconfont icon-mjiantou-copy" style="    font-size: .24rem;position: absolute;line-height: 45px;margin-left: 12px;left:0"></i>
             </div>
			<h3 >{{headername}}</h3>
			
		</div> -->
    <div class="index_header">
       <headertop style="position: relative;z-index:999" :title="headername" :goBack="goBack"> </headertop>
    </div>
        
        <div style="overflow:scroll" id="weima">
            <ul class="weixinerweima">
                <li>充值金额: <span>{{amout}}元</span></li>
                <li><img  :src="list.qrcodeUrl" alt=""></li>
            </ul>
            <div class="buttonn" style="font-size:0.14rem;" @click="goto">我已支付</div>
            <div class="buzhou">
                <p>扫码步骤</p>
                <p>1:请手动截图并保存到相册，打开相关付款软件。</p>
                <p>2:请在相关付款软件中打开"扫一扫"</p>
                <p>3:在扫一扫中,选取截屏的图片。</p>
                <p>4:输入您欲充值的金额并进行转账。如充值未到账，请及时联系客服。</p>
            </div>
        </div>
        
  </div>
</template>

<script>

 import headertop from '../../header/header'
export default {
  data() {
    return {
        list:"",
        amout:""
    }
  },
   computed:{
     headername(){
          return this.$store.state.headername;
     }
 },
  mounted(){
    this.getapi();
    console.log(document.getElementById("weima").style.height)
    document.getElementById("weima").style.height=document.getElementsByTagName("body")[0].offsetHeight-document.getElementsByClassName("index_header")[0].offsetHeight+"px"
  },
  methods:{
        goBack() {
        this.$router.go(-1)
       },
       getapi(){
        var flash=localStorage.getItem("flash");
				if(flash==1){
          this.list=this.$store.state.rechargedetailin.data;
           console.log(this.list)
           this.amout=this.$store.state.chamount
           console.log( this.list)
        }else{
          this.$router.go(-3)
          // this.$router.push({path:"/recharge"})
        }
           

       },
       goto(){
            var userId=this.$store.state.userid;
            var order_no=this.list.order_no;
            var plateformConfigId=this.$store.state.plateformConfigId;
            console.log(`userId=${userId},order_no=${order_no},plateformConfigId=${plateformConfigId}`)
            var result=base.getApi().queryRecharge(userId, order_no, plateformConfigId)
            if(result && result.code == 200){
					this.$router.push= ({ path: `/rechargedetaling` });
				}else {
					$.tips(result.message);
				}
       }
  },
    components: {
      headertop
    }
}
</script>

<style scoped lang='less'>
.weixinerweima{
  font-size: 0.16rem;
  text-align: center;
  margin: 0.1rem  0.2rem  0;
  background: white;
 li:nth-child(1){
    line-height: 0.62rem;
    border-bottom: 1px solid #f5f5f5;
    >span{
      color:red;
    }
  }
  li:nth-child(2){
    margin-top:0.2rem;
    padding-bottom: 0.2rem;
    img{
      width: 2.16rem;
    }
    
  }
}
.buzhou{
  margin-left:0.2rem;
  p{
    color:red;
    font-size: 0.12rem;
    line-height: 0.2rem;
    text-align: left;
  }
  p:nth-child(1){
    color:black;
    font-size:0.16rem;
    line-height: 0.4rem;
  }
}
   .buttonn{
        margin:0.5rem auto;
        font-size:0.12rem;
        color:white;
        line-height: 0.48rem;
        // padding: 0 0.63rem;
        border-radius: 8px;
        width: 1.5rem;
        background:  linear-gradient(90deg, #fa3956, #ff6b52)
    }


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
