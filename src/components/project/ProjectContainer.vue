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
  let data = props.data
  return `https://firebasestorage.googleapis.com/v0/b/vue-portfolio-7361b.appspot.com/o/${props.data['folder']}%2Fthumb.webp?alt=media&token=a2f6eba9-92db-4b11-8a37-3897350a93e2`
})

function push_project(){
  // console.log('pushing',props.data['folder'])
  router.push(`portfolio/${props.data['folder']}`)
}


</script>

<template>
  <div class="project_container" @click="push_project">

    <div :class="`cover ${data['outdated'] ? 'faded':''}`">
      <img :src="thumb_path" alt="" rel="preload" class="thumb" v-show="thumb_loaded" @load="thumb_loaded=true">
    </div>

    <div class="underlay" v-show="!minimal">
      <h1>{{ data['title'].replaceAll('_', ' ') }} </h1>
      <div class="software_tags">
        <software-tag :name="data['type']"
                      :title="true"
                      :padding="6"
                      :gap="3"
                      :font_size="0.7"
                      :img_size="11"
                      bg_color="#494949"
        />
        <software-tag v-for="soft in data['software'].slice(0,1)" :key="soft"
                      :name="soft"
                      :padding="6"
                      :gap="3"
                      :font_size="0.7"
                      :img_size="11"
                      bg_color="#494949"
        />
<!--        <software-tag :name="data['category'].slice(0,1)"-->
<!--                      :title="false"-->
<!--                      padding="6"-->
<!--                      gap="3"-->
<!--                      font_size="0.7"-->
<!--                      img_size="11"-->
<!--                      bg_color="#494949"-->
<!--        />-->
      </div>
<!--      <div class="proj_cont_desc"> {{ data['desc'] }}</div>-->
    </div>

    <div class="underlay_shadow"></div>

    <outdated-tag v-show="data['outdated']"/>
  </div>
</template>

<style scoped>
.project_container {
  /*outline: 1px solid orange;*/
  cursor: pointer;
  width: 100%;
  height: 100%;

  display: flex;
  flex-flow: column nowrap;
  align-content: flex-start;

  position: relative;
  border-radius: 5px;
  overflow: hidden;
}

.project_container:hover .underlay {
  opacity: 1;
  visibility: visible;
  transform: translate(0);
}
.project_container:hover .underlay_shadow {
  opacity: 1;
  visibility: visible;
}

.cover {
  position: relative;
  aspect-ratio: 1;
}
.faded {
  opacity: 0.25;
}

.thumb {
  z-index: 0;
  position: absolute;
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  filter: contrast(1.1) brightness(1) blur(0);
  animation: fadein 0.5s;
  transition: 100ms ease;
}

.software_tags {
  margin: 10px 0 5px 0;
  display: flex;
  flex-flow: row nowrap;
  overflow: hidden;
  gap: 3px;
  z-index: 20;
}

.underlay {
  position: absolute;
  left: 0;
  bottom: 0;

  z-index: 5000;
  display: flex;
  flex-flow: column;
  padding: 15px;
  user-select: none;
  transition: 200ms ease-out;
  opacity: 0;
  visibility: hidden;
  transform: translate(-10px);
}
.underlay_shadow {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(10deg, hsla(160, 100%, 30%, 1) 0%, rgba(0, 0, 0, 0) 60%);
  opacity: 0;
  visibility: hidden;
  transition: 200ms ease-out;
}

h1 {
  font-size: 1.2em;
  line-height: 1;
  display: flex;
  flex-flow: column;
  justify-content: center;
  flex: 0 0 auto;
  color: white;
  text-transform: uppercase;
  white-space: nowrap;
  text-shadow: black 1px 1px 2px, black 1px 1px 2px, black 0 0 2px;
}

.proj_cont_desc {
  font-size: 0.7em;
  display: flex;
  flex-flow: column;
  justify-content: center;
  line-height: 1.2;
  margin-top: auto;
  padding-bottom: 1px;
  opacity: 0.7;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>