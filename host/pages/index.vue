<script setup>
// import { defineAsyncComponent } from "vue";
// const Header = defineAsyncComponent(() => import("remote/Header"));
import Header from 'remote/Header'
</script>

<template>
    <div class="container">
      <Header />
      <div>Name: LOCAL</div>
      <div>Framework: Vue 3 - Nuxt 3</div>
      <div>:Vite</div>
  </div>
</template>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}

.container {
  font-size: 3rem;
  margin: auto;
  max-width: 800px;
  margin-top: 20px;
}
</style>