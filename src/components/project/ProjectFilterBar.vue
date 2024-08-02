<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";
import SoftwareTag from "@/components/project/SoftwareTag.vue";

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
      selected.value = []
    } else {
      selected.value = [name]
    }
  } else {
    const index = selected.value.indexOf(name);
    if (index === -1) {
      selected.value.push(name);
    } else {
      selected.value.splice(index, 1);
    }
  }

  emits('selected_filters', selected.value)
  // console.log(selected.value)
}

</script>

<template>
  <div class="proj_filter_cont">
    <software-tag :class="(selected.includes(f) ? 'selected':'') + ' filter_tag'"
                  v-for="f in filters" :key="f" :name="f"
                  @click="handle_select(f)"
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