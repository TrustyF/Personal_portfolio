<script setup>
import {inject, onMounted, watch, ref, computed, onUnmounted} from "vue";
import Spinner from "@/components/generic/Spinner.vue";
import ReturnArrow from "@/components/generic/ReturnArrow.vue";
import index from "@/project_pages/index.json";
import SoftwareTag from "@/components/project/SoftwareTag.vue";

let props = defineProps({
  image_loader: {
    type: Boolean,
    default: true,
  },
  project_name: {
    type: String,
    default: null,
  },
});
let emits = defineEmits(["test"]);
const curr_api = inject("curr_api");

let images_loaded = ref(false)
let images_check_timeout

function test_images_loaded() {
  let images = document.getElementsByClassName('grid_image')
  for (let i = 0; i < images.length; i++) {
    if (!images[i].complete) {
      images_check_timeout = setTimeout(test_images_loaded, 100)
      break
    } else {
      images_loaded.value = true
    }
  }
}

let back_arrow_vis = ref(false)

function handle_back_arrow() {
  let content_cont = document.getElementsByClassName('content_container')[0]
  let bound = content_cont.getBoundingClientRect()
  back_arrow_vis.value = bound.top < 0;
}

let index_data = computed(() => {
  let i = index.findIndex((proj) => {
    return proj.title === props.project_name
  })
  return index[i]
})

onMounted(() => {
  window.scrollTo(0, 0)
  if (props.image_loader) test_images_loaded()
  if (!props.image_loader) images_loaded.value = true
  addEventListener('scroll', handle_back_arrow)
})
onUnmounted(() => {
  removeEventListener('scroll', handle_back_arrow)
})

</script>

<template>
  <return-arrow :vis="back_arrow_vis"></return-arrow>

  <div class="container">

    <div class="heading">
      <div class="title_container">
        <div class="title">{{ index_data.title.replaceAll('_', ' ') }}</div>
        <div class="desc">{{ index_data.desc }}</div>
        <div class="software">
          <software-tag v-for="soft in index_data.software" :key="soft" :name="soft"></software-tag>
        </div>
      </div>
    </div>

    <div class="content_container">
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
  /*outline: 1px dotted orange;*/
  display: flex;
  flex-flow: row;
  gap: 10px;
  padding: 10px 0 30px 0;
  /*background-color: #232323;*/

  border-bottom: 1px solid #383838;
  /*border-radius: 10px;*/

  min-width: 300px;
}

.thumb {
}

.title_container {
  display: flex;
  flex-flow: column;
  gap: 10px;
}

.title {
  color: white;
  font-size: 1.5em;
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
  height: 100px;
}

</style>