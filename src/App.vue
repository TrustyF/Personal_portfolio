<script setup>
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav-bar></nav-bar>
      <div style="height: 50px"></div>
    </div>
  </header>

  <RouterView/>
</template>

<style scoped>
</style>
