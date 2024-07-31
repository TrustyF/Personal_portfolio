<script setup>
import {RouterLink} from 'vue-router'

import ProjectContainer from "@/components/ProjectContainer.vue";
import index from "@/project_pages/index.json"
import tags from "@/assets/tags.json"

</script>

<template>
  <div class="feed">
    <project-container v-for="article in index" :key="article.title"
                       :title="article.title"
                       :desc="article.desc"
                       :thumb="article.thumb"
                       :route="article.route"
                       :tags="article.tags"
    />
  </div>
</template>

<style scoped>
.feed {
  display: flex;
  gap: 10px;
}
</style>