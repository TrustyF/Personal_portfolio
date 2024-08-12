<script setup>
import {inject, onMounted, watch, computed} from "vue";
import ProjectPageTemplate from "@/components/project/ProjectPageTemplate.vue";

let props = defineProps({
  test: {
    type: String,
    default: null,
  },
});

let proj_name = 'tommy_clothes'

function get_image(path) {
  return `https://firebasestorage.googleapis.com/v0/b/vue-portfolio-7361b.appspot.com/o/tommy_clothes%2F${path}?alt=media&token=34218f81-850f-42f4-bd7e-6c95e9eee724`
}

</script>

<template>
  <project-page-template :project_name="proj_name" :image_loader="false">
    <template #content>

      <div class="single_image">
        <div style="display: grid;grid-template-columns: repeat(1,1fr)">
          <iframe frameborder="0" src="https://www.instagram.com/p/C50QoqjIzJf/embed"
                  scrolling="no"/>
<!--          <h5 style="text-align: center;padding-top: 10px">383K views</h5>-->
        </div>
      </div>

      <div class="single_image">
        <div style="display: flex;flex-flow: column">
          <iframe frameborder="0" src="https://www.instagram.com/p/C9SPRlaIJsr/embed"
                  scrolling="no"/>
          <img :src="get_image('tommy_post.webp')" class="grid_image" style="margin-top: 30px" alt="">
        </div>
        <h5 style="text-align: center;padding-top: 10px">Topped 9.3M views, a record for the account</h5>
      </div>

      <div class="single_image">
        <div style="display: grid;grid-template-columns: repeat(1,1fr)">
          <iframe frameborder="0" src="https://www.instagram.com/p/C5-adSio5T6/embed"
                  scrolling="no"/>
<!--          <h5 style="text-align: center;padding-top: 10px">292K views</h5>-->
        </div>
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

  max-height: 60vh;
  object-fit: cover
}

iframe {
  width: 612px;
  height: 935px;
  margin-left: calc(50% - 306px);
}


@media only screen  and (max-width: 660px) {
  iframe {
    height: 550px;
    width: 100%;
    margin-left: 0;
  }
}
</style>