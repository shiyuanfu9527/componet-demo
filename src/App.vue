<script setup>
// import HelloWorld from './components/HelloWorld.vue'

import routes from './route/routes'
</script>

<template>
  <div class="flexWrapper">
  <div class="router">  
  <router-link class="navtor" v-for="(item,index) in routes " :to=item.path :key="index">{{item.cname}}</router-link>
  </div>
  <div class="view"><router-view></router-view></div>
</div>
</template>

<style scoped lang="less">
.flexWrapper{
  display: flex;
  width: 100vw;
}
.router{
  display: flex;
  min-width: 180px;
  max-height: 260px;
  top: 25%;
  flex-direction: column;
  align-items: center;
  position: fixed;
  background-color: white;
  padding: 20px;
  overflow-y: scroll;
  &::-webkit-scrollbar{
    display: none;
  }
}

.view{
  margin: auto;
}
.navtor {
  color: black;
  display: block;
  width: 100%;
  margin: 10px;
  background-color: white;
  &:hover{
    filter: drop-shadow(0 0 2rem rgb(0, 89, 255));
    transition: all 1s;
  }
}
.router-link-active{
  background-color: #1E80ff;
}

</style>
