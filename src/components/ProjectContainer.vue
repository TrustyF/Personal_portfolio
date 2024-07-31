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

let thumb_loaded = ref(false)

let container_size = `${300}px`

</script>

<template>
  <div class="container" @click="$router.push(route)">

    <div class="cover">
      <img :src="thumb" alt="" class="thumb" v-show="thumb_loaded" @load="thumb_loaded=true">
      <div class="thumb" style="background-color: #383838;z-index: -1"></div>

      <div class="tags">
        <div class="tag" v-for="t in tags" :key="t">{{ t }}</div>
      </div>
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
  cursor: pointer;
  width: v-bind(container_size);

  display: flex;
  flex-flow: column nowrap;
  position: relative;
  box-sizing: border-box;
  border-radius: 10px;
  overflow: hidden;

  animation: fadein 0.25s;
  transition: 500ms ease;
}
.container:hover .thumb {
  filter: opacity(0.9);
  transition: 100ms ease;
}

.cover {
  /*outline: 1px solid cornflowerblue;*/

  position: relative;
  height: v-bind(container_size);
}

.thumb {
  z-index: 0;
  position: absolute;
  height: v-bind(container_size);
  width: v-bind(container_size);
  object-fit: cover;

  animation: fadein 0.5s;
  transition: 500ms ease;
}



.tags {
  /*outline: 1px solid cornflowerblue;*/

  position: absolute;
  z-index: 2;
  display: flex;
  flex-flow: row wrap;
  gap: 3px;
  padding: 3px;

  bottom: 0;
  left: 0;
}

.tag {
  text-align: center;

  color: white;
  mix-blend-mode: screen;
  background-color: hsl(160, 50%, 30%);

  display: inline-block;
  font-size: 0.7em;
  margin-bottom: 1px;
  padding: 5px;
  border-radius: 5px;
}

.underlay {
  /*outline: 1px solid cornflowerblue;*/

  z-index: 1;

  display: flex;
  flex-flow: column;
  gap: 5px;
  justify-content: center;
  padding: 15px;

  background-color: rgba(255, 255, 255, 0.1);
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
  text-transform: uppercase;
}

h2 {
  font-size: 0.7em;
  /*outline: 1px solid cornflowerblue;*/
  display: flex;
  flex-flow: column;
  justify-content: center;

  line-height: 1.2;
  flex: 1 0 auto;
  padding-bottom: 1px;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>