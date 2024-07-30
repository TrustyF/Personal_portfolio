<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";
import ProjectTemplate from "@/project_pages/template/ProjectTemplate.vue";

let props = defineProps({
  test: {
    type: String,
    default: null,
  },
});
let emits = defineEmits(["test"]);
const curr_api = inject("curr_api");

</script>

<template>
  <project-template>
    <template #title>test</template>
    <template #desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dicta error iure sed tempora! At
      commodi consequatur deleniti doloremque eligendi laudantium obcaecati, odio omnis perspiciatis quasi, reiciendis
      sunt tempora tenetur.
    </template>
    <template #content>
      <img src="" style="width: 100px;height: 100px">
      <img src="" style="width: 100px;height: 100px">
    </template>
  </project-template>
</template>

<style scoped>

</style>