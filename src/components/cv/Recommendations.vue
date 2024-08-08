<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";
import RecContainer from "@/components/cv/generic/RecContainer.vue";

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
      <h1 class="title">Recommendations</h1>
      <rec-container :data="{
      title:`Damien Fransolet`,
      name:'Houdini Fx artist - Fx TD',
      img:'damien_f',
      link:'https://www.linkedin.com/in/damienfransolet',
      date:'Managed Arthur directly',
      desc:'Arthur was one of the best junior VFX artists I have had the opportunity to work with. During several projects at UFx, his Houdini skills and autonomy proved to be as useful as they were appreciated. I hope to have the opportunity to work with him again as soon as he returns to the old continent.',
    }"/>
      <rec-container :data="{
      title:`Moise Hammouda`,
      name:'CG generalist & Assets Artist',
      img:'moise_h',
      link:'https://www.linkedin.com/in/moise-hammouda-50978a3/',
      date:'Worked with Arthur on the same team',
      desc:'It\'s been a real pleasure working with Arthur, a very cheerful artist with a lot of talent and a well-developed eye. I wish you all the best',
    }"/>
      <rec-container :data="{
      title:`Nicolas Gillard`,
      name:'Digital Compositor / Lead Digital Compositor',
      img:'nicolas_g',
      link:'https://www.linkedin.com/in/nicogillard/',
      date:'Senior to Arthur but didn\'t manage him directly',
      desc:'Arthur is this kind of person with who you want to work. Good skills, easy communication and reactivity are some\n'+
'      of the competencies that Arthur possesses.\n'+
'      I\'ve no doubt that he\'ll be a good addition to any vfx team and I highly recommend to work with him.',
    }"/>
      <rec-container :data="{
      title:`Pierre Cambier`,
      name:'VFX Supervisor',
      img:'pierre_c',
      link:'https://www.linkedin.com/in/pierre-cambier/',
      date:'Senior to Arthur but didn\'t manage him directly',
      desc:'It was a very good experience to work with Arthur.\n'+
      'I was impressed by his level since the first day.\n'+
      'Very good contact, good mood and good understanding of the different request.\n'+
      '\n'+
      'I wish you the best Arthur, and I have no doubt about the rest of your journey in this industry!',
    }"/>
    </div>
  </div>
</template>

<style scoped>
.edu_cont {
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
}

.title {
  color: white;
  padding-bottom: 15px;
  font-size: 1.5em;
  text-decoration: underline #484848;
  text-underline-offset: 5px;
}
</style>