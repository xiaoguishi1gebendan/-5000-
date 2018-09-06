<template>
  <div class="tab "  style="overflow: hidden;position:absolute;top:0;width:100%;height:100%;background: #f5f5f5;z-index:1000;">
       <div class="index_header">
			 <div @click="goBack" style="position: absolute;transform: translateY(-50%);color: #fff;">
                      <i class="iconfont icon-mjiantou-copy" style="    font-size: .24rem;position: absolute;line-height: 45px;margin-left: 12px;"></i>
             </div>
			<h3 style="margin-left: 7%;">下级开户</h3>
			<div class="mycollect" >
				<!-- 如何赚钱 -->
			</div>
		</div>
         <p class="maintop" style="font-size:0.14rem">
              <span ref="nexto"  @click="nextmen">下级开户</span>
              <span ref="nextt" style="color:#fe6053">查看邀请码</span>
          </p>
      <div class="headtop yaoqinma" >
              <span style="width:26%;">邀请码</span>
              <span style="width:16%;">类型</span>
              <span style="width:16%;">返点</span>
              <span style="width:16%;">状态</span>
              <span style="width:26%;">操作</span>
          </div>
         <!-- <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite">   -->
         <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite" style="margin-top:0.45rem;">
             <div>
                 <ul class="header">
                    <li v-for="(item,index) in result" :key="index" style="font-size:0.12rem;">
                        <span style="width:26%;" @click="copyArticle">{{item.code}}</span>
                        <span style="width:16%;">代理</span>
                        <span style="width:16%;">{{item.rebate}}</span>
                        <span style="width:16%;">{{item.status==1?"启用":"禁用"}}</span>
                        <span style="width:26%;" :id="item.code">
                            <span class="spann" @click="change" >修改</span>
                            <span class="spann" @click="removee" style="margin-left:0.05rem;background: rgba(204,204,204,1);">删除</span>
                            
                        </span>
                    </li>
                    
                </ul>
             </div>
            
       </v-scroll>
      <div class="ttixingg">
           
                <ul>
                    <li><span>邀请码</span> <span>{{itemcode}}</span></li>
                    <li>
                        <span>用户状态</span>
                        <p @click="qiyong"><span class="pagimg" >
                            <img class="iimg"  v-if="iimgo"  src="../../../../assets/images/confirm.png" alt="">
                              <img class="iimg" v-if="!iimgo" src="../../../../assets/images/238270335586544409.png" alt="">
                            </span><span style="margin-left:0.1rem">启用</span></p>
                        <p @click="jinyong" style="margin-left:0.2rem;"><span class="pagimg" >
                            <img ref="iimgt" v-if="!iimgo" class="iimg"  src="../../../../assets/images/confirm.png" alt="">
                             <img class="iimg" v-if="iimgo"  src="../../../../assets/images/238270335586544409.png" alt="">
                            </span><span style="margin-left:0.1rem">禁用</span></p>
                    </li>
                      <li> 
                          <span>彩票返点</span>
                          <span style="padding-left:0;background: transparent;text-align: left;wid" class="jinn aaa">{{localRebate}}</span>
                          <!-- <input type="button" :value="localRebate" style="padding-left:0;background: transparent;text-align: left;" class="jinn"> -->
                          <span class="jinn" ><span></span > </span>
                          <div class="robatee"> 
                            <ul>
                                <li :id="index" :name="item.rebateValue" @click="slect" v-for="(item,index) in resultt" :key="index">
                                    {{item.rebateText}}
                                </li>
                            </ul>
                        </div>
                      </li>
                    <li><div class="button" @click="sureing" >确定</div></li>

                </ul>
                <div @click="xiaoshi"></div>
      </div>
      <div class="tixinge" ref="stt">
           
                <div>
                    <p style="margin-top:0.2rem;">确定要删除这个邀请码吗</p>
                    <p style="line-height:0.4rem;color:#999;">{{itemcode}}</p>
                    <p> <span @click="outing">取消</span><span @click="oning">确定</span></p>
                   
                </div>
                <div></div>
        </div>
  </div>
</template>


<script>
import Scroll from "../../../flash/flased";
export default {
  data() {
    return {
        iimgo:true,
        pageNumber:1,
        pageSize:10,
        result:"",
        resultt:"",
        i:"",
        localRebate:"",
        itemcode:"",
        status:1,
          counter: 1, //当前页
        num: 10, // 一页显示多少条
        pageStart: 0, // 开始页数
        pageEnd: 0, // 结束页数
        listdata: [], // 下拉更新数据存放数组
        scrollData: {
            noFlag: false
        } ,//暂无更多数据显示

    }
  },
 
 mounted(){
     this.getApi();
     this.robate();
     this.i=0;
     var self=this
    $(".jinn").click(function(){
        // console.log("dddddddddddd")
        self.i++;
        var div=$(".robatee");
        if(self.i%2==1){
            div.animate({height:'150px'},"slow");
       
        }else{
             div.animate({height:'0'},"slow");
        }
     });
 },
 methods:{
      onRefresh(done) {
         // this.getList();
          console.log("下拉");
          this.getApi();
          setTimeout(() => {
          if(this.result){
            $.tips("已经刷新当前数据")
              }
                }, 300);
             done(); 
        },
        onInfinite(done) {
            console.log("xiala")
            let more = this.$el.querySelector(".load-more");
            more.style.display='block'
            this.getApii();
                    
            setTimeout(() => {
              if(this.result){
                more.style.display='none';
               }
                }, 300);
                   
                 done();
        },
        goBack() {
            this.$router.go(-1)
		//  this.$router.push({ path: `/daili` })
       },
     nextmen(){
       this.$router.push({path:"/daili/dailitwo"})
     },
     oning(){
         var reslu=base.getApi().delCode(this.$store.state.userid,this.itemcode);
         if(reslu.code==200){
              this.result=base.getApi().codeList(this.pageNumber,this.pageSize,this.$store.state.userid).data;
         }
         document.getElementsByClassName("tixinge")[0].style.display="none"
     },
     outing(){
         document.getElementsByClassName("tixinge")[0].style.display="none"
     },
     removee(){
         this.itemcode=event.currentTarget.parentNode.id;
         document.getElementsByClassName("tixinge")[0].style.display="block"
     },
     sureing(){
        //  if()
        
        //  console.log(base.getApi().modifyCode(this.$store.state.userid,this.itemcode,1,status,this.localRebate));
        if(this.localRebate){
            console.log(this.status)
             var datas=base.getApi().modifyCode(this.$store.state.userid,this.itemcode,1,this.status,this.localRebate);
            this.result=base.getApi().codeList(this.pageNumber,this.pageSize,this.$store.state.userid).data;
             document.getElementsByClassName("ttixingg")[0].style.display="none";
        }else{
            $.tips("请填写彩票返点")
        }
        
     },
     qiyong(){
         this.status=1;
         this.iimgo=true;
        //  this.$refs.iimgo.style.display="block";
        //  this.$refs.iimgt.style.display="none";
         
     },
     jinyong(){
         this.status=8;
          this.iimgo=false;
        //   this.$refs.iimgo.style.display="none";
        //  this.$refs.iimgt.style.display="block";
     },
     change(){
        //  conso
        // console.log(document.getElementsByClassName("tixing")[0])
         document.getElementsByClassName("ttixingg")[0].style.display="block";
         this.itemcode=event.currentTarget.parentNode.id;
     },
     xiaoshi(){
          document.getElementsByClassName("ttixingg")[0].style.display="none";
     },
       slect(){
         this.localRebate=event.currentTarget.getAttribute("name");
         console.log(this.localRebate)
         this.i++;
          $(".robatee").animate({height:'0'},"slow");
     },
      robate(){
         this.resultt=base.getApi().rebateList(this.$store.state.userid).data;
         console.log(this.result)
      },
     getApi(){
         this.result=base.getApi().codeList(this.pageNumber,this.pageSize,this.$store.state.userid).data;
         console.log(this.result)
     },
      getApii(){
          if(this.result.length==this.pageSize){
               this.pageSize+=10;
                this.result=base.getApi().codeList(this.pageNumber,this.pageSize,this.$store.state.userid).data;
                
                console.log(this.result)
          }else{
              $.tips("已经加载全部数据")
          }
         
     },
     copyArticle(event) {
            var range = document.createRange();
            // console.log( event.currentTarget.parentNode.children[1])
             range.selectNode( event.currentTarget);
            var selection = window.getSelection();
            if(selection.rangeCount > 0) selection.removeAllRanges();
            selection.addRange(range);

            document.execCommand('copy');
            $.tips("复制成功");
        },
    // getApii(){
        //   document.getElementsByClassName("tixing")[0].style.display="block";
    //  },
 },
  components: {
        "v-scroll": Scroll
    },
}
</script>

<style scoped lang='less'>
.yaoqinma{
    position: absolute;
    top:0.95rem;
    width:100%;
    display: none;
}
.maintop{
        overflow: hidden;
        width:100%;
        border-bottom: 1px solid #d8d3d3;
        z-index: 101;
    background: #fff;
    position: relative;
        span{
            float: left;
            width:50%;
            line-height: 0.4rem;
        }
        span:nth-child(2){
            // border-right:1px solid gray;
            box-sizing: border-box;
            border-bottom: 2px solid #fe6053;
        }
    }
.index_header{
        width: 100%;
        height: 0.45rem;
        display: flex;
        color: #fff;
        margin: 0 auto;
        position: relative;
        z-index: 999;
    }
    .index_header h3{
        height: 0.45rem;
        line-height: 0.45rem;
        flex: 1;
        text-align: center;
        font-size: .16rem;
    }
    .index_header .mycollect{
        height: 0.45rem;
        line-height: 0.45rem;
        width: .72rem;
        text-align: center;
        font-size: .14rem;
    }
    .tixinge{
    position: fixed;
        z-index: 999;
    width: 100%;
    height: 100%;
    top:0;
    display: none;
    font-size:0.14rem;
    >div:nth-child(2){
        width: 100%;
        height: 100%;
        position: absolute;
        background: #000;
        opacity: 0.3;
        top: 0;
    }
    >div:nth-child(1){
        position: absolute;
        border-radius: 6px ;
        z-index: 1;
        // width: 80%;
        // height: 300px;
        top:300px;
        left:50%;
        margin-left:-150px;
        height: 120px;
        width:300px;
        background: #fff;
        >p:nth-child(3){
            border-top: 1px solid #cecaca;
            overflow: hidden;
            line-height: 0.4rem;
          span{
              float: left;
              box-sizing: border-box;
              width:50%;
              
          }
          >span:nth-child(2){
              border-left:1px solid #cecaca;
              color:red;
          }
        }
        
    }
}
.pagimg{
    width: 0.2rem;
    height: 0.2rem;
    display: inline-block;
    vertical-align: middle;
    border-radius: 50%;
}
.iimg{
    // vertical-align: middle !important; 
    width: 0.2rem;
    display: none;
}
.button{
        margin: 1rem auto;
    font-size: 0.16rem;
    color: white;
    line-height: 0.48rem;
    padding: 0 0.23rem;
    border-radius: 10px;
    width: 2.22rem;
    // background: -webkit-gradient(linear, left top, right top, from(#fa3956), to(#ff6b52));
    background: linear-gradient(90deg, #fa3956, #ff6b52);
    text-align: center;
    
}
.robatee{
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
        top: 140px;
        li{
            line-height:0.45rem;
            text-align-last: center;
        }
    }
  .ttixingg{
    position: fixed;
    width: 100%;
    height: 100%;
    top:0;
    display: none;
    font-size:0.14rem;
    z-index:999;
    >div:nth-child(2){
        width: 100%;
        height: 100%;
        position: absolute;
        background: #000;
        opacity: 0.3;
        top: 0;
    }
    >ul:nth-child(1){
        position: absolute;
        z-index: 1;
        bottom: 0;
        height:340px;
        width: 100%;
        background: #fff;
        
      >li{
          line-height:0.45rem;
          text-align: left;
          margin-left:5%;
          border-bottom: 1px solid #f5f5f5;
          overflow: hidden;
          >span:nth-child(1){
              width:26%;
              float: left;
          }
          >p{
              float: left;
          }
          .aaa{
              float: left;
              width:60%;
              height:0.3rem;
              margin-top:0.05rem;
              border: none;
              outline: none;
          }
      }
        
    }
}
.tab{
    font-size:0.14rem;
    background: #fff;
    height:100%;
    .headtop{
         line-height: 0.4rem;
        width:100%;
        background: #fff;
         overflow: hidden;
         position: relative;
         z-index: 999;
         >span{
            float: left;
          
            text-align: center;
          }
    }
    .header{
        line-height: 0.4rem;
        width:100%;
        background: #fff;
        >li{
            overflow: hidden;
            >span{
            float: left;
          text-align: center;
            // text-align: left;
          }
          
        }
        
    }
    .spann{
        padding:0.03rem 0.05rem;    
        background: linear-gradient(90deg, #fa3956, #ff6b52);  
        border-radius: 0.06rem;
        color:#fff;
    }
}
    .jinn{
        span{
            border-top:1px solid #3c3232;
            border-left:1px solid#3c3232;
            height:0.1rem;
            display: inline-block;
            transform:rotate(-135deg);
             width:0.1rem;
           }
    }
</style>
