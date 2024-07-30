<script setup>
import {RouterLink} from 'vue-router'

import ProjectContainer from "@/components/ProjectContainer.vue";
import wfc_thumb from "@/assets/projects/houdini_wfc/thumb.jpg"
</script>

<template>
  <project-container
      title="Houdini WFC"
      desc="Naive implementation of the wave-function collapse algorithm in Houdini. Lorem Ipsum dolor sit ames"
      :thumb="wfc_thumb"
      route="/wfc"
  />
</template>
