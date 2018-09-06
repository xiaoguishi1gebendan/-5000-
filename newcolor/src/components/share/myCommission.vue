<template>
 <div class="root">
     <div  style="overflow: hidden;position:absolute;top:0;width:100%;height:100%;background: #f5f5f5;z-index:1000;font-size: 0.14rem;">
        <Header title="代理佣金"></Header>
        
      <commission> </commission>
        
  </div>
 </div>
</template>

<script>
import commission from "./commission.vue"
import Header from './../header/header'

export default {
 data() {
 return {
    
 }
 },
 mounted(){
     //默认加载数据
    //  this.changeDate();
 },
 methods:{
    
 },
 components: {
     "commission":commission,
     Header,
 }
}
</script>

<style scoped lang='less'>
    .root{
        background-color: #f5f5f5;
         font-size: .16rem;
         
    }
   
</style>
