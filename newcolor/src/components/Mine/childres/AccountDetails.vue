<template>
    <div style="overflow: hidden;position:absolute;top:0;width:100%;height:100%;background: white;z-index:1000;">

        <headertop title="账户明细" > </headertop>
        <!-- 消息tab分类 --> 
        <div class="nav-wrap">
            <div class="nav">
                <ul class="navlist" ref="dingDan">
                    <li @click="one('')" id="" class="isclick" style="width: 103px;">全部</li>
                    <li v-for="(inte,index) in arrAll" :key="index"  @click="one(inte.split('-')[0])" style="width: 103px;">{{inte.split('-')[1]}}</li>

                </ul>
            </div>
        </div>
        <!-- 明细列表 -->
   
      <div class="datalist-wrap"  ref="listwrapVue">
            <!-- 无数据样式 -->
            <div class="nodata" style="display:none;">
                <div class="nodata-top">
                    <img src="../../../assets/images/lack1.png" alt="">
                    <h4>暂无订单记录</h4>
                    <p>不要让大奖溜走，赶紧购彩去~</p>
                </div>
                <div class="nodatabtn">
                    <router-link to="/buycolor">
                        <input type="button" name="" id="" value="立即购彩" class="btn">
                    </router-link>
                </div>
            </div>
            <!-- 有数据样式 -->
        <div class="liebiao" style="height:100%;    position: relative;top: -45px;">
           <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite">
            <ul class="detaillist" style="">
                <li  v-for="(account,index) in accountAll" :key="index"  
                 :orderNo="account.orderNo"
                 :type='account.type' 
                 :detailType="account.detailType" 
                 :amount="account.amount"
                 :addTime="account.addTime"
                 :remark="account.remark"
                  @click="accoundetil">
                    <div class="detailtext">
                        <div class="texttop">
                            <h4 ref="winning"></h4>
                            <span class="bgspan">{{(account.amount.toFixed(2))>0?("+"+account.amount.toFixed(2)): (account.amount.toFixed(2))}}元</span>
                        </div>
                        <div class="textbottom">
                            <div class="odd" style="text-align:left;white-space:nowrap; ">
                                <span >单号&nbsp;{{account.orderNo}}</span>
                            </div>
                            <div class="timer" >{{account.addTime | dateFmt('YYYY-MM-DD HH:mm')}}</div>
                        </div>
                    </div>
                </li>
            </ul>
          </v-scroll>
        </div>
        
      </div>
          <router-view></router-view>
    </div>
</template>

<style scoped>

.timer {
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* width: 30%; */
}
.odd {
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* width: 70%; */
}
/*主内容区*/
/* 消息tab切换 */
.nav-wrap {
  width: 100%;
  position: relative;
  z-index: 200;
  background: #fff;
}
.nav {
  position: relative;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  height: 0.8rem;
}
.navlist {
  height: 0.8rem;
}
.navlist li {
  float: left;
  height: 0.8rem;
  line-height: 0.8rem;
  border-bottom: 0.02rem solid transparent;
  text-align: center;
  color: #999;
  box-sizing: border-box;
  border-bottom: 0.01rem solid whitesmoke;
  list-style: none;
  font-size:0.28rem
}
.navlist li.isclick {
  color: #fa3956;
  border-bottom: 0.02rem solid #ff6b52;
}
/* 账户明细 */
/* 无数据的样式 */
.nodata {
  display: none;
}
.nodata-top {
  width: 100%;
  margin: 0.768rem auto 0;
}
.nodata-top img {
  width: 50%;
}
.nodata-top h4 {
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  color: #111;
  font-size: 0.28rem;
  font-weight: 400;
}
.nodata-top p {
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  font-size: 0.26rem;
  color: #999;
}
.nodatabtn {
  margin-top: 0.6rem;
}
.nodatabtn .btn {
  width: 72%;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  border-radius: 0.15rem;
  margin: 0 auto;
  display: block;
  font-size: 0.3rem;
  color: #fff;
  /* background: linear-gradient(90deg, #fa3956, #ff6b52); */
  border: none;
  outline: none;
    
}
.nodatabtn .btn{
				-webkit-animation:animations 1.5s infinite linear;
			}
	@-webkit-keyframes animations {
			 	0%{
			        -webkit-transform: scale(.65);
			    }
			    20%{
			    	-webkit-transform: scale(.8);
			    }
			    40%{
			        -webkit-transform: scale(.65);
			    }
			    60%{
			        -webkit-transform: scale(.65);
			    }
			    60%{
			        -webkit-transform: scale(.8);
			    }
			    80%{
			        -webkit-transform: scale(.65);
			    }
			    100%{
			        -webkit-transform: scale(.65);
			    }
			}
/* 有数据样式 */
.datalist-wrap {
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
.detaillist {
  padding-left: 0.1rem;
  box-sizing: border-box;
  background-color: white;
  /* margin-top:0.8rem; */
}
.detaillist li {
  height: 1.2rem;
  background: #fff;
  overflow: hidden;
  border-bottom: 0.01rem solid whitesmoke;
  
}
.detaillist li:last-child {
  border-bottom: 0;
}
.detailtext {
  width: 92%;
  margin: 0 auto;
}
.detailtext .texttop {
  height: 0.6rem;
  line-height: 0.6rem;
  margin-top: 0.1rem;
  display: flex;
  justify-content: space-between;
}
.detailtext .texttop h4 {
  font-size: 0.28rem;
  font-weight: 400;
}
.detailtext .texttop span {
  font-size: 0.26rem;
  /* color: #2b9037; */
}
.detailtext .texttop .bgspan {
  /* color: red; */
}
.detailtext .textbottom {
  height: 0.5rem;
  line-height: 0.5rem;
  display: flex;
  justify-content: space-between;
  color: #999;
  font-size: 0.24rem;
}
</style>
<script>
import Scroll from "../../flash/flash";
import headertop from '../../header/header'
export default {
  components: {
    "v-scroll": Scroll,
    headertop,
  },
  data() {
    return {
      accountAll: [1,2],
      id:"",
      n:10,
      arrAll: [],
      numed:1,
      sort: [],
      type: [],
      typename:[],
      counter: 1, //当前页
      num: 10, // 一页显示多少条
      pageStart: 0, // 开始页数
      pageEnd: 0, // 结束页数
      listdata: [], // 下拉更新数据存放数组
      scrollData: {
        noFlag: false
      } //暂无更多数据显示
    };
  },
  methods: {
    accoundetil(){
      var orderNo=event.currentTarget.getAttribute("orderNo"),
          type=event.currentTarget.getAttribute("type"),
          detailType=event.currentTarget.getAttribute("detailType"),
          amount=event.currentTarget.getAttribute("amount"),
          addTime=event.currentTarget.getAttribute("addTime"),
          remark=event.currentTarget.getAttribute("remark");
          this.$store.state.accoundetal={
                                            orderNo:orderNo,
                                            type:type,
                                            detailType:detailType,
                                            amount:amount,
                                            addTime:addTime,
                                            remark:remark,
                                          }
         this.$router.push('accoundetil')
    },
    onRefresh(done) {
      console.log("下拉");
      this.one(this.id);
           if(this.accountAll){
              $.tips("已经刷新当前数据")
              }
      done(); // call done
    },
    onInfinite(done) {
      let more = this.$el.querySelector(".load-more");
       more.style.display='block'
        this.onee(this.id);
                    
          if(this.accountAll){
             more.style.display='none';
          }
                   
        done();
    },
    goBack() {
      this.$router.go(-1);
    },
     getlistheight(){
                    var bodyheight=document.getElementsByTagName("body")[0].offsetHeight;
                    // console.log(document.getElementsByClassName("header_wrap")[0])
                    // var headerheight=document.getElementsByClassName("header_wrap")[0].offsetHeight;
                    this.$refs.listwrapVue.style.height=bodyheight-45-
                    document.getElementsByClassName("pde")[0].offsetHeight
                    +'px'
     },
    styleCss() {
      document.getElementsByTagName("body")[0].style.height = "100%";
      document.getElementsByTagName("html")[0].style.height = "100%";
      this.$refs.listwrapVue.style.overflow = "scroll";
      document.getElementsByClassName("datalist-wrap")[0].style.height =
        document.getElementsByTagName("body")[0].clientHeight - 110 + "px";
    },

    winner() {
      var dictListAll = JSON.parse(myStorage.getItem("dictList"))[
        "accountDetails-type"
      ];

      for (var j = 0; j < dictListAll.length; j++) {
        this.type.push(dictListAll[j].split("-")[0]);
         this.typename.push(dictListAll[j].split("-")[1]);
      }
      for (var i = 0; i < this.accountAll.length; i++) {
        if (this.accountAll[i].type == this.type[0]) {
          this.$refs.winning[i].innerHTML = this.typename[0];
          this.$refs.winning[i].style.color = "#000";
        } else if (this.accountAll[i].type == this.type[1]) {
          this.$refs.winning[i].innerHTML =  this.typename[1];
          this.$refs.winning[i].style.color = "#000";
        } else if (this.accountAll[i].type == this.type[2]) {
          this.$refs.winning[i].innerHTML = this.typename[2];
          this.$refs.winning[i].style.color = "#000";
        } else if (this.accountAll[i].type == this.type[3]) {
          this.$refs.winning[i].innerHTML = this.typename[3];
          this.$refs.winning[i].style.color = "#000";
        } else if (this.accountAll[i].type == this.type[4]) {
          this.$refs.winning[i].innerHTML = this.typename[4];
          this.$refs.winning[i].style.color = "#000";
        } else if (this.accountAll[i].type == this.type[5]) {
          this.$refs.winning[i].innerHTML = this.typename[5];
          this.$refs.winning[i].style.color = "#000";
        } else if (this.accountAll[i].type == this.type[6]) {
          this.$refs.winning[i].innerHTML = this.typename[6];
          this.$refs.winning[i].style.color = "#000";
        } else if (this.accountAll[i].type == this.type[7]) {
          this.$refs.winning[i].innerHTML = this.typename[7];
          this.$refs.winning[i].style.color = "#000";
        }
      }
    },
    one(id) {
      this.numed=1;
      this.id=id;
      console.log(this.id)
      var userid = JSON.parse(myStorage.getItem("currentUser")).id;
      // 渲染基础数据
      if (myStorage.getItem("currentUser")) {

             this.$store.state.accountAll = base.getApi().accountDetailList(this.n, this.numed, userid, this.id);
              this.accountAll =this.$store.state.accountAll
             console.log(this.n);
      }
      this.$nextTick(() => {
        if (this.accountAll == "") {
          document.getElementsByClassName("nodata")[0].style.display = "block";
          document.getElementsByClassName("liebiao")[0].style.display ="none";
          $.tips("没有数据", 1000);
        } else {
       
          document.getElementsByClassName("nodata")[0].style.display = "none";
          document.getElementsByClassName("liebiao")[0].style.display =
            "block";
          this.winner();
        }
      });
    },
    onefirst(id) {
      
      this.id=id;
      console.log(this.id)
      var userid = JSON.parse(myStorage.getItem("currentUser")).id;
      // 渲染基础数据
      if (myStorage.getItem("currentUser")) {
            if(this.$store.accountAll){
              this.accountAll=this.$store.state.accountAll
            }else{
               this.$store.state.accountAll= base.getApi().accountDetailList(this.n, this.numed, userid, this.id);
               this.accountAll=this.$store.state.accountAll
               console.log(this.n);
            }
            
      }
      this.$nextTick(() => {
        if (this.accountAll == "") {
          document.getElementsByClassName("nodata")[0].style.display = "block";
          document.getElementsByClassName("liebiao")[0].style.display ="none";
          $.tips("没有数据", 1000);
        } else {
       
          document.getElementsByClassName("nodata")[0].style.display = "none";
          document.getElementsByClassName("liebiao")[0].style.display =
            "block";
          this.winner();
        }
      });
    },
     onee(id) {
      
      this.id=id;
     
      var userid = JSON.parse(myStorage.getItem("currentUser")).id;
      // 渲染基础数据
      
      if (myStorage.getItem("currentUser")) {
        this.numed++
                var bettingAlled=base.getApi().accountDetailList(this.n, this.numed, userid, this.id);
                if(!bettingAlled.length){
                               $.tips("已经加载全部数据");
                               return;
                           }
                            for(var i=0;i<bettingAlled.length;i++){
                                this.accountAll.push(bettingAlled[i])
                            }


             
            
      }
      this.$nextTick(() => {
        if (this.accountAll == "") {
          document.getElementsByClassName("nodata")[0].style.display = "block";
          document.getElementsByClassName("liebiao")[0].style.display ="none";
          $.tips("没有数据", 1000);
        } else {
       
          document.getElementsByClassName("nodata")[0].style.display = "none";
          document.getElementsByClassName("liebiao")[0].style.display =
            "block";
          this.winner();
        }
      });
    },
    
  },
  mounted: function() {
    // 渲染基础数据
    var dict = JSON.parse(myStorage.getItem("dictList"));
    var arr = dict["accountDetails-type"];
    this.arrAll = arr;
    this.styleCss();
    this.$refs.dingDan.style.width=(this.arrAll.length+1)*103+"px"
    // 个人消息table切换
    $(".navlist").on("click", "li", function() {
      $(this)
        .addClass("isclick")
        .siblings()
        .removeClass("isclick");
    });

    this.getlistheight()
 
  },
  watch: {},
  beforeCreate: function() {
    document.getElementsByTagName("body")[0].style.backgroundColor = "#f5f5f5";
  },
  created() {this.onefirst("");},
  
};
</script>