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

let is_mobile = inject('is_mobile')

</script>

<template>
  <nav id="nav_bar">
    <h1 class="website_title">Arthur Sirjacobs</h1>
    <div class="nav_link_wrapper">
      <RouterLink class="nav_link" to="/">reel</RouterLink>
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
}

.website_title {
  left: 0;
  margin-bottom: -7px;
  color: hsla(160, 100%, 37%, 1);
  text-align: left;
  font-size: 1.5em;
  white-space: nowrap;
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
  padding: 40px;
  font-size: 1.2em;
}

.router-link-active {
  color: hsla(160, 100%, 37%, 1);
  text-decoration: underline hsla(160, 100%, 25%, 1);
  /*transform: translate(0,5px);*/
}

@media only screen and (max-width: 1000px) {
  nav {
    gap: 20px;
  }

  .nav_link {
    padding: 20px;
  }
}

@media only screen and (max-width: 660px) {
  nav {
    flex-flow: column;
    gap: 10px;
  }

  .website_title {
    margin: 20px;
  }

  .nav_link {
    padding: 20px;
  }

  .nav_link_wrapper {
    flex-flow: row wrap;
  }
}
</style>