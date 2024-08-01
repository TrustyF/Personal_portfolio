<script setup>
import {RouterLink} from 'vue-router'

import ProjectContainer from "@/components/project/ProjectContainer.vue";
import index from "@/project_pages/index.json"
import tags from "@/assets/tags.json"
import {ref} from "vue";

</script>

<template>
  <div class="feed">
    <project-container v-for="article in index" :key="article.title"
                       :title="article.title"
                       :desc="article.desc"
                       :thumb="article.thumb"
                       :route="article.route"
                       :software="article.software"
    />
  </div>
</template>

<style scoped>
.feed {
  /*outline: 1px solid orange;*/
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 20px;
}
</style>