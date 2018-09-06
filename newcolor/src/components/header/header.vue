<template lang="html">
  <div class="top app_bg app_bgg"  >
      <div v-if="showONE">
          <div id="index_header">
            <div class="backed" @click="goBack" >
                  <span v-if="ifhomeleft" style="    line-height: 0.8rem;float: left;margin-left: 0.2rem;font-size:0.24rem;" >注册</span>
                  <i v-if="ifback" data-v-74fc21d6="" class="iconfont icon-mjiantou-copy" ></i>
                  <i v-if="ifhome" data-v-74fc21d6="" ><img style="    width: 0.38rem" src='../../assets/source/imgs/images/logo_03.png'></i>
            </div>
			     <h3>{{title}}</h3>
		    	<div class="rightt  "  @click="goDetal"  v-html="datal">	</div>
	  	  </div>
   </div>
      

      


     	
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    showONE: {
      type: Boolean,
      default: true
    },
    isShow: {
      type: Boolean,
      default: false
    },
    classNAME:{
        type: String,
      default: ""
    },

    title: {
      type: String,
      default: ""
    },
    ifhomeleft: {
      type: Boolean,
      default: false
    },
    ifback: {
      type: Boolean,
      default: true
    },
    ifhome: {
      type: Boolean,
      default: false
    },
    lefthtml: {
      type: String,
      default: ""
    },
    datal: {
      type: String,
      default: ""
    },
    enableRefresh: {
      type: String,
      default: ""
    },
    goBack: {
      type: Function,
      default: function() {
        return window.vm.$router.go(-1);
      }
    },
    goDetal: {
      type: Function,
      default: function() {
        return "";
      }
    }
  },
  mounted() {},
  methods: {},
  components: {}
};
</script>

<style scoped lang='less'>
.top {
  width: 100%;
      z-index: 999;
    position: relative;
 
}
    #index_header{
        width:100%;
        font-size:0.14rem;
        height:0.8rem;
        overflow: hidden;
       
        >.backed{
            float: left;
            color: #fff;
            width:25%;
           
            >i{
              margin-left: 12px;
              float: left;
              margin-top: 0.15rem;
              font-size: 0.45rem;
            }
        }
        >h3{
             float: left;
            // margin-left: 20%;
            width: 50%;
            line-height: 0.8rem;
            font-size:0.3rem;
            height:0.8rem;
            text-align: center;
            color:#fff;
        }
        >.rightt{
                width: 23%;
    float: left;
    line-height: 0.8rem;
    text-align: right;
    color: #fff;
    font-size: 0.26rem;
             
        }
    }
 

</style>
