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
  <nav id="nav_bar">
    <RouterLink class="nav_link" to="/portfolio">Portfolio</RouterLink>
    <RouterLink class="nav_link" to="/cv">CV</RouterLink>
    <RouterLink class="nav_link" to="/about">About</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  /*height: 23px;*/
  /*border-bottom: 1px solid #383838;*/
  /*padding-bottom: 10px;*/
  margin-bottom: 20px;

  /*display: flex;*/
  /*gap: 5px;*/
  /*font-size: 1.1em;*/
}
.nav_link {
  /*text-decoration: underline #181818;*/
  text-decoration: none;
  color: hsl(160, 51%, 31%);
  transition: 100ms ease;
  padding: 10px 15px 10px 15px;
  font-size: 1.2em;
  text-transform: uppercase;
  /*background-color: hsla(160, 100%, 37%, 0.3);*/
}
.nav_link:hover {
  background-color: hsla(160, 100%, 37%, 0.2);
}
.router-link-active {
  color: hsla(160, 100%, 37%, 1);
  /*text-decoration: underline hsla(160, 100%, 37%, 1);*/
}

</style>