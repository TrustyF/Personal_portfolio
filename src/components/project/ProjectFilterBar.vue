<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";
import SoftwareTag from "@/components/project/SoftwareTag.vue";
import {log_event} from "@/scripts/log_events.js";

let props = defineProps({
  base_filters: {
    type: Array,
    default: () => [],
  },
  ref_filters: {
    type: Array,
    default: () => [],
  },
  multi: {
    type: Boolean,
    default: true,
  },
});
let emits = defineEmits(["selected_filters"]);

function handle_select(name) {

  if (!props.multi) {
    if (props.ref_filters.includes(name)) {
      log_event('filter_use', 'int', `removed filter: ${name}`)
      emits('selected_filters', [])

    } else {
      log_event('filter_use', 'int', `filtering by: ${name}`)
      emits('selected_filters', [name])

    }
  } else {
    const index = props.ref_filters.indexOf(name);
    if (index === -1) {
      let temp = props.ref_filters
      temp.push(name);
      emits('selected_filters', temp)

      log_event('filter_use', 'int', `filtering by: ${name}`)
    } else {
      let temp = props.ref_filters
      temp.splice(index, 1);
      emits('selected_filters', temp)

      log_event('filter_use', 'int', `removed filter: ${name}`)
    }
  }
}

</script>

<template>
  <div class="proj_filter_cont">
    <software-tag :class="(ref_filters.includes(f) ? 'selected':'') + ' filter_tag'"
                  v-for="f in base_filters" :key="f" :name="f"
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