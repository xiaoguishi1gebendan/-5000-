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
            this.$store.state.xiazaishow=false
            window.localStorage.setItem('islskj','/lotteryResultListyi/')
            window.localStorage.setItem('iswfsm','/ruleyi/')
            window.localStorage.setItem('isfxzq','/shareyi')
            window.localStorage.setItem('isclickgoucai','/lotteryResultListyinew/')
            window.localStorage.setItem('lujin','/buycolorConfirmsy')
        },
        methods:{

        },
        mounted:function(){

        },
        components: {
            forthecolor
        },
        
    }
</script>