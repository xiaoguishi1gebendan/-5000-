<template>
  <div  style="overflow: hidden;position:absolute;top:0;width:100%;height:100%;background: #f5f5f5;z-index:1000;    overflow: hidden;">
      <div class="index_header" style="">
			 <!-- <div @click="goBack" style="position: absolute;transform: translateY(-50%);color: #fff;">
                      <i class="iconfont icon-mjiantou-copy" style="    font-size: .24rem;position: absolute;line-height: 45px;margin-left: 12px;"></i>
             </div>
			<h3 style="font-size:0.17rem;">报表查询</h3> -->
			<Header title="报表查询" :goBack="goback"></Header>
		</div>
       
        <div class="kined" style="overflow:scroll">
     <div  style="width:100%;height:100%;background: #f5f5f5;z-index:1000;font-size: 0.28rem;">
      
        <div class="timefor clearFixed" style="color:#666">
            <div><img src="./ico.png" alt=""></div>
            <div ref="startTime" @click="openPicker1">{{startDate}}</div>
            <div style="color:#999;font-size:.28rem;">－</div>
            <div ref="endTime" @click="openPicker2"  >{{endDate}}</div>
           <div><input type="button" @click="loadList" value="搜索"  style="font-size:0.28rem;" ></div>
        </div>
        <div class="tuanDui">
          <ul>
            <li><span style=" background:#fb8420;border-radius: 3px;"></span><span style="color:#999">充值</span> <span>{{ Number(result.rechargeAmount).toFixed(2)}}</span></li>
            <li><span style=" background:#dc0e22;border-radius: 3px;"></span><span style="color:#999">提现</span> <span>{{ Number(result.drawAmount).toFixed(2)}}</span></li>
            <li><span style=" background: #298ffd;border-radius: 3px;"></span><span style="color:#999">团队总余额</span> <span>{{ Number(result.balance).toFixed(2)}}</span></li>
            
          </ul>
        </div>


       <div class="main">
           <ul class="mainuie">
               <li><span>首充</span><span >{{ Number(result.firstRechargeAmount).toFixed(2)}}</span></li>
               <li><span>派彩</span><span>{{ Number(result.winningAmount).toFixed(2)}}</span></li>
               <li><span>实际盈亏</span><span>{{ Number(result.realPAL
).toFixed(2)}}</span></li>
               <li><span>代理佣金</span><span>{{ Number(result.teamSumBrokerage).toFixed(2)}}</span></li>
               <li><span>有效投注</span><span>{{ Number(result.bettingAmount).toFixed(2)}}</span></li>
               <li><span>有效会员</span><span>{{ Number(result.validUserNum)}}  </span></li>
               <li><span>派彩盈亏</span><span>{{( Number(result.winningAmount)- Number(result.bettingAmount)).toFixed(2)}}</span></li>
           </ul>
       </div>
       <div class="butt" @click="Xiangqing">
         详情报表
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
      <mt-datetime-picker
              ref="picker"
              type="date"
              @confirm="handleConfirm" 
              v-model="pickerValue">
      </mt-datetime-picker>
     
   <router-view></router-view>

  </div>
</template>

<script>
import baobiao from "./baoBiao.vue";
import Header from "./../../../header/header";
export default {
  data() {
    return {
      pickerValue:"",
      userid: "",
      endDate: "",
      startDate: "",
      timeBOXis: false,
      popupVisible: false,
      chooseIS: true,
      result: "",
      type: 1,
      choosetype:1,
  
    };
  },
  mounted:function() {
    this.userid = JSON.parse(myStorage.getItem("currentUser")).id;
    this.changeDate();
    
    document.getElementsByClassName("kined")[0].style.height=document.getElementsByTagName("body")[0].offsetHeight-45+"px";
    console.log( document.getElementsByClassName("kined")[0].style.height)
  },
  methods: {
    goback(){
      this.$store.state.agencyDownid="";
      this.$store.state.agencyDownname=""
      this.$router.go(-1)
    },
    Xiangqing(){
      this.$store.state.startDate= this.startDate;
      this.$store.state.endDate= this.endDate;
      this.$router.push("reportQuery/Dailidetail")
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
      var now=new Date().getTime();
      var endtime=new Date(this.endDate).getTime();
      if(firtime<=now){
        if(firtime<=endtime){
          this.startDate=this.formatDate(this.$refs.picker.value)
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
    openPicker1() {
      
    this.choosetype=1
    this.pickerValue=this.startDate;
    // alert(this.pickerValue)
    this.$refs.picker.open();
    
  },
    openPicker2() {
      this.choosetype=2
      this.pickerValue=this.endDate 
      this.$refs.picker.open();
  },
    choosestartDate(){
      this.choosetype=1
      this.ifpicker=true
    },
    choosesendDate(){
      this.choosetype=2
      this.ifpicker=true
    },  
    cancled(){
     
        if(new Date(this.startDate).getTime()<=new Date().getTime()){
          if(new Date(this.startDate).getTime()<=new Date(this.endDate).getTime()){
            this.ifpicker=false
          }else{
            $.tips("结束时间不可大于开始时间")
          }
        
      }else{
        $.tips("不可选择将来时间")
      }
    },
    finish(){
      
      if(new Date(this.startDate).getTime()<=new Date().getTime()){
        if(new Date(this.startDate).getTime()<=new Date(this.endDate).getTime()){
          this.ifpicker=false
           this.loadList();
        }else{
           $.tips("结束时间不可大于开始时间")
        }
        
      }else{
        $.tips("不可选择将来时间")
      }
      
    },
    onValuesChange(picker, values) {
      if(this.type==1){
        if(this.choosetype==1){
          this.startDate=`${values[0]}-${values[1]}-${values[2]}`
        }else{
          this.endDate=`${values[0]}-${values[1]}-${values[2]}`
        }
      }else{
        if(this.choosetype==1){
          this.startDate=`${values[0]}-${values[1]}-${values[2]}`
        }else{
          this.endDate=`${values[0]}-${values[1]}-${values[2]}`
        }
      }
        
      },
    mymoney() {
      //  document.getElementsByClassName("main")[0].style.display="none";
      this.startDate = new Date().YMD(0);
      this.endDate = new Date().YMD(0);
      event.currentTarget.style.borderBottom = "2px solid "+window.mapcolor;
      event.currentTarget.style.color = window.mapcolor;
      this.$refs.sharemony.style.border = "none";
      this.$refs.sharemony.style.color = "#000";
      this.type = 2;
      this.loadList();
    },
    sharemony() {
      this.startDate = new Date().YMD(0);
      this.endDate = new Date().YMD(0);
      event.currentTarget.style.borderBottom = "2px solid "+window.mapcolor;
      event.currentTarget.style.color = window.mapcolor;
      this.$refs.mymoney.style.border = "none";
      this.$refs.mymoney.style.color = "#000";
      this.type = 1;
      this.loadList();
    },
    goBack() {
      this.$router.go(-1);
    },
    changeDate(data) {
      this.startDate = new Date().YMD(0);
      this.endDate = new Date().YMD(0);
      // 默认请求当天数据
      this.loadList();
    },
    changeTime() {
      this.popupVisible = true;
    },
    chooseToday() {
      this.startDate = new Date().YMD(0);
      this.endDate = new Date().YMD(0);
      this.popupVisible = false;
      //  请求数据
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
    //取消函数
    cancel() {
      //  console.log("11111111111111111")
      this.popupVisible = false;
    },
    //  请求数据函数
    loadList() {
      let localUserId = JSON.parse(myStorage.getItem("currentUser")).id;
      if(this.$store.state.agencyDownid){
        var uid=this.$store.state.agencyDownid
      }else{
        var uid=localUserId
      }
      
        this.result = base
          .getApi()
          .reportQuery(localUserId,uid, this.startDate, this.endDate).data;
          
    }
  },
  components: {
    Header
  }
};
</script>

<style scoped lang='less'>
.tuanDui{
  ul{
    overflow: hidden;
    padding: 0.1rem 0;
    background: #fff;
    border-top: 0.1rem solid #f5f5f5;
    >li{
      float: left;
      width: 50%;
      line-height: 0.7rem;
      text-align: left;
      >span:nth-child(1){
             margin-left: 0.4rem;
         
          display: inline-block;
          width: 0.1rem;
          height: 0.1rem;
         
          margin-right: 0.05rem;
      }
    }
  }
}
.butt{
  line-height: 0.8rem;
  width: 50%;
  margin: 0 auto;
  background: linear-gradient(90deg, #fa3956, #ff6b52) !important;
  color:#fff;
  font-size: 0.28rem;
  border-radius: 10px;
  margin-top: 0.4rem;
      margin-bottom: .2rem;
}
.mainuie{
  color:#666666;
}
.main {
  
  background: #fff;
  margin-top: 0.1rem;
  > ul {
    > li {
      line-height: 0.8rem;
      overflow: hidden;
      border-bottom: 1px solid #f5f5f5;
      > span:nth-child(1) {
        float: left;
        padding-left: 0.4rem;
      }
      > span {
        float: right;
        padding-right: 0.4rem;
      }
    }
  }
}

.timefor {
  background-color: #fff;
  padding: 0.1rem 5%;
  font-size: 0.28rem;
  line-height: 0.7rem;
  border-top: 1px solid #f5f5f5;
  >div{
    float: left;
  }
  >div:nth-child(1){
    width: 10%;
    img{
      float: left;
      width: 0.4rem;
      margin-top: 0.15rem;
    }
  }
  >div:nth-child(2){
    width: 30%;
    background: #f7f7f7;
    border-radius: 5px;
  }
  >div:nth-child(3){
     width: 10%;
  }
  >div:nth-child(4){
     width: 30%;
     background: #f7f7f7;
    border-radius: 5px;
  }
  >div:nth-child(5){
     width: 20%;
     >input{
       width:80%;
       border: none;
       line-height: 0.7rem;
       border-radius: 5px;
       color: #fff;
       background: #FA3956;
     }
  }
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
  height: 0.45;
  text-align: left;
  padding-left: 0.28rem;
  line-height: 0.8rem;
}

.toast {
  height: 2.34rem;
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
  padding: 0.4rem;
  .lack1 {
    width: 1.95rem;
    height: 1.95rem;
    display: inline-block;
  }
}
.tixing {
  position: fixed;

  width: 100%;
  height: 100%;
  top: 0;
  display: none;
  font-size: 0.28rem;
  z-index: 9999;
  > div:nth-child(2) {
    width: 100%;
    height: 100%;
    position: absolute;
    background: #000;
    opacity: 0.3;
    top: 0;
  }
  > div:nth-child(1) {
    position: absolute;
    border-radius: 6px;
    z-index: 1;
    // width: 80%;
    // height: 300px;
    top: 300px;
    left: 50%;
    margin-left: -150px;
    // height: 150px;
    width: 300px;
    background: #fff;
    > p:nth-child(1) {
      line-height: 0.5rem;
      font-size: 0.28rem;
      font-weight: 600;
    }
    > p:last-child {
      border-top: 1px solid whitesmoke;
      overflow: hidden;
      line-height: 0.4rem;
      // line-height:0.5rem;
    }
  }
}

.zingd {
  border: 1px solid red;
  line-height: 0.4rem;
  font-size: 0.12rem;
  display: inline-block;
  border-radius: 6px;
  color: #000;
  padding: 0 0.1rem;
}
#commission {
  display: none;
  margin-top: 0.1rem;
}
.maintop {
  overflow: hidden;
  width: 100%;
  // border-bottom: 1px solid gray;
  background: #fff;
  font-size: 0.28rem;
  span {
    float: left;
    width: 50%;
    line-height: 0.8rem;
    font-size: 0.28rem;
  }
  span:nth-child(1) {
    box-sizing: border-box;
    // border-bottom: 2px solid #fc4a55;
    // color: #fa3855;
    font-size: 0.28rem;
  }
}

.index_header {
  width: 100%;
  height: 0.8rem;
  display: flex;
  color: #fff;
  margin: 0 auto;
  background-color: linear-gradient(90deg, #fa3956, #ff6b52);
}
.index_header h3 {
  height: 0.8rem;
  line-height: 0.8rem;
  flex: 1;
  text-align: center;
  font-size: 0.28rem;
}
.index_header .mycollect {
  height: 0.8rem;
  line-height: 0.8rem;
  width: 0.72rem;
  text-align: center;
  font-size: 0.28rem;
}
</style>
