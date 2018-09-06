<template>
    <div style="width:100%;height:100%;background:#f5f5f5; position: absolute;top: 0;z-index:999;">
        <!-- 顶部 -->
         <headertop :title="title" > </headertop>

        <!-- 主内容区 -->
        <div class="content content-head">
            <div class="weui-cells myli">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <p id="orderNoP"><label>订单号：</label>{{accoundetal.orderNo}}</p>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <p id="typeP"><label>类型：</label>{{accoundetal.type}}</p>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <p id="amountP"><label>详细类型：</label>{{accoundetal.detailType}}</p>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <p id="disTypeP"><label>涉及金额：</label>{{(accoundetal.amount-0).toFixed(2)}}元</p>
                    </div>
                </div>
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <p id="disAmountP"><label>时间：</label>{{parseInt(accoundetal.addTime ) | dateFmt('YYYY-MM-DD HH:mm:ss')}}</p>
                    </div>
                </div>
             
                <div class="weui-cell" >
                    <div class="weui-cell__bd">
                        <p id="finalAmountP"><label>备注：</label><span style="float: left;
    width: 75%;">{{accoundetal.remark}}</span></p>
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
                title:"账户明细",
                accoundetal:""
            }
        },
       created() {
           this.accoundetal=this.$store.state.accoundetal;
           var dictListType = JSON.parse(myStorage.getItem("dictList"))["accountDetails-type"];
           var dictListDetailType= JSON.parse(myStorage.getItem("dictList"))["accountDetails-detailType"];
           console.log(dictListType)
           console.log(dictListDetailType)
           console.log(this.$store.state.accoundetal);
           var dictListTypenum=[];
           var dictListTypestr=[];
           for(var i=0;i<dictListType.length;i++){
               dictListTypenum.push(dictListType[i].split('-')[0]);
               dictListTypestr.push(dictListType[i].split('-')[1]);
           }
           var dictListDetailTypenum=[];
           var dictListDetailTypestr=[];
           for(var i=0;i<dictListDetailType.length;i++){
               dictListDetailTypenum.push(dictListDetailType[i].split('-')[0]);
               dictListDetailTypestr.push(dictListDetailType[i].split('-')[1]);
           }
            // console.
            for(var i=0;i<dictListTypenum.length;i++){
                if(this.accoundetal.type==dictListTypenum[i]){
                    this.accoundetal.type=dictListTypestr[i];
                    break;
                }
            }
             for(var i=0;i<dictListDetailTypenum.length;i++){
                if(this.accoundetal.detailType==dictListDetailTypenum[i]){
                    this.accoundetal.detailType=dictListDetailTypestr[i];
                    console.log(dictListDetailTypestr[i])
                    break;
                }
            }


       },
        mounted:function() {
          this.isstyle()
        },
        methods:{
        },
        beforeCreate: function() {
          
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
    line-height: .7rem;
    overflow: hidden;
    }
    .myli .weui-cell p.colorred{
        color: #d91e38;
    }
    .myli .weui-cell p label{
       float: left;
    display: inline-block;
    width: 1.5rem;
    overflow: hidden;
    line-height: .7rem;
    color: #666;
    }
</style>