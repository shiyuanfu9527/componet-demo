<script setup>
    import {ref,onMounted,onUnmounted} from 'vue'
    const x = ref(0)
    const y = ref(0)
    function update(event){
         x.value = event.pageX
         y.value = event.pageY
    }
    onMounted(()=>window.addEventListener('mousemove',update))
    onUnmounted(()=>window.removeEventListener('mousemove',update))
</script>
<template>
    <h1>    {{ x }},{{ y }}</h1>
</template>
<style lang="less" scoped>
  h1{
    padding: 0.72em 1.2em;
  } 
  </style>