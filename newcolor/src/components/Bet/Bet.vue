<template>
    <div>
        <!-- <div class="header_wrap">
            <div class="header">
                <h2>注单</h2>
            </div>
        </div> -->
        <!--主内容区-->
        <!-- <div class="ocontent">
            <div class="notlogin">
                <div class="log">
                    <img src="../../assets/images/lack1.png" alt="">
                    <h4>登录后才能看到注单哦</h4>
                </div>
                <div class="btn">
                    <router-link to='/login'>
                        <input type="button" value="登录" class="regbtn">
                    </router-link>
                    <router-link to='/register'>
                        <input type="button" value="10秒注册" class="loginbtn">
                    </router-link>
                </div>
            </div>
        </div> -->
        <!--已登录状态-->
       <!-- <v-BettingRecord class="bett"></v-BettingRecord> -->

       <trentMap iszs="yes" style="padding-bottom:0.45rem;"></trentMap>
        
    </div>
</template>

<style scoped src="../../assets/source/css/common/drip.css"></style>
<style scoped>
.bett{
    /* padding-bottom:0.65rem; */
}
</style>

<script>
// import BettingRecord from "../BettingRecord/BettingRecord";
import trentMap from "../Buycolor/trentMap"
    export default {
        data(){
            return{
                // bettingAll:[],
                // betting:[],
                // arrAll:[],
                // type:[],
                version:""
            }
        },
        components: {
            // "v-BettingRecord": BettingRecord
            trentMap
        },
        methods: {
               gettime(){
              if(window.ifcvalue){
                 this.version= base.getApi().getPTimestamp().version;
              window.updata(this.version,2);
              }else{
                this.version= base.getApi().loadTimestamp().version;
              window.updata(this.version,1)
              }
              
           },
           colornew(){
                $('.foottab ul li:nth-of-type(2) dl dd').css('color','#999')
                $('.foottab ul li:nth-of-type(2) dl dt .dtbg').css('background-position','-93px -26px')
            },
            isclickmr(){
			    $('#lis_1').click();
		    }
        },
        mounted:function(){
            this.colornew();
            this.gettime()
            // this.$store.state.touzhu="注单"
     
            // if (!myStorage.getItem("token")) {
            //     $(".bett").hide();
            // }else if (myStorage.getItem("token")) {
                 
            //     $(".ocontent").hide();
            // }
            this.isclickmr()

        },
        beforeCreate: function() {
            
        },
        created(){
            
        }
    }
</script>