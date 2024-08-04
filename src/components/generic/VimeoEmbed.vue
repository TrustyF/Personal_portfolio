<script setup>
import {inject, onMounted, watch, ref, computed, onBeforeMount} from "vue";
import {usePlayer} from '@vue-youtube/core';

let props = defineProps({
  id: {
    type: String,
    default: null,
  },
});

const youtube = ref();

const {instance, onStateChange} = usePlayer(props.id, youtube, {
  cookie: false,
  playerVars: {
    autoplay: 0,
    mute: 1,
    controls: 1,
    color: 'white',
    modestbranding: 0,
    rel: 0,
    playsinline: 1,
    width: 1000,
  },
});

onStateChange((event) => {
  if (instance.value.getCurrentTime() > 0.99) {
    instance.value.seekTo(0, true)
  }
})

</script>

<template>
  <div ref="youtube" style="width: 100%"/>
</template>

<style scoped>
</style>