<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";

let props = defineProps({
  test: {
    type: String,
    default: null,
  },
});

</script>

<template>
  <div class="loader">
    <div class="block" style="height: 200px"></div>
    <div class="block" style="height: 25px;width: 80%;margin-top: 25px"></div>
    <div class="block" style="height: 25px;width: 70%;margin-top: 25px"></div>
  </div>
</template>

<style scoped>
.loader {
  width: 100%;
  height: 100vh;
  margin: auto;
  position: relative;
  padding: 25px;
}

.block {
  background-color: #282828;
  animation: pulse 1s infinite ease-in-out;

}

@keyframes pulse {
  0% {
    background-color: #282828;

  }
  50%{
    background-color: #202020;

  }
  100% {
    background-color: #282828;

  }
}


</style>