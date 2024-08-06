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

let proj_name = 'novembre'

function get_image(path) {
  return `https://firebasestorage.googleapis.com/v0/b/vue-portfolio-7361b.appspot.com/o/${proj_name}%2F${path}?alt=media&token=34218f81-850f-42f4-bd7e-6c95e9eee724`
}

</script>

<template>
  <project-page-template :project_name="proj_name" :image_loader="false" :poster="get_image('poster.webp')">
    <template #content>

<!--      <movie-header-->
<!--          video_id="J6sEwKbMdHw"-->
<!--          title="Novembre"-->
<!--          desc="2022"-->
<!--          :poster="get_image('poster.webp')"-->
<!--      />-->

      <div class="vimeo_video">
        <vimeo-embed id="3C6lr_KucyY"/>
        <h5 style="text-align: center;padding-top: 10px">Final look for device UI</h5>
      </div>

      <div class="vimeo_video">
        <vimeo-embed id="VB76KjtYdaM"/>
        <h5 style="text-align: center;padding-top: 10px">UI setups demo. Assisted first 2 setups. Fully responsible for phone UI</h5>
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