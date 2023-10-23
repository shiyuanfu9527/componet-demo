<template>
  <!-- 瀑布流组件 -->
  <div class="waterfall" ref="waterfall">
    <div v-for="(item, index) in items" :key="index" class="item"
      :style="{ top: item.top + 'px', left: item.left + 'px' }">
      <img :src="item.src" :style="{ height: item.height + 'px' }">
    </div>
  </div>
</template>
  
<script lang="ts" setup>
import { onMounted, onUnmounted, reactive,ref } from 'vue'
const randomnum:Number = Math.floor(Math.random() * 50) + 1
let items = reactive<any>([
  { src: '', height: 200, top: 0, left: 0 },
  { src: '', height: 400, top: 0, left: 0 },
  { src: '', height: 300, top: 0, left: 0 },
  { src: '', height: 250, top: 0, left: 0 },
  { src: '', height: 350, top: 0, left: 0 },
  { src: '', height: 200, top: 0, left: 0 },
  { src: '', height: 300, top: 0, left: 0 },
  { src: '', height: 350, top: 0, left: 0 },
  { src: '', height: 250, top: 0, left: 0 },
  { src: '', height: 400, top: 0, left: 0 },
  { src: '', height: 200, top: 0, left: 0 },
  { src: '', height: 400, top: 0, left: 0 },
  { src: '', height: 300, top: 0, left: 0 },
  { src: '', height: 250, top: 0, left: 0 },
  { src: '', height: 350, top: 0, left: 0 },
  { src: '', height: 200, top: 0, left: 0 },
  { src: '', height: 300, top: 0, left: 0 },
  { src: '', height: 350, top: 0, left: 0 },
  { src: '', height: 250, top: 0, left: 0 },
  { src: '', height: 400, top: 0, left: 0 },
])
fetch(`https://www.mxnzp.com/api/image/girl/list?page=${randomnum}&app_id=sghs8pllwqmxilgc&app_secret=MXVSanhjMnB1eG1ubnExOEJQc3EvQT09`, {
  method: 'GET'
})
  .then(response => response.json())
  .then((data) => {
    // 接口数据不够咯只有十条 让他求余重复
    items.forEach((item: { src: URL; height: number; }, index: number) => {
      item.src = data.data[index % 10].imageUrl
      item.height = data.data[index % 10].imageSize.split('x')[1]/(Math.floor(Math.random()*3)+3)
      //随机图片高度的倍数
    })
    layout()
  })
  .catch(error => console.log(error))
  const waterfall = ref()
const layout :Function = () => {
  const containerWidth: any = waterfall.value.clientWidth
  console.log(containerWidth);
  const itemWidth: number = 320
  const gap: number = 10
  const columnCount: number = Math.floor(containerWidth / (itemWidth + gap))
  const columnHeights: number[] = new Array(columnCount).fill(0)
  //计算哪一列的高度最短，将图片放在最短的那一列
  items.forEach((item: { height: number; top: number; left: number; }) => {
    const minIndex: number = columnHeights.indexOf(Math.min(...columnHeights))
    const left: number = minIndex * (itemWidth + gap)
    const top: number = columnHeights[minIndex]
    columnHeights[minIndex] += item.height + gap
    item.top = top
    item.left = left
  })
}

onMounted(() => {
  layout()
  window.addEventListener('resize', ()=>{
    layout()
  })
})
onUnmounted(() => {
  window.removeEventListener('resize',()=>{
    layout()
  })
})
</script>
  
<style>
.waterfall {
  position: relative;
  margin: 0 auto;
  width: 95%;
}
:root{
    background-color: #fff;
  }
.item {
  position: absolute;
  width: 320px;
  transition: all 0.3s ease-out;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.item img {
  width: 100%;
  display: block;
  cursor: pointer;
  object-fit: cover;
}
</style>
  