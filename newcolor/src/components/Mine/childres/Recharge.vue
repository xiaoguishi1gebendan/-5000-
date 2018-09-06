<template>
  	<div style="position:absolute;top:0;width:100%;height:100%;background: white;z-index:99;overflow:hidden;">
	 <headertop :title="title" :datal="datal" :goDetal="chongzhijilu" :goBack="goBack"> </headertop>
      	<div class="main" ref="firstone">
			<div class="user-message">
				<img src="../../../assets/images/headd.png" alt="">
				<div class="messageAll">
					<span id="userName" style="text-align:left">{{name}}</span>
					<span>余额：<span id="userBalanceP" style="color:red">{{parseFloat(amount).toFixed(2)}}&nbsp;&nbsp;</span>元</span>
				</div>
			</div>
		    <p style="height:0.05rem;background:#f5f5f5"></p>
			<div class="topicImg" style="font-size:0.26rem;color:red;text-align: left;padding-left:0.16rem;line-height: 0.6rem;;">选择充值金额后，系统将随机增加两位小数在金额尾数上；</div>
			<div class="typeAll">
				请选择充值类型
			</div>
			<div class="pre-paid towaytop">
				<ul>
					<li v-for="(item ,index) in list" :key="index" @click="routerto" class="paidin">
						<img :src="domain+item.logo.fileurl" alt="" >
						<span>
							<span style="float:left">{{item.name}}</span>
							
							<span style="float:left" class="paidinn" ><img style="width: 0.6rem !important;
    height: 0.5rem !important;" src="../../../assets/images/tuijian.png" alt="" /></span>
						</span>						

						<i :name='item.id' style="float: right;margin-top: 0.45rem;" class="iconfont"></i>
					</li>
				</ul>
			</div>
		</div>
	    <transition name="slide">
           <router-view></router-view>
        </transition>
		
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
			title:"充值类型",
			datal:"充值明细",
			list:[],
			// bodyheight:""
			name:"",
			amount:"",
			domain:""
        }
    },
    mounted(){
		
		
		this.getUser()
		this.$nextTick(()=>{
			console.log(this.list)
			var paidinns=document.getElementsByClassName("paidinn");
			for(var i=0;i<this.list.length;i++){
				if(this.list[i].isHot){
					paidinns[i].style.display="block"
				}
			}
		 })
	
		
	},
    methods:{
		goBack(){
			// this.$router.push({path:"/mine"})
			this.$router.go(-1)
		},
		chongzhijilu(){
			this.$router.push({path:"/rechargeRecord"})
			// alert("跳转到充值记录页面,还没做记录页面")
		},
        getUser(){
				localStorage.setItem("flash",1);
				var currentUser=JSON.parse(localStorage.getItem('currentUser'));
				var userid=currentUser.id;
				this.name=currentUser.account;
				this.amount=currentUser.balance;
				this.$store.state.chamount=currentUser.balance;
				this.$store.state.userid=currentUser.id;
				this.domain=base.domain
			if(!this.$store.state.rechage){
				console.log("33333333333333")
				this.$store.state.rechage= base.getApi().newRechargeList(userid).data.payIncomeTypeGroup;
				this.list=this.$store.state.rechage;
			}else{
				console.log("bbbbbbbbbbbbbbbbbbbb")
				this.list=this.$store.state.rechage;
			}
			
			this.$store.state.rechargePash=this.$route.path;
		},
		goBack() {
			if(this.$store.state.issufficient == 'yes'){
				this.$store.state.issufficient = 'no'
				// this.$router.push({path:'/forthecolor'});
				this.$router.go(-1);
				return;
			}
			
		 this.$router.push({ path: `/mine` })
	  },
	  routerto(){
		for(var i=0;i<this.list.length;i++){
			console.log(event.currentTarget.children[2])
			console.log()
			if(event.currentTarget.children[2].getAttribute("name")==this.list[i].id){
			console.log("ddddddddddddddddd")
			console.log(this.list[i])	
				if(this.list[i].payIncomeType[0].payType.type==3){
					console.log(this.list[i].payIncomeType[0].payType.type)	
					this.$store.state.goNum=1;
					 this.$router.push({ path: `/banking` })
					 
				}else{
					this.$store.state.goNum=1;
					this.$store.state.rechargedetal=this.list[i].payIncomeType;
				console.log(this.$store.state.rechargedetal)
				  this.$router.push({ path: `/recharge/${this.list[i].id}` })
				}
				
			}
		}
		console.log()
	  }
	
    }
 }
</script>

<style scoped lang='less'>
.paidin{
	position: relative;
	
	>div{
		    position: absolute;
    top: -0.05rem;
	left: 1.24rem;
	display:none;
	}
}
    .returnAll{
        line-height: 0.45rem;
    }
    .returnAll i {
        font-size: 26px !important;
        position: absolute;
	}
	
	.main{
	background-color: white;
	font-size:0.14rem;
}
.user-message{
	display: flex;
	align-items: center;
	padding-left: 0.16rem;
	box-sizing: border-box;
	    height: 1.6rem;
	/*margin-top: 1rem;*/
}
.user-message img{
	width: 1.2rem;
}
.user-message .messageAll{
	display: flex;
	flex-direction: column;
	padding: 0.16rem 0 0.16rem 0.16rem;
	box-sizing: border-box;
	font-size: 0.28rem;
}
.messageAll span{
	font-size: 0.3rem;
}
.messageAll span:last-child{
	margin-top: 0.08rem;
}
.typeAll{
	width: 100%;
    height: 0.8rem;
    background-color: #f5f5f5;
    line-height: 0.8rem;
    padding-left: 0.16rem;
    text-align: left;
	box-sizing: border-box;
	font-size: 0.28rem;
}
.pre-paid ul{
	padding-left: 0.16rem;
	box-sizing: border-box;
}
.pre-paid ul li{
        list-style-type: none;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    height: 1.3rem;
    border-bottom: 1px dashed gainsboro;
    padding-right: 0.16rem;
    box-sizing: border-box;
}
.pre-paid ul li:last-child{
	border-bottom:none ;
}
.pre-paid ul li img{
	    width: 1rem !important;
    height: 1rem !important;
    float: left;
    margin-top: 0.1rem;
}
.pre-paid ul li >span{
	text-align: left;
    margin-left: 0.1rem;
    font-size: 0.28rem;
    line-height: 1.3rem;
    float: left;
    width: 73%;
}
.set .iconfont{
	// font-size: 22px;
}
.paidinn{
	display: none;
}
.topicImg::before{
	content: '';
    width: .3rem;
    height: .3rem;
    background-size: contain;
    display: inline-block;
    vertical-align: middle;
    margin-right: .05rem;
	background-image: url('../../../assets/source/imgs/topic.png')
}
</style>
