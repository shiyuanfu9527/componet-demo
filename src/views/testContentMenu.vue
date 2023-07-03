<template>
    <div class="container">
        <useContextMenu class="block" :menu="[
            {label:'添加'},
            {label:'编辑'},
            {label:'删除'},
            {label:'查看'},
            {label:'复制'}
        ]" @select="choose1=$event.label">
            <h2>{{ choose1 }}</h2>
        </useContextMenu>
        <useContextMenu class="block" :menu="[
            {label:'员工'},
            {label:'部门'},
            {label:'角色'},
            {label:'权限'},
            {label:'菜单'}
        ]" @select="choose2=$event.label">
            <h2>{{ choose2 }}</h2>
            <useContextMenu class="innerblock" :menu="[
            {label:'菜单1'},
            {label:'菜单2'},
            {label:'菜单3'},
            {label:'菜单4'},
        ]" @select="choose3=$event.label">
            <h2>{{ choose3 }}</h2>
        </useContextMenu>
        </useContextMenu>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import useContextMenu from '../components/useContextMenu/index.vue';
const choose1 = ref(null)
const choose2 = ref(null)
const choose3 = ref(null)
</script>

<style lang="less">
.container{
    display: flex;
    width:650px;
    justify-content: space-between;
    .block{
        width: 300px;
        height: 400px;
      &:nth-child(odd){
        background-color: aqua;
      }
      &:nth-child(even){
        background-color: orange;
        position: relative;
        display: flex;
        justify-content: center;
      }
      .innerblock{
        width: 200px;
        height: 200px;
        background-color: red;
        position: absolute;
        bottom: 10px;
      }
    }
}
</style>