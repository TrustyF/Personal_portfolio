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

let proj_name = 'zweite_welle'

function get_image(path) {
  return `https://firebasestorage.googleapis.com/v0/b/vue-portfolio-7361b.appspot.com/o/zweite_welle%2F${path}?alt=media&token=34218f81-850f-42f4-bd7e-6c95e9eee724`
}

</script>

<template>
  <project-page-template :project_name="proj_name" :image_loader="false" :poster="get_image('poster.webp')">
    <template #content>

      <!--      <movie-header-->
      <!--          video_id="YT9cLrch4HQ"-->
      <!--          title="Die zweite Welle"-->
      <!--          desc="2023"-->
      <!--          :poster="get_image('poster.webp')"-->
      <!--      />-->

      <!--      <div class="vimeo_video">-->
      <!--        <vimeo-embed id="ZSgBlWSlu_8"/>-->
      <!--        <h5 style="text-align: center;padding-top: 10px">Novembre trailer</h5>-->
      <!--      </div>-->

      <div class="vimeo_video">
        <vimeo-embed id="901912656?h=c5afcf9527" :vimeo="true"/>
        <h5 style="text-align: center;padding-top: 10px">Responsible for wave's initial lookdev, water debris, mist, spray and secondary splashes.</h5>
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