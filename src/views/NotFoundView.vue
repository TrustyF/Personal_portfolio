<script setup>
import ProjectContainer from "@/components/project/ProjectContainer.vue";
import index from "@/project_pages/index.json"
import {computed, inject, onMounted, onUnmounted, ref, watch} from "vue";
import ProjectFilterBar from "@/components/project/ProjectFilterBar.vue";
import ProjectContainerHorizontal from "@/components/project/ProjectContainerHorizontal.vue";
import NavUpArrow from "@/components/nav/NavUpArrow.vue";
import {useRouter} from 'vue-router'
import VimeoEmbed from "@/components/generic/VimeoEmbed.vue";

let is_mobile = inject('is_mobile')
let router = useRouter()

</script>

<template>
  <div>
    <h1 class="title">Page not found</h1>
  </div>

</template>

<style scoped>
.home_reel {
  /*margin-top: 10px;*/
}
.title {
  /*color: white;*/
  font-size: 1.2em;
  text-transform: uppercase;
}
</style>