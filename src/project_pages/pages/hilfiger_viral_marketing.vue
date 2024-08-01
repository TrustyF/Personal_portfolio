<script setup>
import {inject, onMounted, watch, computed} from "vue";
import ProjectPageTemplate from "@/components/project/ProjectPageTemplate.vue";
import SoftwareTag from "@/components/project/SoftwareTag.vue";

let props = defineProps({
  test: {
    type: String,
    default: null,
  },
});

let proj_name = 'hilfiger_viral_marketing'

function get_image(path) {
  return `https://firebasestorage.googleapis.com/v0/b/vue-portfolio-7361b.appspot.com/o/tommy_clothes%2F${path}?alt=media&token=34218f81-850f-42f4-bd7e-6c95e9eee724`
}

</script>

<template>
  <project-page-template :project_name="proj_name">
    <template #content>

      <div class="single_image">
        <div style="display: grid;  grid-template-columns: repeat(2, 1fr);gap: 0">
          <iframe frameborder="0" width="100%" height="900" src="https://www.instagram.com/p/C50QoqjIzJf/embed"/>
          <img :src="get_image('tommy_plane.jpg')" class="grid_image" alt="">
        </div>
        <h5 style="height:10px"></h5>
      </div>

      <div class="single_image">
        <div style="display: grid;  grid-template-columns: repeat(2, 1fr);gap: 0">
          <iframe frameborder="0" width="100%" height="900" src="https://www.instagram.com/p/C9SPRlaIJsr/embed"/>
          <img :src="get_image('greece_clothes.jpg')" class="grid_image" alt="">
        </div>
        <h5 style="height:10px"></h5>
      </div>

      <div class="single_image">
        <div style="display: grid;  grid-template-columns: repeat(2, 1fr);gap: 0">
          <iframe frameborder="0" width="100%" height="900" src="https://www.instagram.com/p/C5-adSio5T6/embed"/>
          <img :src="get_image('tommy_kite.jpg')" class="grid_image" alt="">
        </div>
        <h5 style="height:10px"></h5>
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

.grid_image {
  width: 100%;
  height: 100%;
  /*max-height: 80vh;*/
  object-fit: cover
}
</style>