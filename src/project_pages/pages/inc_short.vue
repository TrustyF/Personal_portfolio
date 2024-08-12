<script setup>
import {inject, onMounted, watch, computed} from "vue";
import ProjectPageTemplate from "@/components/project/ProjectPageTemplate.vue";
import VimeoEmbed from "@/components/generic/VimeoEmbed.vue";

let props = defineProps({
  test: {
    type: String,
    default: null,
  },
});

let proj_name = 'inc_short'

function get_image(path) {
  return `https://firebasestorage.googleapis.com/v0/b/vue-portfolio-7361b.appspot.com/o/${proj_name}%2F${path}?alt=media&token=34218f81-850f-42f4-bd7e-6c95e9eee724`
}

</script>

<template>
  <project-page-template :project_name="proj_name" :image_loader="true">

    <template #content>

      <div class="vimeo_video">
        <vimeo-embed id="dUM3kpy1g68" muted="0"/>
        <h5 style="text-align: center;padding-top: 10px">Trailer. NDA pending full release</h5>
      </div>

      <div class="single_image">
        <div style="display: grid;  grid-template-columns: repeat(1, 1fr);gap: 0">
          <img :src="get_image('still_0.webp')" class="grid_image" alt="">
          <img :src="get_image('still_1.webp')" class="grid_image" alt="">
        </div>
        <h5>Final shot stills. Responsible for simulating, rendering and comping the wall hole</h5>
      </div>

    </template>

  </project-page-template>
</template>

<style scoped>
.single_image {
  /*outline: 1px solid red;*/
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 10px;
}

.vimeo_video {
  justify-content: center;
  width: 100%;
}

.grid_image {
  width: 100%;
  height: 100%;
  max-height: 80vh;
  object-fit: cover
}
</style>