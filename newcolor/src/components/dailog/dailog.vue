<template>
  <div class="but">
      <div class="buttop">
          <div class="buttopin">
            <p>{{titleMassage}}</p>
            <p class="contant" v-if="ifcontent" v-html="content"></p>
            <!-- <p v-if="ifinput"><input type="text"></p> -->
            <p class="latp" v-if="ifcancelQx"><span @click ="cancelQx"> 取消</span><span  @click="confirm" style="color:red;">{{sured}}</span></p>
             <p class="lasp" v-if="!ifcancelQx"  @click ="knowed">{{know}}</p>
          </div>
          <div class="butmian"></div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    know:{
      type: String,
      default: "我知道了"
    },
    sured:{
      type: String,
      default: "确定"
    },
    titleMassage: {
      type: String,
      default: "提示"
    },
    ifcontent:{
      type:Boolean,
      default:true
    },
    ifcancelQx:{
      type:Boolean,
      default:true
    },
    content: {
      type: String,
      default: "确定取消吗"
    },
    cancelQx: {
      type: Function,
      default: function() {
        return "呼叫你看";
      }
    },
    confirm: {
      type: Function,
      default: function() {
        return "";
      }
    },
    knowed:{
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
.but {
  font-size: 0.28rem;
  width: 100%;
  height: 100%;

  > .buttop {
    > .buttopin {
     width: 80%;
    position: absolute;
    top: 35%;
    z-index: 9999;
    left: 10%;
    // height: 150px;
    background: #fff;
    border-radius: 5px;
      >.contant{
        
      }
      > p {
        width: 100%;
        line-height: 0.8rem;
        overflow: hidden;
       
        text-align: center;
      
        > span {
          float: left;
          width: 50%;
          text-align: center;
        }
        > span:nth-child(1) {
          border-right: 1px solid #e3e3e3;
          box-sizing: border-box;
        }
      }
      p:nth-child(1){
        line-height: 0.8rem;
        border: none;
        font-size: 0.28rem;
        font-weight: 600;
      }
       p:nth-child(2){
        color:#666;
        padding-bottom: 0.4rem;
        font-size:0.28rem;
        width:90%;
        margin-left:5%;
      }
      >.latp {
        border-top: 1px solid #e3e3e3;
        line-height: 0.8rem;
      }
      >.lasp{
          border-top: 1px solid #e3e3e3;
        line-height: 0.4rem;
        color:red;
      }
    }
  }
}
.butmian {
  position: fixed;
  width: 100%;
  height: 100%;
  top:0;
  background: #000;
  opacity: 0.3;
  z-index: 1111;
}
</style>
