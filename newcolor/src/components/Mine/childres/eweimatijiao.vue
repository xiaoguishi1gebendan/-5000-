<template>
  <div class="erweimatijiao">
        <headertop :title="headername" > </headertop>
     <div >
         <ul class="inpt" >
             <li>
                 <span>存入时间</span>
                 <input style="padding-left:0.1rem;background: transparent;color:#000;text-align:left" type="button" v-model="nowdata" >
             </li>
             <li>
                 <span>存入金额</span>
                 <input style="padding-left:0.1rem;" pattern="\d" type="number"  v-model="chamount">
             </li>
             <li>
                 <span>账号昵称</span>
                 <input v-model="name" style="padding-left:0.1rem;" type="text" val="201544d5sfg" placeholder="请输入微信账号昵称">
             </li>
             <li>
                 <span>验证信息</span>
                 <input v-model="code" style="padding-left:0.1rem;" pattern="\d" type="number" val="201544d5sfg" placeholder="请输入订单号后四位">
             </li>
         </ul>
         <p style="color:red;text-align:center;font-size:0.26rem;line-height:0.8rem;">*请输入您的交易订单号后4位数字</p>
        
              <span  class="buttonn" style="font-size:0.28rem;" @click="gotwo">上一步</span>  <span class="buttonn" style="font-size:0.28rem;" @click="goto">提单</span>
          <div class="buzhou">
            <p>提单步骤:</p>
            <p>1.账号昵称：是当前您选择的充值方式的账号；例如：当前选择微信充值,这里的账号填您支付的微信账号;如果是支付宝充值，这里填您支付的支付宝账号。</p>
            <p>2.验证信息：是成功付款订单号的后四位</p>
        </div>
     </div>
     <!-- <h1 style="font-size:0.16rem;">金额可以改,我还没改!!</h1> -->
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
        nowdata:"",
        name:"",
        code:"",
        chamount:""
    }
  },
 mounted(){
        this.date()
 },
 computed:{
     headername(){
          return this.$store.state.headername;
     }
 },
 methods:{
        date(){
            var flash=localStorage.getItem("flash");
            console.log(flash)
            if(flash==1){
                var data=new Date();
                var year=data.getFullYear() ;
                var mouth=data.getMonth()+1;
                var today=data.getDate();
                  mouth=mouth<10?(`0${mouth}`):mouth;
                  today=today<10?(`0${today}`):today;
                var hour=data.getHours()<10?(`0${data.getHours()}`):data.getHours();
                var minutes=data.getMinutes()<10?(`0${data.getMinutes()}`):data.getMinutes();
                var seconds=data.getSeconds()<10?(`0${data.getSeconds()}`):data.getSeconds();
            
                this.nowdata=`${year}-${mouth}-${today} ${hour}:${minutes}:${seconds}`;
                console.log(  this.nowdata)
                this.chamount= this.$store.state.chamount;
            }else{
                 this.$router.push({path:"/recharge"})
            }
                
        },
      gotwo(){
          this.$router.go(-2)
      },
      goto(){
           var userid=this.$store.state.userid;
           var banlid=this.$store.state.bankid;
           var code=this.code;
           var time=this.nowdata;
              this.$store.state.chamount=this.chamount
           var name=this.name;
           var type=0;
         if(this.name&&this.chamount) {
             if(this.code.length==4){
                 var re = /^\d+(\.\d+)?$/;//判断字符串是否为数字//判断正整数/[1−9]+[0−9]∗]∗/ 
            　　if (re.test( this.chamount)) { 
            　　　　var result =base.getApi().bankPayCommon(userid, banlid, code, time, this.chamount, name, type);
                console.log(result)
                this.$store.state.goNum+=1;
                this.$router.push("/rechargedetaling")
            　　}else{
                $.tips("请输入正确金额",1000)
                }
             }else{
                   $.tips("请输入订单号后四位",1000)
             }
             
                   
               

         }else{
             $.tips("请确认账号信息和昵称是否填写正确",1000)
         }
         
      }
 }
}
</script>

<style scoped lang='less'>

.buzhou{
  margin-left:0.2rem;
  p{
    color:red;
    font-size: 0.26rem;
    line-height: 0.5rem;
    text-align: left;
  }
  p:nth-child(1){
       font-size: 0.26rem;
    line-height: 0.6rem;
  }
}
   .buttonn{
          display: inline-block;
    vertical-align: top;
    color: white;
    line-height: 0.7rem;
    border-radius: 8px;
    width: 2.4rem;
    background: linear-gradient(90deg, #fa3956, #ff6b52);
    }
.inpt{
    background: white;
    >li{
       line-height: 0.9rem;
    font-size: 0.28rem;
    text-align: left;
    border-bottom: 1px solid #f5f5f5;
        >span{
            padding: 0 0.3rem;
            font-size:0.26rem;
            // background: red;
        }
        >input{
               height: 0.7rem;
    width: 5rem;
    border-radius: 6px;
    font-size: 0.26rem;
    outline: none;
    border: 1px solid #f5f5f5;
                -webkit-appearance: none;
        }
    }
}
.erweimatijiao{
    position: absolute;
    top:0;
    height:100%;
    background: #f5f5f5;
    width: 100%;
}
</style>
