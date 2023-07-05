<template>
    <div class="container">
        <div id="root" ref="root">
            <!-- 原图 不用动高 -->
            <img class="changed-img" src="../assets/iTab-kx8evd.webp" >

            <!-- 需改高 -->
            <div id="clip" ref="clip">
                <img class="origin-img" src="../assets/iTab-ex338w.jpg" >
            </div>
            <div id="bar" ref="bar">
                <div class="bar-line">
                    <div class="handle-root">
                        <div class="handle-line"></div>
                            <div class="handle-button">
                                <div></div>
                                <div></div>
                            </div>
                        <div class="handle-line"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import {onMounted, ref} from 'vue'
let allow = ref(false)
const bar = ref(null)
const clip = ref(null)
const root = ref(null)
// 滑动
const move = (clientY)=>{
    bar.value.style.transform= `translate3d(0px,${clientY - 249}px,0px)`
    clip.value.style.clip = `rect(auto,auto,${clientY - 249}px,auto)`
    root.value.style.cursor = 'ns-resize'
}
// 停止
const stop = ()=>{
    allow.value = false
    root.value.style.cursor = 'unset'
}
// 鼠标事件
onMounted(()=>{
    root.value.addEventListener('mousedown',(e)=>{
        allow.value = true
        move(e.clientY)
    })
    root.value.addEventListener('mousemove',(e)=>{
        if(allow.value){
            move(e.clientY)
        }
    })
    // root.value.addEventListener('mouseup',()=>{
    //     stop()
    // })
    document.addEventListener('mouseup',()=>{
        stop()
    })
})
</script>

<style lang="less">
#root{
    width:600px;
    height: 24rem;
    position: relative;
    overflow: hidden;
    user-select: none;
    margin: 100px auto;
    .changed-img{
        display: block;
        width: 100%;
        height: 100%;
        max-width: 100%;
        box-sizing: border-box;
        object-fit: cover;
        object-position: center center;
    }
    #clip{
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        will-change: clip;
        user-select: none;
        clip: rect(auto,auto,206px,auto);
        .origin-img{
            display: block;
            width: 100%;
            height: 100%;
            max-width: 100%;
            box-sizing: border-box;
            object-fit: cover;
            object-position: center center;
        }
    }
}
#bar{
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
    pointer-events: none;
    transform: translate3d(0px,206px,0px);
    .bar-line{
        position: absolute;
        width: 100%;
        transform: translateY(-50%);
        pointer-events: all;
        height: 56px;
        .handle-root{
            display: flex;
            flex-direction: row;
            place-items: center;
            height: 100%;
            cursor: ns-resize;
            pointer-events: none;
            color:rgb(255, 255, 255)
        }
        .handle-line{
            flex-grow: 1;
            height: 2px;
            width:100%;
            background-color: currentColor;
            pointer-events: auto;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 7px;
        }
        .handle-button{
            display: grid;
            grid-auto-flow: column;
            gap: 8px;
            place-content: center;
            flex-shrink: 0;
            width: 56px;
            height: 56px;
            border-radius: 50%;
            border-style: solid;
            border-width: 2px;
            pointer-events: auto;
            backdrop-filter: blur(7px);
            box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 7px;
            transform: rotate(90deg);
            div{
                width: 0px;
                height: 0px;
                border-top: 8px solid transparent;
                border-right:10px solid;
                border-bottom: 8px solid transparent;
                &:nth-child(2){
                    transform: rotate(180deg);
                }
            }
        }
    }
}
</style>