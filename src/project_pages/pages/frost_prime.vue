<script setup>
import ProjectPageTemplate from "@/components/project/ProjectPageTemplate.vue";
import YoutubeEmbed from "@/components/generic/YoutubeEmbed.vue";

let props = defineProps({
  test: {
    type: String,
    default: null,
  },
});

let proj_name = 'frost_prime'

function get_image(path) {
  return `https://firebasestorage.googleapis.com/v0/b/vue-portfolio-7361b.appspot.com/o/${proj_name}%2F${path}?alt=media&token=34218f81-850f-42f4-bd7e-6c95e9eee724`
}

</script>

<template>
  <project-page-template :project_name="proj_name" :image_loader="false">
    <template #content>

      <div class="vimeo_video">
        <youtube-embed id="z5PD0b3bWok"/>
        <h5 style="text-align: center;padding-top: 10px">Compilation of various greenscreen scenes and animations</h5>
      </div>

      <div class="vimeo_video">
        <youtube-embed id="C7kI0hgJplw"/>
        <h5 style="text-align: center;padding-top: 10px">Bits donation alerts. Different amounts trigger their dedicated animation</h5>
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