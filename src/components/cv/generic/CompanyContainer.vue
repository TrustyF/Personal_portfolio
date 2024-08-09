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
let is_mobile = inject('is_mobile')
let emits = defineEmits(["test"]);
const curr_api = inject("curr_api");

function getImg(name) {
  return new URL(`/src/assets/company_icons/${name}.webp`, import.meta.url)
}

let articles = computed(() => {
  if (props.data['projects']) {
    return index.filter(item => props.data['projects'].includes(item['folder']))
  } else {
    return []
  }
})

const openNewTab = (path) => {
  window.open(path, '_blank')
}

</script>

<template>
  <div class="top_cont">
    <div class="arrow_ball"></div>
    <div class="company_cont">
      <div class="arrow_cont"></div>

      <div class="title_cont">

        <div style="display: flex;flex-flow: row; gap: 15px">
          <img v-if="data['link']" :src="getImg(data['img'])" @click="openNewTab(data['link'])"
               class="logo" alt="logo">
          <img v-if="!data['link']" :src="getImg(data['img'])" class="logo" style="cursor: default"
               alt="logo">

          <div style="gap: 10px;display: flex;flex-flow: column">
            <h1 style="color: white">{{ data['title'] }}</h1>
            <h2 style="color: white">{{ data['name'] }}</h2>
            <h2 style="margin-top: -5px">{{ data['date'] + (data['time'] ? ' . ' + data['time'] : '') }}</h2>
          </div>
        </div>

        <h2 class="desc">{{ data['desc'] }}</h2>

        <div v-if="data['projects']" style="display:flex;flex-flow: column; gap: 20px;  align-items: flex-start;">
          <project-container-horizontal v-show="is_mobile<2"
                                        class="proj_cont"
                                        v-for="article in articles" :key="`${article.folder}_cv`"
                                        :data="article"
                                        style="height: 150px"
          />
          <project-container-horizontal v-show="is_mobile===2"
                                        class="proj_cont"
                                        v-for="article in articles" :key="`${article.folder}_cv`"
                                        :data="article"
                                        :minimal="true"
                                        style="height: 100px"
          />
        </div>

      </div>

<!--      <div v-if="is_mobile<2" class="filler"></div>-->

    </div>
  </div>
</template>

<style scoped>
.top_cont {
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  animation: fadein 0.5s;
}

.logo {
  cursor: pointer;
  width: 70px;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 5px
}

.arrow_cont {
  position: absolute;
  top: calc(50% - 15px);
  left: -14px;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-right: 15px solid #282828;
}

.arrow_ball {
  position: absolute;
  left: -36px;
  top: calc(50% - 5px);
  background-color: #383838;
  outline: 10px solid #181818;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.company_cont {
  /*outline: 1px solid red;*/
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  background-color: #282828;
  gap: 15px;
  align-items: flex-start;
  /*padding: 20px 70px 30px 20px;*/
  padding: 20px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #101010;
}

.title_cont {
  display: flex;
  flex-flow: column wrap;
  gap: 20px;
  width: 100%;
}

.filler {
  width: 50px
}

.proj_cont {
  /*box-shadow: 5px 5px 2px #222222;*/
}

.desc {
  /*max-width: 450px;*/
  line-height: normal;
  /*display: -webkit-box;*/
  /*-webkit-line-clamp: 2;*/
  /*-webkit-box-orient: vertical;*/
}

h1 {
  font-size: 1.3em;
  font-weight: 600;
}

h2 {
  font-size: 0.9em;
}

@media only screen and (max-width: 660px) {
  .company_cont {
    flex-flow: column;
  }
}

</style>