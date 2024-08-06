<script setup>
import {inject, onMounted, watch, ref, computed, reactive} from "vue";

let props = defineProps({
  name: {
    type: String,
    default: null,
  },
  img_size: {
    type: Number,
    default: 15,

  },
  padding: {
    type: Number,
    default: 10,
  },
  gap: {
    type: Number,
    default: 7,
  },
  font_size: {
    type: Number,
    default: 0.8,
  },  bg_color: {
    type: String,
    default: '#383838',
  },
});

let im_size = computed(() => `${props.img_size}px`)
let box_pad = computed(() => `${props.padding}px`)
let box_gap = computed(() => `${props.gap}px`)
let font_height = computed(() => `${props.font_size}em`)

let emits = defineEmits(["test"]);
const curr_api = inject("curr_api");

let logo = computed(() => new URL(`/src/assets/software_icons/${props.name}.webp`, import.meta.url))
let loaded = ref(false)

</script>

<template>
  <div class="software_tag_container">
    <img rel="preload" :src="logo" alt="" class="software_tag_img" @load="loaded=true" v-show="loaded">
    <div class="placeholder software_tag_img" v-show="!loaded"></div>
    <h1>{{ name.slice(0, 1).toUpperCase() + name.slice(1).replace('_',' ') }}</h1>
  </div>
</template>

<style scoped>
.software_tag_container {
  /*outline: 1px solid red;*/
  display: flex;
  flex-flow: row nowrap;
  background-color: v-bind(bg_color);
  padding: v-bind(box_pad);
  gap: v-bind(box_gap);
  border-radius: 5px;
  user-select: none;
}

.software_tag_img {
  height: v-bind(im_size);
  width: v-bind(im_size);
  object-fit: contain
}

h1 {
  color: white;
  font-size: v-bind(font_height);
  line-height: 1;
}
</style>