<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";
import SoftwareTag from "@/components/project/SoftwareTag.vue";
import {analytics_track} from "@/scripts/AnalyticsTracker.js";

let props = defineProps({
  filters: {
    type: Array,
    default: () => [],
  },
  multi: {
    type: Boolean,
    default: true,
  },
});
let emits = defineEmits(["selected_filters"]);

let selected = ref([])

function handle_select(name) {

  if (!props.multi) {
    if (selected.value.includes(name)) {
      analytics_track('filter_use',`removed filter: ${name}`)
      selected.value = []
    } else {
      analytics_track('filter_use',`filtering by: ${name}`)
      selected.value = [name]
    }
  } else {
    const index = selected.value.indexOf(name);
    if (index === -1) {
      selected.value.push(name);
      analytics_track('filter_use',`filtering by: ${name}`)
    } else {
      selected.value.splice(index, 1);
      analytics_track('filter_use',`removed filter: ${name}`)
    }
  }

  emits('selected_filters', selected.value)
}

</script>

<template>
  <div class="proj_filter_cont">
    <software-tag :class="(selected.includes(f) ? 'selected':'') + ' filter_tag'"
                  v-for="f in filters" :key="f" :name="f"
                  @click="handle_select(f)"
                  :gap="5"
    ></software-tag>
  </div>
</template>

<style scoped>
.proj_filter_cont {
  /*border: 1px solid #383838;*/
  display: flex;
  flex-flow: row wrap;
  gap: 5px;
}

.filter_tag {
  cursor: pointer;
}

.selected {
  background-color: #267359;
}

.filter_tag:hover {
  background-color: #267359;

}

</style>