<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";
import SoftwareTag from "@/components/project/SoftwareTag.vue";
import index from "@/project_pages/index.json"
import {useRouter} from "vue-router";
import OutdatedTag from "@/components/generic/OutdatedTag.vue";

let router = useRouter()

let props = defineProps({
  data: {
    type: Object,
    default: null,
  },
  minimal: {
    type: Boolean,
    default: false,
  },
  horizontal: {
    type: Boolean,
    default: false,
  },
});

let thumb_loaded = ref(false)
let thumb_path = computed(() => {
  return `/assets/project_images/${props.data['folder']}/thumb.webp`
})


</script>

<template>
  <div class="project_container" @click="router.push('/portfolio/' + data['folder'])">
    <outdated-tag v-if="data['outdated']"/>
    <div class="cover">
      <img :src="thumb_path" alt="" rel="preload" class="thumb" v-show="thumb_loaded" @load="thumb_loaded=true">
    </div>

    <div class="underlay">

      <div style="display: flex;gap: 10px;align-items: center">
        <h1>{{ data['title'].replaceAll('_', ' ') }} </h1>
        <div v-if="data['duration'] && !minimal" class="proj_cont_duration">-</div>
        <div v-if="data['duration'] && !minimal" class="proj_cont_duration"> {{ data['duration'] }}</div>
      </div>

      <div class="software_tags">
        <software-tag :name="data['type']"
                      :title="!minimal"
                      :padding="6"
                      :gap="3"
                      :font_size="12"
                      :img_size="11"
                      bg_color="#494949"
        />
        <software-tag :name="data['category'][0]"
                      :title="!minimal"
                      :padding="6"
                      :gap="3"
                      :font_size="12"
                      :img_size="11"
                      bg_color="#494949"
        />
        <software-tag :name="data['software'][0]"
                      :title="!minimal"
                      :padding="6"
                      :gap="3"
                      :font_size="12"
                      :img_size="11"
                      bg_color="#494949"
        />
      </div>
      <div class="proj_cont_desc"> {{ data['desc'] }}</div>
    </div>

  </div>
</template>

<style scoped>
.project_container {
  /*outline: 1px solid red;*/
  cursor: pointer;
  height: 100%;
  width: 100%;

  display: flex;
  flex-flow: row nowrap;
  gap: 10px;

  position: relative;
  border-radius: 5px;
  overflow: hidden;

  background-color: #2f2f2f;
  transition: 100ms ease;

  /*animation: fadein 0.25s;*/
}

.project_container:hover {
  /*background-color: rgb(19, 57, 44);*/
  background-color: hsla(160, 100%, 10%, 1);
  transition: 50ms ease;
}

.project_container:hover {
  opacity: 1;
}

.cover {
  /*outline: 1px solid cornflowerblue;*/
  position: relative;
  height: 100%;
  aspect-ratio: 1;
}

.thumb {
  z-index: 0;
  /*position: absolute;*/
  height: 100%;
  aspect-ratio: 1;
  object-fit: cover;

  filter: contrast(1.1);

  /*animation: fadein 0.5s;*/
  transition: 100ms ease;
}

.dimmed {
  opacity: 0.3;
}

.software_tags {
  /*outline: 1px solid orange;*/
  /*position: absolute;*/
  margin: 10px 0 5px 0;
  display: flex;
  flex-flow: row wrap;
  /*bottom: 0;*/
  gap: 5px;
  z-index: 20;
}

.underlay {
  /*outline: 1px solid cornflowerblue;*/
  z-index: 50;

  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 15px;

  user-select: none;
}

h1 {
  font-size: 20px;
  line-height: 28px;
  /*outline: 1px solid cornflowerblue;*/
  display: flex;
  flex-flow: column;
  justify-content: center;

  /*flex: 0 0 auto;*/
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: white;
}

.proj_cont_desc {
  font-size: 0.7em;
  /*outline: 1px solid cornflowerblue;*/
  display: flex;
  flex-flow: column;
  justify-content: center;

  line-height: 1.2;
  opacity: 0.7;

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.proj_cont_duration {
  font-size: 0.9em;
  text-wrap: nowrap;
}

@media only screen and (max-width: 660px) {
  .underlay {
    gap: 3px;
  }

  h1 {
    font-size: 1em;
    line-height: normal;
  }

  .proj_cont_desc {
    /*margin-top: 5px;*/
    font-size: 0.65em;
  }

  .software_tags {
    margin: 0;
  }
}
</style>