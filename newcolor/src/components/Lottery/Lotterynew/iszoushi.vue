<template>
    <div style="overflow: hidden;position:absolute;top:0;width:100%;height:100%;background: white;z-index:1000;">
        <forthecolor :lotteryResultListId="this.$route.params.lotteryResultListId"></forthecolor>
    </div>
</template>
<script>
    import forthecolor from "../../Buycolor/trentMap.vue";
    export default{
        data(){
            return{

                }
        },
        created(){

           
        },
        methods:{
            luyoudata(){
                console.log();

            }
        },
        mounted:function(){
            this.luyoudata();
        },
        components: {
            forthecolor
        }
    }
</script>