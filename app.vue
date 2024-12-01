<template>
  <CustomHeader />
  <section class="w-full mx-auto bg-nordic-gray-light flex pt-12 md:pt-0 md:items-center bg-cover bg-right" :style="{
    maxWidth: '1600px',
    height: '32rem',
    backgroundImage: `url(${bgImage})`
  }">
  </section>
  <NuxtPage />
  <CustomFooter />
</template>

<script setup lang="ts">
import bgImage from '@/assets/img/bg.jpg'
import CustomFooter from './components/CustomFooter.vue';
import CustomHeader from './components/CustomHeader.vue';
</script>