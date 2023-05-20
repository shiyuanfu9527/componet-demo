<template>
      <div class="planet-wrapper">
        <div class="clock-pan">
          <img
            class="pan"
            src="https://static.9377.cn/images/alsp/clock_circle.png"
            alt=""
          />
          <img
            class="point"
            src="https://static.9377.cn/images/alsp/cricle_pointer.png"
            alt=""
          />
        </div>
        <div class="clock">
          <ul :style="{ transform: `rotate(${rotateNum}deg)` }">
            <li
              v-for="index in 12"
              :key="index"
              :style="{
                transform: `rotate(${(13 - index) * 30}deg)`,
              }"
              @mouseover="mouseover"
              @mouseleave="mouseleave"
            >
              <div
                class="content"
                :style="{
                  transform: `rotate(${
                    -(13 - index) * 30 - rotateNum
                  }deg)`,
                }"
                :data-text="index"
              >
                <img src="https://s1.ax1x.com/2022/12/08/zRik24.jpg" alt="" />
              </div>
            </li>
          </ul>
        </div>
      </div>
  </template>
  
  <script setup>
import { onMounted, ref } from 'vue';

  let autoRotateTimer = null
  const rotateNum = ref(0)
    onMounted(()=>{
        autoRotate()
    })
      function autoRotate() {
        clearInterval(autoRotateTimer)
        autoRotateTimer = setInterval(() => {
          rotateNum.value += 30
        //   currentIndex++ 目前没用
        //   if (currentIndex >= 12) {
        //    currentIndex = 0
        //   }
        }, 1000)
      }
      function mouseover() {
        clearInterval(autoRotateTimer)
      }
      function mouseleave() {
       autoRotate()
      }
  </script>
  <style>
    body{
        width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: linear-gradient(#150d32, #302171);
    }
</style>
  <style lang="less" scoped>
  .planet-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    right: -550px;
    transform: translateY(-50%);
    img {
      width: 100%;
      height: 100%;
    }
    .clock-pan {
      width: 926px;
      height: 875px;
      position: relative;
      .pan {
        animation: pan-rotate 20s linear infinite;
        position: absolute;
        left: -154px;
        @keyframes pan-rotate {
          0% {
            transform: rotate(0);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      }
      .point {
        width: 586px;
        height: 481px;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }
    }
    .clock {
      width: 1000px;
      height: 1000px;
      position: absolute;
      left: -220px;
      ul {
        width: 100%;
        height: 100%;
        position: relative;
        transition: transform 0.5s linear;
        transform-origin: center;
  
        li {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid #ded0c3;
          box-sizing: border-box;
          position: absolute;
          top: 440px;
          transform-origin: 500px;
          cursor: pointer;
  
          .content {
            width: 100%;
            height: 100%;
            transition: transform 0.5s linear;
            position: relative;
  
            &::before {
              content: attr(data-text);
              width: 100%;
              height: 100%;
              position: absolute;
              top: 0;
              left: 0;
              font-size: 3rem;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: rgba(99, 99, 99, 0.5);
              color: #fff;
            }
  
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }
      }
    }
  }
  </style>