<!-- 文字中间省略的一个组件
    外部需要包一个已经确定宽度的div
-->
<script setup>
import { computed } from '@vue/reactivity';
import { nextTick,  onUnmounted, ref } from 'vue';
    const container = ref()
    const text = ref()
    let primitiveText = ''
    const cssEntirely = computed(()=>{
        return !props.suffix && props.startEllipsisLine ===1
    })
 const props =   defineProps({
        suffix:{
            type:Boolean,
            default:false
        },
        startEllipsisLine:{
            type:Number,
            default:1
        },
        boundaryValue:{
            type:Number,
            default:0
        }
    })
 
    function autoElipsis(container,textNode){
        const str = primitiveText
        textNode.textContent = str
        container.style.width = 'fit-contnet'
        container.style.whiteSpace = 'nowrap'
        const containerWidth = container.clientWidth
        const parent = container.parentElement
        const parentWidth = parent?.clientWidth||parent?.offsetWidth
        if(containerWidth<=parentWidth){
            // container 的宽度小于父元素的宽度不做处理
            textNode.textContent = str
            console.log("小于")
            return 
        }else if (cssEntirely.value){
            container.style.width = parentWidth + 'px'
            container.style.whiteSpace = 'nowrap'
            container.style.textOverflow = 'ellipsis'
            container.style.overflow  = 'hidden'
            console.log('走的是cssentirely true ')
        }
        else{
            const textWidth = textNode.offsetWidth
            const strNumber = str.length
            const avgStrWidth = textWidth/strNumber
            const canFitStrNumber = Math.floor((parentWidth*props.startEllipsisLine)/avgStrWidth)
            const shouldDelNumber = strNumber - canFitStrNumber + 1.5 + props.boundaryValue
            const delEachSide = shouldDelNumber/2
            const endLeft = Math.floor(strNumber/2 - delEachSide)
            const starRight = Math.ceil(strNumber/2 + delEachSide)
            switch(props.suffix){
                case true:{
                    textNode.textContent = str.slice(0,endLeft) + '...' + str.slice(starRight)
                    break
                }
                case false:{
                    textNode.textContent = str.slice(0,-shouldDelNumber) + '...'
                    break
                }
            }
            container.style.wordBreak = 'break-all'
            container.style.whiteSpace = 'normal'
        }
    }
        const observer = new ResizeObserver(()=>{
        const containerEl = container.value || document.getElementById("autoEllipsisWrapper")
        autoElipsis(containerEl,text.value)
    })
    nextTick(()=>{
        primitiveText = text.value?.innerText??""
        const app = document.getElementById("app")
        observer.observe(app)
    })
    onUnmounted(()=>{
        observer.unobserve(app)
    })
</script>
<template>
    <div id="autoEllipsisWrapper" ref="container" style="width: fit-content;" v-bind="$attrs" >
        <span ref="text">
            <slot></slot>
        </span>
    </div>
</template>