<template>
    <div id="water"></div>
</template>
<style>
    *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  width: 100vw;
  height: 100vh;
  /* display: flex;
  justify-content: center; */
  /* background-color: #c0d12b; */
}
#water{
  width: 300px;
  margin-top: 200px;
  height: 300px;
  border-radius: 42% 58% 77% 23% / 40% 31% 69% 60% ;
  box-shadow: inset 10px 20px 30px rgba(0,0,0,0.5),
  10px 10px 20px rgba(0,0,0,0.3),
  15px 20px 30px rgba(0,0,0,0.05),
  inset -10px -10px 15px rgba(255,255,255,0.8);
  animation: move 4s linear infinite alternate;
}
 #water::after{
  content: '';
  width: 20px;
  height: 20px;
  position: absolute;
  top: 240px;
  left: 48%;
  background-color: rgba(255,255,255,0.8);
  border-radius: 51% 49% 35% 65% / 40% 54% 46% 60% ;
  animation: move 5s linear infinite alternate;
}
#water::before{
  content: '';
  width: 10px;
  height: 10px;
  position: absolute;
  top: 265px;
  left: 47%;
  background-color: rgba(255,255,255,0.8);
  border-radius:51% 49% 35% 65% / 59% 54% 46% 41% ;
}

@keyframes move{
  25%{
    border-right: 32% 68% 34% 66% / 44% 18% 82% 56%   ;
  }
  50%{
border-radius:38% 62% 21% 79% / 56% 59% 41% 44%   ;
  }
  100%{
    border-radius: 42% 58% 66% 34% / 38% 82% 18% 62%   ;
  }
} 
</style>