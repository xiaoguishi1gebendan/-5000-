<template>
    <div>
        <!-- 顶部 -->
        <div class="header_wrap">
            <div class="header">
                <div v-show="isShowBack" @click="goBack" class="set back">
                    <i class="iconfont icon-mjiantou-copy"></i>
                </div>
                <h2>设置</h2>
            </div>
        </div>
         
        <div class="content">
				<div class="setting">
                    <p>账户安全设置</p>
                    <ul>
                        <li><span>修改交易密码</span>  <span> </span></li>
                        <li><span>修改登录密码</span>  <span> </span></li>
                    </ul>
                    <ul>
                        <li class="tongyong">通用</li>
                        <li> <span>意见反馈</span>  <span> </span></li>
                        <li>  <span>关于我们</span>  <span> </span></li>
                        <li> <span>网速检测</span>  <span> </span> </li>
                        <li><span>当前版本号</span>  <span></span> <span class="banben">5.80</span></li>
                    </ul>
                    <div class="layout" @click="layout"> <router-link to="/home" style="color:red">退出登录</router-link></div>
				</div>
			</div>
            <!-- <h1>{{author}}</h1> -->
           
    </div>
    
</template>

<script>
    export default {
        data(){
            return{
               isShowBack: false,
                isHideTabBar: false
            }
        },
        // computed: {
        //     author () {
        //         return this.$store.state.author
        //     }
        // },
        methods:{
           layout(){
               myStorage.removeItem("token");
               myStorage.removeItem("currentUser")
               this.$store.state.loginfou=false
                this.$store.state.loginin=false
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
            goBack() {
                this.$router.go(-1)//底层等同于 history.back()back() 方法可加载历史列表中的前一个 URL（如果存在）。
                // 调用该方法的效果等价于点击后退按钮或调用 history.go(-1)。
            },
        },
        mounted:function() {
           
        },
        created(){
            
        }
    }
</script>

<style scoped lang='less'>
    .setting{
        margin-top: 0.45rem;
        text-align: left;
        
        >p{
            padding-left: 0.2rem;
            font-size:0.12rem;
            color: #a0a0a0!important;
            line-height: 0.3rem;
        }
        .tongyong{
            background: transparent;
             font-size:0.12rem;
            color: #a0a0a0!important;
            line-height: 0.3rem;
        }
        li{
            padding-left: 0.2rem;
            line-height: 0.4rem;
            background: white ;
            border-bottom: 1px solid #f5f5f5;
            overflow: hidden;
            span:nth-child(1){
                float: left;
            }
            .banben{
                float: right;
                padding-right: 0.1rem;
            }
            span:nth-child(2){
                // line-height: 0.4rem;
                width: 0.08rem;
                height: 0.08rem;
                border-top: 1px solid gray;
                border-right: 1px solid gray;
                transform: rotate(47deg) !important;
                float: right;
                margin-right: 0.2rem;
                margin-top: 0.15rem;
            }
            
        }
        .layout{
            line-height: 0.4rem;
            background: white ;
            text-align: center;
            margin-top: 0.2rem;
            color: red;
        }
    }




    html{
        font-size: 625%;
    }
    body{
        width: 100%;
        height: 100%;
        background: #f5f5f5;
        overflow-x: hidden;
    }
    *{
        font-size:0.12rem !important;
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


</style>
