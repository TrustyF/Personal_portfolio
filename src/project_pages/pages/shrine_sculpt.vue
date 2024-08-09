<script setup>
import {inject, onMounted, watch, computed} from "vue";
import ProjectPageTemplate from "@/components/project/ProjectPageTemplate.vue";
import SoftwareTag from "@/components/project/SoftwareTag.vue";
import VimeoEmbed from "@/components/generic/VimeoEmbed.vue";

let props = defineProps({
  test: {
    type: String,
    default: null,
  },
});

let proj_name = 'shrine_sculpt'

function get_image(path) {
  return `https://firebasestorage.googleapis.com/v0/b/vue-portfolio-7361b.appspot.com/o/${proj_name}%2F${path}?alt=media&token=34218f81-850f-42f4-bd7e-6c95e9eee724`
}

</script>

<template>
  <project-page-template :project_name="proj_name" :image_loader="false">
    <template #content>


      <div class="sketchfab-embed-wrapper">
        <iframe class="sketch_iframe" title="Little Shrine - Arthur Sirjacobs" frameborder="0" allowfullscreen width="100%"
                src="https://sketchfab.com/models/a5589d24c8454dee874cba6528cdd8fb/embed?ui_theme=dark"></iframe>
      </div>


      <div class="single_image">
        <img :src="get_image('arthur-sirjacobs-maeve-broadbin-fishshop.jpeg')" class="grid_image" alt="">
        <h5>based on "Little Shrine" by <a href="https://www.artstation.com/drawmaevedraw" target="_blank">Maeve B</a>
        </h5>
      </div>

      <!--      <div class="vimeo_video">-->
      <!--        <vimeo-embed id="AloSuIt0PYc"/>-->
      <!--        <h5 style="text-align: center;padding-top: 10px">Script demo</h5>-->
      <!--      </div>-->

      <!--      <div class="vimeo_video">-->
      <!--        <vimeo-embed id="1DCenLr7GEM"/>-->
      <!--        <h5 style="text-align: center;padding-top: 10px">Film channel intro</h5>-->
      <!--      </div>-->


    </template>

  </project-page-template>
</template>

<style scoped>
.sketchfab-embed-wrapper {
  /*outline: 1px solid red;*/
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  max-height: 80vh;
}

.sketch_iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

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