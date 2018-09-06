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
            window.localStorage.setItem('lujin','/buycolorConfirmyi')
            window.localStorage.setItem('istouzu','/bettingRecordtouzuer')
            window.localStorage.setItem('islskj','/lotteryResultLister/')
            window.localStorage.setItem('iswfsm','/ruleer/')
            window.localStorage.setItem('isfxzq','/shareer')
            window.localStorage.setItem('isclickgoucai','/lotteryResultListernew/')
        },
        components: {
            forthecolor
        }
    }
</script>