<template>
    <div class="main">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        旋转跳跃
    </div>
</template>
<style lang="less" >
body{
    background: #000;
}
.main {
    cursor: pointer;
    width: 100px;
    height: 40px;
    background-color: transparent;
    position: absolute;
    top: 50%;
    margin-top: -20px;
    left: 50%;
    text-align: center;
    line-height: 40px;
    font-family: '宋体';
    color: aquamarine;
    overflow: hidden;
    :nth-child(1) {
        background: linear-gradient(to right, transparent, #0ff);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        animation: run1 1s linear infinite;
    }
    :nth-child(2) {
        position: absolute;
        background: linear-gradient(to bottom, transparent, #0FF);
        top: 0;
        right: 0;
        width: 1px;
        height: 100%;
        animation: run2 1s linear infinite;
        animation-delay: .5s;
    }
    :nth-child(3) {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: linear-gradient(to left, transparent, #0FF);
        animation: run3 1s linear infinite;
    }
    :nth-child(4) {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 1px;
        height: 100%;
        background: linear-gradient(to top, transparent, #0FF);
        animation: run4 1s linear infinite;
        animation-delay: .5s;
    }

}

@keyframes run1 {
    0% {
        transform: translateX(-200px);
    }

    100% {
        transform: translateX(200px);
    }
}

@keyframes run2 {
    0% {
        transform: translateY(-40px);
    }

    100% {
        transform: translateY(40px);
    }
}

@keyframes run3 {
    0% {
        transform: translateX(200px);
    }

    100% {
        transform: translateX(-200px);
    }
}

@keyframes run4 {
    0% {
        transform: translateY(40px);
    }

    100% {
        transform: translateY(-40px);
    }
}</style>