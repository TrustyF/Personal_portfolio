<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";
import SoftwareTag from "@/components/project/SoftwareTag.vue";
import index from "@/project_pages/index.json"

let props = defineProps({
  data: {
    type: Object,
    default: null,
  },
});

let thumb_loaded = ref(false)
let thumb_path = computed(()=>{
  let data = props.data
  if (data['folder']){
    return `https://firebasestorage.googleapis.com/v0/b/vue-portfolio-7361b.appspot.com/o/${props.data['folder']}%2Fthumb.jpg?alt=media&token=a2f6eba9-92db-4b11-8a37-3897350a93e2`
  } else {
    return `https://firebasestorage.googleapis.com/v0/b/vue-portfolio-7361b.appspot.com/o/${props.data['title']}%2Fthumb.jpg?alt=media&token=a2f6eba9-92db-4b11-8a37-3897350a93e2`
  }
})


</script>

<template>
  <div class="container" @click="$router.push('/' + data['title'])">

    <div class="cover">
      <img :src="thumb_path" alt="" class="thumb" v-show="thumb_loaded" @load="thumb_loaded=true">
      <div class="thumb" style="background-color: #383838;z-index: -1"></div>
    </div>

    <div class="underlay">
      <h1>{{ data['title'].replaceAll('_', ' ') }} </h1>
      <div class="software_tags">
        <software-tag :name="data['type']"
                      padding="6"
                      gap="3"
                      font_size="0.7"
                      img_size="11"
                      bg_color="#494949"
        />
        <software-tag v-for="soft in data['software'].slice(0,2)" :key="soft"
                      :name="soft"
                      padding="6"
                      gap="3"
                      font_size="0.7"
                      img_size="11"
                      bg_color="#494949"
        />
      </div>
      <div class="proj_cont_desc"> {{ data['desc'] }}</div>
    </div>

  </div>
</template>

<style scoped>
.container {
  /*outline: 1px solid orange;*/
  cursor: pointer;
  width: 100%;

  display: flex;
  flex-flow: column nowrap;
  position: relative;
  border-radius: 10px;
  overflow: hidden;

  animation: fadein 0.25s;
}

.container:hover .underlay {
  background-color: rgb(19, 57, 44);
  transition: 50ms ease;
}

/*.container:hover .thumb {*/
/*  transform: scale(1.03);*/
/*}*/

.cover {
  /*outline: 1px solid cornflowerblue;*/
  position: relative;
  aspect-ratio: 1;
}

.thumb {
  z-index: 0;
  position: absolute;
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;

  filter: contrast(1.1);

  animation: fadein 0.5s;
  transition: 100ms ease;
}

.software_tags {
  /*outline: 1px solid orange;*/

  /*position: absolute;*/
  margin: 10px 0 5px 0;
  display: flex;
  flex-flow: row wrap;
  /*bottom: 0;*/
  gap: 3px;
  z-index: 20;
}

.underlay {
  /*outline: 1px solid cornflowerblue;*/
  z-index: 50;

  display: flex;
  flex-flow: column;
  /*gap: 5px;*/
  padding: 15px;

  background-color: #2f2f2f;
  user-select: none;
  transition: 100ms ease;
}

h1 {
  font-size: 1.2em;
  /*outline: 1px solid cornflowerblue;*/
  display: flex;
  flex-flow: column;
  justify-content: center;

  flex: 0 0 auto;
  color: white;
  text-transform: uppercase;
  /*white-space: nowrap;*/
}

.proj_cont_desc {
  font-size: 0.7em;
  /*outline: 1px solid cornflowerblue;*/
  display: flex;
  flex-flow: column;
  justify-content: center;

  line-height: 1.2;
  /*flex: 1 0 auto;*/
  margin-top: auto;
  padding-bottom: 1px;

  /*height: 28px;*/

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  /*text-overflow: ellipsis;*/
}
</style>