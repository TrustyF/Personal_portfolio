<script setup>
import {RouterLink} from 'vue-router'

import ProjectContainer from "@/components/project/ProjectContainer.vue";
import index from "@/project_pages/index.json"
import tags from "@/assets/tags.json"
import {computed, ref} from "vue";

function convert_date(date) {
  let parts = date.split('/');
  return new Date(`${parts[1]}-${parts[0]}-${parts[2]}`);
}

let articles = computed(() => {
  let out = index.sort((a, b) => convert_date(b.created) - convert_date(a.created))
  return out
})

</script>

<template>
  <div class="feed">
    <project-container v-for="article in articles" :key="article.title"
                       :data="article"/>
  </div>
</template>

<style scoped>
.feed {
  /*outline: 1px solid orange;*/
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: flex-start;
  gap: 20px;
}
</style>