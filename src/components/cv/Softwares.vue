<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";
import SchoolContainer from "@/components/cv/generic/SchoolContainer.vue";
import LangContainer from "@/components/cv/generic/LangContainer.vue";
import SoftwareTag from "@/components/project/SoftwareTag.vue";

let props = defineProps({
  test: {
    type: String,
    default: null,
  },
});

let specialized_software = ['houdini','python', 'after_effects', 'photoshop']
let mastered_software = ['blender', 'maya', '3ds_max', 'creative_cloud', 'syntheyes',
  'nuke','marvelous','zbrush', 'gaffer','cinema_4D',
  'git', 'vue.js', 'javascript', 'mySQL']

</script>

<template>
  <div class="soft_wrapper">
    <h1 class="title">Skills</h1>
    <div class="box">
      <h4>Specialized</h4>
      <div class="soft_list">
        <software-tag v-for="s in specialized_software" :key="s" :name="s"/>
      </div>
    </div>

    <div class="box">
      <h4>Mastered</h4>
      <div class="soft_list">
        <software-tag v-for="s in mastered_software" :key="s" :name="s"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.soft_wrapper {
  display: flex;
  flex-flow: column;
  gap: 15px;
}

.box {
  display: flex;
  flex-flow: column;
  gap: 10px;
}

.soft_list {
  display: flex;
  flex-flow: row wrap;
  gap: 5px;
}

.title {
  color: white;
  padding-bottom: 5px;
  font-size: 1.5em;
  text-decoration: underline #484848;
  text-underline-offset: 5px;
}
</style>