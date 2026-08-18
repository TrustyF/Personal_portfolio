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
const img_path = `/assets/project_images/${proj_name}/`


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
          <img :src="img_path + 'terr1.jpg'" class="grid_image" alt="">
          <img :src="img_path + 'terr2.jpg'" class="grid_image" loading="lazy" decoding="async" alt="">
        </div>
        <h5>Procedural height field + automated texture generation</h5>
      </div>

      <div class="single_image">
        <div style="display: grid;  grid-template-columns: repeat(4, 1fr);gap: 0">
          <img :src="img_path + 'skull1_crop.jpg'" class="grid_image" loading="lazy" decoding="async" alt="">
          <img :src="img_path + 'skull2_crop.jpg'" class="grid_image" loading="lazy" decoding="async" alt="">
          <img :src="img_path + 'skull3_crop.jpg'" class="grid_image" loading="lazy" decoding="async" alt="">
          <img :src="img_path + 'skull4_crop.jpg'" class="grid_image" loading="lazy" decoding="async" alt="">
        </div>
        <h5>Integrating skull as temperature mask</h5>
      </div>

      <div class="single_image">
        <div style="display: grid;  grid-template-columns: repeat(3, 1fr);gap: 0">
          <img :src="img_path + 'traj.jpg'" class="grid_image" loading="lazy" decoding="async" alt="">
          <img :src="img_path + 'vel1.jpg'" class="grid_image" loading="lazy" decoding="async" alt="">
          <img :src="img_path + 'vel2.jpg'" class="grid_image" loading="lazy" decoding="async" alt="">
        </div>
        <h5>Trajectory automatically finds nearest valid impact point. Generates impact velocities for debris and
          sand</h5>
      </div>

      <div class="single_image">
        <div style="display: grid;  grid-template-columns: repeat(2, 1fr);gap: 0">
          <img :src="img_path + 'def2.jpg'" class="grid_image" loading="lazy" decoding="async" alt="">
          <img :src="img_path + 'def1.jpg'" class="grid_image" loading="lazy" decoding="async" alt="">
        </div>
        <h5>Deforms heightfield on impact</h5>
      </div>

      <div class="single_image">
        <div style="display: grid;  grid-template-columns: repeat(3, 1fr);gap: 0">
          <img :src="img_path + 'trail1.jpg'" class="grid_image" loading="lazy" decoding="async" alt="">
          <img :src="img_path + 'trail2.jpg'" class="grid_image" loading="lazy" decoding="async" alt="">
          <img :src="img_path + 'temp2.jpg'" class="grid_image" loading="lazy" decoding="async" alt="">
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