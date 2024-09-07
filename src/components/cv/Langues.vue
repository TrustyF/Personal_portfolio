<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";
import SchoolContainer from "@/components/cv/generic/SchoolContainer.vue";
import LangContainer from "@/components/cv/generic/LangContainer.vue";

let props = defineProps({
  test: {
    type: String,
    default: null,
  },
});

</script>

<template>
  <div>
    <div class="edu_cont">
      <h1 class="title">Languages</h1>
      <lang-container :data="{
      title:`English`,
      date:'Full professional proficiency'}"/>
      <lang-container :data="{
      title:`French`,
      date:'Native'}"/>
      <lang-container :data="{
      title:`Dutch`,
      date:'Native'}"/>
    </div>
  </div>
</template>

<style scoped>
.edu_cont {
  display: flex;
  flex-flow: column nowrap;
  gap: 5px;
}

.title {
  color: white;
  padding-bottom: 15px;
  font-size: 1.5em;
  text-decoration: underline #484848;
  text-underline-offset: 5px;
}
</style>