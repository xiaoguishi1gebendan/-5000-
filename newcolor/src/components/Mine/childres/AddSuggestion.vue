<template>
    <div style="position: absolute;top: 0;width: 100%;height:100%;overflow:hidden">
        <!-- 顶部 -->
        <!-- <div>
            <div class="header toUser">
                <div @click="goBack" style="position: absolute;transform: translateY(-50%);color: #fff;">
                    <i class="iconfont icon-mjiantou-copy" style="    font-size: .24rem !important;position: absolute;line-height: 45px;margin-left: 12px;"></i>
                </div>
                <h2>意见反馈</h2>
            </div>
        </div> -->
        <headertop title="意见反馈"></headertop>
        <!-- 主内容区 -->
        <div class="content content-head">
            <div class="chose-class">
                <label>选择类型</label>
                <div class="chose-class-list">
                    <span style="border-bottom: none;" @click="putt" class="spann"  v-for="(item,index) in typelist" :key="index" :id='item.split("-")[0]'>{{item.split("-")[1]}}</span>
                  
                </div>
            </div>
            <input class="iptxt block" type="number" pattern="[0-9]*" id="mobileInput" placeholder="请输入您的手机号码">
            <textarea class="txtbox block" id="detailTextarea" placeholder="点击添加内容"></textarea>
            
            <a @click="submitThis"><button class="resumebtn">提交</button></a>
        </div>
    </div>
</template>

<script>
import headertop from '../../header/header'
    export default {
        data(){
            return{
                isShowBack: false,
                isHideTabBar: false,
                typelist:"",
                localType:1
            }
        },
         components: {
        headertop,
    },
         mounted:function() {
             this.getapi()
           
             this.$nextTick(function(){
                this.puttone()
            })
            this.isstyleAll();
        },
        methods:{
            getapi(){
               this.typelist = JSON.parse(myStorage.getItem("dictList"))["feedback-type"];
           
            },
            puttone(){
                var spanns= document.getElementsByClassName("spann");
                 spanns[0].classList.add("on");
            },
            putt(){
               var spanns= document.getElementsByClassName("spann");
              
               for(var i=0;i<spanns.length;i++){
                   spanns[i].classList.remove("on");
               }
               event.currentTarget.classList.add("on");
               var text=event.currentTarget.innerHTML;
                  this.localType=event.currentTarget.id;
               console.log(this.localType)
            },
            submitThis() {
                var localUser = JSON.parse(myStorage.getItem("currentUser"));
                if (!$("#detailTextarea").val()) {
                    $.tips("请输入内容", 1000)
                } else if (!$("#mobileInput").val()) {
                    $.tips("请输入手机号", 1000)
                } else if (!(/^1[3|4|5|7|8|9][0-9]\d{8}$/.test($("#mobileInput").val()))) {
                    $.tips("请输入正确的手机号", 1000)
                } else {
                    var result = base.getApi().feedback(localUser.id, this.localType, $("#detailTextarea").val(), $("#mobileInput").val());
                    console.log(result)
                    if (result.code == 200) {
                        // window.location.href = "/touShuJianyi-Success.html"
                        this.$router.push({path:"/succe"})
                        // this.$router.go(-1)
                    }
                }
            },
            goBack() {
                this.$router.go(-1)//底层等同于 history.back()back() 方法可加载历史列表中的前一个 URL（如果存在）。
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
            isstyleAll(){
              
            }
        },
        watch: {  //当路由改变的时候（newValue.path）获取当前的路由
            $route: function(newValue, oldValue) {
                this.isShowOrHide(newValue.path)
            }
        },
   
        beforeCreate: function() {
            document.getElementsByTagName("body")[0].style.backgroundColor='#f5f5f5';
            // document.getElementsByTagName("body")[0].style.overflowY='hidden';
        },
        created(){
            this.isShowOrHide(this.$route.path);

            // 渲染基础数据
        }
    }
</script>

<style scoped>
    html{
        font-size: 625%;
    }
    body{
        width: 100%;
        height: 100%;
        background: #f5f5f5;
        overflow-x: hidden;
    }
    #layout{
        width: 100%;
        height: 100%;
    }
    .header_wrap{
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 200;
    }
    .header{
        height: 0.45rem;
        position: relative;
    }
    .header h2{
        margin: 0 auto;
        height: 0.45rem;
        line-height: 0.45rem;
        text-align: center;
        color: #fff;
        font-weight: 600;
        font-size: .18rem;
    }
    .header .set{
        position: absolute;
        left: .18rem;
        transform: translateY(-50%);
        color: #fff;
    }
    .header .set i{
        font-size: .24rem;
    }
    /*主内容区*/
    /*content*/
    .content{
        font-size: 0.28rem;
    }
    .chose-class{
        position: relative;
        padding: .15rem .1rem .1rem;
        color: #666;
        width: 6rem;
        /* margin-left: 1.5rem; */
        /* padding-left: 1.2rem; */
        /* background-color: white; */
        margin-bottom: .01rem;
        text-align: left;
    }
    .chose-class-list{
        margin-left: 1.2rem;
        line-height: .8rem;
    }
    .chose-class label{
        width: 1.2rem;
        position: absolute;
        left: .1rem;
        top: .4rem;
    }
    .chose-class span{
        display: inline-block;
        width: 1.2rem;
        line-height: 0.5rem;
        text-align: center;
        color: #666;
        background: #fff;
        border-radius: .04rem;
        margin: 0 0 .05rem .06rem;
    }
    .chose-class span.on{
        color: #fff !important;
        /* background: linear-gradient(90deg, #fa3956, #ff6b52); */
    }
    .resumebtn{
        display: block;
        margin: .3rem auto 0;
        width:4rem;
        height: .8rem;
        font-size: 0.28rem;
        color: #fff;
        padding: 0;
        border: none;
        /* background: linear-gradient(90deg, #fa3956, #ff6b52); */
        border-radius: .07rem;
        outline: none;
    }
    .txtbox{
        display: block;
        padding: .13rem;
        width: 94%;
        height: 2.2rem;
        margin: auto;
        font-size: 0.28rem;
        border-radius: .03rem .03rem 0 0;
        box-sizing: border-box;
        border: none;
        outline: none;
    }
    .iptxt{
        width: 94%;
        display: block;
        margin-top:-.05rem;
        margin: auto;
        padding: .1rem;
        line-height: 0.6rem;
        border: none;
        border-bottom: .01rem solid whitesmoke;
        border-radius: 0 0 .03rem .03rem;
        box-sizing: border-box;
        outline: none;
        font-size:0.28rem
    }
</style>