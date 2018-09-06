<template>
    <div style="overflow: hidden;position:absolute;top:0;width:100%;height:100%;background: white;z-index:1000;">
        <forthecolor></forthecolor>
    </div>
</template>
<script>
    import forthecolor from "../forthecolor.vue";
    export default{
        data(){
            return{

                }
        },
        created(){
            window.localStorage.setItem('lujin','/buycolorConfirmer')
            window.localStorage.setItem('istouzu','/bettingRecordtouzusan')
            window.localStorage.setItem('islskj','/lotteryResultListsan/')
            window.localStorage.setItem('iswfsm','/rulesan/')
            window.localStorage.setItem('isfxzq','/sharesan')
            window.localStorage.setItem('isclickgoucai','/lotteryResultListsannew/')
        },
        components: {
            forthecolor
        }
    }
</script>