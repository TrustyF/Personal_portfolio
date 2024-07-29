<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";

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
  <div class="container">
    <h1><slot name="title"></slot></h1>
    <h3><slot name="desc"></slot></h3>
    <div><slot name="content"></slot></div>
  </div>
</template>

<style scoped>

</style>