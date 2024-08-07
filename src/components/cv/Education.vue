<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";
import SchoolContainer from "@/components/cv/generic/SchoolContainer.vue";

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
  <div>
    <div class="edu_cont">
      <h1 style="color: white;padding-bottom:35px">Education</h1>
      <school-container :data="{
      title:`Bachelor's degree, 3D & VFX`,
      name:'Digital Arts & Entertainment',
      img:'dae',
      link:'https://www.digitalartsandentertainment.be/',
      date:'2018 - 2022',
    }"/>
      <school-container :data="{
      title:'Audiovisual Arts',
      name:'RITCS school of arts',
      link:'https://www.ritcs.be/nl/',
      img:'ritcs',
      date:'2017 - 2018',
    }"/>
      <school-container :data="{
      title:'Audiovisual Arts',
      name:'Luca school of arts',
      link:'https://www.luca-arts.be/en',
      img:'luca',
      date:'2016 - 2017',
    }"/>
    </div>
  </div>
</template>

<style scoped>
.edu_cont {
  display: flex;
  flex-flow: column nowrap;
  gap: 5px;
}

</style>