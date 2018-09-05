<style>

</style>
<template>
    
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    methods:{
        async b_initData(){
            let reqUrl = this.$commonConfigApi;
            let response = await this.$post(reqUrl, params);
            if (response.code == 200) {
                return response.msg;
            }
            else {
                return null;
            }

        }
    }
}
</script>

 
