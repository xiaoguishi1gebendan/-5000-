<template>
    <div style='overflow: hidden;position:absolute;top:0;width:100%;height:100%;background: white;z-index:1000;' class='root'>
        <forthecolor></forthecolor>
    </div>
</template>
<script>
    import forthecolor from "../rule.vue";
    export default{
        data(){
            return{

                }
        },
        created(){
            // window.localStorage.getItem('istouzu');
           console.log(this.$route.params.lotteryResultListId);
        },
        components: {
            forthecolor
        }
    }
</script>
<style>
 
.MsoNormal span{
    font-size: 16px !important;
}
</style>
