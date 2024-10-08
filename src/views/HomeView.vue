<script setup>
import ProjectContainer from "@/components/project/ProjectContainer.vue";
import index from "@/project_pages/index.json"
import {computed, inject, onMounted, onUnmounted, ref, watch} from "vue";
import ProjectFilterBar from "@/components/project/ProjectFilterBar.vue";
import ProjectContainerHorizontal from "@/components/project/ProjectContainerHorizontal.vue";
import NavUpArrow from "@/components/nav/NavUpArrow.vue";
import {useRouter} from 'vue-router'

let is_mobile = inject('is_mobile')
let router = useRouter()

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

let filtered_articles = computed(() => filter_articles(index));

function filter_articles(arr) {
  let filtered = arr

  //category filters
  if (sel_category_filters.value.length) {
    filtered = filtered.filter(f => f['category'].some(item => sel_category_filters.value.includes(item)))
  }

  //scale filters
  if (sel_scale_filters.value.length) {
    filtered = filtered.filter(item => sel_scale_filters.value.includes(item['scale']))
  }

  //type filters
  if (sel_type_filters.value.length) {
    filtered = filtered.filter(item => sel_type_filters.value.includes(item['type']))
  }

  //software filters
  if (sel_software_filters.value.length) {
    filtered = filtered.filter(f => f['software'].some(item => sel_software_filters.value.includes(item)))
  }

  //remove archived from filter results
  if (sel_category_filters.value.length ||
      sel_scale_filters.value.length ||
      sel_type_filters.value.length ||
      sel_software_filters.value.length
  ) filtered = filtered.filter(f => !('outdated' in f))

  // sorting
  filtered.sort((a, b) => convert_date(b['created']) - convert_date(a['created']))
  // sort outdated at the bottom
  filtered.sort((a,b) => ('outdated' in a) - ('outdated' in b))

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

let feed_height = ref()

function calc_feed_height() {
  let elem = window.document.getElementById('feed')

  elem.classList.remove('setFeedHeight')

  let box = elem.getBoundingClientRect()
  feed_height.value = `${box.height}px`

  elem.classList.add('setFeedHeight')
}

function set_filter_from_url() {
  let route_query = router.currentRoute.value.query
  if (route_query.category) sel_category_filters.value = Array(route_query.category)
  if (route_query.scale) sel_scale_filters.value = Array(route_query.scale)
  if (route_query.type) sel_type_filters.value = Array(route_query.type)
  if (route_query.software) sel_software_filters.value = Array(route_query.software)
}

onMounted(() => {
  calc_container_size()
  calc_feed_height()

  addEventListener('resize', calc_container_size)
  addEventListener('resize', calc_feed_height)

  set_filter_from_url()
})
onUnmounted(() => {
  removeEventListener('resize', calc_container_size)
  removeEventListener('resize', calc_feed_height)
})

</script>

<template>
  <div class="homepage_wrapper">
    <div id="feed" class="feed" v-if="is_mobile===0">
      <transition-group name="list">
        <project-container class="setSize" v-for="(article,index) in filtered_articles" :key="article.folder+index"
                           :title="article.folder"
                           :data="article"
                           :minimal="false"
        />

      </transition-group>
    </div>

    <div id="feed" class="tablet_feed" v-if="is_mobile===1">
      <nav-up-arrow/>
      <transition-group name="list">
        <project-container-horizontal v-for="article in filtered_articles" :key="article.folder"
                                      :title="article.folder"
                                      :data="article"
                                      style="height: 150px"
        />
      </transition-group>
    </div>

    <div id="feed" class="mobile_feed" v-if="is_mobile===2">
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
        <project-filter-bar :base_filters="software_filters"
                            :ref_filters="sel_software_filters"
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

.setFeedHeight {
  height: v-bind(feed_height);
}

.feed {
  /*outline: 1px solid orange;*/
  position: relative;
  width: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-content: flex-start;
  align-items: flex-start;
  gap: 5px;
}

.tablet_feed {
  /*outline: 1px solid orange;*/
  /*align-items: flex-start;*/
  width: 100%;
  gap: 10px;
  position: relative;
  display: flex;
  flex-flow: column;
}

.mobile_feed {
  /*outline: 1px solid orange;*/
  /*align-items: flex-start;*/
  gap: 10px;
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
}

@media only screen and (max-width: 660px) {
  .homepage_wrapper {
    grid-template-columns: 1fr;
  }

}
</style>