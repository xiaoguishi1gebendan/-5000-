<template>
    <div  style="top:0;width:100%;;background: #f5f5f5;z-index:99;overflow:scroll;height:100%;">
        <Header title="公告"></Header>
        <div class="gonggao">
			<div>
                <div v-for="particulars in notice">
                    <p><img src="../../assets/source/imgs/laba.png" alt=""><span style="font-size:0.32rem;">{{particulars.title}}</span></p>
                    <p>{{particulars.details}}</p>
                    <p>
                        {{particulars.addTime | dateFmt('YYYY-MM-DD HH:mm:ss')}}
                    </p>
                </div>
            </div>
		</div>
    </div>
</template>

<style scoped lang="less">
    .gonggao{
        >div{
            font-size: 0.16rem;
            >div{
                background: #fff;
                display: inline-block;
                margin-top: 0.1rem;
                border-radius: 10px;
                width:95%;
                p{
                    text-align: left;
                    margin: 0 0.1rem;
                    padding: 0.1rem 0;
                    color: #666;
                     font-size: .26rem;
                }
                >p:nth-child(1){
                  
                    color:#fa3956!important;
                    
                    img{
                        width:0.4rem;
                    }
                }
                >p:nth-child(2){
                     padding:0;
                }
            }
        }
    }
    #layout{
        width: 100%;
        height: 100%;
    }
    /*主内容区*/
    .ocontent{
        width: 100%;
        /* margin-top: 0.45rem; */
        text-align: left;
    }
    .newest{
        width: 94%;
        overflow: hidden;
      
        margin: 0.1rem auto;
      
    }
    .news{
            margin: 0 .1rem .1rem .1rem;
            /* height: 1rem; */
            border-bottom: 1px solid #e4e4e4;
            position: relative;
            background: #fff;
            border-radius: 10px;
            padding-left: 0.1rem;
    }
    .news img{
        float: left;
        width: 6%;
        margin-top: .12rem;
    }
    .news h3{
        font-size: .16rem;
        margin-top: .1rem;
        margin-left: 0.05rem;
        color: #fa3956 !important;
        float: left;
    }
    .news p{
        color: #666;
        font-size: .14rem;
        margin-top: -1rem;
        padding-bottom: .5rem;
    }
    .news p:last-child{
        color:#999;
        font-size: .14rem;
    }
    /* .newest .news p{
        height: .5rem;
        bottom: 0.1rem;
        overflow: scroll;
    } */
</style>
<script>
    import Header from './../header/header'
    export default {
        data() {
            return {
                isShowBack: false,
                isHideTabBar: false,
                noticeAll:[],
                notice:[]
            }
        },
        components:{
            Header,
        },
        updated() {

        },
        methods: {
            goBack() {
                // this.$router.go(-1) 
                $this.$router.push({path:'/home'})
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
            isheidth(){
                // alert('aaa')
                // for(var a = 0;a<$('.news').length;a++){
                //     $('.news').eq(a).css('height',($('.p1').eq(a).height()*2))
                // }
            }
        },
        watch: {  //当路由改变的时候（newValue.path）获取当前的路由
            $route: function(newValue, oldValue) {
                this.isShowOrHide(newValue.path)
            }
        },
        beforeCreate: function() {
            document.getElementsByTagName("body")[0].style.backgroundColor='#f5f5f5';
        },
        mounted:function(){
            // 渲染基础数据
            this.noticeAll = base.getApi().homeData().data;
            this.notice = this.noticeAll.noticeList;
            this.isheidth()
        },
        created() {
            this.isShowOrHide(this.$route.path);
            // console.log(base.getApi().homeData());
        }
    }
</script>
