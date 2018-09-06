<template>
  <div style="    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    overflow:scroll;
    background: #fff;z-index:1000">
       <headertop :title="title" :datal="datal" :goDetal="pushadd"> </headertop>
        <ul class="banklist">
            <li @click="goto"    v-for="(item,index) in userCardList" :key="index"><span>{{item.bankNametype}}</span> <span style="position: relative;">
                <img :id="item.id" class="img" :style="styleObject"  src="../../assets/images/confirm.png" alt="">
                </span>
            </li>
        </ul>
  </div>
</template>

<script>
import headertop from '../header/header'
export default {
    components: {
        headertop,
    },
  data() {
    return {
        title:"选择银行卡",
        datal:"添加",
        userCardList:"",
        styleObject:{
            width:'0.5rem',
            display:'none',
            position:'absolute',
            
            background:window.bgmapcolor,
            borderRadius:'50%'
        }
    }
  },
 mounted(){
    this.getapi();
    this.$nextTick(()=>{
        this.getred()
    })
 },
 methods:{
     getred(){
         var imgs=document.getElementsByClassName("img");
        for(var i=0;i<imgs.length;i++){
            if(imgs[i].id==this.$store.state.item.id){
                 imgs[i].style.display="block";
                 return;
            }
            
            
        }
     },
     getapi(){
          this.userCardList= this.$store.state.currentUser1.userCardList;
          console.log(this.userCardList)
     },
     pushadd(){
          this.$router.push({ path: `/addbankcard` })
          this.$store.state.showBank = true
     },
     goto(){
         console.log(event.currentTarget.children[0]);
        var imgs=document.getElementsByClassName("img");
        for(var i=0;i<imgs.length;i++){
            imgs[i].style.display="none"
        }
        event.currentTarget.children[1].children[0].style.display="block";

        var id=event.currentTarget.children[1].children[0].id;
        for(var i=0;i<this.userCardList.length;i++){
            if(id==this.userCardList[i].id){
                this.$store.state.item=this.userCardList[i]
            }
        }
        setTimeout(() => {
             this.$router.go(-1)
        }, 150);
       
      
     }
 }
}
</script>

<style scoped lang='less'>
.banklist{
    
    font-size: 0.28rem;
    color: gray;
    >li{
        overflow: hidden;
         line-height: 1rem;
         border-bottom: 1px solid #e4e4e4;
        span:nth-child(1){
            float: left;
           margin-left: 0.2rem;
        }
        span:nth-child(2){
            width: 0.5rem;
            height:0.5rem;
            margin-right:0.2rem;
            margin-top:0.24rem;
            border: 1px solid #e4e4e4;
            border-radius: 50%;
            float: right;
        }
    }
}
</style>
