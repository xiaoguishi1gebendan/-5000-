<template>

 <div style="width:100%;height:100%;background:#fff;padding-bottom:0.25rem">
     <div class="padding20"></div>
     <iframe   style="width:100%;height:calc(100% - 0.25rem);background:#fff;padding-bottom:0.25rem"
     :src="onlineURL" frameborder="0"></iframe>
 </div>
</template>

<script>
export default {
  data() {
    return {
      onlineURL:window.onlineURL
    };
  },
  mounted() {
    this.isstyle();

    $('.operator-name').html('客服通道')
    $('.header').css({'background':'red'})
  },
  methods: {
    isstyle() {
  
    }
  },
  components: {}
};
</script>

<style scoped lang=''>
iframe  .header {
  position: fixed;
  background-color: red !important;
  color: #fff;
}
#funcDiv {
  bottom: 1rem;
}
</style>
