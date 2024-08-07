<script setup>
import {inject, onMounted, watch, ref, computed, onUnmounted} from "vue";
import NavArrow from "@/components/nav/NavArrow.vue";

let back_arrow_vis = ref(false)

function handle_back_arrow() {
  let content_cont = document.getElementById('nav_bar')
  let bound = content_cont.getBoundingClientRect()
  back_arrow_vis.value = bound.top < -100;
}
function scrollTop(){
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

onMounted(()=>{
  addEventListener('scroll', handle_back_arrow)
})
onUnmounted(() => {
  removeEventListener('scroll', handle_back_arrow)
})

</script>

<template>
  <div :class="`return_arrow_container ${back_arrow_vis ? 'visible' : ''}`" @click="scrollTop">
    <nav-arrow :up="true"></nav-arrow>
  </div>
</template>

<style scoped>
.return_arrow_container {
  z-index: 9999;
  position: fixed;
  left: 20px;
  top: 30px;

  transition: 200ms ease-in-out;
  opacity: 0;
  visibility: hidden;
  transform: translate(0,-10px);
}
.visible {
  visibility: visible;
  opacity: 1;
  transform: translate(0,0);
}

</style>