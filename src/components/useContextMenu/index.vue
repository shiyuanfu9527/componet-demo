<template>
    <div ref="containerRef">
        <slot></slot>
        <Teleport to="body">
            <Transition @beforeEnter="handleBeforeEnter" @enter="handleEnter" @afterEnter="handleAfterEnter">
                <div v-if="showMenu" class="context-menu" :style="{left:x+'px',top:y+'px'}">
                    <div class="menu-list">
                        <!-- 添加菜单的点击事件 -->
                        <div @click="handleClick(item)" class="menu-item" v-for="(item,i) in menu" :key="item.label">
                            {{ item.label }}
                        </div>
                    </div>
                </div>
            </Transition>
        </Teleport>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import useContextMenu from '.';
const props = defineProps({
    menu:{
        type:Array,
        default:()=>[]
    }
})
const containerRef = ref(null)
const emit = defineEmits(['select'])
const { x, y, showMenu } = useContextMenu(containerRef)
// 菜单的点击事件
function handleClick(item){
    // 选中菜单后关闭菜单
    showMenu.value = false
    // 并返回选中的菜单
    emit('select',item)
}
function handleBeforeEnter(el){
    el.style.height = 0
}
function handleEnter(el){
    el.style.height = 'auto'
    const h = el.clientHeight
    el.style.height = 0
    requestAnimationFrame(()=>{
        el.style.height = h + 'px'
        el.style.transition = '.5s'
    })
}
function handleAfterEnter(el){
    el.style.transition = 'none'
}
</script>

<style lang="less">
.context-menu{
    width: 100px;
    position: absolute;
    background-color: whitesmoke;
    border-radius: 10px;
    .menu-list{
        margin: 10px;
        .menu-item{
        margin: 0 10px;
        &:hover{
            background-color: blue;
        }
    }
    }

}
</style>