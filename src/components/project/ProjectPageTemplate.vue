<script setup>
import {inject, onMounted, watch, ref, computed, onUnmounted, nextTick} from "vue";
import Spinner from "@/components/generic/Spinner.vue";
import index from "@/project_pages/index.json";
import SoftwareTag from "@/components/project/SoftwareTag.vue";
import NavReturnArrow from "@/components/nav/NavReturnArrow.vue";
import NavArrow from "@/components/nav/NavArrow.vue";
import NavUpArrow from "@/components/nav/NavUpArrow.vue";
import {useRouter} from "vue-router";
import {log_event} from "@/scripts/log_events.js";

let router = useRouter()

let props = defineProps({
  image_loader: {
    type: Boolean,
    default: false,
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

let heading_loaded = ref(false)
let images_loaded = ref(false)
let images_test_timeout

function test_images_again() {
  images_test_timeout = setTimeout(test_images_loaded, 500)
}

function test_images_loaded() {
  let images = document.getElementsByClassName('grid_image')

  if (!images.length > 0) {
    test_images_again()
    return
  }

  if (!images[0].complete) {
    test_images_again()
  } else {
    images_loaded.value = true
  }
}

function handle_back_arrow_click() {
  log_event('return_arrow','nav')
  router.go(-1)
}

function number_to_month(num) {
  const monthLabel = {
    [1]: 'January',
    [2]: 'February',
    [3]: 'March',
    [4]: 'April',
    [5]: 'May',
    [6]: 'June',
    [7]: 'July',
    [8]: 'August',
    [9]: 'September',
    [10]: 'October',
    [11]: 'November',
    [12]: 'December',
  }

  return monthLabel[num]
}


let index_data = computed(() => {
  let i = index.findIndex((proj) => {
    return proj.folder === props.project_name
  })
  return index[i]
})
let tit = index_data.value.title

onMounted(() => {
  // log_event('project_view', 'nav', `${props.project_name}`)
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

  <div class="container">
    <nav-up-arrow/>
    <nav-return-arrow/>

    <div class="heading">
      <img v-if="poster" class="poster" :src="poster" alt="poster">
      <div class="title_container">
        <div style="gap: 10px;display: flex;flex-flow: column">
          <nav-arrow
              style="background-color: unset;position: absolute;top: -40px;transform: translate(-10px);box-shadow: unset"
              @click="handle_back_arrow_click"/>
          <div class="title">{{ index_data.title.replaceAll('_', ' ') }}</div>
          <div class="desc">{{ index_data.desc }}</div>
        </div>
        <div style="margin-top: 0">
          <div class="software">
            <software-tag v-if="index_data.type" :name="index_data.type"></software-tag>
            <software-tag v-if="index_data.scale" :name="index_data.scale"></software-tag>
            <software-tag v-for="soft in index_data.software" :key="soft" :name="soft"></software-tag>
          </div>
        </div>
        <h4 style="font-size: 0.8em;font-style: italic;color: #686868">
          {{
            'Created ' + number_to_month(Number(index_data.created.split('/')[1])) + " " + index_data.created.split('/')[2]
          }}</h4>
      </div>
    </div>

    <div class="content_container">
      <div class="content" v-show="image_loader ? images_loaded && heading_loaded : heading_loaded">
        <slot name="content"/>
      </div>
      <spinner v-show="image_loader && !images_loaded"></spinner>
    </div>

    <div class="footer"></div>

  </div>
</template>

<style scoped>
.container {
  /*outline: 1px dotted cornflowerblue;*/
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  /*display: grid;*/
  /*grid-template-rows: 3fr 1fr;*/
  gap: 20px;
  /*align-items: flex-start;*/
}

.heading {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 20px;
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid #383838;
  /*min-width: 300px;*/
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
  position: relative;
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
  gap: 40px;

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