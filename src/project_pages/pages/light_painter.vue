<script setup>
import ProjectPageTemplate from "@/components/project/ProjectPageTemplate.vue";
import YoutubeEmbed from "@/components/generic/YoutubeEmbed.vue";

let props = defineProps({
  test: {
    type: String,
    default: null,
  },
});

let proj_name = 'light_painter'

</script>

<template>
  <project-page-template :project_name="proj_name" :image_loader="false">
    <template #content>

      <div class="vimeo_video">
        <youtube-embed id="AloSuIt0PYc"/>
        <h5 style="text-align: center;padding-top: 10px">Script demo</h5>
      </div>

<!--      <div class="vimeo_video">-->
<!--        <vimeo-embed id="1DCenLr7GEM"/>-->
<!--        <h5 style="text-align: center;padding-top: 10px">Film channel intro</h5>-->
<!--      </div>-->


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