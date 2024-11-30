<template>
    <div>
        <h1>Test Breed Page</h1>
        <p>Breed: {{ $route.params.breed }}</p>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
console.log('Test breed page loaded')
onMounted(() => {
    console.log('Breed page component mounted:', $route.params.breed)
})
</script>