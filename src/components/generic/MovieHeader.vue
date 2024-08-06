<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";
import VimeoEmbed from "@/components/generic/VimeoEmbed.vue";


let props = defineProps({
  video_id: {
    type: String,
    default: null,
  },
  poster: {
    type: String,
    default: null,
  },
  title: {
    type: String,
    default: "null",
  },
  desc: {
    type: String,
    default: "null",
  },
  company: {
    type: String,
    default: "null",
  },
});

</script>

<template>
  <div class="movie_header_cont">

    <div class="thumb">
      <img :src="poster" class="poster_image" alt="">
    </div>

    <div class="header">

      <div class="title_cont">
        <h1>{{ title }}</h1>
        <p>{{ desc }}</p>
      </div>

      <div class="work_cont">
        <h4>Working at: {{ company }}</h4>
      </div>
    </div>


  </div>
</template>

<style scoped>
.movie_header_cont {
  width: 100%;
  position: relative;
  outline: 1px solid red;

  padding: 20px 20px 20px 20px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 10px;

  background-color: #282828;
  box-shadow: 0 0 0 100vmax #282828;
  clip-path: inset(0 -100vmax);
}

.header {
  outline: 1px solid orange;
  display: flex;
  flex-flow: column nowrap;
  gap: 15px;
}

h1 {
  color: white;
  font-size: 2em;
}

p {
  font-size: 0.8em;
}

.thumb {
  outline: 1px solid blue;
  display: flex;
  flex-flow: row nowrap;
  gap: 20px;
  height: 300px;
}

.poster_image {
  height: 100%;
  object-fit: scale-down;
  border-radius: 8px;
}

</style>