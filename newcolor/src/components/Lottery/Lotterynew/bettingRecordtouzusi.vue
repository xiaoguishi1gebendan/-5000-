<template>
    <div style="overflow: hidden;position:absolute;top:0;width:100%;height:100%;background: white;z-index:1000;">
        <forthecolor></forthecolor>
    </div>
</template>
<script>
    import forthecolor from "../../BettingRecord/BettingRecord.vue";
    export default{
        data(){
            return{

                }
        },
        created(){
            // window.localStorage.getItem('istouzu');
           
        },
        methods:{
            dataclick(){
                $('#a_lotteryType_all').click();
            }
        },
        mounted:function(){
            var $this = this;
            setTimeout(function(){
                $this.dataclick()
            },1100)
        },
        components: {
            forthecolor
        }
    }
</script>