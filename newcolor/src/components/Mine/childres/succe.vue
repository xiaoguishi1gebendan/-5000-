<template>
  <div>
      <headertop style="position: relative;z-index:999" title="意见反馈" :goBack="goback"> </headertop>  
      <div style="padding-top:0.5rem">
          <img class="imgbor" src="../../../assets/images/confirm.png" alt="" style="width:0.8rem">
          <p style="color:red;font-size:0.18rem">您已成功提交反馈内容，感谢支持！</p>
      </div>
      <button @click="goback" style="width:2.5rem;height:0.5rem;background:#fe5b54;border:none;color:#fff;font-size:0.16rem;border-radius: 6px">确定</button>
  </div>
</template>

<script>
 import headertop from '../../header/header'
export default {
  data() {
    return {

    }
  },
 mounted(){
     

 },
 methods:{
     goback(){
         this.$router.go(-2)
     }
 },
  components: {
      headertop
  }
}
</script>

<style scoped lang='less'>
a{
    
}
</style>
