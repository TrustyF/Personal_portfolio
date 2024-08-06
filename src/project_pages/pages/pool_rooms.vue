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

let proj_name = 'pool_rooms'

function get_image(path) {
  return `https://firebasestorage.googleapis.com/v0/b/vue-portfolio-7361b.appspot.com/o/${proj_name}%2F${path}?alt=media&token=34218f81-850f-42f4-bd7e-6c95e9eee724`
}

</script>

<template>
  <project-page-template :project_name="proj_name">
    <template #content>

      <div class="single_image">
        <img :src="get_image('4.jpg')" class="grid_image" alt="">
        <h5>Final render</h5>
      </div>

      <div class="single_image">
        <div style="display: grid;  grid-template-columns: repeat(3, 1fr);gap: 0">
          <img :src="get_image('Ref1.jpg')" class="grid_image" alt="">
          <img :src="get_image('ref2.jpg')" class="grid_image" alt="">
          <img :src="get_image('ref3.jpg')" class="grid_image" alt="">
        </div>
        <h5>Reference and inspiration. (<a href="https://www.instagram.com/jaredpike.art/">Jared pike</a>)</h5>
      </div>

      <div class="single_image">
        <div style="display: grid;  grid-template-columns: 1.5fr 1fr;gap: 0">
          <img :src="get_image('1.jpg')" class="grid_image" alt="" style="object-position: 80%">
          <img :src="get_image('Pool.jpg')" class="grid_image" alt="">
        </div>
        <h5>Early exploration in blender</h5>
      </div>

      <div class="vimeo_video">
        <vimeo-embed id="993726464" :vimeo="true"/>
        <h5 style="text-align: center;padding-top: 10px">Procedural setup demo</h5>
      </div>

      <div class="single_image">
        <div style="display: grid;  grid-template-columns: repeat(2, 1fr);gap: 0">
          <img :src="get_image('2.jpg')" class="grid_image" alt="">
          <img :src="get_image('3.jpg')" class="grid_image" alt="">
        </div>
        <h5>Refining lighting and shaders</h5>
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
  /*outline: 1px solid rebeccapurple;*/
  width: 100%;
  height: 100%;
  max-height: 80vh;
  object-fit: cover
}
</style>