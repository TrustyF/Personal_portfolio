<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";
import CompanyContainer from "@/components/cv/generic/CompanyContainer.vue";
import NavUpArrow from "@/components/nav/NavUpArrow.vue";

const grid = ref(null)
const slide_seen = ref(false)

function add_slide_anim() {
  console.log('add')
  const items = grid.value.querySelectorAll('.list-item')
  items.forEach((el, index) => {
    el.style.opacity = 0
    el.style.transform = `translateY(${50}px)`
    el.style.animation = `small_list_slide ${0.5}s ease forwards`
    el.style.animationDelay = `${((index) * 100) + 100}ms`
    el.classList.add('small_list_slide')
  })
}

function remove_slide() {
  const items = grid.value.querySelectorAll('.list-item')
  items.forEach((el, index) => {
    el.classList.remove('small_list_slide')
  })
}

onMounted(() => {
  if (slide_seen.value) {
    slide_seen.value = false
    remove_slide()
  }
  if (!slide_seen.value) {
    slide_seen.value = true
    add_slide_anim()
  }
})

</script>

<template>
  <div class="cv_wrapper" ref="grid">
    <nav-up-arrow/>
    <div class="timeline"></div>
    <div class="cv_cont">
      <div>{{ slide_seen }}</div>
      <h1 style="color: white;padding-left:15px">Experience</h1>
      <company-container class="list-item" :data="{
      title:'Senior FX Artist',
      name:'Atomic Cartoons',
      img:'atomic',
      link:'https://www.linkedin.com/company/atomiccartoons/',
      desc:'Large scale RBD, fluids, pyro and python tooling',
      date:'2024 - Present',
      projects:['pieces_of_the_past','strange_tails'],
    }"/>
      <company-container class="list-item" :data="{
      title:'3D Generalist',
      name:'Dgenz',
      img:'dgenz',
      link:'https://www.linkedin.com/company/dgenz/',
      desc:'3D modelling, animation, simulation and rendering of commercial products into live-action footage',
      date:'2024',
      time:'5 mos',
      projects:['tommy_clothes','clarins_masc'],
    }"/>
      <company-container class="list-item" :data="{
      title:'FX Artist',
      name:'UFX Studios',
      img:'ufx',
      link:'https://www.linkedin.com/company/umedia-vfx',
      desc:'Worked on: Abyss (2022), Die zweite well, Novembre, Mascarade and Theodosia. Responsible for water, smoke and destruction fx',
      date:'2022 - 2024',
      time:'2 yr',
      projects:['abyss','zweite_welle','novembre','theodosia'],
    }"/>
      <company-container class="list-item" :data="{
      title:'MoGraph Artist',
      name:'FrostPrime',
      img:'frost',
      link:'https://www.twitch.tv/frostprime',
      desc:'Creating branded motion graphics and animated greenscreen backdrops',
      date:'2018 - 2024',
      time:'4 yr',
      projects:['frost_prime'],
    }"/>
      <company-container class="list-item" :data="{
      title:'MoGraph Artist',
      img:'twitch',
      desc:'Freelance motion graphics for various twitch channels. Animated alerts and bits',
      date:'2017 - 2018',
      time:'2 yr',
    }"/>
      <company-container class="list-item" :data="{
      title:'Video Editor',
      img:'youtube',
      desc:'Freelance youtube video editor. Music reviews, gameplay videos and short films',
      date:'2015 - 2017',
      time:'2 yr',
    }"/>
    </div>
  </div>
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