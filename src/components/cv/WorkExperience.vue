<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";
import CompanyContainer from "@/components/cv/generic/CompanyContainer.vue";
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
      link:'https://www.linkedin.com/company/dgenz/',
      desc:'3D modelling, animation, simulation and rendering of commercial products into live-action footage',
      date:'2024 - Present',
      projects:['tommy_clothes'],
    }"/>
      <company-container :data="{
      title:'FX Artist',
      name:'UFX Studios',
      img:'ufx',
      link:'https://www.linkedin.com/company/umedia-vfx',
      desc:'Worked on: Abyss (2022), Die zweite well, Novembre, Mascarade and Theodosia. Responsible for water, smoke and destruction fx',
      date:'2022 - 2024',
      time:'2 yr',
      projects:['abyss','zweite_welle','novembre','theodosia'],
    }"/>
      <company-container :data="{
      title:'MoGraph Artist',
      name:'FrostPrime',
      img:'frost',
      link:'https://www.twitch.tv/frostprime',
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
      desc:'Freelance youtube video editor. Music reviews, gameplay videos and short films',
      date:'2015 - 2017',
      time:'2 yr',
    }"/>
    </div>
  </div>
<!--  <div class="footer"></div>-->
</template>

<style scoped>
.cv_wrapper {
  /*outline: 1px solid #267359;*/
  display: flex;
  flex-flow: row nowrap;
  gap: 30px;
  justify-content: flex-start;
}

.cv_cont {
  display: flex;
  flex-flow: column nowrap;
  gap: 40px;
}

.timeline {
  display: inline-flex;
  background-color: #484848;
  width: 2px;
  /*margin-left: 40px;*/
}

.footer {
  height: 100px;
}
h1 {
  font-size: 1.5em;
  text-decoration: underline #484848;
  text-underline-offset: 5px;
}
</style>