<script setup>
import {RouterLink} from 'vue-router'

import ProjectContainer from "@/components/project/ProjectContainer.vue";
import index from "@/project_pages/index.json"
import tags from "@/assets/tags.json"
import {computed, ref} from "vue";
import ProjectFilterBar from "@/components/project/ProjectFilterBar.vue";

function convert_date(date) {
  let parts = date.split('/');
  return new Date(`${parts[1]}-${parts[0]}-${parts[2]}`);
}

let category_filters = computed(() => {
  return ['fx', 'mograph', 'code']
})
let sel_category_filters = ref([])
let scale_filters = computed(() => {
  return ['production', 'mid_sized', 'solo']
})
let sel_scale_filters = ref([])
let type_filters = computed(() => {
  return [...new Set(index.map(x => x.type))]
})
let sel_type_filters = ref([])
let software_filters = computed(() => ["houdini", "blender", "after_effects"])
let sel_software_filters = ref([])

let articles = computed(() => filter_articles(index))

function filter_articles(arr) {
  let filtered = arr

  //category filters
  if (sel_category_filters.value.length > 0) {
    filtered = filtered.filter(item => sel_category_filters.value.includes(item['category']))
  }

  //scale filters
  if (sel_scale_filters.value.length > 0) {
    filtered = filtered.filter(item => sel_scale_filters.value.includes(item['scale']))
  }

  //type filters
  if (sel_type_filters.value.length > 0) {
    filtered = filtered.filter(item => sel_type_filters.value.includes(item['type']))
  }

  //software filters
  if (sel_software_filters.value.length > 0) {
    filtered = filtered.filter(item => sel_software_filters.value.includes(item['software'][0]))
  }

  // sorting
  filtered.sort((a, b) => convert_date(b.created) - convert_date(a.created))

  return filtered
}

</script>

<template>
  <div class="homepage_wrapper">

    <div class="feed">
      <project-container v-for="article in articles" :key="article.folder"
                         :data="article"/>
    </div>

    <div class="filters_container">

      <div class="filter">
        <p>Project category</p>
        <project-filter-bar :filters="category_filters"
                            @selected_filters="sel_category_filters=$event"
                            :multi="false"
        />
      </div>

      <div class="filter">
        <p>Project scale</p>
        <project-filter-bar :filters="scale_filters"
                            @selected_filters="sel_scale_filters=$event"
                            :multi="true"
        />
      </div>

      <div class="filter">
        <p>Project type</p>
        <project-filter-bar :filters="type_filters"
                            @selected_filters="sel_type_filters=$event"
                            :multi="false"
        />
      </div>

      <div class="filter">
        <p>Main software</p>
        <project-filter-bar :filters="software_filters"
                            @selected_filters="sel_software_filters=$event"
                            :multi="false"
        />
      </div>
    </div>

  </div>
</template>

<style scoped>
.homepage_wrapper {
  display: grid;
  grid-template-columns: 1fr 0fr;
  gap: 20px;
  /*display: flex;*/
  /*flex-flow: row nowrap;*/
  /*gap: 20px;*/
}

.feed {
  width: auto;
  /*outline: 1px solid orange;*/
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: flex-start;
  gap: 20px;
}

.filters_container {
  min-width: 250px;
  display: flex;
  flex-flow: column wrap;
  padding: 10px;
}

.filter {
  display: flex;
  flex-flow: column wrap;
  gap: 15px;
  margin-bottom: 30px;
}

.filter p {
  padding-bottom: 7px;
  border-bottom: 1px solid #383838;
  /*outline: 1px solid red;*/
  /*line-height: 5;*/
}
</style>