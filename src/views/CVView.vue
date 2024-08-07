<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";
import profile from '../assets/about/profile.webp'
import location from '../assets/software_icons/location.webp'
import envelope from '../assets/software_icons/envelope.webp'
import linkedin from '../assets/software_icons/linkedin.webp'
import CompanyContainer from "@/components/generic/CompanyContainer.vue";

const openNewTab = (path) => {
  window.open(path, '_blank')
}

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
  <div class="cv_cont">
    <company-container :data="{
      title:'3D Generalist',
      name:'Dgenz',
      img:'dgenz',
      desc:'3D modelling, animation, simulation and rendering of commercial products into live-action footage',
      date:'2024 - Present',
      projects:['tommy_clothes'],
    }"/>
    <company-container :data="{
      title:'FX Artist',
      name:'UFX Studios',
      img:'ufx',
      desc:'Worked on: Abyss (2022), Die zweite well, Novembre, Mascarade and Theodosia. Responsible for water, smoke and destruction fx',
      date:'2022 - 2023',
      time:'1 yr 7 mos',
      projects:['abyss','zweite_welle','novembre','theodosia'],
    }"/>
    <company-container :data="{
      title:'MoGraph Artist',
      name:'FrostPrime',
      img:'frost',
      desc:'Creating branded motion graphics and animated greenscreen backdrops',
      date:'2018 - 2024',
      time:'4 yr',
      projects:['frost_prime'],
    }"/>

  </div>
  <div class="footer"></div>
</template>

<style scoped>
.cv_cont {
  display: flex;
  flex-flow: column nowrap;
  gap: 40px;
}
.footer {
  height: 100px;
}
</style>