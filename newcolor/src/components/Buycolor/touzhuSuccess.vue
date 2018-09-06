<template>
    <div style="font-size:.28rem">
         <headertop title="投注" :goBack="affirmAll"> </headertop>
        <!-- <div class="wrapper"> -->
			
			<div class="content content-head">	
				<div class="moneybox confirmbox">
					<img class="confirmimg" src="../../assets/source/css/common/images/confirm.png" alt="" />
					<h3 class="confirmtit">投注成功，预祝您中奖!</h3>
					<p class="confirmtxt" id='lotteryNameP'>{{name}}</p>
					<p class="confirmtxt" id='lotteryNoP'>{{sortNo}}期</p>
					<!-- <a href="/view/home/caipiaoxiangqin.html"><button class="subtn resumebtn" type="button">确认</button></a> -->
                    <span @click="affirmAll" class="resumebtn">确认</span>
				</div>
				 
			</div>	

		<!-- </div> -->
    </div>
</template>


<script>
import headertop from '../header/header.vue'
    export default{
        data(){
            return{
                // dataAll:{},
                name:'',
                sortNo:'',
            }
        },
        components: {
              headertop
        },
        created(){
          console.log() 
        //   this.dataAll = JSON.parse(window.localStorage.getItem('iswintouzu'))[0];
          window.localStorage.setItem('isbuyNum',this.$store.state.buyNum);
        },
        mounted:function(){
            this.footerheid()
            this.name = window.localStorage.getItem("caipiaoName")
            this.sortNo = window.localStorage.getItem("nowShortNo")
        },
        methods:{
            footerheid(){
                $('.foottab').css('display','none')
            },
            affirmAll(){
                
                // alert(localStorage.getItem("erjilotid"))
                this.$store.state.istankuang = false;
                window.localStorage.setItem('istrue','no');
                window.localStorage.removeItem('buycolorAll');
                console.log(this.$store.state.buyNum)
                // window.localStorage.setItem('isbuyNum',this.$store.state.buyNum)
                // if(this.$store.state.buyNum==1){
                if(window.localStorage.getItem('isbuyNum')==1){    
                    this.$router.go(-2)
                }else{
                     this.$router.go(-(+window.localStorage.getItem('isbuyNum')))
                }
               
                // this.$router.push({path:'/forthecolor'});
            }
        }
    }

</script>

<style scoped>
    .back{
        position: absolute;
        left:.1rem;
        color:azure;
        transform: translateY(-20%);
    }
    .iconfont{
        font-size: 0.24rem;
    }
    #layout{
        font-size: .13rem;
     }
    .confirmimg{
        width:15%;
        border-radius: 50%;
        margin-top:30%;
    }
    .confirmtit{
        margin-top:5%; 
    }
    #lotteryNoP{
        margin-top:2%; 
        color:gray;
    }
    .content-head {
        top: .69rem;
    }
    .header{
        height: .3rem;
        padding-top: .16rem;
    }
    .title{
        font-size: .16rem;
        color: white;
        line-height: .15rem;
        margin: auto;
    }
    #lotteryNameP{
        margin-top:2.5%; 
        color:gray;
    }
    .resumebtn{
        display: block;
        margin:10% auto;
        width:60%;
        height: .8rem;
        line-height: .8rem;
        color:aliceblue;
        border-radius: .07rem
    }
</style>
