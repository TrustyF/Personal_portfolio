<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";
import index from "@/project_pages/index.json"
import ProjectContainer from "@/components/project/ProjectContainer.vue";

let props = defineProps({
  data: {
    type: Object,
    default: null,
  },
});
let emits = defineEmits(["test"]);
const curr_api = inject("curr_api");


let articles = computed(() => {
  if (props.data['projects']) {
    return index.filter(item => props.data['projects'].includes(item['folder']))
  } else {
    return []
  }
})


</script>

<template>
  <div style="display: flex;flex-flow: row nowrap;align-items: center;">
    <div class="arrow_cont"></div>
    <div class="company_cont">

      <img :src="`./src/assets/company_icons/${data['img']}.webp`"
           style="width: 70px;object-fit: cover;border-radius: 5px" alt="logo">

      <div class="title_cont">

        <div style="gap: 10px;display: flex;flex-flow: column">
          <h1 style="color: white">{{ data['title'] }}</h1>
          <h2 style="color: white">{{ data['name'] }}</h2>
          <h2 style="margin-top: -5px">{{ data['date'] + (data['time'] ? ' . ' + data['time'] : '') }}</h2>
        </div>

        <h2 class="desc">{{ data['desc'] }}</h2>

        <div style="display:flex;flex-flow: row; gap: 20px;  align-items: flex-start;">
          <project-container class="proj_cont" :minimal="false"
                             v-for="article in articles" :key="article.folder"
                             :data="article"
                             style="width: 200px;height: 300px"
          />
        </div>

      </div>

    </div>
  </div>
</template>

<style scoped>
.arrow_cont {
  /*width: 0;*/
  /*height: 0;*/
  /*margin: 30px auto;*/
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 15px solid #282828;
}

.company_cont {
  display: flex;
  flex-flow: row nowrap;
  background-color: #282828;
  gap: 15px;
  align-items: flex-start;
  padding: 20px 50px 30px 20px;
  border-radius: 10px;
  box-shadow: 10px 10px 10px #101010
}

.title_cont {
  display: flex;
  flex-flow: column wrap;
  gap: 20px;
}

.desc {
  max-width: 450px;
  line-height: normal;
  /*display: -webkit-box;*/
  /*-webkit-line-clamp: 2;*/
  /*-webkit-box-orient: vertical;*/
}

h1 {
  font-size: 1.2em;
  font-weight: 600;
}

h2 {
  font-size: 0.9em;
}

.proj_cont {
  transition: 100ms ease;
}

.proj_cont:hover {
  /*outline: 2px solid #267359;*/
  filter: brightness(1.1);
}

</style>