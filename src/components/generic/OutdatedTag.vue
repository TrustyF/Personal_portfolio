<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";
import archived from '/src/assets/icons/archived.webp'

</script>

<template>
  <div class="outdated">
    <div class="outdated_wrapper">
      <h1 class="outdated_text" style="font-size: 0.8em;margin-bottom: 2px;font-weight: 800;color: white;">
        Archived</h1>
      <img :src="archived" alt="archived" style="height: 15px">
    </div>
  </div>
</template>

<style scoped>
.outdated {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 100;
  /*background-color: rgba(0, 0, 0, 0.4);*/
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
}

.outdated_wrapper {
  opacity: 1;
  background-color: hsla(160, 100%, 15%, 1);
  padding: 10px;
  border-radius: 0 0 0 5px;
  margin-bottom: auto;
  margin-left: auto;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
</style>