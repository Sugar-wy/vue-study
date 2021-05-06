<template>
    <div>
        <my-addition></my-addition>
        <p>-------------------------</p>
        <my-subtraction></my-subtraction>
    </div>
</template>
<script>
    import Addition from "./componentsTest/Addition.vue"
    import Subtraction from "./componentsTest/Subtraction.vue"
    export default {
        name: 'storeTest1',
        data() {
            return {
                msg: 'storeTest1'
            }
        },
        components:{
            "my-addition":Addition,
            "my-subtraction":Subtraction,
        }
    }
</script>
<style scoped>
</style>