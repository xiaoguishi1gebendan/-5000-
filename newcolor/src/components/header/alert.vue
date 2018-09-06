<template>
  <div class="but">
      <div class="buttop">
          <div class="buttopin">
            <p>提示</p>
            <p>提示语</p>
            <p><span>取消</span><span>确定</span></p>
          </div>
          <div class="butmian"></div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
 mounted(){

 },
 methods:{

 },
  components: {

  }
}
</script>

<style scoped lang='less'>
    .but{
        font-size:0.16rem;
        width:100%;
       
        height:100%;
       
       
        >.buttop{
            
            >.buttopin{
                width:60%;
                height:126px;
                 position: absolute;
              top:50%;
               z-index:9999;
               
                left:20%;
                >p{
                    width:100%;
                    line-height: 0.4rem;
                    overflow: hidden;
                    border-bottom:1px solid #666;
                     background: #fff;
                    >span{
                        float: left;
                        width:50%;
                        text-align: center;
                    }
                    >span:nth-child(1){
                        border-right:1px solid #666;
                        box-sizing: border-box;
                    }
                }
                >p:nth-child(3){
                     border-bottom:none;
                }
            }
        }
    }
    .butmian{
        position: fixed;
        width:100%;
        height:100%;
        background: #000;
        opacity: 0.5;
        z-index:999;
    }
</style>
