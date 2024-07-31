<script setup>
import {inject, onMounted, watch, ref, computed, reactive} from "vue";

let props = defineProps({
  name: {
    type: String,
    default: null,
  },
});
let emits = defineEmits(["test"]);
const curr_api = inject("curr_api");

let logo = computed(() => new URL(`/src/assets/software_icons/${props.name}.png`, import.meta.url))
let loaded = ref(false)

</script>

<template>
  <div class="container">
        <img :src="logo" alt="" style="height: 15px;width: 15px;object-fit: contain" @load="loaded=true" v-show="loaded">
    <div class="placeholder" style="height: 15px;width: 15px" v-show="!loaded"></div>
    <h1>{{ name }}</h1>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-flow: row nowrap;
  background-color: #383838;
  padding: 10px;
  gap: 10px;
  border-radius: 5px;
}

h1 {
  color: white;
  font-size: 0.8em;
  line-height: 1;
}
</style>