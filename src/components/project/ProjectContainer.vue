<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";
import SoftwareTag from "@/components/project/SoftwareTag.vue";

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
  software: {
    type: Array,
    default: null,
  },
});

let thumb_loaded = ref(false)


</script>

<template>
  <div class="container" @click="$router.push(route)">

    <div class="cover">
      <img :src="thumb" alt="" class="thumb" v-show="thumb_loaded" @load="thumb_loaded=true">
      <div class="thumb" style="background-color: #383838;z-index: -1"></div>

      <div class="software_tags">
        <software-tag v-for="soft in software" :key="soft"
                      :name="soft"
                      padding="6"
                      gap="3"
                      font_size="0.7"
                      img_size="11"
        />
      </div>
    </div>

    <div class="underlay">
      <h1>{{ title }} </h1>
      <div class="proj_cont_desc"> {{ desc }} </div>
    </div>

  </div>
</template>

<style scoped>
.container {
  /*outline: 1px solid orange;*/
  cursor: pointer;
  width: 100%;

  display: flex;
  flex-flow: column nowrap;
  position: relative;
  border-radius: 10px;
  overflow: hidden;

  animation: fadein 0.25s;
}
.container:hover .underlay {
  background-color: rgb(19, 57, 44);
  transition: 50ms ease;
}
.container:hover .thumb {
  transform: scale(1.01);
}

.cover {
  /*outline: 1px solid cornflowerblue;*/
  position: relative;
  aspect-ratio: 1;
}

.thumb {
  z-index: 0;
  position: absolute;
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;

  animation: fadein 0.5s;
  transition: 200ms ease;
}

.software_tags {
  /*outline: 1px solid orange;*/

  position: absolute;
  display: flex;
  flex-flow: row wrap;
  bottom: 0;
  gap: 3px;
  padding: 3px;
  z-index: 20;
}

.underlay {
  /*outline: 1px solid cornflowerblue;*/
  z-index: 50;

  display: flex;
  flex-flow: column;
  gap: 5px;
  justify-content: center;
  padding: 15px;

  height: 85px;

  background-color: #2f2f2f;
  user-select: none;
  transition: 100ms ease;
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

.proj_cont_desc {
  font-size: 0.7em;
  /*outline: 1px solid cornflowerblue;*/
  display: flex;
  flex-flow: column;
  justify-content: center;

  line-height: 1.2;
  /*flex: 1 0 auto;*/
  margin-top: auto;
  padding-bottom: 1px;

  /*height: 5px;*/

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  /*text-overflow: ellipsis;*/
}
</style>