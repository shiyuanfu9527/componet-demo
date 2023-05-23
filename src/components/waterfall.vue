<template>
    <!-- 瀑布流组件 -->
    <div class="waterfall">
      <div v-for="(item, index) in items" :key="index" class="item" :style="{ top: item.top + 'px', left: item.left + 'px' }">
        <img :src="item.src" :style="{ height: item.height + 'px' }">
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, onUnmounted, reactive } from 'vue'
      const items = reactive([
        { src: 'https://picsum.photos/300/200', height: 200, top: 0, left: 0 },
        { src: 'https://picsum.photos/300/400', height: 400, top: 0, left: 0 },
        { src: 'https://picsum.photos/300/300', height: 300, top: 0, left: 0 },
        { src: 'https://picsum.photos/300/250', height: 250, top: 0, left: 0 },
        { src: 'https://picsum.photos/300/350', height: 350, top: 0, left: 0 },
        { src: 'https://picsum.photos/300/200', height: 200, top: 0, left: 0 },
        { src: 'https://picsum.photos/300/300', height: 300, top: 0, left: 0 },
        { src: 'https://picsum.photos/300/350', height: 350, top: 0, left: 0 },
        { src: 'https://picsum.photos/300/250', height: 250, top: 0, left: 0 },
        { src: 'https://picsum.photos/300/400', height: 400, top: 0, left: 0 },
        { src: 'https://picsum.photos/300/250', height: 250, top: 0, left: 0 },
        { src: 'https://picsum.photos/300/350', height: 350, top: 0, left: 0 },
        { src: 'https://picsum.photos/300/200', height: 200, top: 0, left: 0 },
        { src: 'https://picsum.photos/300/300', height: 300, top: 0, left: 0 },
        { src: 'https://picsum.photos/300/350', height: 350, top: 0, left: 0 },
        { src: 'https://picsum.photos/300/250', height: 250, top: 0, left: 0 },
      ])
  
      const layout = () => {
        const containerWidth = document.querySelector('.waterfall').clientWidth
        const itemWidth = 300
        const gap = 10
        const columnCount = Math.floor(containerWidth / (itemWidth + gap))
        const columnHeights = new Array(columnCount).fill(0)
        items.forEach((item, index) => {
          const minIndex = columnHeights.indexOf(Math.min(...columnHeights))
          const left = minIndex * (itemWidth + gap)
          const top = columnHeights[minIndex]
          columnHeights[minIndex] += item.height + gap
          item.top = top
          item.left = left
        })
      }
  
      onMounted(() => {
        layout()
        window.addEventListener('resize', layout)
      })
      onUnmounted(()=>{
        window.removeEventListener('resize',layout)
      })
  </script>
  
  <style>
  .waterfall {
    position: relative;
    margin: 0 auto;
    width: 960px;
  }
  
  .item {
    position: absolute;
    width: 300px;
    transition: all 0.3s ease-out;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  
  .item img {
    width: 100%;
    display: block;
    cursor: pointer;
  }
  </style>
  