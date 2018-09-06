<template>
 <div class="root" style="overflow: hidden;position:absolute;top:0;width:100%;height:100%;background: #f5f5f5;z-index:1000;">
     <Header :title="title"></Header>
     <div class="word title" v-if="!ifyong">
         <div>用户名</div>
         <div>投注金额</div>
         <div>佣金</div>
     </div>
     <div  class="wrapper" v-if="!ifyong">
        <div class="word content" v-for="(item,index) in list" :key="index">
            <div>{{item.account}}</div>
            <div>{{item.bettingAmount|tofixed}}</div>
            <div>{{item.brokerage|tofixed}}</div>
        </div>
     </div>
     
     <div v-if="ifyong" class='no' style="margin-top: 0.5rem;">
                <img src="../../../../assets/images/lack1.png" alt="" class='lack1'>
                <h4>暂无代理佣金记录</h4>
     </div>
 </div>
</template>

<script>
import Header from "./../../../header/header";
export default {
  data() {
    return {
      title: "期数详情",
      list: [],
      ifyong:false,
    };
  },
  created() {},
  mounted() {
    this.getData();
    //   let params  = this.$route;
    //   debugger;
  },
  methods: {
    getData() {
      var localUser = JSON.parse(myStorage.getItem("currentUser"));
      // var params = this.$route.params;
      // var time = this.$route.params.qishu;
      var time = this.$store.state.qishu;
      if(!time){
        this.$router.go(-1)
        return
      }
      this.title = time + "期";
      var result = base.getApi().ploxyStatisticsDetail(localUser.id, time);
      if (result.code == 200) {
        if (result.data && result.data.length > 0) {
          this.list = result.data;
        } else {
            this.ifyong=true
          $.tips("暂无数据");
        }
      } else {
      
        $.tips("暂无数据");

      }

    }
  },
  components: {
    Header
  }
};
</script>

<style scoped lang='less'>
.no {
  padding: 0.2rem;
  .lack1 {
    width: 1.95rem;
    height: 1.95rem;
    display: inline-block;
  }
}
.root {
  font-size: 0.16rem;
}

.word {
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 0.4rem;
  background: #fff;
  div {
    flex: 1;
  }
}
.title {
  background: #e4e4e4;
}
.content {
  border-bottom: 1px solid #efeaea;
}
.wrapper {
  padding-bottom: 5px;
}
</style>
