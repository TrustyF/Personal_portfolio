<script setup>
import ProjectPageTemplate from "@/components/project/ProjectPageTemplate.vue";
import YoutubeEmbed from "@/components/generic/YoutubeEmbed.vue";

let props = defineProps({
  test: {
    type: String,
    default: null,
  },
});

let proj_name = 'skull_rocket'

function get_image(path) {
  return `https://firebasestorage.googleapis.com/v0/b/vue-portfolio-7361b.appspot.com/o/${proj_name}%2F${path}?alt=media&token=34218f81-850f-42f4-bd7e-6c95e9eee724`
}

</script>

<template>
  <project-page-template :project_name="proj_name" :image_loader="true">

    <template #content>

      <div class="vimeo_video">
<!--        <vimeo-embed id="993723038"/>-->
        <youtube-embed id="Mbi4wjNvTKc?si=ny9BH7wwGQ9edbC-"/>
        <h5 style="text-align: center;padding-top: 10px">Final render</h5>
      </div>

      <div class="single_image">
        <div style="display: grid;  grid-template-columns: repeat(2, 1fr);gap: 0">
          <img :src="get_image('terr1.jpg')" class="grid_image" alt="">
          <img :src="get_image('terr2.jpg')" class="grid_image" alt="">
        </div>
        <h5>Procedural height field + automated texture generation</h5>
      </div>

      <div class="single_image">
        <div style="display: grid;  grid-template-columns: repeat(4, 1fr);gap: 0">
          <img :src="get_image('skull1_crop.jpg')" class="grid_image" alt="">
          <img :src="get_image('skull2_crop.jpg')" class="grid_image" alt="">
          <img :src="get_image('skull3_crop.jpg')" class="grid_image" alt="">
          <img :src="get_image('skull4_crop.jpg')" class="grid_image" alt="">
        </div>
        <h5>Integrating skull as temperature mask</h5>
      </div>

      <div class="single_image">
        <div style="display: grid;  grid-template-columns: repeat(3, 1fr);gap: 0">
          <img :src="get_image('traj.jpg')" class="grid_image" alt="">
          <img :src="get_image('vel1.jpg')" class="grid_image" alt="">
          <img :src="get_image('vel2.jpg')" class="grid_image" alt="">
        </div>
        <h5>Trajectory automatically finds nearest valid impact point. Generates impact velocities for debris and
          sand</h5>
      </div>

      <div class="single_image">
        <div style="display: grid;  grid-template-columns: repeat(2, 1fr);gap: 0">
          <img :src="get_image('def2.jpg')" class="grid_image" alt="">
          <img :src="get_image('def1.jpg')" class="grid_image" alt="">
        </div>
        <h5>Deforms heightfield on impact</h5>
      </div>

      <div class="single_image">
        <div style="display: grid;  grid-template-columns: repeat(3, 1fr);gap: 0">
          <img :src="get_image('trail1.jpg')" class="grid_image" alt="">
          <img :src="get_image('trail2.jpg')" class="grid_image" alt="">
          <img :src="get_image('temp2.jpg')" class="grid_image" alt="">
        </div>
        <h5>Trail smoke, post-impact steam</h5>
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