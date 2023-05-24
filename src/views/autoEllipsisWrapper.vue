<script setup>
import autoEllipsis from '../components/autoEllipsis.vue';
</script>
<template>
    <div class="textEllipsis">
        <autoEllipsis :suffix="true" :start-ellipsis-line="1">测试中间省略的组件啊啊啊啊啊</autoEllipsis>
    </div>
</template>
<style lang="less" scoped>
.textEllipsis{
  max-width: 200px;
  border: 1px solid red;
  margin: 50% auto;
}
</style>