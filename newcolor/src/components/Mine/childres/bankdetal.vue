<template>
  <div style="top:0; background: #f5f5f5;width:100%;height:100%;overflow:hiddden;">
     <headertop :title="title" id="heaf"> </headertop>
      
    <div ref="bankl" style="overflow:scroll;position:relative;">
      <p style="       font-size: 0.28rem;
    text-align: left;
    padding-left: 0.2rem;
    line-height: 0.85rem;
    color: #666666;">收款账号信息</p>
        <div class="yinhangxinxi">
            <p>
              <span>收款银行</span>
              <span style="white-space: nowrap;overflow: scroll ;">{{result.bankName}}</span>
              <span  @click="copyArticle"> 复制</span>
            </p>
            <p>
              <span>收款人</span>
              <span style="white-space: nowrap;overflow: scroll ;">{{result.payee}}</span>
              <span  @click="copyArticle"> 复制</span>
            </p>
            <p>
              <span>收款账号</span>
              <span  style="white-space: nowrap;overflow: scroll ;">{{result.account}}</span>
              <span  @click="copyArticle"> 复制</span>
            </p>
            <p>
              <span>收款支行</span>
              <span style="white-space: nowrap;overflow: scroll ;">{{result.openPoint}}</span>
              <span  @click="copyArticle"> 复制</span>
            </p>
            <p>
              <span>充值码</span>
              <span style="white-space: nowrap;overflow: scroll ;">{{code}}</span>
              <span  @click="copyArticle"> 复制</span>
            </p>
        </div>
        <div class="yinhangxinxi bgc" style="margin-top:0.2rem;">
           <p  @click="shangshen">
              <span>存入时间</span>
              <span>{{nowdata}}</span>
              <span style="height:0.4rem;border:none;margin-top:0.25rem;"> </span>
            </p>
             <p>
              <span>存入金额</span>
              <!--<span ref="inputt">{{chamount}}</span>-->
              <input ref="inputt" pattern="\d" maxlength="6" type="tel" placeholder="请输入金额" style="    float: left;
    width: 30% !important;
    text-align: left;
    font-size: 0.28rem;
    line-height: 0.65rem;
    margin: 0.1rem 0px;
    border: none;
    outline: none;" v-model="chamount" @keyup="keyup">
              <span style="    height: 0.4rem;
    border: none;margin-top:0.25rem;"  @click="qingchu"> </span>
            </p>
            <p>
              <span>存款人姓名</span>
             <input type="text" placeholder="请输入存款人姓名" style="float: left;
    width: 49% !important;
    text-align: left;
    font-size: 0.28rem;
    line-height: 0.85rem;
    border: none;
    outline: none;" v-model="name">
            </p>
        </div>

        <div class="xuanzhong">
            <ul>
                <li id="1"  @click="disnone"><span style=" display:inline-block;border-radius: 50%; border: 1px solid #dbdbdb;" ><img class="imgs"  style="visibility: visible;"  src="../../../assets/images/confirm.png" alt=""></span><span  style="padding-left:0.1rem;"> 网银转账</span></li>
                <li   id="4" @click="disnone"><span style=" display:inline-block;border-radius: 50%; border: 1px solid #dbdbdb;" ><img class="imgs" style="visibility: hidden;"  src="../../../assets/images/confirm.png" alt=""></span><span  style="padding-left:0.1rem;"> ATM自动柜员机</span></li>
                <li id="2" @click="disnone"><span style=" display:inline-block;border-radius: 50%; border: 1px solid #dbdbdb;"  ><img class="imgs" style="visibility: hidden;"  src="../../../assets/images/confirm.png" alt=""></span><span  style="padding-left:0.1rem;"> ATM现金入款</span></li>
                <li id="5" @click="disnone"><span style=" display:inline-block;border-radius: 50%; border: 1px solid #dbdbdb;"  ><img class="imgs" style="visibility: hidden;"  src="../../../assets/images/confirm.png" alt=""></span><span  style="padding-left:0.1rem;"> 银行柜台转账</span></li>
                <li id="3" @click="disnone"><span style=" display:inline-block;border-radius: 50%; border: 1px solid #dbdbdb;"   ><img class="imgs" style="visibility: hidden;"  src="../../../assets/images/confirm.png" alt=""></span><span  style="padding-left:0.1rem;"> 手机银行转账</span></li>
                <li  id="6" @click="disnone"><span style=" display:inline-block;border-radius: 50%; border: 1px solid #dbdbdb;"  ><img class="imgs" style="visibility: hidden;"  src="../../../assets/images/confirm.png" alt=""></span><span  style="padding-left:0.1rem;"> 其它</span></li>
                
            </ul>
        </div>
        <p style="position:absolute;width:100%;z-index:0">
           <span  class="buttonn" style="font-size:0.28rem;margin-right:0.2rem;" @click="goBack" >上一步</span>  <span class="buttonn" style="font-size:0.28rem;" @click="goto" >我已支付</span>

        </p>
  			
  		
    </div>
    	<div class="pickerr" style="display:none;height:100%;">
          <div style="position:absolute;top:0;height:100%;width:100%;background:#000;opacity: 0.3;"></div>
  				 <div class="zhezhaoo">
            <div class="pi"><p><span @click="xiajiang">取消</span><span @click="xiajiang">完成</span></p></div>
            <div class="keer">
                <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
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
export default {
    components: {
        headertop,
    },
  data() {
    return {
      title:"转账资料",
        result:"",
        code:"",
        nowdata:"",
        // chamount:"",
        name:"",
        type:1,
        slots: [
        {
          flex: 1,
          values: ['2016','2017','2018','2019','2020','2021','2022','2023','2024','2025','2026','2027'],
          className: 'slot1',
          textAlign: 'left'
        }, 
        {
          divider: true,
          content: '-',
          className: 'slot2'
        }, 
        {
          flex: 1,
          values: ['01', '02', '03', '04', '05', '06','07','08','09','10','11','12'],
          className: 'slot2',
          textAlign: 'left'
        },
         {
          divider: true,
          content: '-',
          className: 'slot2'
        }, 
        {
          flex: 1,
          values: ['01', '02', '03', '04', '05', '06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
          className: 'slot3',
          textAlign: 'left'
        },
         {
          divider: true,
          content: '-',
          className: 'slot2'
        }, 
        {
          flex: 1,
          values: [
          '01点','02点','03点','04点','05点','06点','07点','08点','09点','10点','11点','12点','13点','14点','15点','16点','17点','18点','19点','20点','21点','22点','23点','24点'
          ],
          className: 'slot4',
          textAlign: 'left'
        },
         {
          divider: true,
          content: '-',
          className: 'slot2'
        },
        {
          flex: 1,
          values: [
          '01分','02分','03分','04分','05分','06分','07分','08分','09分','10分','11分','12分','13分','14分','15分','16分','17分','18分','19分','20分','21分','22分','23分','24分',
          '25分','26分','27分','28分','29分','30分','31分','32分','33分','34分','35分','36分','37分','38分','39分','40分','41分','42分','43分','44分','45分','46分','47分','48分','49分',
          '50分','51分','52分','53分','54分','55分','56分','57分','58分','59分','60分'
          ],
          className: 'slot4',
          textAlign: 'left'
        },
        
      ]
    };
  },
  mounted() {
    // alert("dd")
      console.log(this.chamount)
      this.getapi()
      console.log(document.getElementById("heaf"))
      this.$refs.bankl.style.height=document.getElementsByTagName("body")[0].offsetHeight-document.getElementById("heaf").offsetHeight+"px"
  },
  computed: {
    chamount(){
      return this.$store.state.chamount
    }
  },
  methods: {
    goBack(){
      this.$router.go(-1)
    },
  	 onValuesChange(picker, values) {
         console.log(values)
         var valtwo=parseInt(values[0])
		  	 var valtre=values[3].split("");
		  	 valtre=valtre[0]+""+valtre[1];
		  	 var valfor=values[4].split("");
		  	 valfor=valfor[0]+""+valfor[1]
         console.log(valfor)
         var d = new Date(values[0],values[1],0);
         var days=d.getDate();
         var mountdays= document.getElementsByClassName("slot3")[0].children[0].children;
         console.log(document.getElementsByClassName("slot3")[0].children[0])
         var n=mountdays.length;
          for(var i=0;i<31;i++){
             mountdays[i].style.visibility="visible"
          }

          for(var i=days;i<n;i++){
            mountdays[i].style.visibility="hidden"
          }
			 	 var val=`${values[0]}/${values[1]}/${values[2]} ${valtre}:${valfor}`;
			   console.log(val)
			   this.nowdata=val
      },
      xiajiang(){
      	
         $(".zhezhaoo").animate({bottom:'-3rem'});
         document.getElementsByClassName("pickerr")[0].style.display="none"
     },
     shangshen(){
       document.getElementsByClassName("pickerr")[0].style.display="block"
        $(".zhezhaoo").animate({bottom:'0px'});
       
    },
      goto(){
          console.log("dsffffffff")
              var re = /^\d+(\.\d+)?$/;//判断字符串是否为数字//判断正整数/[1−9]+[0−9]∗]∗/ 
               console.log( this.chamount)
               console.log(re.test( this.chamount))
               var nowdata=(new Date(this.nowdata)).getTime();
               var data=new Date().getTime()
               console.log(data)
               console.log(new Date(this.nowdata).getTime()) 
        if (re.test( this.chamount)&& this.chamount>=1) { 
        	if(nowdata<data){
            // alert(nowdata,data)
        		if(this.name){
              console.log(this.name)
              var userId=this.$store.state.userid,
              bankId=this.$store.state.bankid,
              code=this.code,
              amount=this.chamount;
               this.$store.state.chongchamount=this.chamount;
              name=this.name;
              // this.type=0;
              var timee=this.nowdata.split("/");
              var time=timee[0]+'-'+timee[1]+'-'+timee[2].split(" ")[0]+" "+timee[2].split(" ")[1]+":00";
              console.log(time)
              var resultin=base.getApi().bankPay(userId, bankId, code, time, amount, name, this.type);
              if(resultin.code==200){
                this.$store.state.goNum+=1;
                this.$store.state.rechargePash="/banking"
                 this.$router.push({path:"/rechargedetaling"})
              }
            }else{
              $.tips("请输入存款人姓名",1000)
                }
        	}else{
            // alert(nowdata)
        		$.tips("不可输入未来时间")
        	}
        　　    　
            
        　　}else{
             $.tips("请输入存款金额",1000)
            }
      },
        keyup(){
              this.$store.state.chamount = this.$refs.inputt.value;
              this.$store.state.chongchamount=this.$refs.inputt.value;
     },
     qingchu(){
         this.$refs.inputt.value="";
          this.chamount=this.$refs.inputt.value;
          this.$store.state.chongchamount=this.$refs.inputt.value;
     },
    //  复制
    	 copyArticle(event) {
             console.log("ssssssssssssssssssssssssss")
            var range = document.createRange();
            console.log( event.currentTarget.parentNode.children[1])
        range.selectNode( event.currentTarget.parentNode.children[1]);

        var selection = window.getSelection();
        if(selection.rangeCount > 0) selection.removeAllRanges();
        selection.addRange(range);

        document.execCommand('copy');
        $.tips("复制成功");
      },
      getapi(){
         var flash=localStorage.getItem("flash");
            console.log(flash)
            if(flash==1){
               console.log( this.$store.state.bankdetal.id)
              this.$store.state.bankid=this.$store.state.bankdetal.id;
               this.result=this.$store.state.bankdetal;
               console.log(this.result)
              this.code=Math.random().toString(36).substr(2,4).toUpperCase();

               var data=new Date();
                var year=data.getFullYear() ;
                var mouth=data.getMonth()+1;
                var today=data.getDate();
                  mouth=mouth<10?(`0${mouth}`):mouth;
                  today=today<10?(`0${today}`):today;
                var hour=data.getHours()<10?(`0${data.getHours()}`):data.getHours();
                var minutes=data.getMinutes()<10?(`0${data.getMinutes()}`):data.getMinutes();
                this.nowdata=`${year}/${mouth}/${today} ${hour}:${minutes}`;
               this.chamount=this.$store.state.chongchamount
            }else{
              this.$router.push({psth:"/recharge"})
            }
         
      },

    disnone(){
       var imgs=document.getElementsByClassName("imgs");
        for(var i=0;i<imgs.length;i++){
            imgs[i].style.visibility='hidden';
        
        }
        this.type= event.currentTarget.id; 
        event.currentTarget.children[0].children[0].style.visibility="visible"
    },
  }
};
</script>

<style scoped lang='less'>
.pickerr{
  position: fixed;
 
	background-color:rgba(0,0,0,0.2); 
	bottom:0rem;
	width: 100%;
  height:0;
  z-index:9999;
	.zhezhaoo{
		position: absolute;
		bottom: 0;
		width: 100%;
		background: #fff;
		bottom:-2rem;
	}
	.pi{
		position: absolute;
		/*top: 0.1rem;*/
		font-size:0.16rem;
		line-height: 0.4rem;
		background: #fff;
		width: 100%;
		z-index:99;
		p{
			width: 90%;
			border-bottom:1px solid #75bbe4;
			margin: 0 auto;
			span{
				display: inline-block;
				width: 50%;
			}
		}
	}
}
.bgc{
    >p{
        >input:nth-child(2){ 
           
           width: 56% !important;
        }
        >input:nth-child(3){
            border: none !important;
           width: 10% !important;
        }
        
    }
   >p:nth-child(1){
        >span:nth-child(3){
            background: url(../../../assets/images/timeK.png) no-repeat center center;
             background-size:0.4rem;
       }
      
   }
   >p:nth-child(2){
        >span:nth-child(3){
            background: url(../../../assets/images/dele.png) no-repeat center center;
             background-size:0.4rem;
       }
      
   }

}
  .buttonn{
         margin: 0.5rem 0;
    display: inline-block;
    vertical-align: top;
    margin-bottom: 0.2rem;
    color: white;
    line-height: 0.7rem;
    border-radius: 0.15rem;
    width: 2rem;
    }

.xuanzhong {
  font-size: 0.28rem;
  margin-top: 0.2rem;
  background: white;
  > ul {
    overflow: hidden;
    > li {
      float: left;
      width: 45%;
      line-height: 0.8rem;
      text-align: left;
      padding-left:5%;
      > span {
        height: 0.4rem;

        vertical-align: middle !important;
        > img {
          width: 0.4rem;
          vertical-align: top !important;
        }
      }
    }
  }
}
.yinhangxinxi {
  font-size: 0.14rem;
  background: white;
  width: 100%;
  // padding-left: 0.2rem;

  > p {
    width:96%;
    margin-right:0.3%;
    margin-left:0.3%;
    margin:0 auto;
    height:0.85rem;
    border-bottom: 1px solid #f5f5f5;
    overflow: hidden;
   span{
      font-size:0.28rem;
      color:#666;
      float: left;
      line-height: 0.85rem;
      text-align:left;
       overflow: hidden;
       
   }
   span:nth-child(1){
     width:23%;
   }
   span:nth-child(2){
     width: 50%;
     
   }
    span:nth-child(3) {
          float: right;
    box-sizing: border-box;
    margin-right: 2%;
    width: 16%;
    font-size: 0.28rem;
    text-align: center;
    line-height: 0.55rem;
    margin-top: 0.15rem;
    border-radius: 4px;
    }
  }
}
</style>
