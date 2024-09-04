<script setup>
import NavBar from "@/components/nav/NavBar.vue";
import BottomFooter from "@/components/generic/BottomFooter.vue";
import {onMounted, provide, ref} from "vue";
import {useRoute} from "vue-router";
import {log_event} from "@/scripts/log_events.js";

let route = useRoute()
let is_mobile = ref(0)
function check_mobile() {
  let in_width = window.innerWidth;
  if (in_width > 1000) is_mobile.value = 0
  if (in_width <= 1000) is_mobile.value = 1
  if (in_width <= 660) is_mobile.value = 2
}

async function log_geo(){
  let key = import.meta.env.VITE_GEO_API
  let url = `https://api.ipgeolocation.io/ipgeo?apiKey=${key}`;
  let geo = await fetch(url)
      .then(resp => resp.json())
      .then(json => {
        return {
          country_name:json['country_name'],
          state_prov:json['state_prov'],
          city:json['city'],
          zipcode:json['zipcode'],
          isp:json['isp'],
          country_code2:json['country_code2'],
          country_code3:json['country_code3'],
          country_flag:json['country_flag'],
          country_emoji:json['country_emoji'],
        }
      })
  log_event('geolocation','geo',JSON.stringify(geo))
}

provide('is_mobile', is_mobile)

function track_leave() {
  log_event('page_leave', 'nav', `from:${route.name}`)
}

onMounted(() => {
  check_mobile()
  log_geo()
  addEventListener('resize', check_mobile)
  window.addEventListener('beforeunload', track_leave)
})

</script>
<template>
  <nav-bar/>
  <router-view/>
  <bottom-footer/>
</template>

<style scoped>
</style>
