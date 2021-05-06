<template>
    <div>
        <h3>当前最新的count值为：{{$store.state.count}}</h3>
        <button @click="btnHandler1">+1</button>
        <button @click="btnHandler2">+N</button>
        <button @click="btnHandler3">+1 Async</button>
        <button @click="btnHandler4">+N Async</button>
        <h1  style="color: green;">{{$store.getters.showNum}}</h1>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        methods:{
            // commit 的作用就是调用某个 mutation 函数
            btnHandler1(){
                this.$store.commit('add');
            },
            btnHandler2(){
                this.$store.commit('addN',3);
            },
            // 异步的让 count +1
            btnHandler3(){
                // dispatch 专门用来触发 action
                this.$store.dispatch('addAsync');
            },
            btnHandler4(){
                this.$store.dispatch('addNAsync',5);
            },
        },
    }
</script>
<style scoped>
</style>