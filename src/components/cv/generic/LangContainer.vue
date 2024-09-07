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

</script>

<template>
  <div class="top_cont">
    <div class="school_cont">
      <div class="title_cont">

        <div style="gap: 10px;display: flex;flex-flow: column">
          <h1 style="color: white">{{ data['title'] }}</h1>
          <h2>{{ data['date'] }}</h2>
        </div>
      </div>

      <div class="filler"></div>

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
.school_cont {
  display: flex;
  flex-flow: row nowrap;
  background-color: #282828;
  gap: 15px;
  align-items: center;
  /*padding: 20px 70px 30px 20px;*/
  padding: 10px 30px 10px 10px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #101010
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