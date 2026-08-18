<script setup>
import ProjectPageTemplate from "@/components/project/ProjectPageTemplate.vue";

let props = defineProps({
  test: {
    type: String,
    default: null,
  },
});

let proj_name = 'houdini_icons'
const img_path = `/assets/project_images/${proj_name}/`

</script>

<template>
  <project-page-template :project_name="proj_name" :image_loader="true">

    <template #content>

      <a href="https://houdini-icons.dev/" target="_blank" class="trusty_corner_link">houdini-icons.dev</a>

      <div class="single_image">
        <div style="display: grid;  grid-template-columns: repeat(1, 1fr);gap: 0">
          <img :src="img_path +'banner_1.webp'" class="grid_image" alt="">
        </div>
      </div>

      <div style="display:flex;flex-flow: column;align-items: flex-start;gap: 5px;margin-top: 50px;width: 100%">
        <h2 style="color: white">Features</h2>
        <p>Icons are analyzed by LLM to generate relevant tags user can intuitively navigate and search for</p>
      </div>

      <div class="single_image">
        <div style="display: grid;  grid-template-columns: repeat(1, 1fr);gap: 0">
          <img :src="img_path +'banner_2.webp'" class="grid_image" loading="lazy" decoding="async" alt="">
        </div>
      </div>

      <div style="display:flex;flex-flow: column;align-items: flex-start;gap: 10px">
        <p>While not the most accurate they allow me to easily classify the thousands of icons</p>
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
  object-fit: cover;
  border-radius: 20px;
}

p {
  line-height: normal;
}
.trusty_corner_link{
  font-size: 1.3em;
  margin-bottom: -20px;
  color: #00bd7e;
}

</style>