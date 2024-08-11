<script setup>
import ProjectContainer from "@/components/project/ProjectContainer.vue";
import index from "@/project_pages/index.json"
import {computed, inject, onMounted, ref, watch} from "vue";
import ProjectFilterBar from "@/components/project/ProjectFilterBar.vue";
import ProjectContainerHorizontal from "@/components/project/ProjectContainerHorizontal.vue";
import NavUpArrow from "@/components/nav/NavUpArrow.vue";
import router from "@/router/index.js";

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

  filtered = filtered.filter(item => item['folder'] !== 'fx_reel')

  //sorting
  filtered.sort((a, b) => convert_date(b.created) - convert_date(a.created))

  //grouping by date
  filtered = Object.groupBy(filtered, x => x.created.split('/')[2])

  // sort top dates
  filtered = Object.keys(filtered)
      .sort().reverse() // Sort keys in ascending order
      .map(key => ({key: key, value: filtered[key]}));

  console.log(filtered)

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

function set_filter_from_url() {
  let route_query = router.currentRoute.value.query
  if (route_query.category) sel_category_filters.value = Array(route_query.category)
  if (route_query.scale) sel_scale_filters.value = Array(route_query.scale)
  if (route_query.type) sel_type_filters.value = Array(route_query.type)
}

onMounted(() => {
  calc_container_size()
  addEventListener('resize', calc_container_size)
  set_filter_from_url()
})

</script>

<template>
  <div class="reel_button" @click="$router.push('/portfolio/fx_reel')">
    <h3>Watch FX Reel</h3>
    <img class="arrow right" src="/src/assets/icons/arrow-right.webp" alt="arrow">
  </div>
  <div class="homepage_wrapper">

    <div class="feed_wrapper" v-show="is_mobile===0">
      <transition-group name="list">
        <div class="feed" v-for="date in filtered_articles" :key="date">
          <h1 class="feed_title">{{date.key}}</h1>
          <project-container class="setSize" v-for="article in date.value" :key="article.folder"
                             :title="article.folder"
                             :data="article"/>
        </div>
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
        <project-filter-bar :base_filters="category_filters"
                            :ref_filters="sel_category_filters"
                            @selected_filters="sel_category_filters=$event"
                            :multi="false"
        />
      </div>

      <div class="filter">
        <p>Project scale</p>
        <project-filter-bar :base_filters="scale_filters"
                            :ref_filters="sel_scale_filters"
                            @selected_filters="sel_scale_filters=$event"
                            :multi="true"
        />
      </div>

      <div class="filter">
        <p>Project type</p>
        <project-filter-bar :base_filters="type_filters"
                            :ref_filters="sel_type_filters"
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
.reel_button {
  position: relative;
  left: 0;
  width: fit-content;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: white;

  border: 2px solid #267359;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 0.8em;
  line-height: 0.7;
  text-transform: uppercase;
  cursor: pointer;
  transition: 200ms ease;
}

.reel_button:hover {
  background-color: #267359;
}

.reel_button:hover .arrow {
  transform: translate(5px);
}

.arrow {
  height: 10px;
  object-fit: contain;
  transition: 200ms ease;
}

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
.feed_wrapper {
  display: flex;
  flex-flow: column;
  gap: 90px;
  margin-top: 60px;
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
.feed_title {
  position: absolute;
  bottom: calc(100% + 10px);
  left: 0;
  z-index: 10;
  border-bottom: 1px solid #383838;
  width: 100%;
  padding-bottom: 10px;
  margin-bottom: 10px;
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