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

let proj_name = 'louis'

function get_image(path) {
  return `https://firebasestorage.googleapis.com/v0/b/vue-portfolio-7361b.appspot.com/o/${proj_name}%2F${path}?alt=media&token=34218f81-850f-42f4-bd7e-6c95e9eee724`
}

</script>

<template>
  <project-page-template :project_name="proj_name" :poster="get_image('poster.webp')" :image_loader="true">

    <template #content>

      <div class="vimeo_video">
        <vimeo-embed id="bkuLbLAn-JI"/>
        <h5 style="text-align: center;padding-top: 10px">Final product</h5>
      </div>

      <div class="vimeo_video">
        <vimeo-embed id="s-PYWy9eDjw"/>
        <h5 style="text-align: center;padding-top: 10px">Making of</h5>
      </div>

      <div class="single_image">
        <div style="display: grid;  grid-template-columns: repeat(2, 1fr);gap: 0">
          <img :src="get_image('exploration_0.webp')" class="grid_image" alt="">
          <img :src="get_image('exploration_1.webp')" class="grid_image" alt="">
          <img :src="get_image('exploration_2.webp')" class="grid_image" alt="">
          <img :src="get_image('exploration_3.webp')" class="grid_image" alt="">
        </div>
        <h5>Visual exploration</h5>
      </div>

      <div class="single_image">
        <div style="display: grid;  grid-template-columns: repeat(2, 1fr);gap: 0">
          <img :src="get_image('storyboard_2.webp')" class="grid_image" alt="">
          <img :src="get_image('storyboard_4.webp')" class="grid_image" alt="">
          <img :src="get_image('storyboard_5.webp')" class="grid_image" alt="">
          <img :src="get_image('storyboard_9.webp')" class="grid_image" alt="">
          <img :src="get_image('storyboard_7.webp')" class="grid_image" alt="">
          <img :src="get_image('storyboard_10.webp')" class="grid_image" alt="">
        </div>

        <h5>Storyboard exploration using blender grease pencil</h5>
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