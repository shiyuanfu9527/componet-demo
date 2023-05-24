<script setup>
import { onBeforeMount, onMounted, reactive} from 'vue';
import NumScoller from '../components/NumScoller.vue';
const nums = reactive([3, 8, 1, 5, 2, 6, 9, 4, 7, 0]) 
let  numschange = null 
onMounted(()=>{
   numschange =  setInterval(()=>{
        nums.forEach((item,index)=>{
            if(item<9){
                nums[index]++
            }else{
                nums[index]=0
            }
        })
    },3000)
    // new Promise((res,rej)=>{
    //     res()
    // }).then(
    //     numschange = setInterval(()=>{
    //         nums.forEach((item,index)=>{
    //         if(item<9){
    //             nums[index]++
    //         }else{
    //             nums[index]=0
    //         }
    //     })
    //     },3000)
    // )
})
onBeforeMount(()=>{
    clearInterval(numschange)
})
</script>
<template>
    <div class="NumFlex">
        <NumScoller v-for="(item,index) in nums" :number="item" :key="index" ></NumScoller>
    </div>
</template>
<style lang="scss" >
.NumFlex{
    display: flex;
    margin: 50% 0;
}
</style>