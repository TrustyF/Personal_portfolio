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
</script>

<template>
  <div class="container" @click="$router.push(route)">

    <div class="cover">
      <img :src="thumb" alt="" class="thumb">

      <div class="tags">
        <div class="tag" v-for="t in tags" :key="t">{{t}}</div>
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
  width: 200px;
  /*height: 200px;*/

  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  position: relative;

  border-radius: 10px;
  overflow: hidden;
}

.thumb {
  z-index: 0;
  position: absolute;
  height: 200px;
  object-fit: contain;
  opacity: 0.9;
  transition: 100ms ease;
}

.container:hover .thumb {
  opacity: 1;
}

.cover {
  /*outline: 1px solid cornflowerblue;*/

  position: relative;
  height: 200px;
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
  padding: 10px;

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