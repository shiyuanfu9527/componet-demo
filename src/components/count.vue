<script setup>
import { useCounterStore } from '../stores/counter';
const counter = useCounterStore()
const clickHandle=()=>{
    counter.increment()
}
</script>

<template>
    <h1>
        <button @click="clickHandle">count is {{ counter.count }}</button>
    </h1>
</template>