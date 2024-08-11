<script setup>
import {inject, onMounted, watch, ref, computed, onUnmounted} from "vue";
import arrow from "/src/assets/icons/arrow-left-circle-fill.svg"
import NavArrow from "@/components/nav/NavArrow.vue";
import router from "@/router/index.js";
import {analytics_track} from "@/scripts/AnalyticsTracker.js";

let back_arrow_vis = ref(false)

function handle_back_arrow() {
  let content_cont = document.getElementById('nav_bar')
  let bound = content_cont.getBoundingClientRect()
  back_arrow_vis.value = bound.top < -100;
}

function handle_click(){
  analytics_track('nav_return_arrow','returning with arrow')
  router.go(-1)
}

onMounted(()=>{
  addEventListener('scroll', handle_back_arrow)
})
onUnmounted(() => {
  removeEventListener('scroll', handle_back_arrow)
})

</script>

<template>
  <div class="abs_box">
    <div :class="`return_arrow_container ${back_arrow_vis ? 'visible' : ''}`" @click="handle_click">
      <nav-arrow></nav-arrow>
    </div>
  </div>
</template>

<style scoped>
.abs_box {
  position: absolute;
  left: -100px;
  /*bottom: 50%;*/
}
.return_arrow_container {
  z-index: 9999;
  position: fixed;
  /*left: 30px;*/
  top: 30px;

  transition: 200ms ease-in-out;
  opacity: 0;
  visibility: hidden;
  transform: translate(-10px);
}
.visible {
  visibility: visible;
  opacity: 1;
  transform: translate(0);
}

</style>