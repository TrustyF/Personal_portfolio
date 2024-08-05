<script setup>
import {inject, onMounted, watch, ref, computed, onBeforeMount} from "vue";
import {usePlayer} from '@vue-youtube/core';

let props = defineProps({
  id: {
    type: String,
    default: null,
  },
  autoplay: {
    type: Number,
    default: 0,
  },
  controls: {
    type: Number,
    default: 0,
  },
});

const youtube = ref();

const {instance} = usePlayer(props.id, youtube, {
  cookie: false,
  playerVars: {
    autoplay: props.autoplay,
    mute: props.autoplay,
    controls: props.controls,
    color: 'white',
    modestbranding: 0,
    rel: 0,
    playsinline: 1,
    enablejsapi: 1,
  },
});


</script>

<template>
  <div ref="youtube" style="width: 100%;aspect-ratio: 16/9"/>
<!--  <div style="background-color: rgba(255,0,0,0.1);width: 100%;aspect-ratio: 16/9"/>-->
</template>

<style scoped>
</style>