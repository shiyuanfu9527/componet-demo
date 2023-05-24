<template>
    <div class="box">
        <span class="num" :style="`transform:translate(-50%,-${number*10}%)`">0123456789</span>
    </div>
</template>
<script setup>
defineProps({
    number:{
        type:Number,
        default:5,
        required:true,
    }
})
</script>
<style lang="scss" scoped>
.box{
    height: 82px;
    width: 54px;
    line-height: 82px;
    text-align: center;
    background-color: #149373;
    border-radius: 10px;
    overflow: hidden;
    margin-right: 5px;
    position: relative;
    writing-mode: vertical-lr;
    text-orientation: upright;
}
.num{
    position: absolute;
    left: 50%;
    top: 10px;
    font-size: 62px;
    color: #fff;
    transition: all 1.5s;
    font-family: 'Courier New', Courier, monospace;
}
</style>