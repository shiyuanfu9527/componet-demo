<template>
    <div class="shaizi" :class="{ 'shaizi-animation': isDiceAnimation, 'shaizi-breath': !isDiceAnimation }"
        :style="{ transform: shaizExistTransformStyle }" ref="shaizi" @click=playTheGame>
        <div class="face">
            <div class="item_1"></div>
        </div>
        <div class="face">
            <div class="item_2"></div>
            <div class="item_2"></div>
        </div>
        <div class="face">
            <div class="item_3"></div>
            <div class="item_3"></div>
            <div class="item_3"></div>
        </div>
        <div class="face">
            <div class="face_0">
                <div class="item_4"></div>
                <div class="item_4"></div>
            </div>
            <div class="face_0">
                <div class="item_4"></div>
                <div class="item_4"></div>
            </div>
        </div>
        <div class="face">
            <div class="face_0">
                <div class="item_5"></div>
                <div class="item_5"></div>
            </div>
            <div class="face_0">
                <div class="item_5"></div>
            </div>
            <div class="face_0">
                <div class="item_5"></div>
                <div class="item_5"></div>
            </div>
        </div>
        <div class="face">
            <div class="face_0">
                <div class="item_6"></div>
                <div class="item_6"></div>
            </div>
            <div class="face_0">
                <div class="item_6"></div>
                <div class="item_6"></div>
            </div>
            <div class="face_0">
                <div class="item_6"></div>
                <div class="item_6"></div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, reactive, ref } from 'vue';

const shaizi = ref()
const resultValue = ref('')
const isDiceAnimation = ref(false)
const possibility = reactive([
    { value: 1, x: 45, y: 0, z: -45 },
    { value: 2, x: 135, y: -45, z: 0 },
    { value: 3, x: -45, y: -45, z: -90 },
    { value: 4, x: 135, y: 45, z: -90 },
    { value: 5, x: -45, y: 45, z: 0 },
    { value: 6, x: 45, y: 180, z: -45 },
])
let shaizExistTransformStyle = "rotateX(45deg) rotateY(0deg) rotateZ(-45deg)"
onMounted(() => {
    onAnimationEnd();
})
async function playTheGame() {
    // 有的时候浏览器在连续使用js操作css的时候会出现问题（反应不过来），比如，效果不能正常显示，
    // 此时可以尝试利用setTimeout-0来将目标代码放入到异步队列中等待执行
    setTimeout(() => {
        isDiceAnimation.value = true;
    }, 0);
}
async function onAnimationEnd() {
    shaizi.value.addEventListener('webkitAnimationEnd', () => {
        console.log("onAnimationEnd-act")
        // 准备抽取的随机数、抽取的随机结果
        let random = Math.floor(Math.random() * 6),
            result = possibility[random]

        // 浏览器反应不过来加过渡
        setTimeout(() => {
            // 让骰子旋转到正确的角度,更改动画属性，以待下一次动画的正常执行
            shaizExistTransformStyle = `rotateX(${result.x}deg) rotateY(${result.y}deg) rotateZ(${result.z}deg`
            isDiceAnimation.value = false;
            resultValue.value = result.value;
        }, 0);

    })
}

</script>
  
<style lang='less' scoped>
@keyframes rotate {
    to {
        transform: rotateX(360deg) rotateY(360deg) rotateZ(90deg);
        scale: 1.5;
    }
}

@keyframes breath {
    to {
        scale: 1.2;
    }
}

.shaizi {
    width: 120px;
    height: 120px;
    margin: 100% auto;
    position: relative;
    transform-style: preserve-3d;
    transition: all 1s;
}

.shaizi-animation {
    animation: rotate 1s linear 0s 5 normal;
}

.shaizi-breath {
    animation: breath 1s linear 0s infinite alternate;
}

.shaizi .face {
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
    left: 0;
    top: 0;
    border: 1px solid rgba(0, 0, 0, 0.5);
    background: rgb(253, 250, 250);
    border-radius: 20px;
    font-size: 100px;
    color: #fff;
    line-height: 300px;
    text-align: center;
}

.item_1 {
    width: 40px;
    height: 40px;
    background: rgba(240, 54, 54, 0.9);
    border-radius: 50%;
}

.item_2 {
    width: 30px;
    height: 30px;
    background: rgba(0, 0, 0, 0.9);
    border-radius: 50%;
}

.item_3 {
    width: 30px;
    height: 30px;
    background: rgba(0, 0, 0, 0.9);
    border-radius: 50%;
}

.item_4 {
    width: 30px;
    height: 30px;
    background: rgba(240, 54, 54, 0.9);
    border-radius: 50%;
}

.item_5 {
    width: 30px;
    height: 30px;
    background: rgba(0, 0, 0, 0.9);
    border-radius: 50%;
}

.item_6 {
    width: 30px;
    height: 30px;
    background: rgba(0, 0, 0, 0.9);
    border-radius: 50%;
}

.face:nth-child(1) {
    justify-content: center;
    align-items: center;
    transform: translateZ(60px);
}

.face:nth-child(2) {
    justify-content: space-around;
    align-items: center;
    transform: rotateX(-90deg) translateZ(60px);
}

.face:nth-child(3) {
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    transform: rotateY(90deg) translateZ(60px);
}

.face:nth-child(4) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    transform: rotateY(-90deg) translateZ(60px);
}

.face:nth-child(4) .face_0 {
    width: 150px;
    height: 30px;
    display: flex;
    justify-content: space-around;
}

.face:nth-child(5) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    transform: rotateX(90deg) translateZ(60px);
}

.face:nth-child(5) .face_0 {
    width: 150px;
    height: 30px;
    display: flex;
    justify-content: space-around;
}

.face:nth-child(6) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    transform: translateZ(-60px);
}

.face:nth-child(6) .face_0 {
    width: 150px;
    height: 30px;
    display: flex;
    justify-content: space-around;
}

p {
    text-align: center;
}

p {
    text-align: center;
}
</style>