<script setup>
// import HelloWorld from './components/HelloWorld.vue'

import { ref } from 'vue';
import routes from './route/routes'
let routerli = ref(null)
let mask = ref(null)
const routerbtnclick=((e)=>{
  routerli.value.style.opacity = 1
  routerli.value.style.right = 5+'%'
  routerli.value.style.display = 'block'
  mask.value.style.display = 'block'
})

  const routerclose=((e)=>{
  routerli.value.style.opacity = 0
  routerli.value.style.right = 0+'%'
  mask.value.style.display = 'none'
})
</script>

<template>
  <div class="toplayout">
    <div class="title">
       个人的各种demo
    </div>
    <div class="routerbtn"  >
      <svg @click="routerbtnclick" t="1684911163460" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2619" width="16" height="16"><path d="M116.258455 465.03382h232.51505A116.257525 116.257525 0 0 0 465.03103 348.776295v-232.51505A116.257525 116.257525 0 0 0 348.773505 0.00372h-232.51505A116.257525 116.257525 0 0 0 0.00093 116.261245v232.51505A116.257525 116.257525 0 0 0 116.258455 465.03382zM93.00695 116.261245a23.251505 23.251505 0 0 1 23.251505-23.251505h232.51505a23.251505 23.251505 0 0 1 23.251505 23.251505v232.51505a23.251505 23.251505 0 0 1-23.251505 23.251505h-232.51505a23.251505 23.251505 0 0 1-23.251505-23.251505zM907.739685 0.00372h-232.51505A116.257525 116.257525 0 0 0 558.03705 116.726275v232.51505a116.722555 116.722555 0 0 0 116.257525 116.257525h232.51505a116.722555 116.722555 0 0 0 116.257525-116.257525v-232.51505A116.722555 116.722555 0 0 0 907.739685 0.00372z m23.251505 348.772575a23.716535 23.716535 0 0 1-23.251505 23.251505h-232.51505a23.251505 23.251505 0 0 1-23.251505-23.251505v-232.51505a23.251505 23.251505 0 0 1 23.251505-23.251505h232.51505a23.251505 23.251505 0 0 1 23.251505 23.251505zM907.739685 558.03984h-232.51505a116.257525 116.257525 0 0 0-116.257525 116.257525v232.51505a116.722555 116.722555 0 0 0 116.257525 116.257525h232.51505a116.722555 116.722555 0 0 0 116.257525-116.257525v-232.51505a116.722555 116.722555 0 0 0-116.257525-116.257525z m23.251505 348.772575a23.716535 23.716535 0 0 1-23.251505 23.251505h-232.51505a23.251505 23.251505 0 0 1-23.251505-23.251505v-232.51505a23.251505 23.251505 0 0 1 23.251505-23.251505h232.51505a23.251505 23.251505 0 0 1 23.251505 23.251505zM348.773505 558.03984h-232.51505A116.722555 116.722555 0 0 0 0.00093 675.227425v232.51505A116.722555 116.722555 0 0 0 116.258455 1023.06994h232.51505a116.722555 116.722555 0 0 0 116.257525-116.257525v-232.51505A116.257525 116.257525 0 0 0 348.773505 558.03984z m23.251505 348.772575a23.251505 23.251505 0 0 1-23.251505 23.251505h-232.51505a23.716535 23.716535 0 0 1-23.251505-23.251505v-232.51505a23.251505 23.251505 0 0 1 23.251505-23.251505h232.51505a23.251505 23.251505 0 0 1 23.251505 23.251505z" fill="#221E1F" p-id="2620"></path></svg>
      <div class="router" ref="routerli" :style="{display:'none'}">
        <div class="router-header" @click="routerclose">
          <span>导航</span>
          <div class="close" >X</div>
        </div> 
        <div class="router-context" >
          <router-link class="navtor" v-for="(item,index) in routes " :to=item.path :key="index">{{item.cname}}</router-link>
        </div> 
  </div>
      </div>
  </div>
  <div class="flexWrapper">
  <div class="view"><router-view></router-view></div>
</div>
<div class="mask" ref="mask" :style="{display:'none'}"></div>
</template>

<style scoped lang="less">
.routerbtn{
  cursor: pointer;
  position: relative;
}
.mask{
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .4);
}
.toplayout{
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 46px;
  box-shadow: 0 3px 7px #cecece;
  line-height: 46px;
  padding: 0 20px;
  box-sizing: border-box;
}
.flexWrapper{
  display: flex;
  width: 100%;
}
.router{
  opacity: 0;
  position: absolute;
  min-width: 300px;
  max-height: 260px;
  top: 10%;
  right: 0%;
  position: fixed;
  background-color: white;
  overflow-y: scroll;
  transition: all 1.5s ease;
  z-index: 2015;
  border-radius: 9px;
  &::-webkit-scrollbar{
    display: none;
  }
  .router-header{
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
    background-color: white;
    padding: 10px;
  }
  a{
    text-decoration: none;
  }
}

.view{
  margin: auto;
}
.navtor {
  color: black;
  display: block;
  width: 100%;
  padding: 10px;
  background-color: white;
  &:hover{
    background-color: #f5f7fa;
  }
}
.router-link-active{
  background-color: #f5f7fa;;
}

</style>
