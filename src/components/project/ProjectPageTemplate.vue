<script setup>
import {inject, onMounted, watch, ref, computed, onUnmounted, nextTick} from "vue";
import Spinner from "@/components/generic/Spinner.vue";
import index from "@/project_pages/index.json";
import SoftwareTag from "@/components/project/SoftwareTag.vue";
import NavReturnArrow from "@/components/nav/NavReturnArrow.vue";
import NavArrow from "@/components/nav/NavArrow.vue";

let props = defineProps({
  image_loader: {
    type: Boolean,
    default: true,
  },
  project_name: {
    type: String,
    default: null,
  },
  poster: {
    type: String,
    default: null,
  },
});
let emits = defineEmits(["test"]);
const curr_api = inject("curr_api");

let heading_loaded = ref(false)
let images_loaded = ref(false)
let images_test_timeout

function test_images_again() {
  images_test_timeout = setTimeout(test_images_loaded, 500)
}

function test_images_loaded() {
  let images = document.getElementsByClassName('grid_image')

  if (!images.length > 0) {
    console.log(tit + ' no images, try again')
    test_images_again()
    return
  }

  for (let i = 0; i < images.length; i++) {
    if (!images[i].complete) {
      console.log(tit + ' trying again')
      test_images_again()
      break
    } else {
      console.log(tit + ' images loaded')
      images_loaded.value = true
    }
  }
}

let index_data = computed(() => {
  let i = index.findIndex((proj) => {
    return proj.folder === props.project_name
  })
  return index[i]
})
let tit = index_data.value.title

onMounted(() => {
  console.log(tit + ' header loaded')
  // window.scrollTo(0, 0)
  if (props.image_loader) test_images_loaded()
  if (!props.image_loader) images_loaded.value = true

  nextTick(() => {
    heading_loaded.value = true
  })
})
onUnmounted(() => {
  clearTimeout(images_test_timeout)
})

</script>

<template>
  <nav-return-arrow/>

  <div class="container">

    <div class="heading">
      <img v-if="poster" class="poster" :src="poster" alt="poster">

      <div class="title_container">

        <div style="gap: 10px;display: flex;flex-flow: column">
          <div class="title">{{ index_data.title.replaceAll('_', ' ') }}</div>
          <div class="desc">{{ index_data.desc }}</div>
        </div>

        <div style="margin-top: 0px">
          <div class="software">
            <software-tag :name="index_data.type"></software-tag>
            <software-tag v-for="soft in index_data.software" :key="soft" :name="soft"></software-tag>
          </div>
        </div>

      </div>
    </div>

    <div class="content_container" v-if="heading_loaded">
      <div class="content" v-show="images_loaded">
        <slot name="content"/>
      </div>
      <spinner v-show="!images_loaded"></spinner>
    </div>

    <div class="footer"></div>

  </div>
</template>

<style scoped>
.container {
  /*outline: 1px dotted cornflowerblue;*/
  display: flex;
  flex-flow: column nowrap;
  /*display: grid;*/
  /*grid-template-rows: 3fr 1fr;*/
  gap: 20px;
  /*align-items: flex-start;*/
}

.heading {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  gap: 20px;
  padding: 20px 20px 30px 20px;
  margin-bottom: 30px;
  /*background-color: #232323;*/

  border-bottom: 1px solid #383838;
  /*border-radius: 10px;*/

  min-width: 300px;
}

.poster {
  height: 200px;
  width: 130px;
  object-fit: cover;
  border-radius: 5px;
  cursor: pointer;
  user-select: none;
}

.title_container {
  display: flex;
  flex-flow: column;
  gap: 10px;
}

.title {
  color: white;
  font-size: 2em;
  text-transform: uppercase;
  /*font-weight: 800;*/
}

.desc {
  font-size: 0.8em;
  line-height: initial;
}

.software {
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
}

.content_container {
  display: flex;
  align-items: center;
}

.content {
  width: 100%;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 30px;

  /*-webkit-animation: fadein 1s; !* Safari, Chrome and Opera > 12.1 *!*/
  /*-moz-animation: fadein 1s; !* Firefox < 16 *!*/
  /*-ms-animation: fadein 1s; !* Internet Explorer *!*/
  /*-o-animation: fadein 1s; !* Opera < 12.1 *!*/
  animation: fadein 1s;
}

.footer {
  height: 30px;
}

</style>