<script setup>
import { ref } from 'vue';

    const count = ref(0)
</script>

<template>
    <h1>
        <button @click="count++">count is {{ count }}</button>
    </h1>
</template>