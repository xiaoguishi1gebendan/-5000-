<template>
       <div class="foottab">
            <ul>
				<!-- <li @click="goshouye"> -->
                 <li>
                    <router-link to='/home'>
                        <dl >
							<dt><div class="dtbgg"></div></dt>
							<dd>首页</dd>
						</dl>
                    </router-link>
				</li>
				<!-- <li  @click="gofoucai"> -->
                 <li>
                    <router-link to="/lottery">
                        <dl>
                            <dt><div class="dtbgg"></div></dt>
                            <dd>开奖</dd>
                        </dl>
                    </router-link>
				</li>
				<!-- <li @click="golottery"> -->
                <li>
                    <router-link to="/buycolor">
                        <dl>
							<dt><div class="dtbgg dtbggo" style="    width: 1rem;
    height: 1rem;
    position: absolute;
    top: -0.4rem;
    left: 50%;
    margin-left: -0.5rem;"></div></dt>
							<dd style="    margin-top: 0.58rem;">购彩大厅</dd>
						</dl>
                    </router-link>
				</li>
				<!-- <li @click="gobet"> -->
                <li>
                    <router-link to="/gouzoushi">
                        <dl >
							<dt><div class="dtbgg"></div></dt>
							<dd>走势图</dd>
						</dl>
                    </router-link>
				</li>
				<!-- <li @click="gozhongxin"> -->
                <li>
					<router-link to="/mine">
                        <dl>
							<dt><div class="dtbgg"></div></dt>
							<dd>会员中心</dd>
						</dl>
                    </router-link>
				</li>
                
			</ul>
   	      

  </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {

   },
   methods:{
    //    goshouye(){
    //        this.$router.push({path:"/home"})
    //    },
    //    gofoucai(){
    //         this.$router.push({path:"/buycolor"})
    //    },
    //     gobet(){
    //         this.$router.push({path:"/bet"})
    //     },
    //     gozhongxin(){
    //          this.$router.push({path:"/mine"})
    //     },
    //     golottery(){
    //          this.$router.push({path:"/lottery"})
    //     }
           istoubu(){
            
          
           },
           
   },
   mounted:function(){
       
    
       
   },
   beforeMount:function() {
   },
   updated(){
       
   },
   watch: {
    
  },
 mounted(){

 },
 methods:{

 },
  components: {

  }
}
</script>

<style scoped>

    /*底部tab*/
    .foottab {
           width: 100%;
    background: #fff;
    border-top: 1px solid #eee;
    height: 1rem;
    position: fixed;
    bottom: 0;
    text-align: center;
    z-index: 1000;
   
    }
    .foottab ul {
           width: 100%;
    display: flex;
    }
    .foottab ul li {
           height: 1rem;
    width: 20%;
    list-style: none;
    }
    .foottab ul li a {
        display: block;
        width: 100%;
        height: 100%;
        overflow: hidden;
        
    }
  
  
    .foottab ul li dl dt .dtbgg {
           width: 0.5rem;
    height: 0.58rem;
        margin: 0 auto;
        /* background: url('../../assets/source/imgs/images/footer_5_02.png') no-repeat; */
        /* background-size: 337px 79px; */
    }
    .foottab ul li dl dd {
        color: #999;
        font-size: 0.24rem;
    }
    .foottab ul li:nth-of-type(1) dl dt .dtbgg {
        background: url('../../assets/images/foot1.png') no-repeat; 
       background-position: 0.04rem 0.1rem;
    background-size: 0.45rem;
    }
    .foottab ul li:nth-of-type(2) dl dt .dtbgg {
        background: url('../../assets/images/foot2.png') no-repeat; 
           background-position: 0.04rem 0.1rem;
    background-size: 0.38rem;
    }
 
    .foottab ul li:nth-of-type(3) dl dt .dtbgg {
        background: url('../../assets/images/foot3a.png') no-repeat; 
           background-position: 0.1rem 0.1rem;
    background-size: 0.8rem;
    }
    .foottab ul li:nth-of-type(4) dl dt .dtbgg {
         background: url('../../assets/images/foot4.png') no-repeat; 
         background-position: 0.06rem 0.08rem;
    background-size: 0.38rem;
    }
    .foottab ul li:nth-of-type(5) dl dt .dtbgg {
        background: url('../../assets/images/foot5.png') no-repeat; 
            background-position: 0.1rem 0.1rem;
    background-size: 0.38rem;
    }
    /*table切换*/
    .foottab ul li:nth-of-type(2) a.router-link-active dl dd {
        color: #fa3956;
    }
    .foottab ul li:nth-of-type(1) a.router-link-active dl dt .dtbgg{
             background: url('../../assets/images/foot1a.png') no-repeat; 
               background-position: 0.04rem 0.1rem;
    background-size: 0.45rem;
    }
    .foottab ul li:nth-of-type(2) a.router-link-active dl dt .dtbgg{
         background: url('../../assets/images/foot2a.png') no-repeat; 
             background-position: 0.04rem 0.1rem;
    background-size: 0.38rem;
    }
    .foottab ul li:nth-of-type(3) a.router-link-active dl dt .dtbgg{
        background: url('../../assets/images/foot3.png') no-repeat; 
         
              background-position: 0.01rem 0.02rem;
              background-size: 0.4rem;
    }
    .foottab ul li:nth-of-type(4) a.router-link-active dl dt .dtbgg{
         background: url('../../assets/images/foot4a.png') no-repeat; 
                  background-position: 0.06rem 0.08rem;
    background-size: 0.38rem;
    }
    .foottab ul li:nth-of-type(5) a.router-link-active dl dt .dtbgg{
        background: url('../../assets/images/foot5a.png') no-repeat; 
               background-position: 0.1rem 0.1rem;
    background-size: 0.38rem;
    }
    .wrap-header .header .header-oper{
        right: 1.5rem;
    }
    
</style>
