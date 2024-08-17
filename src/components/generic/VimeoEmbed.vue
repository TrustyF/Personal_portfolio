<script setup>
import {inject, onMounted, watch, ref, computed, onBeforeMount, onUnmounted} from "vue";
import {analytics_track} from "@/scripts/AnalyticsTracker.js";

let props = defineProps({
  id: {
    type: String,
    default: null,
  },
  autoplay: {
    type: Number,
    default: 0,
  },
  muted: {
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

function log_click() {
  setTimeout(() => analytics_track('iframe_use', `id: ${props.id}`), 10);
}

let mouse_pos = ref([0, 0])

function calc_mouse_pos(event) {
  mouse_pos.value = [event.clientX, event.clientY]
}

function iframe_mouse_event() {

  let elem = window.document.getElementById(props.id)
  const bounds = elem.getBoundingClientRect();
  let mouse = mouse_pos.value

  if (
      mouse[1] >= bounds.top &&
      mouse[1] <= bounds.bottom
  ) {
    log_click()
  }
}

onMounted(() => {
  window.addEventListener('mousemove', calc_mouse_pos);
  window.addEventListener('blur', iframe_mouse_event);
})
onUnmounted(() => {
  window.removeEventListener('mousemove', calc_mouse_pos)
  window.removeEventListener('blur', iframe_mouse_event)
})

</script>

<template>
  <div v-if="!vimeo" :id="id" class="yt_embed">
    <iframe :src="`https://www.youtube.com/embed/${id}?controls=${autoplay?0:1}&color=white&modestbranding=1
    &rel=0&playsinline=1&enablejsapi=1&showinfo=0&loop=1&mute=${muted}&autoplay=${autoplay}${autoplay ? '&playlist='+id : ''}`"
            title="YouTube video player" frameborder="0" loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="width: 100%;height: 100%"></iframe>
  </div>

  <div v-if="vimeo" :id="id" style="padding:56.25% 0 0 0;position:relative;">
    <iframe :src="`https://player.vimeo.com/video/${id}?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp
    ;autopause=0&amp;mute=${muted};player_id=0&amp;app_id=58479`"
            style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" loading="lazy"
            allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
  </div>

</template>

<style scoped>
.yt_embed {
  width: 100%;
  overflow: hidden;
  aspect-ratio: 16/9;
}
</style>