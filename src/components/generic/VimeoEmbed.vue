<script setup>
import {onMounted} from "vue";
import {log_event} from "@/scripts/log_events.js";
import Player from "@vimeo/player"

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


function set_vimeo_functions() {
  let vimeo_player = new Player(document.getElementById('vimeo_player'))
  vimeo_player.on('play', async function () {
    let title = await vimeo_player.getVideoTitle()
    log_event('vimeo_play', 'vid', title)
  });
  vimeo_player.on('pause', async function () {
    let pos = await vimeo_player.getCurrentTime()
    log_event('vimeo_pause', 'vid', pos)
  });
}


onMounted(() => {
  if (props.vimeo) set_vimeo_functions()
})

</script>

<template>

  <div v-if="vimeo" :id="id" style="padding:56.25% 0 0 0;position:relative;">
    <iframe id="vimeo_player" :src="`https://player.vimeo.com/video/${id}?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp
    ;autopause=0&amp;mute=${muted};player_id=0&amp;app_id=58479`"
            style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" loading="lazy"
            allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
  </div>

</template>

<style scoped>
</style>