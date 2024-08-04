<script setup>
import {inject, onMounted, watch, ref, computed, onBeforeMount} from "vue";

let props = defineProps({
  id: {
    type: String,
    default: null,
  },
});

onMounted(()=>{
  console.log('iframe loaded')
})
onBeforeMount(()=>{
  console.log('iframe before loaded')
})

</script>

<template>
  <div style="padding:56.25% 0 0 0;position:relative;">
    <!--    <iframe-->
    <!--        :src="`https://player.vimeo.com/video/${id}?autoplay=1&loop=1&title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`"-->
    <!--        frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write"-->
    <!--        style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>-->

    <iframe
        :src="`https://www.youtube.com/embed/${id}`"
        frameborder="0" allow="autoplay; fullscreen"
        style="position:absolute;top:0;left:0;width:100%;height:100%;"/>

  </div>
</template>

<style scoped>

</style>