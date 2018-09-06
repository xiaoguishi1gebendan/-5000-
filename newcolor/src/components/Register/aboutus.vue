<template>
  <div style="height:100%;overflow:scroll;">
	    <headertop :title="entity.remark" > </headertop>
        <div class="aboutusin" v-html="entity.content">

        </div>
  </div>
</template>

<script>
import headertop from '../header/header'
  export default{
    components: {
        headertop,
    },
  data() {
    return {
        entity:""
    }
  },
 mounted(){
     this.getapi();
     this.getID()
 },
 methods:{
     getapi(){
         var type=myStorage.getItem("type");
         this.entity =base.getApi().getSystemContent(type).aboutUs;
        
     },
     getID(){
        
     },
	 goBack(){
		 this.$router.go(-1)
	 }
 },
}
</script>

<style scoped lang='less'>
h3{
    font-size: 0.16rem !important;
    line-height: 0.3rem !important;
}
.aboutusin{
    font-size:0.26rem;
    // margin-top: 0.45rem !important;
    width: 90%;
    margin: 0 auto;
    text-align: left;
    line-height: 0.6rem;
}
</style>
