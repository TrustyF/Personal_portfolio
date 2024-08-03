<script setup>
import NavBar from "@/components/nav/NavBar.vue";
import BottomFooter from "@/components/generic/BottomFooter.vue";
</script>

<template>
  <nav-bar/>
  <div style="height: 20px"/>
  <RouterView/>
  <bottom-footer/>
</template>

<style scoped>
</style>
