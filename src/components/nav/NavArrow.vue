<script setup>
import {inject, onMounted, watch, ref, computed, onUnmounted} from "vue";
import arrow from "/src/assets/icons/arrow-left-circle-fill.svg"

let back_arrow_vis = ref(false)

function handle_back_arrow() {
  let content_cont = document.getElementById('nav_bar')
  let bound = content_cont.getBoundingClientRect()
  back_arrow_vis.value = bound.top < -100;
}

onMounted(()=>{
  addEventListener('scroll', handle_back_arrow)
})
onUnmounted(() => {
  removeEventListener('scroll', handle_back_arrow)
})

</script>

<template>
  <div class="arrow_container">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left"
         viewBox="0 0 16 16">
      <path fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
    </svg>
  </div>
</template>

<style scoped>
.arrow_container {
  cursor: pointer;
  background-color: #383838;
  width: 70px;
  height: 40px;
  padding: 10px;
  border-radius: 7px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: 100ms ease-in-out;
}
.bi-arrow-left {
  transition: 100ms ease-in-out;
}
.arrow_container:hover {
  background-color: #267359;
}
.arrow_container:hover .bi-arrow-left {
  transform: translate(-4px);
}
svg {
  width: 30px;
  height: 30px;
  object-fit: contain;
  fill: #00bd7e;
}
</style>