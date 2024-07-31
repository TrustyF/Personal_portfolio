<script setup>
import {inject, onMounted, watch, computed} from "vue";
import ProjectPageTemplate from "@/components/ProjectPageTemplate.vue";
import SoftwareTag from "@/components/SoftwareTag.vue";

let props = defineProps({
  test: {
    type: String,
    default: null,
  },
});
let emits = defineEmits(["test"]);
const curr_api = inject("curr_api");

function get_image(path) {
  return `https://firebasestorage.googleapis.com/v0/b/vue-portfolio-7361b.appspot.com/o/pool_rooms%2F${path}?alt=media&token=34218f81-850f-42f4-bd7e-6c95e9eee724`
}

</script>

<template>
  <project-page-template>

    <template #thumb>
      <img :src="get_image('thumb.jpg')" style="height: 50px;">
    </template>
    <template #title>
      Pool rooms
    </template>
    <template #desc>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta error iure sed tempora! At
      commodi consequatur deleniti doloremque eligendi laudantium obcaecati, odio omnis perspiciatis quasi, reiciendis
      sunt tempora tenetur.
    </template>
    <template #software>
      <software-tag name="houdini"></software-tag>
      <software-tag name="blender"></software-tag>
      <software-tag name="photoshop"></software-tag>
    </template>

    <template #content>
      <div class="single_image">
        <img :src="get_image('4.jpg')" class="grid_image" alt="">
        <h5>Final render</h5>
      </div>

      <div class="single_image">
        <img :src="get_image('1.jpg')" class="grid_image" alt="">
        <h5>Early exploration in blender</h5>
      </div>

      <div class="single_image">
        <div style="display: grid;  grid-template-columns: repeat(2, 1fr);gap: 0">
          <img :src="get_image('2.jpg')" class="grid_image" alt="">
          <img :src="get_image('3.jpg')" class="grid_image" alt="">
        </div>
        <h5>Refining lighting and shaders</h5>
      </div>
    </template>

  </project-page-template>
</template>

<style scoped>
.single_image {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 10px
}

.grid_image {
  width: 100%;
  height: 100%;
  max-height: 70vh;
  object-fit: cover
}
</style>