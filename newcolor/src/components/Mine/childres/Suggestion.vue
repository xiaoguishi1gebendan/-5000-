<template>
<div style="top: 0;width: 100%;height:100%;background: #f5f5f5;">
        <!-- 顶部 -->
   <headertop style="position: relative;z-index:999" :title="title" > </headertop>
   <div style=" position: relative;z-index:0;top:-45px;" ref="listwrapVue">
       <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite"> 
        <div class="content-wrap"  >
            <div class="que-list">
                <a @click="gointo" :id="item.id" class="que block" v-for="(item,index) in complainAll" :key="index">
                    <img style="width: 0.4rem;position: absolute;top: .13rem;" src="../../../assets/source/imgs/tousu.png" alt="">
                    <h3 class="que-tit">{{item.typename}}</h3>
                    <p class="que-con">{{item.details}}</p>
                    <p class="que-time">{{item.addTime| dateFmt('YYYY-MM-DD HH:mm:ss')}}</p>
                    <img class="que-state" :src='item.src'>
                </a>
           
            </div>
        </div>

     </v-scroll>
   </div>  
   
        <div class="addque">

            <a @click="touShuJianyi" class="addquebtn block">添加意见反馈</a>
        </div>

         <transition name="slide">
           <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import Scroll from "../../flash/flash";
 import headertop from '../../header/header'
  export default{
        data(){
            return{
                title:"意见反馈",
                isShowBack: false,
                isHideTabBar: false,
                complainAll:[],
                pageNumber:1,
                pageSize:10,
                nowdata:'马上更新',
                topStatus: '',
                timeout:'',
                imgrote:'',
                time:"",
               counter: 1, //当前页
                num: 10, // 一页显示多少条
                pageStart: 0, // 开始页数
                pageEnd: 0, // 结束页数
                listdata: [], // 下拉更新数据存放数组
                scrollData: {
                    noFlag: false
                } //暂无更多数据显示
            }
        },
         components: {
            "v-scroll": Scroll,
            headertop,
        },
        mounted:function() {
           
           this.getlistheight()
        },
        methods:{
            onRefresh(done) {
               this.getapi();
                      setTimeout(() => {
                        if(this.complainAll){
                            $.tips("已经刷新当前数据")
                         }
                        }, 300);
                    done(); 
            },
            onInfinite(done) {
                let more = this.$el.querySelector(".load-more");
                      more.style.display='block'
                    this.getapii();
                    
                        setTimeout(() => {
                            if(this.complainAll){
                            more.style.display='none';
                             }
                        }, 300);
                   
                    done();
            },
             getlistheight(){
                    var bodyheight=document.getElementsByTagName("body")[0].offsetHeight;
                    // console.log(document.getElementsByClassName("header_wrap")[0])
                    var headerheight=document.getElementsByClassName("addque")[0].offsetHeight;
                    this.$refs.listwrapVue.style.height=bodyheight-headerheight-document.getElementsByClassName("pde")[0].offsetHeight+'px'
             },
            gointo(){
               var id= event.currentTarget.id;
               console.log(id)
               this.$router.push({"path":"/suggestiondetal"})
               localStorage.setItem("feedbackId",id)
            },
            getapi(){
               
                var localUser = JSON.parse(myStorage.getItem("currentUser"));
                if(localUser){
                   var complainAll = base.getApi().feedbackList(this.pageSize, this.pageNumber, localUser.id, '');
                 
                   if(complainAll.length>0){
                    //    alert(complainAll[1].addTime)
                          for(var i=0;i<complainAll.length;i++){
                            //   complainAll[i].addTime= new Date(complainAll[i].addTime).toLocaleString();
                            //   console.log()
                                if(complainAll[i].type==0||complainAll[i].type==1){
                                    complainAll[i].typename="建议"
                                }else if(complainAll[i].type==2){
                                    complainAll[i].typename="错误报告"
                                }else if(complainAll[i].type==3){
                                    complainAll[i].typename="投诉"
                                }
                                if(complainAll[i].status==1){
                                    complainAll[i].src=require('../../../assets/source/css/common/images/state2.png')
                                }else{
                                    complainAll[i].src=require('../../../assets/source/css/common/images/state1.png')
                                }
                    }

                    this.complainAll=complainAll;
                     $.tips("已经刷新当前建议",1000)
                     console.log(complainAll)
                   }else{
                       $.tips("您还没有提交建议哦",1000)
                   }

                 
                }
            },
            getapii(){
               
                var localUser = JSON.parse(myStorage.getItem("currentUser"));
                if(localUser){
                    if(this.pageSize==this.complainAll.length){
                        this.pageSize=this.pageSize+10;
                        var complainAll = base.getApi().feedbackList(this.pageSize, this.pageNumber, localUser.id, '');
                        if(complainAll.length>0){
                                for(var i=0;i<complainAll.length;i++){
                                    complainAll[i].addTime= new Date(complainAll[i].addTime).toLocaleString()
                                        if(complainAll[i].type==0||complainAll[i].type==1){
                                            complainAll[i].typename="建议"
                                        }else if(complainAll[i].type==2){
                                            complainAll[i].typename="错误报告"
                                        }else if(complainAll[i].type==3){
                                            complainAll[i].typename="投诉"
                                        }
                                        if(complainAll[i].status==1){
                                            complainAll[i].src=require('../../../assets/source/css/common/images/state2.png')
                                        }else{
                                            complainAll[i].src=require('../../../assets/source/css/common/images/state1.png')
                                        }
                            }
                       this.complainAll=complainAll;
                   }else{
                       $.tips("您还没有提交建议哦",1000)
                   }
                }else{
                    $.tips("已经加载全部消息")
                }
            }
                    
            },
            changeimg(){

            },
            touShuJianyi(){
                this.$router.push({path:"/addsuggestion"})
                // this.$router.push({ path: 'home'}) 
            },
            goBack() {
                 this.$router.push({"path":"/minesetting"})//底层等同于 history.back()back() 方法可加载历史列表中的前一个 URL（如果存在）。
                // 调用该方法的效果等价于点击后退按钮或调用 history.go(-1)。
            },
            isShowOrHide(path) {
                if (path != '/Home') {
                    this.isShowBack = true
                    this.isHideTabBar = true
                } else {//首页
                    this.isShowBack = false
                    this.isHideTabBar = false
                }
            },
        },
        watch: {  //当路由改变的时候（newValue.path）获取当前的路由
            $route: function(newValue, oldValue) {
                this.isShowOrHide(newValue.path)
            }
        },

        beforeCreate: function() {
            document.getElementsByTagName("body")[0].style.backgroundColor='#f5f5f5';
            document.getElementsByTagName("body")[0].style.overflowY='hidden';
        },
        created(){
            this.isShowOrHide(this.$route.path);
            this.getapi();
            // 渲染基础数据
           
        }
    }
</script>

<style scoped>
    /*主内容区*/
    /*content*/
   
    .que-list{
        
        padding-top: .01rem;
        /* padding-bottom: 0.45rem; */
    }
    .que-list .que{
        width: 96%;
        display: block;
        margin: 0.3rem auto;
        border-radius: .03rem;
        border:none;
        font-size: 0.28rem;
        text-align: left;
        box-sizing: border-box;
    }
    .que{
        position: relative;
        padding: .1rem;
        background: #fff;
    }
    .que-tit{
        font-size: 0.28rem;
        margin-left: 0.6rem;
    }
    .que-con{
        color: #666;
        line-height: 0.6rem;
    }
    .que-time{
        font-size: 0.24rem;
        color: #999;
    }
    .que-state{
        width: 0.6rem;
        height: 0.6rem; 
        position: absolute;
        right: 0;
        top: 0;
    }
    .addque{ 
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        /* z-index: 999; */
    }
    .addquebtn{
        /* background: linear-gradient(90deg, #fa3956, #ff6b52); */
        color: #fff;
        line-height: 0.8rem;
        text-align: center;
        font-size: 0.28rem;
    }
    a.block{
        display: block;
    }
</style>