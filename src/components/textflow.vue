<script setup>
import { onMounted, ref } from 'vue';
const canvas = ref()
let ctx = null
let fontSize = null
let column = null
let charIndex = null
function draw() {
    ctx.fillStyle = 'rgba(0,0,0,0.06)'
    ctx.fillRect(0, 0, canvas.value.width, canvas.value.height)
    ctx.fillStyle = '#b97611'
    ctx.font = `${fontSize}px 'Roboto Mono'`
    ctx.textAlign = 'left'
    ctx.textBaseline = 'top'
    charIndex.forEach((item, index) => {
        const x = index * fontSize
        const y = item * fontSize
        ctx.fillText(getRandomText(), x, y)
        charIndex[index]++
        if (y > canvas.value.height && Math.random() > 0.99) {
            charIndex[index] = 0
        }
    })
    requestAnimationFrame(() => {
        draw()
    })
}
onMounted(() => {
    ctx = canvas.value.getContext("2d")
    canvas.value.width = window.innerWidth * devicePixelRatio
    canvas.value.height = window.innerHeight * devicePixelRatio
    fontSize = 12 * devicePixelRatio
    column = Math.floor(canvas.value.width / fontSize)
    charIndex = new Array(column).fill(0)
    requestAnimationFrame(() => {
        draw()
    })
})
function getRandomText() {
    const texts = "abcdefghijklmnopqrstuvwxyz1234567890"
    const index = Math.floor(Math.random() * texts.length)
    return texts[index]
}
</script>
<template>
    <canvas ref="canvas">
        版本过低
    </canvas>
</template>
<style>
canvas {
    display: block;
}
</style>