<template>
  <div  style="overflow: hidden;position:absolute;top:0;width:100%;height:100%;background: #f5f5f5;z-index:1000;">
      <Header title="代理说明"></Header>
        <div style="height:100%;overflow:scroll;">
            <img style="width: 100%;" :src="url" alt="">
            <div v-html="result" style="font-size:0.28rem;text-align:left;margin:0 0.2rem;line-height:0.5rem;padding-bottom:0.45rem;"></div>
        </div>
  </div>
</template>

<script>
import Header from './../../../header/header'
export default {
  data() {
    return {
        result:"",
        url:""
    }
  },
 mounted(){
     var data=base.getApi().ploxyContent(this.$store.state.userid).data
     this.result=data.activityDesc;
     this.url=base.domain+data.logo.fileurl
 },
 methods:{
    
 },
  components: {
      Header,
  }
}
</script>

<style scoped lang='less'>
 
</style>
