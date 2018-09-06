<template>
  <div  style="overflow: hidden;position:absolute;top:0;width:100%;height:100%;background: #f5f5f5;z-index:1000;">
        <Header title="下级开户"></Header>
         <p class="maintop" style="font-size:0.28rem">
              <span ref="nexto" style="" @click="nexto">下级开户</span>
              <span ref="nextt" @click="nextma">查看邀请码</span>
          </p>
      <div class="main" ref="meno">
          <div class="leixing">
              <p>用户类型</p>
               <p class="leixip" id=1 @click="selectoo">
                  <span ref="boxo" >
                     <img class="imgs" v-if="ifconfirmed" src="../../../../assets/images/confirm.png" :style="styleObject" alt="">
                       <img class="imgs" v-if="!ifconfirmed" src="../../../../assets/images/238270335586544409.png" alt="">
                  </span>
                  <span >代理</span>
              </p>
              <p class="leixip" id=2  @click="selecttt">
                  <span ref="boxt" style="margin-left: 0.28rem;">
                      <img class="imgs" v-if="!ifconfirmed"  src="../../../../assets/images/confirm.png" :style="styleObject" alt="">
                      <img class="imgs" v-if="ifconfirmed"  src="../../../../assets/images/238270335586544409.png" alt="">
                  </span>
                  <span>玩家</span>
              </p>
          </div>
          <div class="leixing">
              <p>开户类型</p>
               <p class="leixip" @click="selecto" id="1">
                  <span ref="boxo" >
                     <img class="imgs" v-if="ifconfirm" src="../../../../assets/images/confirm.png" :style="styleObject" alt="">
                       <img class="imgs" v-if="!ifconfirm" src="../../../../assets/images/238270335586544409.png" alt="">
                  </span>
                  <span >精准开户</span>
              </p>
              <p class="leixip" @click="selectt" id="2">
                  <span ref="boxt">
                      <img class="imgs" v-if="!ifconfirm" src="../../../../assets/images/confirm.png" :style="styleObject" alt="">
                       <img class="imgs" v-if="ifconfirm" src="../../../../assets/images/238270335586544409.png" alt="">
                  </span>
                  <span>生成邀请码</span>
              </p>
          </div>
          <ul>
              <li> 
                  <span ref="yser">用户名</span>
                  <!-- <input class="usernameipt" :value="modata" type="text" placeholder="请输入用户名"> -->
                  <input class="usernameipt" ref="usernameipt" v-model="modata" type="text" placeholder="请输入用户名" >
                  <span style="" @click="mode">
                      <span class="xuanma"  v-if="ifxuanma">随机选码</span> 
                  </span>
              </li>
               <li> 
                   <span>彩票返点</span><input type="button" :value="localRebate"  style="color:#666;padding-left:0;background: transparent;text-align: left;font-size:0.28rem;" class="jin vall">
                   <span class="jin" >
                       <span></span >
                        </span></li>
          </ul>
          <p  v-if="ifscrest" style="font-size:0.28rem;color:#666;line-height:0.5rem;color:red">初始密码为123456</p> 
          <p ref="pp" style="font-size:0.28rem;line-height:0.6rem;height:0.6rem;color:red;"></p>
          
          <div class="robate"> 
              <ul>
                  <li :id="index" :name="item.rebateValue" @click="slect" v-for="(item,index) in result" :key="index">
                      {{item.rebateText}}
                  </li>
              </ul>
          </div>
          <div class="button buto" @click="kaihu">立即开户</div>
      </div>

      <!-- <yaoqingma id="yaoqingma" :resultsecode="resultsecode"></yaoqingma> -->
       <yaoqingma id="yaoqingma" ></yaoqingma>
  </div>
</template>

<script>
import yaoqingma from './yaoQing.vue'
import Header from '../../../header/header'
export default {
  data() {
    return {
        styleObject:{
             borderRadius: '50%',
            background:window.bgmapcolor,
           
        },
        ifxuanma:false,
        ifscrest:true,
        ifconfirm:true,
        result:"",
        val:"",
        i:"",
        localRebate:"",
        modata:"",
        typeid:"1",
        pageNumber:1,
        pageSize:10,
        ifconfirmed:1,
        ovtype:1
        // resultsecode:[]
    }
  },

 mounted:function(){
    //  this.getApi()
     this.robate();
     console.log(this.$store.state.daiLiType)
     if(this.$store.state.daiLiType==1){
         this.$refs.meno.style.display="block";
          document.getElementById("yaoqingma").style.display="none";
     }else{
        this.$refs.meno.style.display="none";
          document.getElementById("yaoqingma").style.display="block";
          this.nextma()
     }
      this.i=0;
     var self=this
    $(".jin").click(function(){
        self.i++;
        var div=$(".robate");
        if(self.i%2==1){
            div.animate({height:'230px'},"slow");
       
        }else{
             div.animate({height:'0'},"slow");
        }
     });
  
 },
 methods:{

     nextmen(){
         document.getElementsByClassName("yaoqinma")[0].style.display="none";
        this.$refs.nexto.style.borderBottom="2px solid #fe6053";
         this.$refs.nexto.style.color="red";
          this.$refs.nextt.style.color="#000";
     },
     nextma(){
         this.getApi();
         this.$nextTick(()=>{
              document.getElementById("yaoqingma").style.display="block";
            document.getElementsByClassName("main")[0].style.display="none";
            this.$refs.nextt.style.borderBottom="2px solid "+window.mapcolor;
            this.$refs.nextt.style.color=window.mapcolor;
            this.$refs.nexto.style.borderBottom="none";
            this.$refs.nexto.style.color="#000";
         })
        
         
        //  console.log(this.resultsecode)

     },
     nexto(){
        this.$refs.meno.style.display="block";
         document.getElementById("yaoqingma").style.display="none";

        this.$refs.nexto.style.borderBottom="2px solid "+window.mapcolor;
         this.$refs.nexto.style.color=+window.mapcolor;
         this.$refs.nextt.style.borderBottom="none";
         this.$refs.nextt.style.color="#000";
        //  this.getApi();
     },
     kaihu(){
         console.log(this.typeid);
         if(this.typeid==1){
             var reg =/^[a-zA-Z0-9]{4,16}$/; 
        　if(!reg.test( this.modata)){  
              $.tips("请输入6-16位字母或数字");
              return;
        　　}   
             if(this.modata&&this.localRebate){
                  var ploxyRegister=base.getApi().ploxyRegister(this.$store.state.userid, this.modata,this.ovtype,this.localRebate);
                  if(ploxyRegister.code==200){
                      this.$router.push({path:"/daili/agencyDown"})
                  }
             }else{
                 $.tips("请确定用户名和彩票返点填写完整")
             }
            
         }else{
            //  this.$refs.usernameipt
                var regg =/^[0-9]{6}$/; 
        　if(!regg.test( this.modata)){  
              $.tips("请输入6位数字");
              return;
        　　}  
              if(this.modata&&this.localRebate){
                  var ploxyRegister=base.getApi().buildCode(this.$store.state.userid,this.modata,this.ovtype,this.localRebate);
                  if(ploxyRegister.code==200){

                    this.nextma();
                     this.modata="";
         this.localRebate="";
                  }
                  
                  console.log(ploxyRegister)
             }else{
                 $.tips("请确定随机码和彩票返点填写完整")
             }
              
         }
        
     },
     selecto(){
          document.getElementsByClassName("buto")[0].innerHTML="精准开户"
         this.$refs.yser.innerHTML="用户名";
        this.modata="";
         this.localRebate="";
         this.$refs.usernameipt.placeholder="请输入用户名";
         this.ifscrest=true;
          this.typeid= event.currentTarget.id;
             this.ifconfirm=true;
             this.ifxuanma=false;
     },
      selectoo(){
          this.ifconfirmed=1;
          this.ovtype=event.currentTarget.id;
     },
     selecttt(){
         this.ifconfirmed=0;
          this.ovtype=event.currentTarget.id;
     },
     selectt(){
        //  $(".usernameipt").attr("disabled", "disabled");
        //  this.$refs.style.usernameipt.color="#666"
        //  $(".usernameipt").attr("color", "#666");
         document.getElementsByClassName("buto")[0].innerHTML="生成邀请码"
         this.$refs.usernameipt.placeholder="6位数字组合";
        //  this.$refs.usernameipt.values="";
         this.modata="";
         this.localRebate="";
         this.$refs.yser.innerHTML="邀请码";
         this.typeid= event.currentTarget.id;
         this.ifscrest=false;
        //   event.currentTarget.children[0].style.border="none";
            // this.$refs.screst.style.display="none"
        //   this.$refs.boxo.style.border="1px solid #666";
        //   this.$refs.xuanma.style.display="inline-block";
          this.ifconfirm=false;
          this.ifxuanma=-true;
        //    this.$refs.boxo.children[0].style.visibility="hidden"
        //  event.currentTarget.children[0].children[0].style.visibility="visible"
     },
     mode(){
         this.modata=base.getApi().randomCode(this.$store.state.userid).data;
     },
     slect(){
         this.localRebate=event.currentTarget.getAttribute("name");
        document.getElementsByClassName("vall")[0].value=this.localRebate
         console.log(this.localRebate)
         if(event.currentTarget.id==0){
             this.$refs.pp.innerText="您的赔率与下级相同,您将没有佣金"
         }else{
              this.$refs.pp.innerText=""
         }
         this.i++;
          $(".robate").animate({height:'0'},"slow");
     },
     
      robate(){
          var userid=JSON.parse(localStorage.getItem("currentUser")).id
        base.getApi().rebateList1(userid).then((res)=>{
                 this.result=res.data
         });
        //  console.log(this.result)
      },
      getApi(){
         var userid=JSON.parse(localStorage.getItem("currentUser")).id;
         this.$store.state.pageSize=10;
        base.getApi().codeList1(this.pageNumber,this.$store.state.pageSize,userid).then((res)=>{
                     this.resultsecode=res.data;
                      this.$store.state.resultsecode=this.resultsecode
         });
        
         console.log(this.resultsecode)
     },
 },
  components: {
            "yaoqingma": yaoqingma,
            Header,
        },
}
</script>

<style scoped lang='less'>
.usernameipt{
    font-size: 0.28rem;
    color:#666;
}
#yaoqingma{
    display: none;
}
.yaoqinma{
    position: absolute;
    top:0.95rem;
    width:100%;
    display: none;
}
.button{
       margin: 1rem auto;
    font-size: 0.28rem;
    color: white;
    line-height: 0.75rem;
    padding: 0 0.4rem;
    border-radius: 0.1rem;
    width: 3rem;
    // background: -webkit-gradient(linear, left top, right top, from(#fa3956), to(#ff6b52));
    // background: linear-gradient(90deg, #fa3956, #ff6b52);
    
}
.xuanma{
    display:inline-block;
    padding:0 0.1rem;
    // border:1px solid red;
    line-height:0.4rem;
    font-size:0.28rem;
    border-radius: 6px;
   
    // color:red;
    // display: none;
    // visibility: hidden;
    // >
}
.leixing{
    overflow: hidden;
    line-height: 0.8rem;
    padding: 0 0.2rem;
    >p{
        float: left;
         font-size: 0.28rem;
        img{
            width: 0.4rem;
            vertical-align: top;
            // margin-top: 0.6rem;
            
        }
    }
    >.leixip{
        margin-left:0.1rem; 
        color:#666;
        font-size:0.28rem;
        height: 0.8rem;
        span:nth-child(1){
            display: inline-block;
            margin-top: 0.2rem;
            width: 0.4rem;
            height: 0.4rem;
            border-radius: 50%;
            box-sizing: border-box;
        }
        span:nth-child(2){
            padding-left:0.1rem;
            vertical-align: top;
        }
    }
}
  .maintop{
        overflow: hidden;
        width:100%;
        border-bottom: 1px solid #d8d3d3;
        span{
            float: left;
            width:50%;
            line-height: 0.8rem;
        }
        span:nth-child(1){
            // border-right:1px solid gray;
            box-sizing: border-box;
        }
    }
.main{
    font-size: 0.28rem !important;
    position: relative;
    display: none;
    
    >ul{
        // margin-top: 0.4rem;
        width:100%;
        >li{
            line-height: 0.8rem;
            // border-radius: 
            background: #fff;
            border: 1px solid #f5f5f5;
            overflow: hidden;
            >span{
                float: left;
                overflow: hidden;
                font-size: 0.28rem;
            }
            >span:nth-child(1){
                width:30%;
                text-indent: 1em;
                text-align: left;

            }
         
            >span:last-child{
                width:30%;
                float:right;
                font-size:0.28rem;
            }
            >input{
                width:40%;
                 float: left;
                border: none;
                outline: none;
                height: 0.8rem;
                font-size: 0.28rem;
                // margin-top: 0.05rem;
            }
            >.jin{
                span{
                     border-top:1px solid #3c3232;
                     border-left:1px solid#3c3232;
                     height:0.1rem;
                     display: inline-block;
                      transform:rotate(-135deg);
                      width:0.1rem;
                }
               
           
            //     
            //     padding:0;
            //     margin-top:0.13rem;
            //    
            }
        }
    }
    >.robate{
        width:80%;
        margin: 0 auto;
        height:0;
        overflow: scroll;
        background:#f5f5f5;
        // margin-top:0.1rem;
        position: absolute;
        z-index:10;
        left:50%;
        margin-left:-40%;
        top: 3.3rem;
        li{
               line-height: 0.8rem;
    font-size: 0.28rem;
        }
    }
}

    
</style>
