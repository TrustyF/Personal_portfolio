<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";
import SchoolContainer from "@/components/cv/generic/SchoolContainer.vue";

let props = defineProps({
  test: {
    type: String,
    default: null,
  },
});

const grid = ref(null)

function add_slide_anim() {
  const items = grid.value.querySelectorAll('.list-item')
  items.forEach((el, index) => {
    el.style.opacity = 0
    el.style.transform = `translateX(${10}px)`
    el.style.animation = `small_list_slide ${0.5}s ease forwards`
    el.style.animationDelay = `${((index) * 100)}ms`
    el.classList.add('small_list_slide')
  })
}

onMounted(() => {
  // add_slide_anim()
})

</script>

<template>
  <div ref="grid">
    <div class="edu_cont">
      <h1 class="title">Education</h1>
      <school-container class="list-item" :data="{
      title:`Bachelor's degree, 3D & VFX`,
      name:'Digital Arts & Entertainment',
      img:'dae',
      link:'https://www.digitalartsandentertainment.be/',
      date:'2018 - 2022'
    }"/>
      <school-container class="list-item" :data="{
      title:'Audiovisual Arts',
      name:'RITCS school of arts',
      link:'https://www.ritcs.be/nl/',
      img:'ritcs',
      date:'2017 - 2018'
    }"/>
      <school-container class="list-item" :data="{
      title:'Audiovisual Arts',
      name:'Luca school of arts',
      link:'https://www.luca-arts.be/en',
      img:'luca',
      date:'2016 - 2017'
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

.title {
  color: white;
  padding-bottom: 15px;
  font-size: 1.5em;
  text-decoration: underline #484848;
  text-underline-offset: 5px;
}
</style>