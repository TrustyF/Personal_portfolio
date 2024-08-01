<script setup>
import {inject, onMounted, watch, computed} from "vue";
import ProjectPageTemplate from "@/components/project/ProjectPageTemplate.vue";
import SoftwareTag from "@/components/project/SoftwareTag.vue";
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'

let props = defineProps({
  test: {
    type: String,
    default: null,
  },
});

function get_image(path) {
  return `https://firebasestorage.googleapis.com/v0/b/vue-portfolio-7361b.appspot.com/o/tommy_clothes%2F${path}?alt=media&token=34218f81-850f-42f4-bd7e-6c95e9eee724`
}

</script>

<template>
  <project-page-template :image_loader="false">

    <template #title>
      Tommy hilfiger | Viral ad campaign
    </template>
    <template #desc>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta error iure sed tempora! At
      commodi consequatur deleniti doloremque eligendi laudantium obcaecati, odio omnis perspiciatis quasi, reiciendis
      sunt tempora tenetur.
    </template>
    <template #software>
      <software-tag name="houdini"></software-tag>
      <software-tag name="blender"></software-tag>
      <software-tag name="marvelous"></software-tag>
      <software-tag name="after_effects"></software-tag>
      <software-tag name="syntheyes"></software-tag>
    </template>

    <template #content>

      <div class="single_image">
        <div style="display: grid;  grid-template-columns: repeat(2, 1fr);gap: 0">
          <iframe width="600" height="920" src="https://www.instagram.com/p/C9SPRlaIJsr/embed"/>
          <img :src="get_image('greece_clothes.jpg')" class="grid_image" alt="">
        </div>
        <h5 style="height:10px"></h5>
      </div>

      <div class="single_image">
        <div style="display: grid;  grid-template-columns: repeat(2, 1fr);gap: 0">
          <iframe width="600" height="920" src="https://www.instagram.com/p/C5-adSio5T6/embed"/>
          <img :src="get_image('tommy_kite.jpg')" class="grid_image" alt="">
        </div>
        <h5 style="height:10px"></h5>
      </div>

      <div class="single_image">
        <div style="display: grid;  grid-template-columns: repeat(2, 1fr);gap: 0">
          <iframe width="600" height="920" src="https://www.instagram.com/p/C50QoqjIzJf/embed"/>
          <img :src="get_image('tommy_plane.jpg')" class="grid_image" alt="">
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

.youtube_video {
  /*outline: 1px solid red;*/

  /*max-height: 50vh;*/
  width: 100%;
  max-height: 70vh;
}

.grid_image {
  width: 100%;
  height: 100%;
  max-height: 80vh;
  object-fit: cover
}
</style>