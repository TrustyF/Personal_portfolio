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

const grid = ref(null)

function add_slide_anim() {
  const items = grid.value.querySelectorAll('.list-item')
  items.forEach((el, index) => {
    el.style.opacity = 0
    el.style.transform = `translateX(${10}px)`
    el.style.animation = `small_list_slide ${0.5}s ease forwards`
    el.style.animationDelay = `${((index) * 50)}ms`
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
      <h1 class="title">Languages</h1>
      <lang-container class="list-item" style="animation-delay: 0ms" :data="{
      title:`English`,
      date:'Full professional proficiency'}"/>
      <lang-container class="list-item" style="animation-delay: 40ms" :data="{
      title:`French`,
      date:'Native'}"/>
      <lang-container class="list-item" style="animation-delay: 80ms" :data="{
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