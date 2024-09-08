<script setup>
import ProjectPageTemplate from "@/components/project/ProjectPageTemplate.vue";
import YoutubeEmbed from "@/components/generic/YoutubeEmbed.vue";

let props = defineProps({
  test: {
    type: String,
    default: null,
  },
});

let proj_name = 'invis_sphere'

function get_image(path) {
  return `https://firebasestorage.googleapis.com/v0/b/vue-portfolio-7361b.appspot.com/o/${proj_name}%2F${path}?alt=media&token=34218f81-850f-42f4-bd7e-6c95e9eee724`
}

</script>

<template>
  <project-page-template :project_name="proj_name" :image_loader="false">

    <template #content>

      <div class="vimeo_video">
        <youtube-embed id="Qn-TCYAb7ws" :autoplay="1"/>
        <h5 style="text-align: center;padding-top: 10px">Smoke</h5>
      </div>

      <div class="vimeo_video">
        <youtube-embed id="FoX7hEGPXM4" :autoplay="1"/>
        <h5 style="text-align: center;padding-top: 10px">Fluid + RDB interactions</h5>
      </div>

      <div class="vimeo_video">
        <youtube-embed id="eQVpVLaN1y8" :autoplay="1"/>
        <h5 style="text-align: center;padding-top: 10px">Wire deform</h5>
      </div>

      <div class="vimeo_video">
        <youtube-embed id="ODL1GItVryg" :autoplay="1"/>
        <h5 style="text-align: center;padding-top: 10px">Chain wires</h5>
      </div>

      <div class="vimeo_video">
        <youtube-embed id="ng3Afg16xGI" :autoplay="1"/>
        <h5 style="text-align: center;padding-top: 10px">Various particle interactions</h5>
      </div>

      <div class="vimeo_video">
        <youtube-embed id="RJA0a0ArD0E" :autoplay="1"/>
        <h5 style="text-align: center;padding-top: 10px">Water interaction</h5>
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