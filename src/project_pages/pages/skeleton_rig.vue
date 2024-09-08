<script setup>
import ProjectPageTemplate from "@/components/project/ProjectPageTemplate.vue";
import YoutubeEmbed from "@/components/generic/YoutubeEmbed.vue";

let props = defineProps({
  test: {
    type: String,
    default: null,
  },
});

let proj_name = 'skeleton_rig'

function get_image(path) {
  return `https://firebasestorage.googleapis.com/v0/b/vue-portfolio-7361b.appspot.com/o/${proj_name}%2F${path}?alt=media&token=34218f81-850f-42f4-bd7e-6c95e9eee724`
}

</script>

<template>
  <project-page-template :project_name="proj_name" :image_loader="true">
    <template #content>

      <div class="single_image">
        <img :src="get_image('arthur-sirjacobs-double.jpeg')" class="grid_image" alt="">
        <h5>Presentation renders in Blender</h5>
      </div>

      <div class="vimeo_video">
        <youtube-embed id="8s3T5ie6ICY"/>
        <h5 style="text-align: center;padding-top: 10px">Rig + script demo</h5>
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