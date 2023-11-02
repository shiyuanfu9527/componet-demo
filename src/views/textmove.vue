<script setup>
import {  nextTick, onMounted,  onUnmounted,  ref } from 'vue';
    const hdom = ref(null)
    let width,height,center
    // 一开始获取不到dom，只能在下次dom更新的时候获取
    nextTick(()=>{
        width = hdom.value.offsetWidth
        height = window.screen.availHeight
        // 因为布局原因，body的高度是0 所以只能获取视口的高度
        center = {x:width/2,y:height/2}
    })
    let copys = ref([])
    const setDom =((el)=>{
        copys.value.push(el)
    })
    const offset = 0.01
    const mouseMove = (e)=>{
        const {x,y} = e
        const mousecenter = {mcx:x-center.x,mcy:y-center.y} 
        const l = copys.value.length
        for(let i=1;i<=l;i++){
            copys.value[i-1].style.transform = `perspective(500px)
            rotate(${mousecenter.mcx * i * offset}deg)
            translate3d(0px,${mousecenter.mcy*i*offset*5}px,${-15*i}px)
            skew(${(mousecenter.mcy*offset)*i}deg)`
        }
    }
    onMounted(()=>{
        window.addEventListener('mousemove',mouseMove)
        
    })
    onUnmounted(()=>{
        window.removeEventListener('mousemove',mouseMove)
    })
</script>
<template>
     <h1 ref="hdom">waves</h1>
     <span v-for="i in 4" :key="i" :ref="setDom" class="copy" :class="`copy${i}`">waves</span>
</template>
<style lang="scss" scoped>
body {
    h1,h1~[class^="copy"] {
        font-family: "Lilita One", cursive;
        text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
        font-size: 20vw;
        display: inline-block;
        width: 100vw;
        line-height: 1;
        height: 20vw;
        color: #e7e7e7;
        z-index: 50;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        margin: auto;
        text-align: center;
    }

    span.copy1 {
        color: #f24c00;
        z-index: 40;
        transform: perspective(500px) translate3d(0, 0, -15px);
    }

    span.copy2 {
        transform: perspective(500px) translate3d(0, 0, -30px);
        color: #9792e3;
        z-index: 30;
    }
    span.copy3 {
        transform: perspective(500px) translate3d(0, 0, -45px);
        color: #fc7a1e;
        z-index: 20;
    }
    span.copy4 {
        transform: perspective(500px) translate3d(0, 0, -60px);
        color: #eda96d;
        z-index: 10;
    }

}

@font-face {
    font-family: 'Lilita One';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/lilitaone/v13/i7dPIFZ9Zz-WBtRtedDbYEF8RXi4EwQ.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
</style>
<style>
body{
    overflow: hidden;
}
</style>