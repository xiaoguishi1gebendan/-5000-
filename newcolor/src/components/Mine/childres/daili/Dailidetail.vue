<template>
  <div style="overflow: hidden;position:absolute;top:0;width:100%;height:100%;background: #fff;z-index:1000;    overflow: hidden;">
     <Header id="hearf" title="详情报表"></Header>
     <div class="jiis" :style="{ height: activeheight}">
       
            <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite">
         <div class="Guanlitop" >
               <div v-if="litop.length>1" class="pedss" style="width:100%;margin-top:0.1rem;padding:0 0.2rem;box-sizing:border-box;">
                    <p style="margin-bottom:0.05rem;">当前用户层级</p> 
                   <p style="line-height:0.5rem;width:100%;overflow-x:scroll"><span  class="soadf colef"  v-for="(item,index) in litop" :key="index" :ked="index" style="    margin-right: 0.1rem;
    padding: 0.05rem 0.1rem;
    
   " @click="choode" :id="item.id" >{{item.name}}</span></p>
                </div>
             <div class="peddivo">
                 <ul style="background:#eaeaea;">
                        <li style="  background: #e8f0fa;height:0.7rem;line-height:0.7rem; border-right:1px solid #e8f0fa !important;">账户</li>
                        <li @click="dEtal" v-for="(item,index) in list" :key="index" :ked="index" style="height:0.7rem;" :agentNum="item.memberNum"  :class="{'bgcc':(index%2==0),'gre':(item.agentNum)}" :id="item.id" :name="item.account">{{item.account}}</li>
                    </ul>
             </div>
             
             <div class="peddivt">
                  <ul class="ibhjd" style="  background: #e8f0fa;    position: relative;
    z-index: 999;">
                    <li >真实姓名</li> 
                    <li>总充值</li> 
                    <li>总提现</li> 
                    <li>团队余额</li>  
                    <li>总下注</li>  
                    <li>充值次数</li>  
                    <li>提现次数</li>   
                    <li>总投注笔数</li>  
                    <li>投注返利</li>  
                    <li>中奖金额</li>  
                    <li>代理佣金</li>   
                    <li>团队返点</li>   
                    <li>团队盈亏</li> 
                    <li>会员数</li>   
                    <li>代理数</li>  
                    <li>注册时间</li>  
                    <li >最后登录时间</li> 
                </ul>
           
                <ul class="ul2" v-for="(item,index) in list" :key="index">
                    <li  :class="{'bgcc' :(index%2==0) }" >{{item.name}}</li>
                    <li :class="{'bgcc' : index%2==0}">{{item.totalRecharge.toFixed(2)}}</li>
                    <li :class="{'bgcc' : index%2==0}">{{item.totalWithdrawals.toFixed(2)}}</li>
                    <li :class="{'bgcc' : index%2==0}">{{item.teamBalance.toFixed(2)}}</li>
                    <li :class="{'bgcc' : index%2==0}">{{item.totalAmountBet.toFixed(2)}}</li>
                   <li :class="{'bgcc' : index%2==0}">{{item.totalRechargeCount}}</li>
                   <li :class="{'bgcc' : index%2==0}">{{item.totalDrawCount}}</li>
                   <li :class="{'bgcc' : index%2==0}">{{item.totalNumberOfTimes}}</li>
                    <li :class="{'bgcc' : index%2==0}">{{item.saleRebate.toFixed(2) }}</li>
                    <li :class="{'bgcc' : index%2==0}">{{item.winningAmount.toFixed(2)}}</li>
                   <li :class="{'bgcc' : index%2==0}">{{item.agentRebate.toFixed(2)}}</li>
                   <li :class="{'bgcc' : index%2==0}">{{item.teamRebate.toFixed(2)}}</li>
                    <li :class="{'bgcc' : index%2==0}">{{item.teamPAL.toFixed(2)}}</li>
                    <li :class="{'bgcc' : index%2==0}">{{item.memberNum}}</li>
                    <li :class="{'bgcc' : index%2==0}">{{item.agentNum}}</li>
                   <li :class="{'bgcc' : index%2==0}">{{item.addTime| dateFmt('YYYY-MM-DD HH:mm:ss')}}</li>
                    <li :class="{'bgcc' : index%2==0}">{{item.lastTime| dateFmt('YYYY-MM-DD HH:mm:ss')}}</li>
                </ul>

             </div>
              <!-- <p style="text-align:center">没有更多数据...</p> -->
         </div>
          <p style="text-align: center;
    line-height: 0.4rem;
    font-size: 0.28rem;    color: #999;" v-if="ifData">没有更多数据...</p>
          </v-scroll>
        
     </div>
  </div>
</template>

<script> 
import Header from "./../../../header/header";
import Scroll from "../../../flash/flash1";
export default {
  data() {
    return {
        startDate:"",
        endDate:"",
        list:[],
        pageNumber:1,
        pageSize:20,
        activeheight:'100%',
        litop:[],
        ifData:false,
        ifclick:true
    }
  },
  watch: {
      litop(val, oldVal){
          this.$nextTick(()=>{
               var spans=document.getElementsByClassName("soadf");

                for(var i=0;i<spans.length;i++){
                spans[i].classList.remove("cole")
                }
                if (spans.length>0){
                    spans[ spans.length-1].classList.add("cole")
                }
          })
          
      },
    //    playGame: function (val, oldVal) {
    //   this.$nextTick(()=>{
    //        this.BuyLettery6playSha=document.getElementsByClassName("spanplayChoose");
    //        this.chooseOnespan=document.getElementsByClassName("chooseOnespan");
    //        this.numKai=[]
    //        this.gongYuan=0
    //        this.n1=""
    //        this.n2=""
    //        this.zhuNum=0
    //        this.kuaiSanshed()
    //   })
    // },
  },
 mounted(){
    this.getapi();
    this.$nextTick(()=>{
     this.activeheight=  document.getElementsByTagName("body")[0].offsetHeight-document.getElementById("hearf").offsetHeight+"px";
     console.log(document.getElementsByTagName("body")[0].offsetHeight-document.getElementById("hearf").offsetHeight-10+"px")
    })
 },
 methods:{
     choode(){
        //  if()
        this.pageNumber = 1;
        this.ifData=false;
        console.log(99999999999)
         var spans=document.getElementsByClassName("soadf");
         for(var i=0;i<spans.length;i++){
             spans[i].classList.remove("cole")
         }
          spans[ spans.length-1].classList.add("cole")
         console.log(this.litop)
           var ide= event.currentTarget.id;
           this.ide=ide;
           console.log(ide)
          this.startDate=this.$store.state.startDate;
                    this.endDate=this.$store.state.endDate;
                    let localUserId = JSON.parse(myStorage.getItem("currentUser")).id;
                    var key= Number(event.currentTarget.getAttribute("ked"))
                    var data=base.getApi().reportQuerylist( localUserId,this.ide,this.startDate,this.endDate,this.pageNumber,this.pageSize).data;
                     this.list=data.userList  ;
                     var num= this.litop.length-1-key
                       console.log( key+1)
                       console.log(this.litop.length-1-key)
                      this.litop.splice(key+1, this.litop.length-1-key)
                    
                   if(!this.litop.length){
                        let localUserId = JSON.parse(myStorage.getItem("currentUser")).id;
                    var named=JSON.parse(myStorage.getItem("currentUser")).account
                     this.litop.push(
                        {
                            name:named,
                            id:localUserId
                        }
                    )
                   }
                   console.log(this.litop)
     },
     dEtal(){
        //  alert(event.currentTarget.getAttribute("agentNum"))
        if(this.ifclick){
            this.ifclick=false;
            this.ifData=false;
         if(Number(event.currentTarget.getAttribute("agentNum")) ){
                     var ide= event.currentTarget.id;
                    this.ide=ide;
                    var named= event.currentTarget.getAttribute("name")
                    this.litop.push(
                        {
                            name:named,
                            id:ide
                        }
                    )
                    this.startDate=this.$store.state.startDate;
                    this.endDate=this.$store.state.endDate;
                    let localUserId = JSON.parse(myStorage.getItem("currentUser")).id;
                    var data=base.getApi().reportQuerylist( localUserId,this.ide,this.startDate,this.endDate,this.pageNumber,this.pageSize).data;
                     this.list=data.userList  ;
                    if(!data.userList.length){
                        $.tips("没有下级用户")
                    }else{

                    }
            }
        }

        setTimeout(() => {
             this.ifclick=true;
        }, 1000);
        
                    
                    
     },
               onRefresh(done) {
                    this.pageNumber=1;
                    this.pageSize=20;
                      let localUserId = JSON.parse(myStorage.getItem("currentUser")).id;
                      console.log(localUserId)
                      console.log(this.ide)
                     var data=base.getApi().reportQuerylist( localUserId,this.ide,this.startDate,this.endDate,this.pageNumber,this.pageSize).data;
                     this.list=data.userList  ;
                    

                        if(this.list){
                            $.tips("已经刷新当前数据")
                         }
                    done(); 
                },
                onInfinite(done) {
                      let more = this.$el.querySelector(".load-more");
                      more.style.display='block'
                     this.getapied()
                    
                            if(this.list){
                            more.style.display='none';
                             }
                   
                    done();
                },
                getapi(){
                     this.startDate=this.$store.state.startDate;
                    this.endDate=this.$store.state.endDate;
                    let localUserId = JSON.parse(myStorage.getItem("currentUser")).id;
                    if(this.$store.state.agencyDownid){
                        this.ide=this.$store.state.agencyDownid
                    }else{
                         this.ide=localUserId;
                    }
                    if(this.$store.state.agencyDownname){
                         var named=this.$store.state.agencyDownname
                    }else{
                         var named=JSON.parse(myStorage.getItem("currentUser")).account
                    }
                  
                     this.litop.push(
                        {
                            name:named,
                            id:this.ide
                        }
                    )
                    var data=base.getApi().reportQuerylist( localUserId,this.ide,this.startDate,this.endDate,this.pageNumber,this.pageSize).data
                    if(data.userList.length){
                        this.list=data.userList  ;
                    }else{
                        $.tips("暂时没有详情报表")
                    }
                    
                },
                getapied(){
                     this.startDate=this.$store.state.startDate;
                    this.endDate=this.$store.state.endDate;
                     this.pageNumber++;
                    let localUserId = JSON.parse(myStorage.getItem("currentUser")).id;
                    var list=  base.getApi().reportQuerylist( localUserId,this.ide,this.startDate,this.endDate,this.pageNumber,this.pageSize).data.userList;
                    if(list.length){
                       this.list = this.list.concat(list)
                       console.log(this.list)
                    }else{
                        this.pageNumber--;
                        this.ifData=true;
                          $.tips("已经加载全部数据")
                    }
                }
 },
  components: {
      Header,
       "v-scroll": Scroll,
  }
}
</script>

<style scoped lang='less'>
.gre{
    color:#26a2ff;
    text-decoration:underline;
}
.colef{
        color: #9E9E9E;
        background: #F7F7F7;
    border: none;
    border-radius: 6px;
}
.cole{
        color: rgb(207, 31, 47) !important;
    border: 1px solid #CF1F2F !important;
     background:transparent !important;
    border-radius: 6px !important;
}
.pedss{
    // padding-left: 0.2rem;
    >span{
        padding: 0.1rem;
        float: left;
    }
    >span:nth-child(1){
        width: 100%;
    }
}
.ul2{
    background: #eaeaea;
}
.bgcc{
    background: #fff !important;
}

.jiis{
//  height: 400px;
 overflow-y: scroll;
 position: relative;
//  background: red;
}
.Guanlitop{
    overflow: hidden;
    font-size: 0.28rem;
    >div{
        float: left;
        li{
            border-right: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            box-sizing: border-box;
            text-align: center;
        }
    }
    .peddivo{
        width:35%;
        line-height: 0.7rem;
    //    height: 80px;
    }
    .peddivt{
        width: 65%;
        overflow-x:scroll;
       ul{
           overflow: hidden;
           width: 1870px;
         font-size: 0.28rem;
           >li{
               width: 110px;
               float: left;
               line-height: 0.7rem;
               height: 0.7rem;
               text-align: center;
           }
       }
    }
}
.ibhjd{
    >li{
        height: 0.7rem !important;
        line-height: 0.7rem !important;
        border-right:1px solid #e8f0fa !important;
    }
}
</style>
