<script setup>
import ProjectPageTemplate from "@/components/project/ProjectPageTemplate.vue";
import VimeoEmbed from "@/components/generic/VimeoEmbed.vue";

let props = defineProps({
  test: {
    type: String,
    default: null,
  },
});

let proj_name = 'pool_rooms'
const img_path = `/assets/project_images/${proj_name}/`

</script>

<template>
  <project-page-template :project_name="proj_name" :image_loader="true">
    <template #content>

      <div class="single_image">
        <img :src="img_path +'4.webp'" class="grid_image" alt="">
        <h5>Final render</h5>
      </div>

      <div class="single_image">
        <div style="display: grid;  grid-template-columns: repeat(3, 1fr);gap: 0">
          <img :src="img_path +'Ref1.webp'" class="grid_image" loading="lazy" decoding="async" alt="">
          <img :src="img_path +'ref2.webp'" class="grid_image" loading="lazy" decoding="async" alt="">
          <img :src="img_path +'ref3.webp'" class="grid_image" loading="lazy" decoding="async" alt="">
        </div>
        <h5>Reference and inspiration. (<a href="https://www.instagram.com/jaredpike.art/">Jared pike</a>)</h5>
      </div>

      <div class="single_image">
        <div style="display: grid;  grid-template-columns: 1.5fr 1fr;gap: 0">
          <img :src="img_path +'1.webp'" class="grid_image" loading="lazy" decoding="async" alt="" style="object-position: 80%">
          <img :src="img_path +'Pool.webp'" class="grid_image" loading="lazy" decoding="async" alt="">
        </div>
        <h5>Early exploration in blender</h5>
      </div>

      <div class="vimeo_video">
        <vimeo-embed id="993726464" :vimeo="true"/>
        <h5 style="text-align: center;padding-top: 10px">Procedural setup demo</h5>
      </div>

      <div class="single_image">
        <div style="display: grid;  grid-template-columns: repeat(2, 1fr);gap: 0">
          <img :src="img_path +'2.webp'" class="grid_image" loading="lazy" decoding="async" alt="">
          <img :src="img_path +'3.webp'" class="grid_image" loading="lazy" decoding="async" alt="">
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