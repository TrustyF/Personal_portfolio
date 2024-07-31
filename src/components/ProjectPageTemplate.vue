<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";
import Spinner from "@/components/Spinner.vue";

let props = defineProps({
  test: {
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

onMounted(() => {
  test_images_loaded()
})

</script>

<template>
  <div class="container">

    <div class="heading">

      <!--      <div class="thumb">-->
      <!--        <slot name="thumb"></slot>-->
      <!--      </div>-->

      <div class="title_container">
        <div class="title">
          <slot name="title"/>
        </div>

        <div class="desc">
          <slot name="desc"/>
        </div>

        <div class="software">
          <slot name="software"/>
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
  padding: 30px;
  /*background-color: #232323;*/

  border: 1px solid #383838;
  border-radius: 10px;

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
  font-weight: 800;
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
  /*outline: 1px dotted orange;*/

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