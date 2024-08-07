<script setup>
import {inject, onMounted, watch, computed} from "vue";
import ProjectPageTemplate from "@/components/project/ProjectPageTemplate.vue";
import SoftwareTag from "@/components/project/SoftwareTag.vue";
import VimeoEmbed from "@/components/generic/VimeoEmbed.vue";
let props = defineProps({
  test: {
    type: String,
    default: null,
  },
});

let proj_name = 'abyss'

function get_image(path) {
  return `https://firebasestorage.googleapis.com/v0/b/vue-portfolio-7361b.appspot.com/o/${proj_name}%2F${path}?alt=media&token=34218f81-850f-42f4-bd7e-6c95e9eee724`
}

</script>

<template>
  <project-page-template :project_name="proj_name" :image_loader="false" :poster="get_image('poster.webp')">

    <template #content>

      <div class="vimeo_video">
        <vimeo-embed id="8_r8izUMoyY"/>
        <h5 style="text-align: center;padding-top: 10px">Responsible for yellow building destruction + smoke. Additional
          debris and paper for main smoke</h5>
      </div>

      <div class="vimeo_video">
        <vimeo-embed id="qrp5D0e6eD4"/>
        <h5 style="text-align: center;padding-top: 10px">Responsible for tower destruction + smoke</h5>
      </div>

      <div class="vimeo_video">
        <vimeo-embed id="71hSPkecUEA"/>
        <h5 style="text-align: center;padding-top: 10px">Responsible for main smoke</h5>
      </div>

      <div class="vimeo_video">
        <vimeo-embed id="qo2wCmRVdbA"/>
        <h5 style="text-align: center;padding-top: 10px">Procedural glass shatter setup</h5>
      </div>

      <div class="vimeo_video">
        <vimeo-embed id="ztk5YsQloYE"/>
        <h5 style="text-align: center;padding-top: 10px">Background building destruction</h5>
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