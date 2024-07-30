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
    <div class="heading">
      <h1>
        <slot name="title"/>
      </h1>
      <h3>
        <slot name="desc"/>
      </h3>
    </div>

    <div>
      <slot name="content"/>
    </div>
  </div>
</template>

<style scoped>

</style>