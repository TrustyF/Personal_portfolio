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
    <h1 class="website_title">Arthur Sirjacobs</h1>
    <div class="nav_link_wrapper">
      <RouterLink class="nav_link" to="/portfolio">portfolio</RouterLink>
      <RouterLink class="nav_link" to="/cv">cv</RouterLink>
      <RouterLink class="nav_link" to="/about">about</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
nav {
  margin-bottom: 20px;
  position: relative;

  font-family: "Work Sans", sans-serif;

  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: center;
  gap: 100px;
  /*font-size: 1.1em;*/
}
.website_title {
    left: 0;
  margin-bottom: -7px;
  color: hsla(160, 100%, 37%, 1);
  text-align: left;
  /*text-transform: lowercase;*/
  font-size: 1.5em;
  /*font-weight: 0;*/
  /*word-break: break-word;*/
}
.nav_link_wrapper {
  display: flex;
  flex-flow: row;
  justify-content: center;
}

.nav_link {
  text-decoration: underline #181818;
  text-underline-offset: 10px;
  color: hsl(160, 51%, 31%);

  /*transition: 100ms ease-in-out;*/
  padding: 40px;
  font-size: 1.2em;
  /*text-transform: uppercase;*/
  /*background-color: hsla(160, 100%, 37%, 0.3);*/
}

.nav_link:hover {
  /*background-color: hsla(160, 100%, 37%, 0.2);*/
  /*text-decoration: underline hsla(160, 100%, 37%, 0);*/
}

.router-link-active {
  color: hsla(160, 100%, 37%, 1);
  text-decoration: underline hsla(160, 100%, 25%, 1);
  /*transform: translate(0,5px);*/
}

</style>