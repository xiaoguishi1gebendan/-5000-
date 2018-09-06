<template>
 <div >
     <div  style="width:100%;height:100%;background: #f5f5f5;z-index:1000;font-size: 0.28rem;">
      
        <div class="timefor clearFixed" >
            <div ref="startTime" @click="openPicker1">{{startDate}}</div>
            <div >至</div>
            <div @click="openPicker2"  ref="endTime">{{endDate}}</div>
            <div ref="duringTime" @click="changeTime">选择日期<span class="iconfont"></span></div>
        </div>
        <div class="todayStatistics" ref="todayStatistics">
            统计
            
        </div>
        <div class="moneyDetail clearFixed">
            <div class='bfcBox'>
                <div class="bfcLayout">
                    <img src="../../assets/images/count1.png" alt="" class="picMoney">
                </div>
                <div class="bfcLayout">
                    <p>佣金</p>
                    <p ref="brokerage">{{totalBrokerage}}</p>
                </div>
            </div>
            <div class='bfcBox'>
                <div class="bfcLayout">
                    <img src="../../assets/images/count2.png" style="    height: 0.6rem;
    width: 0.6rem;" alt="" class="picMoney">
                </div>
                <div class="bfcLayout">
                    <p>投注金额</p>
                    <p ref="betAmount">{{totalBettingAmount }}</p>
                </div>
                
            </div>
        </div>
        <div class="detailState detailStatee">
            <div class="State">期数</div>
            <div class="State">投注金额</div>
            <div class="State">佣金</div>
            <div class="State">投注人数</div>
            <div class="State">状态</div>
        </div>
        <div ref="ploxyStatistics"  style="overflow:scroll">
            <div v-if="ploxyStatistics && ploxyStatistics.length>0" >
                <div  class="detailState detail"  v-for="(item,index) in ploxyStatistics" :key="index"  @click="gtCommissionDtl">     
                    <div class="State">{{item.time}}</div>
                    <div class="State">{{item.bettingAmount.toFixed(2)}}</div>
                    <div class="State">{{item.brokerage.toFixed(2)}}</div>
                    <div class="State">{{item.registerCount}}</div>
                    <div class="State">{{item.status}} 
                        <span class="iconfont"></span>
                    </div>
                </div>
             </div>

            <div v-else class='no' >
                <img src="../../assets/images/lack1.png" alt="" class='lack1'>
                <h4>暂无佣金记录</h4>
            </div>
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
                <div @click="halfMound" style="border-bottom:10px solid #f5f5f5">半月</div>
                <div @click="cancel">取消</div>
            </mt-popup>
        </div>
       
  </div>

     
      
         <mt-datetime-picker
          ref="picker"
          type="date"
          @confirm="handleConfirm" 
          v-model="pickerValue">
        </mt-datetime-picker>
   <transition name="slide">
           <router-view></router-view>
   </transition>
 </div>
</template>

<script>
export default {
  data() {
    return {
      pickerValue:"",
      endDate: "",
      startDate: "",
      timeBOXis: false,
      popupVisible: false,
      chooseIS: true,
      pageNumber: 1,
      pageSize: 10,
      ploxyStatistics: [],
      trueState: 200,
      jinri: "今日统计",
      brokerage:0,
      bettingAmount:0,
      totalBettingAmount:"",
      ifpicker:false,
      choosetype:1,
      totalBrokerage:"",
      
    };
  },
  created(){

  },
  mounted() {
    console.log(document.getElementsByTagName("body")[0].offsetHeight) 
    //默认加载数据
    this.changeDate();
    this.$nextTick(() => {
      this.getHeight();
    });
     
  },
  methods: {
    openPicker1() {
    this.choosetype=1
    this.pickerValue=this.startDate
    this.$refs.picker.open();
  //  alert( document.getElementsByClassName('v-modal')[0])
  
    
  },
    openPicker2() {
      this.choosetype=2
      this.pickerValue=this.endDate 
      this.$refs.picker.open();
      
  },
    formatDate(date) {
      const y = date.getFullYear()
      let m = date.getMonth() + 1
      m = m < 10 ? '0' + m : m
      let d = date.getDate()
      d = d < 10 ? ('0' + d) : d
      return y + '-' + m + '-' + d
    },
    handleConfirm(){
      
      
      if(this.choosetype==1){
        // alert("ww")
        var firtime=new Date(this.formatDate(this.$refs.picker.value)).getTime();
       
        console.log(this.endDate)
      var now=new Date().getTime();
      var endtime=new Date(this.endDate).getTime();
      if(firtime<=now){
        if(firtime<=endtime){
           this.startDate=this.formatDate(this.$refs.picker.value)
          this.loadList()
        }else{
          $.tips("开始日期不可大于结束日期")
          return;
        }
        
      }else{
        $.tips("选择日期不可大于当前日期")
        
         return;
      }
        


        this.startDate=this.formatDate(this.$refs.picker.value);
      }else{
         var firtime=new Date(this.startDate).getTime();
        var now=new Date().getTime();
        var endtime=new Date(this.formatDate(this.$refs.picker.value)).getTime();
        
        if(firtime<=now){
          if(firtime<=endtime){
             this.endDate=this.formatDate(this.$refs.picker.value)
            this.loadList()
          }else{
            $.tips("结束日期不可小于开始日期")
            return;
          }
          
        }else{
          $.tips("选择日期不可大于当前日期")
          
          return;
        }
         this.endDate=this.formatDate(this.$refs.picker.value);
      }
      

      
    },

    // onValuesChange(picker, values) {
    //     if(this.choosetype==1){
    //       this.startDate=`${values[0]}-${values[1]}-${values[2]}`
    //     }else{
    //       this.endDate=`${values[0]}-${values[1]}-${values[2]}`
    //     }
    //   },
    getHeight() {
      console.log(this.$refs.ploxyStatistics);
     var path=this.$route.path.split("/")
        if(path[path.length-1]=='share'){
           this.$refs.ploxyStatistics.style.height =document.getElementsByTagName("body")[0].offsetHeight -50  -45 -45 -88 -95-
           document.getElementsByClassName("pde")[0].offsetHeight 
           + "px";
        }else{
            this.$refs.ploxyStatistics.style.height =document.getElementsByTagName("body")[0].offsetHeight -50  -45 -45 -88 -40-
            document.getElementsByClassName("pde")[0].offsetHeight  + "px";
        }
       
      
    },
    changeDate(data) {
      this.startDate = new Date().YMD(0);
      // this.pickerValue=this.startDate
      // alert(this.startDate)
      this.endDate = new Date().YMD(0);
      this.loadList();
    },
    changeTime() {
      this.popupVisible = true;
    },
    chooseToday() {
      this.startDate = new Date().YMD(0);
      this.endDate = new Date().YMD(0);
      this.popupVisible = false;
      this.loadList();
    },
    chooseYestoday() {
      this.startDate = new Date().YMD(-1);
      this.endDate = new Date().YMD(0);
      this.popupVisible = false;
      this.loadList();
    },
    chooseWeek() {
      this.startDate = new Date().YMD(-7);
      this.endDate = new Date().YMD(0);
      this.popupVisible = false;
      this.loadList();
    },
    halfMound() {
      this.startDate = new Date().YMD(-15);
      this.endDate = new Date().YMD(0);
      this.popupVisible = false;
      this.loadList();
    },
    //页面跳转到代理佣金详情
    gtCommissionDtl() {
      var node = event.currentTarget;
      let qishu = node.childNodes[0].innerHTML;
      this.$store.state.qishu = qishu;
      this.$router.push({
        path: "/daili/dailiMoney/commissionDtl",
        params: {}
      });
    },
    //取消函数
    cancel() {
      this.popupVisible = false;
    },
    //  请求数据函数
    loadList() {
      this.brokerage =0.00;
      this.bettingAmount =0.00;
      let localUserId = JSON.parse(myStorage.getItem("currentUser")).id;
       base .getApi() .ploxyStatistics(
          this.pageNumber,
          this.pageSize,
          localUserId,
          this.startDate,
          this.endDate
        ).then((res)=>{
          var dataNOW =res;
              this.totalBettingAmount = dataNOW.data.totalBettingAmount.toFixed(2);
           this.totalBrokerage = dataNOW.data.totalBrokerage.toFixed(2);
      if (dataNOW.code == this.trueState && dataNOW.data.ploxyStatistics) {
        this.ploxyStatistics = dataNOW.data.ploxyStatistics;
        
        // this.ploxyStatistics = this.ploxyStatistics.reverse();
        console.log(this.ploxyStatistics);
        if (this.ploxyStatistics) {
          if (this.ploxyStatistics.length) {  
            for(var i =0;i<this.ploxyStatistics.length-1;i++){
                this.brokerage +=this.ploxyStatistics[i].brokerage;
                this.bettingAmount +=this.ploxyStatistics[i].bettingAmount;
            }
           this.brokerage =this.brokerage.toFixed(2);
           this.bettingAmount =this.bettingAmount.toFixed(2);
          }
          else{
           this.brokerage =0.00;
           this.bettingAmount =0.00;
          }
        }
      }
        });
     
    }
  },
  components: {}
};
</script>

<style scoped lang='less'>
.root {
  background-color: #f5f5f5;
  font-size: 0.28rem;
}
.timefor {
  background-color: #fff;
  width: 100%;
  height: 0.46;
  font-size: 0.28rem;
  line-height: 0.8rem;
}
.timefor div:nth-child(1),
.timefor div:nth-child(3) {
  width: 30%;
  display: inline-block;
  float: left;
}
.timefor div:nth-child(2) {
  width: 10%;
  display: inline-block;
  float: left;
}
.timefor div:nth-child(4) {
  width: calc(30% - 0.1rem);
  text-align: right;
  float: right;
  padding-right: 0.1rem;
}
// 清楚浮动
.clearFixed::after,
.clearFixed::before {
  content: ".";
  clear: both;
  display: block;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}
.clearFixed:after,
.clearFixed::before {
  content: "";
  display: block;
  clear: both;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}
.clearFixed {
  zoom: 1;
}
.todayStatistics {
  height: 0.7rem;;
  text-align: left;
  padding-left: 0.2rem;
  line-height: 0.7rem;
  font-size: 0.28rem;
}
.moneyDetail {
  height: 1.3rem;
  display: flex;
  align-items: center;
  background-color: #fff;
  margin-bottom: 10px;
}
.moneyDetail .bfcBox {
  flex: 1;
  float: left;
}
.bfcLayout {
  float: left;
  text-align: left;
  p {
    height: 0.5rem;
    line-height: 0.5rem;
  }
}
.bfcBox > .bfcLayout:nth-child(1) {
  padding: 0.2rem 0.25rem 0 0.3rem;
}
.picMoney {
  width: 0.6rem;
  display: inline-block;
}
.detailState {
  display: flex;
  background-color: #fff;
      border-bottom: 1px solid #f5f5f5;
}
.detailState .State {
  flex: 1;
  height: 0.8rem;
  line-height: 0.8rem;
}
.toast {
  height: 4.3rem;
  width: 100%;
}
.toast div {
  height: 0.8rem;
  border-bottom: 1px solid #f5f5f5;
  line-height: 0.8rem;
}
.toast div:last-child {
  height: 0.8rem;
  border-bottom: none;
  line-height: 0.8rem;
}
.no {
  padding: 0.2rem;
  .lack1 {
    width: 1.95rem;
    height: 1.95rem;
    display: inline-block;
  }
}
</style>
