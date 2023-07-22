<template>
<div class="ring" ref="ring" >
    <img v-for="(item,index) in items" @dragstart="OnDrag" @click="OnClick(index)" :src=item :key=index>
</div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, Ref, ref } from 'vue';

const randomnum:Number = Math.floor(Math.random() * 100) + 1
const items = ref<any>([])
fetch(`https://www.mxnzp.com/api/image/girl/list?page=${randomnum}&app_id=sghs8pllwqmxilgc&app_secret=MXVSanhjMnB1eG1ubnExOEJQc3EvQT09`, {
  method: 'GET'
})
  .then(response => response.json())
  .then((data) => {
    data.data.list.forEach((item: { imageUrl: any; }) => {
        items.value.push(item.imageUrl)
    });
  })
  .catch(error => console.log(error))
const ring:Ref<HTMLElement  > = ref(document.querySelector('.ring') as HTMLElement )
let rotateX:number = 0
const OnDrag = (event: { preventDefault: () => void; x: number; })=>{
    event.preventDefault()
    console.log(event);
    rotateX = event.x
    console.log(rotateX);
    ring.value.style.transform = 'translateX('+rotateX+'px)'
    window.addEventListener('mousemove',mousemoveX)
    
}
const mousemoveX = (e:MouseEvent)=>{
    const X:number = e.clientX -rotateX
    ring.value.style.transform = 'rotateY('+X+'deg)'
}
const removemove = ()=>{
    window.removeEventListener('mousemove',mousemoveX)
}
onMounted(()=>{
    window.addEventListener('mouseup',removemove)
})
const OnClick = (index:number)=>{
    console.log(index);
    const mid:number = 4
    ring.value.style.transform = 'rotateY('+(mid-index)*36+'deg)'
}
onUnmounted(()=>{
    window.removeEventListener('mouseup',removemove)
})
</script>

<style>
.view{
    perspective: 2000px;
}
</style>
<style lang="scss" scoped>
@use 'sass:math';
.ring{
    width: 100vw;
    height: 100vh;
    transform-style: preserve-3d;
    transition: transform 0.2s;
    img{
        position: absolute;
        $imgWidth:300px;
        $imgHeight:400px;
        width: $imgWidth;
        height: $imgHeight;
        left: 50%;
        top: 50%;
        margin-left: calc(-1*$imgWidth/2);
        margin-top:  calc(-1*$imgHeight/2);
        transform: translate3d(0,0,-500px);
        $n:10;
        $r:500px;
        $pDeg:calc(360deg/$n);
        backface-visibility: hidden;
        opacity: 0.5;
        transition: opacity 0.2s;
        &:hover{
            opacity: 1;
            cursor: grab;
        }
        @for $i from 1 through $n{
            &:nth-child(#{$i}){
                $d:calc($i*$pDeg);
                $x:calc($r*math.sin($d));
                $z:calc($r*math.cos($d));
                transform: translate3d(#{$x},0,#{$z}) rotateY(180deg + $d);
            }
        }
    }
}
</style>