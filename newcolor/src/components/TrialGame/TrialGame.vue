<template>
    <div>
        <!-- <div class="header_wrap">
            <div class="header">
               <div @click="goBack" style="position: absolute;transform: translateY(-50%);color: #fff;">
                    <i class="iconfont icon-mjiantou-copy" style="    font-size: .24rem !important;position: absolute;line-height: 46px;margin-left: 12px;"></i>
                </div>
                <h2>免费试玩</h2>
            </div>
        </div> -->
         <headertop title="免费试玩" > </headertop>
        <div class="ocontent-wrap">
			<div class="ocontent">
				<form action="#">
					<div class="text">
						试玩账号<input type="text" :value="trialAll" disabled="disabled" id="userName" name="userName" ref="input1">
                        <!-- 试玩账号<input type="text" value="guest316747" disabled="disabled" id="userName" name="userName" ref="input1"> -->
                        
					</div>
					<div class="text">
						登录密码<input type="password" value="123456" disabled="disabled" id="password" name="password" ref="input2">
					</div>
					<div class="formbottom">
						<div class="service fl">
							<span id="customServiceOnlineA"><a style="color:#000;" href="https://f18.livechatvalue.com/chat/chatClient/chatbox.jsp?companyID=876510&configID=72957&jid=8025085340&s=1">  在线客服</a></span>
						</div>
						<div class="register fr">
                            <router-link to="/login" style="color:#000;">
                                    <span>已有账号</span>
							        <span>直接登录</span>
                            </router-link>
							
						</div>
					</div>
					<div class="btn">
						<input type="button" name="" id="reg" value="登录" @click="rechange()">
					</div>
				</form>
				<!--底部文字提示-->
				<div class="foottext">
					<div class="otext">
						<span>1:</span>
						<p>试玩账号初始金额为2000RMB,不允许充值</p>
					</div>
					<div class="otext">
						<span>2:</span>
						<p>每个IP每天仅允许有3个试玩账号</p>
					</div>
					<div class="otext">
						<span>3:</span>
						<p>每个试玩账号从注册开始，有效时间为72小时，超过时间系统自动回收</p>
					</div>
					<div class="otext">
						<span>4:</span>
						<p>试玩账号仅供玩家熟悉游戏，不允许充值和提款</p>
					</div>
					<div class="otext">
						<span>5:</span>
						<p>试玩账号不享有参加优惠活动的权利</p>
					</div>
					<div class="otext">
						<span>6:</span>
						<p>试玩账号的赔率仅供参考，可能与正式账号赔率不相符</p>
					</div><div class="otext">
						<span>7:</span>
						<p>其它未说明事项以本公司解释为准</p>
					</div>
				</div>
			</div>
		</div>
    </div>
</template>
   
<style scoped>
  
    body{
        width: 100%;
        height: 100%;
        overflow: auto;
        background:white !important;
    }
    input[type=checkbox],input[type=text],input[type=password]{
        -webkit-appearance:none;
        appearance:none;
        outline:none;
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
        font-size: .28rem;
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
    /* 主内容区 */
    .ocontent-wrap{
        margin-top: 0.2rem;
    }
    .ocontent {
        width: 92%;
        margin: 0 auto;
        overflow: hidden;
    }
    .ocontent form {
        margin-top: .06rem;
        overflow: hidden;
        font-size: .28rem;
    }
    .ocontent .text {
       margin-top: .12rem;
    height: .88rem;
    background: #fff;
    line-height: .88rem;
    border: .01rem solid whitesmoke;
    border-radius: .06rem;
    text-indent: .2rem;
    color: #272525;
    text-align: left;
    }
    .ocontent .text input {
        height: .516rem;
        border: 0;
        background: #fff;
        margin-left: .18rem;
        font-size: .28rem;
    }
    .formbottom {
            margin-top: .3rem;
    height: .5rem;
    line-height: .5rem;
    color: #000;
    }
    .register span:last-child {
        margin-left: .08rem;
    }
    .btn {
        margin-top: .48rem;
    }
    .btn input {
           display: block;
    height: .9rem;
    width: 69%;
    margin: 0 auto;
    line-height: .9rem;
    text-align: center;
    color: #fff;
    border-radius: .05rem;
    font-size: .28rem;
    outline: none;
    border: none;
    }
    .foottext {
        margin-top: .336rem;
    }
    .otext {
        line-height: .5rem;
        display: flex;
        font-size: .24rem;
        color: #272525;
        text-align: left;
    }
    .otext span {
        display: block;
        width: .14rem;
    }
    .otext p {
        flex: 1;
    }
    .fl{
        float: left;
    }
    .fr{
        float: right;
    }
</style>
<script>
  import headertop from '../header/header'
    export default {
        data() {
            return {
                trialAll:'',
                username:'',
                password:'',
            }
        },
        components:{
            headertop
            },
        methods: {
            goBack() {
                this.$router.go(-1);    //底层等同于 history.back()back() 方法可加载历史列表中的前一个 URL（如果存在）。
                // 调用该方法的效果等价于点击后退按钮或调用 history.go(-1)。
            },
            rechange() {
                this.username = this.$refs.input1.value;
                this.password = this.$refs.input2.value;
                var dict = base.getApi().freeTrial(this.username, this.password);
                if(dict && dict.code == 200){
                    this.$router.push({ path: 'home' })
                }
            }
        },
        mounted(){
            this.trialAll = base.getApi().getFreeTrialAccount();
        },
        watch: {

        },
        beforeCreate: function() {
            document.getElementsByTagName("body")[0].style.backgroundColor='white !important';
        },
        created() {

        }
    }
</script>