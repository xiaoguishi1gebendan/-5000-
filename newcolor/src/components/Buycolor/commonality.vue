<template>
    <div style="background-color:white;border-radius: 0 0 .065rem .065rem;padding: 5% 0;    max-height: 2rem;min-height: 1rem;overflow: scroll;">
        <div class="maxmain">
            <div style="color:gray" class="playts">玩法提示</div>
            <div v-if="playAll[indexxb].playExplain.playCue!=undefined" class="playtishi">{{playAll[indexxb].playExplain.playCue}}</div>
            <div v-else class="playtishi">暂无数据</div>
            <br>
            <div style="color:gray" class="winplay">中奖说明</div>
            <div class="winplaymin">{{playAll[indexxb].playExplain.winningCue}}</div>
            <br>
            <div style="color:gray" class="example">范例</div>
            <div class="examplemin">{{playAll[indexxb].playExplain.example}}</div>
        </div>
        
    </div>
</template>
<style scoped> 
    .maxmain{
        padding: 0 5%;
        border-radius: 0 0 .065rem .065rem;
    }
    .maxmain div{
        text-align: left;
    }
    .playts,.winplay,.example{
        position:relative;
    }
    .playts:before,.winplay:before,.example:before{
        content: '';
        display: block;
        position: absolute;
        width: 0.05rem;
        height: .05rem;
        border-radius: 50%;
        /* background-color: red; */
        left: -.08rem;
        top: .08rem;
    }
</style>
   
<script>
// import common from '../../common/common.js'

export default {
    data() {
        return {
            lunboArray: [] //数据的初始化
        }
    },
    // :lunbo_url="'api/getthumimages/'+this.$route.params.goodsId" :lunbo_time="lunboTime"(父页面传过来的数据)
    // props: ['lunbo_url', 'lunbo_time'],
    props: ['playAll','indexxb'],
    created() {
        console.log(this.playAll);
    },
    methods: {
    }
}
</script>
