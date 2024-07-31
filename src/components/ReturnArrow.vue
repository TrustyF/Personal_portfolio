<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";
import arrow from "/src/assets/icons/arrow-left-circle-fill.svg"

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
  <div class="return_arrow_container" @click="$router.go(-1)">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
    </svg>
  </div>
</template>

<style scoped>
.return_arrow_container {
  z-index: 9999;
  cursor: pointer;
  background-color: #383838;
  width: 70px;
  height: 40px;
  padding: 10px;
  border-radius: 7px;
  position: fixed;
  left: 10px;
  top: 30px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  transition: 100ms ease;
}
.return_arrow_container:hover {
  background-color: #267359;
}
svg {
  width: 30px;
  height: 30px;
  object-fit: contain;
  fill: #00bd7e;
}
</style>