<template>
    <div>
        <!-- 顶部 -->
        <div >
            <div class="header">
                <div v-show="isShowBack" @click="goBack" class="set">
                    <i class="iconfont icon-mjiantou-copy" style="font-size:0.24rem;"></i>
                </div>
                <h2>关于我们</h2>
            </div>
        </div>
        <div id="contentDiv" >
            <div v-html="regard.content"></div>
            <!-- {{regard.content}} -->
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                isShowBack: false,
                isHideTabBar: false,
                regardAll:[],
                regard:[],
            }
        },
        methods:{
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
        },
        watch: {  //当路由改变的时候（newValue.path）获取当前的路由
            $route: function(newValue, oldValue) {
                this.isShowOrHide(newValue.path)
            }
        },
        beforeCreate: function() {
            document.getElementsByTagName("body")[0].style.backgroundColor='#f5f5f5';
        },
        mounted:function() {
           
        },
        created() {
            // 渲染基础数据
            this.regardAll = base.getApi().getSystemContent(1);
            console.log("11111111111111")
            console.log(this.regardAll);
            this.regard = this.regardAll.aboutUs;
            this.isShowOrHide(this.$route.path);
            
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

    .header{
        height: 0.45rem;
        /* position: relative; */
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
    #contentDiv{
        /* margin-top: 0.45rem; */
        padding: 0 .18rem;
        font-size: .12rem;
        /* float: left; */
        position: relative;
    }
</style>