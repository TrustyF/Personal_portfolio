<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";
import index from "@/project_pages/index.json"
import ProjectContainer from "@/components/project/ProjectContainer.vue";
import ProjectContainerHorizontal from "@/components/project/ProjectContainerHorizontal.vue";

let props = defineProps({
  data: {
    type: Object,
    default: null,
  },
});
let emits = defineEmits(["test"]);
const curr_api = inject("curr_api");

function getImg(name) {
  return new URL(`/src/assets/people_icons/${name}.webp`, import.meta.url)
}

const openNewTab = (path) => {
  window.open(path, '_blank')
}

</script>

<template>
  <div class="top_cont">
    <div class="school_cont">

      <img class="logo" :src="getImg(data['img'])" alt="logo" @click="openNewTab(data['link'])">

      <div class="title_cont">

        <div style="gap: 10px;display: flex;flex-flow: column">
          <h1 style="color: white">{{ data['title'] }}</h1>
          <h2 style="color: white">{{ data['name'] }}</h2>
          <h2 style="margin-top: -5px">{{ data['date'] + (data['time'] ? ' . ' + data['time'] : '') }}</h2>
        </div>

      </div>

    </div>
    <h2 class="desc">{{ data['desc'] }}</h2>
  </div>
</template>

<style scoped>
.top_cont {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  animation: fadein 0.5s;
  background-color: #282828;
  box-shadow: 10px 10px 10px #101010;

  padding: 20px;
  width: 100%;
  border-radius: 10px;
  gap: 10px;
}

.logo {
  cursor: pointer;
  width: 50px;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%
}

.school_cont {
  display: flex;
  flex-flow: row nowrap;
  gap: 15px;
  align-items: center;
  /*padding: 20px 70px 30px 20px;*/
}

.title_cont {
  display: flex;
  flex-flow: column wrap;
  gap: 20px;
}

.filler {
  width: 0
}

.proj_cont {
  /*box-shadow: 5px 5px 2px #222222;*/
}

.desc {
  max-width: 450px;
  line-height: normal;
  color: white;
  /*display: -webkit-box;*/
  /*-webkit-line-clamp: 2;*/
  /*-webkit-box-orient: vertical;*/
}

h1 {
  font-size: 1em;
  font-weight: 600;
  white-space: nowrap;
}

h2 {
  font-size: 0.8em;
}

</style>