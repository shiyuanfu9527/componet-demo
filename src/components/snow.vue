<template>
      <!-- 添加下雪效果的元素 -->
      <div class="snowWrapper">
      <div class="snow" v-for="(index) in 10" :key="index"></div>
    </div>
  </template>
  
  <style lang = 'scss' >
  /* 下雪效果的样式 */
    /* 雪花落下的动画 */
  @function boxShadow($n){
    $value: #{random(2000)}px #{random(2000px)}px rgba(255,255,255,random(10)/10);
    @for $i from 1 through $n{
      $value: #{$value}, #{random(2000)}px #{random(2000)}px rgba(255,255,255,random(10)/10);
    }
    @return $value 
  };
  :root{
    background-color: #000;
  }
  .snowWrapper{
    height: 100%;
    width: 100%;
    background-color: #fff;
  }
  .snow {
    // 设置位置
    position: absolute;
    color: #fff;
    &:after{
     text-shadow: boxShadow(150) ; 
     content: '❉';
    }
  }
  @for $i from 1 through 10 {
    .snow:nth-child(#{$i}){
      left: #{random(30)}vw;
      font-size: #{(random(15))};
      color: rgba(255,255,255,random());
      animation: falldown #{random(5)+85}s #{$i * -3}s infinite both ;
      &:after{
        content: '❉';
        text-shadow: boxShadow(random(150));
      }
    }
  }
  @keyframes falldown {
    0%{
      transform: translate3d(0,-100vh,0);
    }
    100%{
      transform: translate3d(0,100%,0);
    }
  }
  
  </style>