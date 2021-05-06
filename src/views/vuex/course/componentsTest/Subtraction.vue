<template>
    <div>
        <h3>当前最新的count值为：{{count}}</h3>
        <button @click="btnHandler1">-1</button>
        <!--<button @click="btnHandler2">-N</button>-->
        <!--<button @click="btnHandler3">-1 async</button>-->

        <!-- 不重新定义方法也可以，因为action和mutation本来就是在该组件中将函数映射过来 -->
        <button @click="subN(3)">-N</button>
        <button @click="subAsync">-1 async</button>
        <button @click="subNAsync(5)">-N async</button>
        <h1 style="color: red;">{{showNum}}</h1>
    </div>
</template>
<script>
    import { mapState,mapMutations,mapActions,mapGetters } from 'vuex';
    export default {
        data() {
            return {}
        },
        computed:{
            ...mapState(['count']),
            ...mapGetters(['showNum'])
        },
        methods:{
            ...mapMutations(['sub','subN']),
            ...mapActions(['subAsync','subNAsync']),
            btnHandler1(){
                this.sub();
            },
//            btnHandler2(){
//                this.subN(3);
//            },
//            btnHandler3(){
//                this.subAsync();
//            }
        }
    }
</script>
<style scoped>
</style>