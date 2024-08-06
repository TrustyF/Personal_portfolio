<script setup>
import {inject, onMounted, watch, computed} from "vue";
import ProjectPageTemplate from "@/components/project/ProjectPageTemplate.vue";
import SoftwareTag from "@/components/project/SoftwareTag.vue";
import VimeoEmbed from "@/components/generic/VimeoEmbed.vue";
import MovieHeader from "@/components/generic/MovieHeader.vue";

let props = defineProps({
  test: {
    type: String,
    default: null,
  },
});

let proj_name = 'theodosia'

function get_image(path) {
  return `https://firebasestorage.googleapis.com/v0/b/vue-portfolio-7361b.appspot.com/o/${proj_name}%2F${path}?alt=media&token=34218f81-850f-42f4-bd7e-6c95e9eee724`
}

</script>

<template>
  <project-page-template :project_name="proj_name" :image_loader="false" :poster="get_image('poster.webp')">
    <template #content>

      <div class="vimeo_video">
        <vimeo-embed id="N25s_g0-sWY"/>
        <h5 style="text-align: center;padding-top: 10px">Final comp</h5>
      </div>

      <div class="vimeo_video">
        <vimeo-embed id="0d0tyCBJvNc"/>
        <h5 style="text-align: center;padding-top: 10px">Glass fx breakdown</h5>
      </div>

      <div class="vimeo_video">
        <vimeo-embed id="GQQpE_n2K7A"/>
        <h5 style="text-align: center;padding-top: 10px">Smoke snake lookdev</h5>
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