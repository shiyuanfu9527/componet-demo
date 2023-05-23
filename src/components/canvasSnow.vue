<script setup>
import { onMounted, ref } from 'vue';

    const Can = ref(null)
    let  count = 100
    let list = []
    let width = window.innerWidth
    let height = window.innerHeight
    let Context = null
    onMounted(()=>{
    Can.value.width = width
    Can.value.height = height
    Context = Can.value.getContext('2d')
    init()
    window.requestAnimationFrame(draw)
    })

    function init(){
        for (let i =0;i<count;i++){
        list.push({
            x:Math.round(Math.random()*width),
            y:Math.round(Math.random()*height),
            r:Math.round(Math.random()*15+1),
            speedX:Math.random()+1,
            speedY:Math.random()+1
        })
    }
    }
    function draw(){
        Context.clearRect(0,0,width,height)
        Context.beginPath()
        for(let i =0;i<count;i++){
            const node = list[i]
            // 参数分别是 圆的位置x,y 半径r 开始位置 结束位置
            Context.arc(node.x,node.y,node.r,0,Math.PI*2,true)
            // 辐射渐变，参数 位置x,y 内圈半径 x,y 外圈半径
            let radialGradient = Context.createRadialGradient(node.x,node.y,0,node.x,node.y,node.r)
            radialGradient.addColorStop(0,'#fff'),
            radialGradient.addColorStop(0.7,'rgba(255,255,255,0)')
            Context.fillStyle = radialGradient
            Context.fillRect(node.x-node.r,node.y-node.r,node.r*2,node.r*2)
        }
        calcNextInfo()
        window.requestAnimationFrame(draw)
    }
    function calcNextInfo(){
        for(let i = 0;i<count;i++){
            const node = list[i]
            node.x += node.speedX
            node.y += node.speedY
            if(node.x>width||node.y>height){
                list[i]={
                    // 雪花的位置
                    x:Math.round(Math.random()*width),
                    y:Math.round(Math.random()*height),
                    // 雪花半径
                    r:Math.round(Math.random()*15+1),
                    speedX:Math.random()+1,
                    speedY:Math.random()+1
                }
            }
        }
    }
</script>
<template>
    <canvas ref="Can"></canvas>
</template>