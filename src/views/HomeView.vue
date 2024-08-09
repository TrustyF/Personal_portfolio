<script setup>
import ProjectContainer from "@/components/project/ProjectContainer.vue";
import index from "@/project_pages/index.json"
import {computed, inject, onMounted, ref, watch} from "vue";
import ProjectFilterBar from "@/components/project/ProjectFilterBar.vue";
import ProjectContainerHorizontal from "@/components/project/ProjectContainerHorizontal.vue";
import NavUpArrow from "@/components/nav/NavUpArrow.vue";

let is_mobile = inject('is_mobile')

function convert_date(date) {
  let parts = date.split('/');
  return new Date(`${parts[1]}-${parts[0]}-${parts[2]}`);
}

let category_filters = computed(() => {
  return ['fx', 'generalist', 'mograph', 'code']
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
let software_filters = computed(() => ["houdini", "blender", "maya", "after_effects"])
let sel_software_filters = ref([])

let articles = computed(() => index);
let filtered_articles = computed(() => filter_articles(index));

function filter_articles(arr) {
  let filtered = arr

  //category filters
  if (sel_category_filters.value.length > 0) {
    filtered = filtered.filter(f => f['category'].some(item => sel_category_filters.value.includes(item)))
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
    filtered = filtered.filter(f => f['software'].some(item => sel_software_filters.value.includes(item)))
  }

  // sorting
  filtered.sort((a, b) => convert_date(b.created) - convert_date(a.created))

  return filtered
}

let container_width = ref()
let container_height = ref()

function calc_container_size() {
  let elems = window.document.getElementsByClassName('project_container')

  if (!elems.length > 0) return

  for (let e of elems) {
    e.classList.remove('setSize')
  }

  let box = elems[0].getBoundingClientRect()

  container_width.value = `${box.width}px`
  container_height.value = `${box.height}px`

  for (let e of elems) {
    e.classList.remove('setSize')
  }
}

onMounted(() => {
  calc_container_size()
  addEventListener('resize', calc_container_size)
})

</script>

<template>
  <div class="homepage_wrapper">

    <div class="feed" v-if="is_mobile===0">
      <transition-group name="list">
        <project-container class="setSize" v-for="article in filtered_articles" :key="article.folder"
                           :title="article.folder"
                           :data="article"/>

      </transition-group>
    </div>

    <div class="tablet_feed" v-if="is_mobile===1">
      <nav-up-arrow/>
      <transition-group name="list">
        <project-container-horizontal v-for="article in filtered_articles" :key="article.folder"
                                      :title="article.folder"
                                      :data="article"
                                      style="height: 150px"
        />
      </transition-group>
    </div>

    <div class="mobile_feed" v-if="is_mobile===2">
      <nav-up-arrow/>
      <transition-group name="list">
        <project-container-horizontal v-for="article in filtered_articles" :key="article.folder"
                                      :title="article.folder"
                                      :data="article"
                                      :minimal="true"
                                      style="height: 120px"
        />
      </transition-group>
    </div>

    <div class="filters_container" v-if="is_mobile<2">

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
        <p>Software</p>
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
  margin-bottom: 100px;
}

.setSize {
  width: v-bind(container_width);
  height: v-bind(container_height);
}

.feed {
  position: relative;
  width: auto;
  /*outline: 1px solid orange;*/
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: flex-start;
  gap: 20px;
}

.tablet_feed {
  /*outline: 1px solid orange;*/
  /*align-items: flex-start;*/
  width: 100%;
  gap: 20px;
  position: relative;
  display: flex;
  flex-flow: column;
}

.mobile_feed {
  /*outline: 1px solid orange;*/
  /*align-items: flex-start;*/
  gap: 20px;
  position: relative;
  display: flex;
  flex-flow: column;
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: transform 500ms ease, opacity 200ms linear;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  display: none;
  /*position: absolute;*/
  /*z-index: -1;*/
}


.filters_container {
  width: 250px;
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

@media only screen and (max-width: 660px) {
  .homepage_wrapper {
    grid-template-columns: 1fr;
  }

}
</style>