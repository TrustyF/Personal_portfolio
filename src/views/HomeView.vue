<script setup>
import ProjectContainer from "@/components/project/ProjectContainer.vue";
import wfc_thumb from "@/assets/projects/houdini_wfc/thumb.jpg"
</script>

<template>
  <project-container title="Houdini WFC"
                     desc="Naive implementation of the wave-function collapse algorithm in Houdini. Lorem Ipsum dolor sit ames"
                     :thumb="wfc_thumb"
  />
</template>
