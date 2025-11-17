<script setup>
import ProjectPageTemplate from "@/components/project/ProjectPageTemplate.vue";
import YoutubeEmbed from "@/components/generic/YoutubeEmbed.vue";

let props = defineProps({
  test: {
    type: String,
    default: null,
  },
});

let proj_name = 'inc_short'
const img_path = `/assets/project_images/${proj_name}/`

</script>

<template>
  <project-page-template :project_name="proj_name" :image_loader="true">

    <template #content>

      <div class="vimeo_video">
        <youtube-embed id="dUM3kpy1g68" muted="0"/>
        <h5 style="text-align: center;padding-top: 10px">Trailer. NDA pending full release</h5>
      </div>

      <div class="single_image">
        <div style="display: grid;  grid-template-columns: repeat(1, 1fr);gap: 0">
          <img :src="img_path +'still_0.webp'" class="grid_image" alt="">
          <img :src="img_path +'still_1.webp'" class="grid_image" alt="">
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