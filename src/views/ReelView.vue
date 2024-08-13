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
    <vimeo-embed id="917254100" :vimeo="true"/>
  </div>

</template>

<style scoped>
.home_reel {
  margin-top: 100px;
}
</style>