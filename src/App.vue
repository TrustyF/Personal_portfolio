<script setup>
import NavBar from "@/components/nav/NavBar.vue";
import BottomFooter from "@/components/generic/BottomFooter.vue";
</script>

<template>
  <nav-bar/>
  <div style="height: 20px"/>
  <RouterView v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"/>
    </transition>
  </RouterView>
  <bottom-footer/>
</template>

<style scoped>
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-active,.fade-leave-active {
  transition: opacity 100ms ease-in-out;
}
</style>
