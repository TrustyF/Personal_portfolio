<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";

let props = defineProps({
  title: {
    type: String,
    default: null,
  },
  desc: {
    type: String,
    default: null,
  },
  thumb: {
    type: String,
    default: null,
  },
  route: {
    type: String,
    default: null,
  },
  tags: {
    type: Array,
    default: null,
  },
});
let emits = defineEmits(["test"]);
const curr_api = inject("curr_api");

</script>

<template>
  <div class="container" @click="$router.push(route)">

    <div class="cover">
      <img :src="thumb" alt="" class="thumb">
    </div>

    <div class="underlay">
      <h1>{{ title }} </h1>
      <h2> {{ desc }} </h2>
    </div>

  </div>
</template>

<style scoped>
.container {
  /*outline: 1px solid orange;*/
  /*height: 200px;*/
  cursor: pointer;
  width: 200px;

  display: flex;
  flex-flow: column nowrap;
  position: relative;

  border-radius: 10px;
  overflow: hidden;
}

.cover {
  height: 150px;
}
.thumb {
  width: 200px;
  object-fit: contain;
  opacity: 0.9;
  transition: 100ms ease;
}
.container:hover .thumb {
  opacity: 1;
}

.overlay {
  position: absolute;
  display: flex;
  inset: 0;
}

.underlay {
  /*outline: 2px dotted orange;*/
  /*flex: 1 0 auto;*/
  z-index: 1;

  display: flex;
  flex-flow: column;
  gap: 5px;
  justify-content: center;
  padding: 10px;

  background-color: rgba(0,0,0,0.5);
  user-select: none;

}

h1 {
  font-size: 1.2em;
  /*outline: 1px solid cornflowerblue;*/
  display: flex;
  flex-flow: column;
  justify-content: center;

  flex: 0 0 auto;
  color: white;
}

h2 {
  font-size: 0.7em;
  /*outline: 1px solid cornflowerblue;*/
  display: flex;
  flex-flow: column;
  justify-content: center;

  line-height: 1.2;
  flex: 1 0 auto;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>