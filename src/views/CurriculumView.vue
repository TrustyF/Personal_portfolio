<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";
import WorkExperience from "@/components/cv/WorkExperience.vue";
import Education from "@/components/cv/Education.vue";
import Recommendations from "@/components/cv/Recommendations.vue";
import Langues from "@/components/cv/Langues.vue";
import Softwares from "@/components/cv/Softwares.vue";

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
  <div class="cv_view_wrapper">
    <div style="display: flex;flex-flow: column nowrap;gap: 50px">
      <education/>
      <langues/>
      <softwares/>
      <recommendations/>
    </div>
    <work-experience/>
  </div>
  <div class="footer"></div>
</template>

<style scoped>
.cv_view_wrapper {
  /*outline: 1px dotted orange;*/
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  justify-content: space-around;
}

.footer {
  height: 100px;
}
</style>