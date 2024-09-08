<script setup>
import ProjectPageTemplate from "@/components/project/ProjectPageTemplate.vue";
import YoutubeEmbed from "@/components/generic/YoutubeEmbed.vue";

let props = defineProps({
  test: {
    type: String,
    default: null,
  },
});

let proj_name = 'spider_walker'

function get_image(path) {
  return `https://firebasestorage.googleapis.com/v0/b/vue-portfolio-7361b.appspot.com/o/${proj_name}%2F${path}?alt=media&token=34218f81-850f-42f4-bd7e-6c95e9eee724`
}

</script>

<template>
  <project-page-template :project_name="proj_name" :image_loader="false">

    <template #content>

      <div class="vimeo_video">
        <youtube-embed id="nAKInKlDe98" :autoplay="1"/>
        <h5 style="text-align: center;padding-top: 10px">Side view</h5>
      </div>

      <div class="vimeo_video">
        <youtube-embed id="9PC4HGrhimY" :autoplay="1"/>
        <h5 style="text-align: center;padding-top: 10px">Top view</h5>
      </div>

      <div class="vimeo_video">
        <youtube-embed id="3Iu9PXNqqW8" :autoplay="1"/>
        <h5 style="text-align: center;padding-top: 10px">Close-up demo</h5>
      </div>

      <div class="vimeo_video">
        <youtube-embed id="vNffUkPK-RI" :autoplay="1"/>
        <h5 style="text-align: center;padding-top: 10px">Houdini setup demo</h5>
      </div>

      <!--      <div class="single_image">-->
      <!--        <div style="display: grid;  grid-template-columns: repeat(2, 1fr);gap: 0">-->
      <!--          <img :src="get_image('terr1.jpg')" class="grid_image" alt="">-->
      <!--          <img :src="get_image('terr2.jpg')" class="grid_image" alt="">-->
      <!--        </div>-->
      <!--        <h5>Procedural height field + automated texture generation</h5>-->
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