<script setup>
import NavBar from "@/components/nav/NavBar.vue";
import BottomFooter from "@/components/generic/BottomFooter.vue";
import {onMounted, provide, ref} from "vue";

let is_mobile = ref(0)

function check_mobile() {
  let in_width = window.innerWidth;
  if (in_width > 1000) is_mobile.value = 0
  if (in_width <= 1000) is_mobile.value = 1
  if (in_width <= 660) is_mobile.value = 2
}
provide('is_mobile', is_mobile)

onMounted(() => {
  check_mobile()
  addEventListener('resize', check_mobile)
})

</script>
<template>
  <nav-bar/>
  <router-view/>
  <bottom-footer/>
</template>

<style scoped>
</style>
