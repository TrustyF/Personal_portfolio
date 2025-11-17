<script setup>
import ProjectPageTemplate from "@/components/project/ProjectPageTemplate.vue";
import YoutubeEmbed from "@/components/generic/YoutubeEmbed.vue";

let props = defineProps({
  test: {
    type: String,
    default: null,
  },
});

let proj_name = 'balloon_stairs'

</script>

<template>
  <project-page-template :project_name="proj_name" :image_loader="false">

    <template #content>

      <div class="vimeo_video">
        <youtube-embed id="XLsM9sLsQMw"/>
        <h5 style="text-align: center;padding-top: 10px">Final product</h5>
      </div>

      <div class="vimeo_video">
        <youtube-embed id="8LokiAdz2mw"/>
        <h5 style="text-align: center;padding-top: 10px">Houdini setup</h5>
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