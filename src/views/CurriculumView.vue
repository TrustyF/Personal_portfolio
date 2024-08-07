<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";
import CompanyContainer from "@/components/generic/CompanyContainer.vue";
import NavUpArrow from "@/components/nav/NavUpArrow.vue";

</script>

<template>
  <div class="cv_wrapper">
    <nav-up-arrow/>
    <div class="timeline"></div>
    <div class="cv_cont">
      <h1 style="color: white;padding-left:15px">Experience</h1>
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
      date:'2022 - 2024',
      time:'2 yr',
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
      <company-container :data="{
      title:'MoGraph Artist',
      img:'twitch',
      desc:'Freelance motion graphics for various twitch channels. Animated alerts and bits',
      date:'2017 - 2018',
      time:'2 yr',
    }"/>
      <company-container :data="{
      title:'Video Editor',
      img:'youtube',
      desc:'Freelance video editor',
      date:'2016 - 2017',
      time:'1 yr',
    }"/>
    </div>
  </div>
  <div class="footer"></div>
</template>

<style scoped>
.cv_wrapper {
  /*outline: 1px solid #267359;*/
  display: flex;
  flex-flow: row nowrap;
  gap: 30px;
  justify-content: center;
}
.cv_cont {
  display: flex;
  flex-flow: column nowrap;
  gap: 40px;
}

.timeline {
  display: inline-flex;
  background-color: #383838;
  width: 2px;
}

.footer {
  height: 100px;
}
</style>