<template>
    <div>
        <a-input placeholer="请输入任务" class="my_ipt"></a-input>
        <a-button type="primary">添加事项</a-button>

        <a-list bordered :dataSource="list" class="dt_list">
            <a-list-item slot="rederItem" slot-scope="item">
                <!-- 复选框 -->
                <a-checkbox>{{item.info}}</a-checkbox>
                <!-- 删除链接 -->
                <a slot="actions">删除</a>
            </a-list-item>
        </a-list>
    </div>
</template>
<script>
    export default {
        name: 'vuex案例1',
        data() {
            return {
                msg: 'vuex案例1'
            }
        }
    }
</script>
<style scoped>
</style>