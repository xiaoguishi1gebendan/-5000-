<template>
    <div  style="width:100%;height:100%;background:#f5f5f5; position: absolute;top: 0;z-index:1000;">
        <!-- 顶部 -->
      <headertop :title="title" > </headertop>
        <!-- 主内容区 -->
        <div class="content content-head">
            <div class="con-box">
                <div class="iptbox signpassbox bgf">
                    <label for="oldpass">旧密码</label>
                    <input id="oldpass" type="password" placeholder="请输入旧密码" v-model="oldpass">
                </div>
                <div class="iptbox signpassbox bgf">
                    <label for="newpass">新密码</label>
                    <input id="newpass" type="password" placeholder="请输入新密码" v-model="newpass">
                </div>
                <div class="iptbox signpassbox bgf">
                    <label for="again">确认新密码</label>
                    <input id="again" type="password" placeholder="请再次输入新密码" v-model="again">
                </div>
                <p class="iptbox-int">如果旧密码输错3次，将冻结您的账号</p>
                <button class="resumebtn alertbox" type="button" @click="upmit">立即修改</button>
            </div>
        </div>
    </div>
</template>

<script>
import headertop from '../../header/header'
  export default{
    components: {
        headertop,
    },
        data(){
            return{
                title:"修改登录密码",
                oldpass:"",
                newpass:"",
                again:""
            }
        },
        methods:{
            goBack() {
                this.$router.go(-1)//底层等同于 history.back()back() 方法可加载历史列表中的前一个 URL（如果存在）。
                // 调用该方法的效果等价于点击后退按钮或调用 history.go(-1)。
            },
            upmit(){
                if(this.oldpass&&this.oldpass&&this.again){
                	 var reg =/^[a-zA-Z0-9]{4,16}$/;  
				        　if(!reg.test(this.again)){  
				            $.tips("请确认密码是否为4-16位的英文和数字组成");
				             return;
				      　　}   
                   console.log(this.oldpass)
                    if(this.newpass==this.again){
                         var localUser=JSON.parse(myStorage.getItem("currentUser"));
                         
                         console.log(this.newpass==this.again)
                         var result= base.getApi().modifyPwd(localUser.id,this.oldpass,this.newpass);
                         if(result.code==200){
                         	localStorage.setItem("username",localUser.account)  
	                          myStorage.removeItem("token")
	                          myStorage.removeItem("currentUser")
	                          this.$store.state.uppassword=1;
	                          this.$router.push({"path":"/login"})
                         }else{
                         	 $.tips(result.message);
                         }
                          
                        
                         console.log(result)
                    }else{
                        $.tips("两次密码不一致",1000)
                    }
                   
                }else{
                    $.tips("密码不能为空",1000)
                }
            },
            isstyle(){
            }
            
        },
        watch: {
        },
        mounted:function() {
            this.isstyle();
        },
        beforeCreate: function() {
        },
        created(){
        }
    }
</script>

<style scoped>
    /*主内容区*/
    /*content*/
    .content-head{
        background-color: #f7f7f7;
        /* margin-top: 0.45rem; */
    }
    .con-box{
        padding: .15rem;
    }
    .iptbox{
        position: relative;
        padding-left: .8rem;
        margin-bottom: .1rem;
        height: 0.8rem;
        border-radius: .06rem;
        border: .01rem solid #eee;
        background-color: white;
        font-size:00.28rem;
    }
    .iptbox label{
        position: absolute;
        left: .1rem;
        width: 1.6rem;
        line-height: 0.8rem;
        color: #666;
        font-size: 0.28rem;
        text-align: center;
    }
    .signpassbox input{
        width: 4.8rem;
        padding: .26rem .1rem;
        border: none;
        box-sizing: border-box;
        vertical-align: top;
        outline: none;
            height: 00.8rem;
            font-size: 00.28rem;
    background: transparent;
    }
    .iptbox-int{
        font-size: .26rem;
        color: #999; 
        text-align: center;
    }
    .resumebtn{
        display: block;
        margin: .3rem auto;
        width: 60%;
        height: .8rem;
        font-size: .28rem;
        color: #fff;
        padding: 0;
        border: none;
        /* background: linear-gradient(90deg, #fa3956, #ff6b52); */
        border-radius: .04rem;
        outline: none;
    }
</style>