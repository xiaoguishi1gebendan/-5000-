<template>
    <div style='overflow: hidden;position:absolute;top:0;width:100%;height:100%;background: white;z-index:1000;'>
        <forthecolor></forthecolor>
    </div>
</template>
<script>
    import forthecolor from "../../Lottery/lotteryResultList.vue";
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