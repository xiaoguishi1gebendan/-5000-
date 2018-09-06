<template>
    <div style="overflow: hidden;position:fixed;top:0;width:100%;height:100%;background: #f5f5f5;z-index:1000;">
        <!-- 顶部 -->
     
          <headertop title="提款明细" > </headertop>
        <!-- 主内容区 -->
        <div class="content content-head">
            <div class="weui-cells myli">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <p id="orderNoP"><label style="width:1.5rem">订&nbsp;单&nbsp; 号：</label>{{rechargeAll.orderNo}}</p>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <p id="typeP"><label style="width:1.5rem">出款类型：</label>{{list}}</p>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <p id="amountP"><label style="width:1.5rem">扣款金额：</label>{{rechargeAll.amount|mory(rechargeAll.amount)}}元</p>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <p id="couAmountP"><label style="width:1.5rem">手&nbsp;续&nbsp; 费：</label>{{rechargeAll.couAmount.toFixed(2)}}元</p>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <p id="finalAmountP"><label style="width:1.5rem">提款金额：</label>{{rechargeAll.amount|mory(rechargeAll.amount)}}元</p>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <p class="colorred colorcss" id="statusP"><label style="width:1.5rem">出款状态：</label>{{list2}}</p>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <p class="colorred colorcss" id="updateTimeP"><label style="width:1.5rem">出款时间：</label>{{rechargeAll.addTime | dateFmt('YYYY-MM-DD HH:mm:ss')}}</p>
                    </div>
                </div>
                <div class="weui-cell" style="overflow:hidden"> 
                    <div class="weui-cell__bd">
                        <p class="colorred colorcss" id="updateTimeP" style="width：100%;overfloaw:hidden"><label style="width:1.5rem">备注：</label><span style="width:75%;float:left">{{rechargeAll.refuseReason}}</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import headertop from '../../header/header'
export default {
    components: {
            headertop
        },
        data(){
            return{
                rechargeAll:[],
                list:'',
                list2:'',
            }
        },
        methods:{
        },
        watch: { 
            $route: function(newValue, oldValue) {
                this.isShowOrHide(newValue.path);
            }
        },
        mounted:function() {
           
        },
        beforeCreate: function() {
            document.getElementsByTagName("body")[0].style.backgroundColor='#f5f5f5';
            document.getElementsByTagName("body")[0].style.overflowY='hidden';
        },
        created(){

            // 渲染基础数据
            var dictAll = JSON.parse(myStorage.getItem("currentUser"));
            var arr2 = dictAll['id'];
            
            if(myStorage.getItem("currentUser")){
                this.rechargeAll = base.getApi().drawDetail(arr2,this.$route.params.drawTheDetailId);
                //充值方式
                var dictDetail = JSON.parse(myStorage.getItem("dictDetailList"));
                //类型
                this.list = dictDetail["userDraw-type-"+this.rechargeAll.type];
                //状态
                this.list2 = dictDetail["userDraw-status-"+this.rechargeAll.status];
                //判断是否为空
                if (this.list) {
                    this.list = dictDetail["userDraw-type-"+this.rechargeAll.type];
                }else{
                    this.list = 'undefined';
                }
            }
        }
    }
</script>

<style scoped>

    /*主内容区*/
    /*content*/
    .content-head{
        text-align: left;
    }
    .myli{
        margin-top: .1rem;
    }
    .myli .weui-cell{
        padding: .1rem;
        border-bottom: 1px solid ghostwhite;
        background: #fff;
    }
    .myli .weui-cell:last-child{
        border-bottom: none;
    }
    .myli .weui-cell p{
        font-size: 0.28rem;
        color: #666;
        font-weight: normal;
        line-height: 0.5rem;
    }
    .myli .weui-cell p.colorred{
        color: #d91e38;
    }
    .myli .weui-cell p label{
        float: left;  
        display: inline-block; 
        width: .84rem;
        overflow: hidden;
        line-height: 0.5rem;
        color: #666;
    }
</style>