<script setup>
import ProjectPageTemplate from "@/components/project/ProjectPageTemplate.vue";
import YoutubeEmbed from "@/components/generic/YoutubeEmbed.vue";

let props = defineProps({
  test: {
    type: String,
    default: null,
  },
});

let proj_name = 'novembre'
const img_path = `/assets/project_images/${proj_name}/`


</script>

<template>
  <project-page-template :project_name="proj_name" :image_loader="false" :poster=" img_path + 'poster.webp'">
    <template #content>

      <div class="vimeo_video">
        <youtube-embed id="3C6lr_KucyY"/>
        <h5 style="text-align: center;padding-top: 10px">Computer and phone UI</h5>
      </div>

      <div class="vimeo_video">
        <youtube-embed id="VB76KjtYdaM"/>
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