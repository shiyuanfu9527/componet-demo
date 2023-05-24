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
<style>
button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color:#f9f9f9;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
h1 {
  font-size: 3.2em;
  line-height: 1.1;
}
</style>