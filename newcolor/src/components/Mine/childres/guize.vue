<template>
  <div style="position:absolute;top:0;background:#fff;width:100%;height:100%;">
      <div>
           <headertop :title="title" id="header"> </headertop>
      </div>

        <div id="guize"  refs="mainBody" style="overflow:scroll;">
            <img :src="baseurl+result.logo.fileurl" style="width:100%;" alt="">
            <div v-html="result.details" style=" font-size: 0.14rem !important;text-align: left;width: 96%;margin: 0 auto!important;"></div>
        </div>
        
     
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
        result:"",
        baseurl:base.domain,
        title:"签到规则"
    }
  },
 mounted(){
     this.getapi();
    //  this.$nextTick(function(){
    //      console.log(document.getElementsByTagName("table")[0].style.width)
    //             document.getElementsByTagName("table")[0].style.width="96%";
    //             // this.getheight()
    //             document.getElementById("guize").style.height=document.getElementsByTagName("body")[0].offsetHeight-document.getElementById("header").offsetHeight+"px"
    //         })
     
    
 },
 methods:{
     getheight(){
      var  heightt= document.getElementsByTagName("body")[0].offsetHeight-45;
    //   console.log(document.getElementsByTagName("body")[0].offsetHeight)
    //   document.getElementById("guize").style.height=heightt+"px"
     },
     goBack(){
         this.$router.go(-1);
        
     },
     getapi(){
        var activeId=localStorage.getItem('activeId') ;
        
        console.log(typeof(activeId))
        base.getApi().activityDetail1(activeId).then((res)=>{
            if(res.code == 200) {
                var result = res.data.activity;
            } else {
                $.tips(res.message, 1000);
            };
            this.result = result
            this.$nextTick(()=>{
                document.getElementsByTagName("table")[0].style.width="96%"
                document.getElementById("guize").style.height=document.getElementsByTagName("body")[0].offsetHeight-document.getElementById("header").offsetHeight+"px"
            })
            
        })
    //    this.result=base.getApi().activityDetail(activeId);
     }
 },

}
</script>

<style scoped lang='less'>
table{
    width: 346px !important;
    margin: 0 auto !important;
}
</style>
