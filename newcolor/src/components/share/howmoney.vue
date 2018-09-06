<template>
  <div  style="overflow: hidden;position:absolute;top:0;width:100%;height:100%;background: #f5f5f5;z-index:1000;">
      <div class="index_header">
            <Header title="如何分享赚钱"></Header>
		</div>
        <div ref="imgg" style="overflow:scroll;height:100%;margin-bottom:.45rem;">
            <img style="width:100%;" :src="domain+'upload/img/popUp/other/share.png'" alt="">
        </div>
  </div>
</template>

<script>
import Header from "./../header/header";
export default {
  data() {
    return {
      domain:base.domain
    };
  },
  mounted:function() {
    //   var heightt= document.getElementsByTagName('body')[0].offsetHeight-document.getElementsByClassName("index_header")[0].offsetHeight;
    //   this.$refs.imgg.style.height=heightt+"px"
    this.isstyle()
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    isstyle(){
      
      
    }
  },
  components: {
    Header
  }
};
</script>

<style scoped lang='less'>
.wrap_header {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 200;
}
.index_header {
  width: 100%;
  height: 0.8rem;
  display: flex;
  color: #fff;
  margin: 0 auto;
  background-color: linear-gradient(90deg, #fa3956, #ff6b52);
}

</style>
    