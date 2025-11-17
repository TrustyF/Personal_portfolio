<script setup>
import ProjectPageTemplate from "@/components/project/ProjectPageTemplate.vue";
import YoutubeEmbed from "@/components/generic/YoutubeEmbed.vue";

let props = defineProps({
  test: {
    type: String,
    default: null,
  },
});

let proj_name = 'strange_tails'
const img_path = `/assets/project_images/${proj_name}/`


</script>

<template>
  <project-page-template :project_name="proj_name" :image_loader="false" :poster="img_path + 'poster.webp'">

    <template #content>

      <div class="vimeo_video">
        <youtube-embed id="NU44gS07Agw" muted="0"/>
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