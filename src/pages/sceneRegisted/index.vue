<style>

</style>
<template>
    <div class="">
        ###挂号
    </div>
</template>
<script>
export default {
    // #data todo
    data(){
        return{
            
        }
    },
    methods:{
        // #post example
        // ###Toobtain
        async b_initData(){
            let reqUrl = this.$commonConfigApi;
            let response = await this.$post(reqUrl, params);
            if (response.code == 200) {
                return response.msg;
            }
            else {
                return null;
            }

        },
        // ###end Toobtain
    }
}
</script>

 
