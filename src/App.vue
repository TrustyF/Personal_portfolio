<script setup>
import NavBar from "@/components/nav/NavBar.vue";
import BottomFooter from "@/components/generic/BottomFooter.vue";
import {onMounted, provide, ref, watch} from "vue";
import {useRoute} from "vue-router";
import {log_event, ping_user_leave} from "@/scripts/log_events.js";

let route = useRoute()
let is_mobile = ref(0)
let yt_video_list = ref([])

function check_mobile() {
  let in_width = window.innerWidth;
  if (in_width > 1000) is_mobile.value = 0
  if (in_width <= 1000) is_mobile.value = 1
  if (in_width <= 660) is_mobile.value = 2
}

provide('is_mobile', is_mobile)
provide('yt_video_list', yt_video_list)

onMounted(() => {
  check_mobile()
  addEventListener('resize', check_mobile)
  ping_user_leave()
  setInterval(() => ping_user_leave(), 5000)
})

</script>
<template>
  <nav-bar/>
  <router-view/>
  <bottom-footer/>
</template>

<style scoped>
</style>
