<script setup>
import {inject, onMounted, watch, ref, computed, onBeforeMount, onUnmounted} from "vue";
import {log_event} from "@/scripts/log_events.js";

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
});

const player = ref(null)
const yt_video_list = inject('yt_video_list')

function add_to_list(){
  yt_video_list.value.push(`player-${props.id}`)
}

onMounted(() => {
  // connect_player()
  add_to_list()
})

</script>

<template>
  <div class="yt_embed">
    <iframe :id="`player-${id}`" width="640" height="390"
            :src="`https://www.youtube.com/embed/${id}?enablejsapi=1&origin=http://localhost:5173`"
            title="YouTube video player" frameborder="0"
            allowfullscreen style="width: 100%;height: 100%"></iframe>
  </div>
</template>

<style scoped>
.yt_embed {
  width: 100%;
  overflow: hidden;
  aspect-ratio: 16/9;
}
</style>