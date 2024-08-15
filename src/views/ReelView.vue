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
  <div class="home_reel">
    <h1 class="title">2024 FX Reel</h1>
    <vimeo-embed id="998917047" :vimeo="true" :muted="1"/>
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
  /*font-weight: 800;*/
  margin-bottom: 30px;
  border-bottom: 1px solid #383838;
  padding: 10px;
}
</style>