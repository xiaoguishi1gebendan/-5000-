<template>
    <div style="width:100%;height:100%;background:#f5f5f5; position: absolute;top: 0;z-index:1000;overflow:scroll">
        <!-- 顶部 -->
         <headertop :title="title" > </headertop>

        <!-- 主内容区 -->
        <div class="content content-head">
            <div class="weui-cells myli">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <p id="orderNoP"><label>订单号：</label>{{rechargeAll.orderNo}}</p>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <p id="typeP"><label>入款类型：</label>{{list}}</p>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <p id="amountP"><label>存入金额：</label>{{rechargeAll.amount|mory(rechargeAll.amount)}}元</p>
                    </div>
                </div>
                <!-- <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <p id="disTypeP"><label>优惠类型：</label>{{(list3 ? list3 : '无')}}</p>
                    </div>
                </div> -->
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <p id="disAmountP"><label>优惠金额：</label>{{rechargeAll.disAmount|toFixed}}元</p>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <p id="finalAmountP"><label>最终存入：</label>{{(rechargeAll.amount+rechargeAll.disAmount)|mory(rechargeAll.amount)}}元</p>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <p class="colorred" id="statusP"><label>存入状态：</label>{{list2}}</p>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <p class="colorred" id="addTimeP"><label>存入时间：</label>{{rechargeAll.addTime | dateFmt('YYYY-MM-DD HH:mm:ss')}}</p>
                    </div>
                </div>
                 <div class="weui-cell" >
                    <div class="weui-cell__bd" >
                        <p class="colorred" id="addTimeP" style="overflow:hidden"><label style="float：left">备注：</label> <span style="float:left;width:70%;">{{rechargeAll.remark}}</span> </p>
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
              headertop,
        },
        data(){
            return{
                title:"充值明细",
                rechargeAll:[],
                list:'',
                list2:'',
                list3:''
            }
        },
       
        mounted:function() {
            // 渲染基础数据
            var arr2 = JSON.parse(myStorage.getItem("currentUser"))['id'];
            // var arr2 = dictAll['id'];
            
            if(myStorage.getItem("currentUser")){
                this.rechargeAll = base.getApi().rechargeDetail(arr2,this.$route.params.rechargeSheetId);
                //充值方式
                var dictDetail = JSON.parse(myStorage.getItem("dictDetailList"));
                //类型
                this.list = dictDetail["userRecharge-type-"+this.rechargeAll.type];
                //状态
                this.list2 = dictDetail["userRecharge-status-"+this.rechargeAll.status];
                console.log(this.list2);
                //优惠类型
                this.list3 = dictDetail["userRecharge-disType-"+this.rechargeAll.disType];
                //判断是否为空
                if (this.list) {
                    this.list = dictDetail["userRecharge-type-"+this.rechargeAll.type];
                }else{
                    this.list = '默认';
                }
            }
            this.isstyle()
        },
        methods:{
            isstyle(){
            },
        },
        beforeCreate: function() {
            document.getElementsByTagName("body")[0].style.backgroundColor='#f5f5f5';
            document.getElementsByTagName("body")[0].style.overflowY='hidden';
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
        font-size: 0.26rem;
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
        width:1.4rem;
    }
</style>