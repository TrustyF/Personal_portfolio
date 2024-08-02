<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";
import {RouterLink} from 'vue-router'

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
  <nav>
    <RouterLink class="nav_link" to="/">Home</RouterLink>
    <RouterLink class="nav_link" to="/about">About</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  /*border-bottom: 1px solid #383838;*/
  /*padding-bottom: 10px;*/

  /*display: flex;*/
  /*gap: 5px;*/
  /*font-size: 1.1em;*/
}

.nav_link {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
  padding: 10px;
  /*background-color: hsla(160, 100%, 37%, 0.3);*/
}

.nav_link:hover {
  background-color: hsla(160, 100%, 37%, 0.2);
}
</style>