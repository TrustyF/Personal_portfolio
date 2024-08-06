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
    default: 1,
  },
  controls: {
    type: Number,
    default: 1,
  },
  vimeo: {
    type: Boolean,
    default: false,
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
  <!--  <div ref="youtube" style="width: 100%;aspect-ratio: 16/9"/>-->


  <div v-if="!vimeo" class="yt_embed">
    <iframe :src="`https://www.youtube.com/embed/${id}?controls=1&color=white&modestbranding=1
    &rel=0&playsinline=1&enablejsapi=1&showinfo=0&loop=0&mute=1`"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="width: 100%;height: 100%"></iframe>
  </div>

  <div v-if="vimeo" style="padding:56.25% 0 0 0;position:relative;">
    <iframe :src="`https://player.vimeo.com/video/${id}&title=1&byline=1&portrait=1`"
            style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
  </div>


  <!--  <div style="background-color: rgba(255,0,0,0.1);width: 100%;aspect-ratio: 16/9"/>-->
</template>

<style scoped>
.yt_embed {
  width: 100%;
  overflow: hidden;
  aspect-ratio: 16/9;
}
</style>