<template>
 <div >
     <div  style="width:100%;height:100%;background: #f5f5f5;z-index:1000;font-size: 0.14rem;">
      
        <div class="timefor clearFixed" @click="changeTime" style="color:#666">
            <div ref="startTime">2018-05-28</div>
            <div>至</div>
            <div ref="endTime">2018-05-28</div>
            <div ref="duringTime">今天<span class="iconfont"></span></div>
        </div>
       <div class="main">
           <ul>
               <li><span>亏盈总额</span><span style="color:red"> {{result.profitAmount.toFixed(2)}} 元</span></li>
               <li><span>投注总额</span><span> {{result.bettingAmount.toFixed(2)}} 元</span></li>
               <li><span>派彩总额</span><span> {{result.payoutAmount.toFixed(2)}} 元</span></li>
               <li><span>佣金总额</span><span> {{result.commissionAmount.toFixed(2)}} 元</span></li>
               <li><span>充值总额</span><span> {{result.rechargeAmount.toFixed(2)}} 元</span></li>
               <li><span>提款总额</span><span> {{result.drawingAmount.toFixed(2)}} 元</span></li>
           </ul>
       </div>
        <div v-if="chooseIS">
            <mt-popup
            v-model="popupVisible"
            position="bottom"
            class='toast' 
            >
                <div @click="chooseToday">今天</div>
                <div @click="chooseYestoday">昨天</div>
                <div @click="chooseWeek">一周</div>
                <div @click="halfMound">半月</div>
                <div @click="cancel">取消</div>
            </mt-popup>
        </div>
        
  </div>
 </div>
</template>

<script>
export default {
 data() {
 return {
     endDate:'',
     startDate:'',
     timeBOXis:false,
     popupVisible:false,
     chooseIS:true,
     result:""
 }
 },
 mounted(){
     //默认加载数据
     this.changeDate();
 },
 methods:{
   
     changeDate(data){
        this.startDate = new Date().YMD(0);
        this.$refs.startTime.innerHTML = this.startDate;
        this.endDate = new Date().YMD(0);
        this.$refs.endTime.innerHTML = this.endDate;
         // 默认请求当天数据
        this.loadList();
     },
     changeTime(){
        this.popupVisible = true;
     },
     chooseToday(){
         this.startDate = new Date().YMD(0);
         this.$refs.startTime.innerHTML = this.startDate
         this.popupVisible = false;
         this.$refs.duringTime.innerHTML = '今天'
        //  请求数据
        this.loadList();

     }, 
     chooseYestoday(){
         this.startDate = new Date().YMD(-1);
         this.$refs.startTime.innerHTML = this.startDate
         this.popupVisible = false;
         this.$refs.duringTime.innerHTML = '昨天'
         this.loadList();
     },
     chooseWeek(){
         this.startDate = new Date().YMD(-7);
         this.$refs.startTime.innerHTML = this.startDate
         this.popupVisible = false;
         this.$refs.duringTime.innerHTML = '一周'
         this.loadList();
     },
     halfMound(){
         this.startDate = new Date().YMD(-15);
         this.$refs.startTime.innerHTML = this.startDate
         this.popupVisible = false;
         this.$refs.duringTime.innerHTML = '半月'
         this.loadList();
     },
     //取消函数
     cancel(){
         this.popupVisible = false;
     },
    //  请求数据函数
     loadList(){
         let localUserId = JSON.parse(myStorage.getItem("currentUser")).id;
         var uid=localStorage.getItem("agencyDown 2 agencyReport uid");
        //  console.log(uid)
         if(!uid){
             uid=""
         }
         
         this.result=base.getApi().teamReport(localUserId,uid,this.startDate,this.endDate).data
        console.log(this.result) ;
     }

 },
 components: {

 }
}
</script>

<style scoped lang='less'>
.main{
    background: #fff;
    margin-top:0.1rem;
    >ul{
        >li{
            line-height:0.45rem;
            overflow: hidden;
            border-bottom: 1px solid #f5f5f5;
            >span:nth-child(1){
                float: left;
                padding-left:0.1rem;
            }
            >span{
                float: right;
                padding-right:0.2rem;
            }
        }
    }
}

    .timefor{
        background-color: #fff;
        width: 100%;
        height: 0.46;
        font-size:0.16rem;
        line-height: 0.46rem;
        margin-top:0.1rem;
    }
    .timefor div:nth-child(1),.timefor div:nth-child(3){
        width:30%;
        display: inline-block;
        float: left;
    }
    .timefor div:nth-child(2){
        width:10%;
        display: inline-block;
        float: left;
    }
    .timefor div:nth-child(4){
        width:calc(30% - 0.1rem);
        text-align: right;
        float: right;
        padding-right:0.1rem;
    }
    // 清楚浮动
    .clearFixed::after,.clearFixed::before{
            content:".";
            clear:both;
            display:block;
            height:0;
            overflow:hidden;
            visibility:hidden;
              }
    .clearFixed:after,.clearFixed::before{content:'';display:block;clear:both;height:0;overflow:hidden;visibility:hidden;}
    .clearFixed{zoom:1;}
    .todayStatistics{
        height: 0.45;
        text-align: left;
        padding-left:0.15rem;
        line-height: 0.45rem;
    }
   
    .toast{
        height: 2.34rem;
        width: 100%;
    }
    .toast div{
       height: 0.45rem;
    border-bottom: 1px solid #f5f5f5;
    line-height: 0.45rem;
    }
    .toast div:last-child{
       height: 0.45rem;
      border-bottom: none;
       line-height: 0.45rem;
    }
    .no{
        padding:0.2rem;
        .lack1{
            width: 1.95rem;
            height:1.95rem;
            display: inline-block;
        }
    }
    
</style>
