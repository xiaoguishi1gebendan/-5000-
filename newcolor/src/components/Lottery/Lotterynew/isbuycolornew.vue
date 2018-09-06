<template>
    <div style="overflow: hidden;position:absolute;top:0;width:100%;height:100%;background: white;z-index:1000;">
        <forthecolor></forthecolor>
    </div>
</template>
<script>
    import forthecolor from "../../Buycolor/forthecolor.vue";
    export default{
        data(){
            return{

                }
        },
        created(){
            // window.localStorage.getItem('istouzu');
            window.localStorage.setItem('lujin','/buycolorConfirmkjjl')
            window.localStorage.setItem('istouzu','/bettingRecordtouzusi')
            window.localStorage.setItem('iswfsm','/rulesi/')
            window.localStorage.setItem('isfxzq','/sharesi')
            window.localStorage.setItem('isgoucxq','yes')
        },
        methods:{
          a(){
              $('#openListA').click(function(){
                window.localStorage.setItem('iskjjl','yes')
              })
          }  
        },
        mounted:function(){
            this.a()
        },
        components: {
            forthecolor
        }
    }
</script>