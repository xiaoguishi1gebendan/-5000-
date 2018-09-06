<template>
  <div ref="chargedetal" class="chargedetal" style="position:absolute;top:0;width:100%;height:100%;z-index:1000;overflow:hidden;">
      <headertop :title="title"  :datal="datal" :goDetal="mycollect"> </headertop>
        <div class="zhushou"  ref="zhuzhein" style="display:none">
          <div class="zhuzhein" @click="disnone"></div>
                <ul>
                    <li ></li>
                    <li @click="chongzhi">充值记录</li>
                    <li @click="serviceFuncA" > <a target="_blank"   style="color:#666"> 在线客服 </a></li>
                </ul>
        </div>
        <div style="height:100%;" >
            <div class="inputt">
                <span >请输入充值金额</span>
                <input pattern="\d" type="number" maxlength="6"  id="inputt" ref="inputtt" @keyup="keyup"  :value="val" style="color:#D71437">
                <span>元</span>
            </div>
            <div class="jine">
                <ul id="bgcc">
                    <li @click="jinee1"  >50元</li>
                     <li @click="jinee1" >100元</li>
                      <li @click="jinee1" >300元</li>
                       <li @click="jinee1">500元</li>
                    <li @click="jinee1">1000元</li>
                     <li @click="jinee1">2000元</li>
                      <li @click="jinee1">3000元</li>
                       <li @click="jinee1">5000元</li>
                </ul>
            </div>

            <div style=" position: relative;">
                <p class="pp" style="    line-height: 0.74rem;
    color: gray;
    font-size: 0.28rem;
    text-align: left;
    padding-left: 0.2rem;
    background: #f5f5f5;">请选择充值方式 ( 如有问题，请联系
                     <a @click="serviceFuncA" target="_blank"  style="color:#0090ff"> 
                        在线客服
                    </a>
                    )</p>
                <ul class="zhifubank" style="width:100%;overflow-y:scroll;">
                    <li v-for="(item,index) in result" :key="index" @click="xuanzhong" >
                        <p> <span>收款银行</span> <span>{{item.bankName}}</span></p>
                         <p> <span>收款账号</span> <span>{{item.account}}</span></p>
                          <p> <span>收款人</span> <span>{{item.payee}}</span></p>
                           <p> <span>收款支行</span> <span>{{item.openPoint}}</span></p>
                           <div  class="xuanzhong" :name="item.account">
                               <img  style="visibility:hidden" src="../../../assets/images/confirm.png" alt="">
                            </div>
                    </li>
                </ul>
                 
            </div>
            <div class="bott" style="position:absolute;bottom: 0rem;height:1.34rem;background:#f5f5f5;width: 100%;">
                    <div class="buttonn btn" @click="chongzhiin" >
                                                        下一步
                    </div>
                </div>
           
           
        </div>
         <transition name="slide">
           <router-view></router-view>
        </transition>
  </div>
</template>

<script>
import headertop from '../../header/header'
import { kefu } from '../../../assets/api/app.js'
export default {
    components: {
        headertop,
    },
  data() {
    return {
        title:"充值",
        datal:"助手",
        type:"aa",
        val:'',
        result:"",
        resultin:"",
        i:0,
        onlineURL:""
    }
  },
 mounted(){
      this.onlineURL = JSON.parse(myStorage.getItem("sysConfigMap")).onlineCustomService.cvalue;
   this.getapi();
   this.$nextTick(()=>{
        this.getulheight();
       if(this.$store.state.isid){
            document.getElementsByClassName("bott")[0].style.bottom=document.getElementsByClassName("pde")[0].offsetHeight+'px';
       }
       
        
   })
  
 },
 methods:{
     serviceFuncA(){
          if(this.$store.state.isid){
                     kefu()
                }else{
                    window.open(onlineURL) 
                }
     },
     disnone(){
        //  alert("ddd")
         this.$refs.zhuzhein.style.display='none',
             this.i=0;
     },
		 	getulheight(){
		 		var bodyheight=document.getElementsByTagName("body")[0].offsetHeight;
		 		var inputtheight=document.getElementsByClassName("inputt")[0].offsetHeight;
		 		var jineheight=document.getElementsByClassName("jine")[0].offsetHeight;
		 		var ppheight=document.getElementsByClassName("pp")[0].offsetHeight;
		 		var bottheight=document.getElementsByClassName("bott")[0].offsetHeight;
		 		
		 		var ulheight=bodyheight-45-inputtheight-jineheight-ppheight-bottheight;
		 		document.getElementsByClassName("zhifubank")[0].style.height=ulheight+"px"
		 		console.log(ulheight)
		 	},
     chongzhi(){
        //  alert("跳转到充值页面,这个页面还没写")
         this.$store.state.rechargtype=2;
         this.$router.push({path:"/rechargeRecord"})
     },
     mycollect(){
        if(this.i==0){
            this.$refs.zhuzhein.style.display='block',
            this.i=1;
            console.log(this.i)
        }else{
             this.$refs.zhuzhein.style.display='none',
             this.i=0;
              console.log(this.i)
        }
         
     },
    
    //  kefu(){
         
        // this.$router.push({ path: `/bank` })
        // window.location.href='https://f18.livechatvalue.com/chat/chatClient/chatbox.jsp?companyID=876510&configID=72957&jid=8025085340&s=1'
    //  },
     keyup(){
          this.$refs.inputtt.value = this.$refs.inputtt.value.replace(/[^\d.]/g,"");  //清除“数字”和“.”以外的字符  
            this.$refs.inputtt.value = this.$refs.inputtt.value.replace(/\.{2,}/g,"."); //只保留第一个. 清除多余的  
            this.$refs.inputtt.value = this.$refs.inputtt.value.replace(".","$#$").replace(/\./g,"").replace("$#$","."); 
            this.$refs.inputtt.value = this.$refs.inputtt.value.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3');//只能输入两个小数  
            if(this.$refs.inputtt.value.indexOf(".")< 0 && this.$refs.inputtt.value !=""){//以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额 
                this.$refs.inputtt.value= parseFloat(this.$refs.inputtt.value); 
                this.val=this.$refs.inputtt.value;
            } 
       
         
        var  lis= document.getElementById("bgcc").children;
        for(var i=0;i<lis.length;i++){
            lis[i].classList.remove("bgcc")
        }
          for(var i=0;i<lis.length;i++){
            if(this.val!==parseInt(lis[i].innerHTML)){
                 lis[i].style.border="1px solid #ccc"
            }else{

            }
        }
        for(var i=0;i<lis.length;i++){
            if(this.val==parseInt(lis[i].innerHTML)){
                 lis[i].style.border="none"
                 lis[i].classList.add("bgcc")
            }
        }


        // var  lis= document.getElementById("bgcc").children;
        // for(var i=0;i<lis.length;i++){
        //     lis[i].classList.remove("bgcc")
        // }
        // for(var i=0;i<lis.length;i++){
        //     if(this.val==parseInt(lis[i].innerHTML)){
        //          lis[i].classList.add("bgcc")
        //     }
        
         
        // }
     },
     getapi(){
          var flash=localStorage.getItem("flash");
            console.log(flash)
            if(flash==1){
                 var userid=this.$store.state.userid;
                this.result=base.getApi().rechargeBankList(userid, '').data.listB;
        //       console.log(base.getApi().rechargeBankList(userid, ''))
            }else{
                this.$router.push({path:"/recharge"})
            }
        
     },
    jinee1(){
        this.val=parseInt(event.currentTarget.innerHTML);
        var  lis= document.getElementById("bgcc").children;
        for(var i=0;i<lis.length;i++){
            lis[i].classList.remove("bgcc");
              lis[i].style.border=" 1px solid #ccc";
        }
       event.currentTarget.classList.add("bgcc")
        event.currentTarget.style.border="none"
    },
    xuanzhong(){
           var xuanzhongs=document.getElementsByClassName("xuanzhong");
           var imgs=[]
           for(var i=0;i<xuanzhongs.length;i++){
               imgs.push(xuanzhongs[i].childNodes[0])
           }
            for(var i=0;i<imgs.length;i++){
                imgs[i].style.visibility="hidden"
            }
            console.log(event.currentTarget.children[4])
           event.currentTarget.children[4].children[0].style.visibility="visible"
            var name=event.currentTarget.children[4].getAttribute("name");
            // console.log(name)
           for(var i=0;i<this.result.length;i++){
               if(this.result[i].account==name){
                   this.resultin=this.result[i];
                // console.log(this.result[i])
                   this.$store.state.bankdetal=this.result[i];
                //    console.log( this.resultin)
               }
           }
    },
    chongzhiin(){
         
        this.val=this.$refs.inputtt.value
          var turnType="";
          var showType="";
          var plateformConfigId="";
          var userId= this.$store.state.userid;
          var amount=Number(this.val).toFixed(2);
           this.$store.state.chamount=amount
          console.log(amount)
          var idname=event.currentTarget.getAttribute("name");
          for(var i=0;i<this.$store.state.rechargedetal.length;i++ ){
               console.log(this.$store.state.rechargedetal[i].plateformConfigId)
              if(idname==this.$store.state.rechargedetal[i].id){
                  turnType=this.$store.state.rechargedetal[i].payType.type;
                  showType=this.$store.state.rechargedetal[i].payType.showType;
                 
                  plateformConfigId=this.$store.state.rechargedetal[i].plateformConfigId;
              }
              
          }
            if(amount>=1){
                 if(this.resultin){
                     this.$store.state.goNum+=1;
                      this.$router.push("/bankdetal")
                 }else{
                      $.tips( "请选择银行",2000)
                 }
            }else{
                $.tips( "请输入金额",2000)
            }




    },
   
 }
  
}
</script>

<style scoped lang="less">
.zhushou{
    width: 100%;
    height: 100%;
    z-index: 8888;
    position: absolute;
    // top: 0;
    >.zhuzhein{
    height: 100%;
    background: black;
    width: 100%;
    opacity: 0.5;
   
    }
    ul{
        position: absolute;
        right: 0.05rem;
        width: 0.9rem;
        top:0.1rem;
        height:0.8rem;
        background: white;
          border-radius: 0.06rem;
        >li{
            
            color:gray;
            font-size: 0.14rem;

        }
        >li:nth-child(1){
            position: absolute;
            left: 0.5rem;
            top:-0.08rem;
            width: 0.16rem;
            height:0.16rem;
            background:white;
            transform:rotate(45deg);
            
        }
        >li:nth-child(2){
            line-height: 0.4rem;
            border-bottom: 1px solid#f5f5f5;
        }
        >li:nth-child(3){
            line-height: 0.4rem;
        }
    }
}


   .buttonn{
            font-size: 0.28rem;
    color: white;
    line-height: 0.94rem;
    padding: 0 0.63rem;
    border-radius: 10px;
    width: 4.22rem;
    position: absolute;
    left: 50%;
    margin-left: -2.7rem;
    top: 0.1rem;
    }
.zhifubank{
    margin-bottom: 0.8rem;
    /*height:2.75rem;*/
    overflow-y: scroll;
    overflow-x: hidden;
    >li{
        // margin-top:0.1rem;
        position: relative;
        background: white;
        padding: 0.1rem 0;
        border-bottom: 0.1rem solid #f5f5f5;
        >p{
            width: 100%;
            overflow: hidden;
            line-height: 0.5rem;
            padding-left:10%;
            >span{
               float: left;
            }
            >span:nth-child(1){
                width: 24%;
                text-align: left;
                color:#666;
                font-size: 0.28rem;
            }
            >span:nth-child(2){
                 width:50%;
                text-align:left;
                 font-size: 0.28rem;
            }
        }
        >div{
               position: absolute;
    top: 0.8rem;
    right: 0.2rem;
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    border: 1px solid #666;
            >img{
                   width: 0.65rem;
    left: -1px;
    top: -1px;
    position: absolute;
            }
        }
    }
    >li:nth-child(1){
    	margin-top:0rem;
    }
}
.bgcc{
    background: url(../../../assets/images/czbj.png) no-repeat center center;
        background-size: 100% 0.55rem;
    // background-size: contain;
    color:#D71437;
}
.chargedetal{
    width: 100%;
    height:100%;
    background: #f5f5f5;
    font-size:0.16rem;
    overflow: hidden;
    .inputt{
           height: 0.9rem;
    line-height: 0.9rem;
    color: gray;
    background: white;
        span:first-child{
            float: left;
            width: 38%;
           font-size: 0.3rem;
        }
        input{
                float: left;
    width: 50%;
    border: none;
    outline: none;
    height: 0.9rem;
    text-align: center;
    font-size: 0.3rem;
        }
        span:last-child{
            width: 10%;
            height:0.9rem;
            line-height: 0.9rem;
            font-size: 0.3rem;
        }
    }
    .jine{
         background: white;
         border-top:1px solid #f5f5f5;
        >ul{
            overflow: hidden;
            width: 100%;
            padding-top:0.2rem;
            padding-bottom: 0.3rem;
             background: white;
            >li{
                    float: left;
    width: 20%;
    margin: 0.15rem 2.5%;
    box-sizing: border-box;
    border: 1px solid #CCCCCC;
    height: 0.55rem;
    line-height: 0.55rem;
    text-align: center;
    font-size: 0.28rem;
            }
        }
    }
}

</style>
