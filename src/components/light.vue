<script>
</script>
<template>
    <div>
        <span class="bulb">💡</span>
    </div>
</template>
<style lang="less" scoped>
    @keyframes light {
    0% {
      transform: scale(0.8);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(0.8);
    }
  }
 .bulb {
  position: relative;
  font-size: 50px;
  display: inline-block;
  width: 50px;
  height: 50px;
  z-index: 2;
}
.bulb::before {
content: "";
position: absolute;
top: 0;
left: 0;
right: 0;
margin: 0 auto;
filter: blur(10px);
display: inline-block;
z-index: 1;
width: 50px;
height: 50px;
border-radius: 50%;
background: radial-gradient(#feffbe 25%, transparent 100%);
animation: light 5s ease infinite;
}
</style>