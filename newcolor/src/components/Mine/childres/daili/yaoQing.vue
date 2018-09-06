<template>
  <div class="tab "  style="position:absolute;    position: absolute;
    top: 1.8rem;;width:100%;height:100%;background: #f5f5f5;z-index:1000;">
        <div class="headtop yaoqinma" >
              <span style="width:26%;">邀请码</span>
              <span style="width:12%;">类型</span>
              <span style="width:16%;">返点</span>
              <span style="width:12%;">状态</span>
              <span style="width:34%;">操作</span>
          </div>
        <div style="overflow:scroll;  position: relative;top: -52px;" ref="scol">
             <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite">
             <div ref="codes">
                 <ul class="header" style="top:0">
                    <li v-for="(item,index) in resultsecode" :key="index" style="font-size:0.28rem;">
                        <span style="width:26%;" @click="copyArticle">{{item.code}}</span>
                        <span style="width:12%;">{{item.type==1?"代理":"玩家"}}</span>
                        <span style="width:16%;">{{item.rebate}}</span>
                        <span style="width:12%;">{{item.status==1?"启用":"禁用"}}</span>
                        <span style="width:34%;" :id="item.code">
                            <span class="spann" @click="change(item.rebate)" >修改</span>
                            <span class="spann" @click="removee" style="background: rgba(204,204,204,1);">删除</span>
                            <span class="spann" @click="shared">分享</span>
                        </span>
                    </li>
                    
                </ul>
             </div>
            
            </v-scroll>
        </div>
        
      <div class="ttixingg">
           
                <ul>
                    <li><span>邀请码</span> <span>{{itemcode}}</span></li>
                    <li>
                        <span>用户状态</span>
                        <p @click="qiyong"><span class="pagimg" >
                            <img class="iimg"  v-if="ifiimgt"   style="background:#fa3956;border-radius:50%;"   src="../../../../assets/images/confirm.png" alt="">
                            <img  v-if="!ifiimgt"  class="iimg"  src="../../../../assets/images/238270335586544409.png" alt="">
                            </span><span style="margin-left:0.1rem">启用</span></p>
                        <p @click="jinyong" style="margin-left:0.2rem;">
                            <span id="jinyong" class="pagimg" >
                                <img  v-if="!ifiimgt" class="iimg"  style="background:#fa3956;border-radius:50%;" src="../../../../assets/images/confirm.png" alt="">
                                <img  v-if="ifiimgt" class="iimg"  src="../../../../assets/images/238270335586544409.png" alt="">
                            </span>
                            <span style="margin-left:0.1rem">
                                禁用
                            </span>
                        </p>
                    </li>
                      <li> 
                          <span>彩票返点</span>
                          <span style="padding-left:0;background: transparent;text-align: left;wid" class="jinn aaa">{{localRebate}}</span>
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
      <div class="txing" ref="stted" v-if="txing">
                <div>
                    <p >复制链接分享:</p>
                    <p ref="nuimm" style="margin-bottom: 0.2rem;">{{url}}</p>
                    <p @click="copyArticlee"> 复制</p>
                   
                </div>
                <div></div>
        </div> 
      <div class="tixinge" ref="stt" >
                <div>
                    <p style="margin-top:0.2rem;">确定要删除这个邀请码吗</p>
                    <p style="line-height:0.8rem;color:#999;">{{itemcode}}</p>
                    <p> <span @click="outing">取消</span><span @click="oning">确定</span></p>
                   
                </div>
                <div></div>
        </div>
  </div>
</template>


<script>
import Scroll from "../../../flash/flash";
export default {
  data() {
    return {
        ifiimgt:true,
        pageNumber:1,
        // pageSize:10,
        resultt:"",
        resulttt:"",
        i:"",
        localRebate:"",
        itemcode:"",
        status:1,
        url:"",
        txing:false,
        // resultsecode:[]
    }
  },
// props: ['resultsecode'],
computed:{
    resultsecode(){
        return this.$store.state.resultsecode;
    },
    pageSize(){
         return this.$store.state.pageSize;
    }
},
 mounted(){
     this.robate();
     this.i=0;
     var self=this
    $(".jinn").click(function(){
        self.i++;
        var div=$(".robatee");
        if(self.i%2==1){
            div.animate({height:'150px'},"slow");
       
        }else{
             div.animate({height:'0'},"slow");
        }
     });
     this.$nextTick(()=>{
         this.getheight()
     })
      
 },
 methods:{
     shared(){
         console.log( event.currentTarget.parentNode.parentNode.children[3].innerHTML)
         if( event.currentTarget.parentNode.parentNode.children[3].innerHTML=="禁用"){
             $.tips("禁用状态不能分享")
             return;
         }
         this.url= base.getApi().share().data + "?code=" +event.currentTarget.parentNode.parentNode.children[0].innerHTML
        this.txing=true;
     },
     copyArticlee() {
      var range = document.createRange();
      var nuimm = this.$refs.nuimm;
      range.selectNode(nuimm);

      var selection = window.getSelection();
      if (selection.rangeCount > 0) selection.removeAllRanges();
      selection.addRange(range);

      document.execCommand("copy");
      $.tips("复制成功");
      this.txing=false
    //   self = this;
    //   setTimeout(() => {
        //   console.log(self.$refs.stted)
        // self.$refs.stted.style.display = "none";

    //   }, 200);
    },
     getheight(){
         this.$refs.scol.style.height=document.getElementsByTagName("body")[0].offsetHeight-45-42-10+"px"
     },
      onRefresh(done) {
                    this.getApi();
                        if(this.$store.state.resultsecode.length){
                            $.tips("已经刷新当前数据")
                         }
                    done(); 
                },
                onInfinite(done) {
                      let more = this.$el.querySelector(".load-more");
                      more.style.display='block'
                     this.getApiied();
                    if(this.$store.state.resultsecode.length){
                        more.style.display='none';
                    }
                    setTimeout(function(){
                       more.style.display='none'; 
                    },1000)
                    done();
                },
        goBack() {
            this.$router.go(-1)
       },
     nextmen(){
       this.$router.push({path:"/daili/dailitwo"})
     },
     oning(){
         var reslu=base.getApi().delCode(this.$store.state.userid,this.itemcode);
         if(reslu.code==200){
              this.$store.state.resultsecode=base.getApi().codeList(this.pageNumber,this.pageSize,this.$store.state.userid).data;
         }
         document.getElementsByClassName("tixinge")[0].style.display="none"
     },
     outing(){
         document.getElementsByClassName("tixinge")[0].style.display="none"
     },
     removee(){
        //  alert()
        //  document.getElementsByClassName("load-more")[0].style.display="none"
         this.itemcode=event.currentTarget.parentNode.id;
         document.getElementsByClassName("tixinge")[0].style.display="block"
     },
     sureing(){
        if(this.localRebate){
            console.log(this.status)
             var datas=base.getApi().modifyCode(this.$store.state.userid,this.itemcode,1,this.status,this.localRebate);
            this.$store.state.resultsecode=base.getApi().codeList(this.pageNumber,this.pageSize,this.$store.state.userid).data;
            document.getElementsByClassName("ttixingg")[0].style.display="none";
        }else{
            $.tips("请填写彩票返点")
        }
        
     },
     qiyong(){
         this.status=1;
         this.ifiimgt=true;
        //  this.$refs.iimgo.style.display="block";
        //  this.$refs.iimgo.parentNode.style.border="none"
        //  this.$refs.iimgt.style.display="none";
        //   this.$refs.iimgt.parentNode.style.border="1px solid #666"
     },
     jinyong(){
         this.status=8;
         this.ifiimgt=false;
        //  this.$refs.jinyong.style.display="none"
        //   this.$refs.iimgo.style.display="none";
        //   this.$refs.iimgo.parentNode.style.border="1px solid #666"
        //   this.$refs.iimgt.style.display="block";
        //   this.$refs.iimgt.parentNode.style.border="none";
     },
     change(){
        //  alert(event.currentTarget.parentNode.parentNode.children[3].innerHTML=="禁止")
         if(event.currentTarget.parentNode.parentNode.children[3].innerHTML=="禁用"){
             this.ifiimgt=false
         }else{
              this.ifiimgt=true
         }
         this.localRebate=event.currentTarget.parentNode.parentNode.children[2].innerHTML
         console.log(this.localRebate)
         this.itemcode=event.currentTarget.parentNode.id;
         this.resultt = this.resulttt.slice(0)
        for (var i=this.resulttt.length-1;i>=0;i--) {
            if (this.resulttt[i].rebateValue<this.localRebate){
                this.resultt.splice(i,1)
            }
        }   
         document.getElementsByClassName("ttixingg")[0].style.display="block";
         
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
        base.getApi().rebateList1(this.$store.state.userid).then((res)=>{
              this.resultt=res.data;
              this.resulttt=res.data;
         });
        
      },
     getApi(){
         this.result=base.getApi().codeList(this.pageNumber,this.pageSize,this.$store.state.userid).data;
         console.log(this.result)
     },
      getApiied(){
          if(this.resultsecode.length==this.pageSize){
               this.$store.state.pageSize+=10;
                this.$store.state.resultsecode=base.getApi().codeList(this.pageNumber,this.pageSize,this.$store.state.userid).data;
                
                console.log(this.resultsecode)
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
    // getApiied(){
        //   document.getElementsByClassName("tixing")[0].style.display="block";
    //  },
 },
  components: {
        "v-scroll": Scroll
    },
}
</script>

<style scoped lang='less'>
.txing {
  position: fixed;

  width: 100%;
  height: 100%;
  top: 0;
//   display: none;
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
      line-height: 0.8rem;
      font-size: 0.28rem;
      font-weight: 600;
    }
    > p:last-child {
      border-top: 1px solid whitesmoke;
      overflow: hidden;
      line-height: 0.8rem;
      // line-height:0.8rem;
    }
  }
}

.yaoqinma{
    position: absolute;
    top:0rem;
    width:100%;
    // display: none;
   
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
    font-size:0.28rem;
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
            line-height: 0.8rem;
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
    // border: 1px solid rgb(102, 102, 102);
    width: 0.4rem;
    height: 0.4rem;
    display: inline-block;
    vertical-align: middle;
    border-radius: 50%;
    box-sizing: border-box;
}
.iimg{
    // vertical-align: middle !important; 
    width: 0.4rem;
    // display: none;
}
.button{
        margin: 1rem auto;
    font-size: 0.28rem;
    color: white;
    line-height: 0.8rem;
    padding: 0 0.3rem;
    border-radius: 0.2rem;
    width: 3rem;
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
    font-size:0.28rem;
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
          line-height:0.8rem;
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
    font-size:0.28rem;
    background: #fff;
    height:100%;
    .headtop{
         line-height: 0.8rem;
        width:100%;
        background: #fff;
         overflow: hidden;
         position: relative;
         z-index: 999;
             top: -0.1rem;
              border-bottom: 1px solid #f5f5f5;
         >span{
            float: left;
          
            text-align: center;
          }
    }
    .header{
        line-height: 0.8rem;
        width:100%;
        background: #fff;
        >li{
            overflow: hidden;
                border-bottom: 1px solid #f5f5f5;
            >span{
            float: left;
          text-align: center;
            // text-align: left;
          }
          
        }
        
    }
    .spann{
        padding:0.03rem 0.05rem;    
        // background: linear-gradient(90deg, #fa3956, #ff6b52);  
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
