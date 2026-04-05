<script setup>
import ProjectPageTemplate from "@/components/project/ProjectPageTemplate.vue";
import YoutubeEmbed from "@/components/generic/YoutubeEmbed.vue";

let props = defineProps({
  test: {
    type: String,
    default: null,
  },
});

let proj_name = 'hulk_truck'
const img_path = `/assets/project_images/${proj_name}/`


</script>

<template>
  <project-page-template :project_name="proj_name" :image_loader="false">

    <template #content>

      <div class="vimeo_video">
        <youtube-embed id="2tns-bejFww" muted="0"/>
      </div>

    </template>

  </project-page-template>
</template>

<style scoped>
.vimeo_video {
  justify-content: center;
  width: 100%;
}
</style>