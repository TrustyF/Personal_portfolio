<script setup>
import {inject, onMounted, watch, ref, computed} from "vue";
import index from "@/project_pages/index.json"
import ProjectContainer from "@/components/project/ProjectContainer.vue";
import ProjectContainerHorizontal from "@/components/project/ProjectContainerHorizontal.vue";
import {openNewTab} from "@/scripts/helpers.js";

let props = defineProps({
  data: {
    type: Object,
    default: null,
  },
  present: {
    type: Boolean,
    default: false
  }
});
let is_mobile = inject('is_mobile')

function getImg(name) {
  return `/assets/company_icons/${name}.webp`
}

function diff_from_present(to, from = new Date()) {
  let totalMonths =
      (to.getFullYear() - from.getFullYear()) * 12 +
      (to.getMonth() - from.getMonth()) -
      (to.getDate() < from.getDate() ? 1 : 0);

  totalMonths = Math.abs(totalMonths);

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const parts = [];
  if (years) parts.push(`${years} year${years !== 1 ? 's' : ''}`);
  if (months) parts.push(`${months} month${months !== 1 ? 's' : ''}`);

  return parts.length ? parts.join(' ') : '0 months';
}

let articles = computed(() => {
  if (props.data['projects']) {
    return index.filter(item => props.data['projects'].includes(item['folder']))
  } else {
    return []
  }
})
</script>

<template>
  <div class="top_cont">
    <div class="arrow_ball"></div>
    <div class="company_cont">
      <div class="arrow_cont"></div>

      <div class="title_cont">

        <div style="display: flex;flex-flow: row; gap: 15px">
          <img v-if="data['link']" :src="getImg(data['img'])" @click="openNewTab(data['link'])"
               class="logo" alt="logo">
          <img v-if="!data['link']" :src="getImg(data['img'])" class="logo" style="cursor: default"
               alt="logo">

          <div style="gap: 5px;display: flex;flex-flow: column">
            <h1 style="color: white">{{ data['title'] }}</h1>
            <h2 style="color: white">{{ data['name'] }}</h2>
            <div style="display: flex;flex-flow: row;gap: 10px;margin-top: 10px">
              <h2 style="margin-top: -5px">{{ data['date'] }}</h2>
              <h2 style="margin-top: -5px">{{
                  ' · ' + (data['time'] ? data['time'] : diff_from_present(new Date('2024-12-01')))
                }}</h2>
            </div>
          </div>
        </div>

        <h2 class="desc" style="color: #dcdcdc" v-show="data['desc']">{{ data['desc'] }}</h2>

        <div v-if="data['projects']" class="proj_wrapper">
          <project-container v-for="article in articles" :key="`${article.folder}_cv`"
                             :data="article"
                             :thumbnail="true"
                             class="proj_cont"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.top_cont {
  position: relative;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  /*animation: fadein 0.5s;*/
}

.logo {
  cursor: pointer;
  width: 70px;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 5px
}

.arrow_cont {
  position: absolute;
  top: calc(50% - 10px);
  left: -15px;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 15px solid #282828;
}

.arrow_ball {
  position: absolute;
  left: -36px;
  top: calc(50% - 5px);
  background-color: #484848;
  outline: 10px solid #181818;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  transform: scale(0.6);
}

.company_cont {
  /*outline: 1px solid red;*/
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  background-color: #282828;
  gap: 15px;
  align-items: flex-start;
  /*padding: 20px 70px 30px 20px;*/
  padding: 20px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #101010;
}

.title_cont {
  display: flex;
  flex-flow: column wrap;
  gap: 20px;
  width: 100%;
}

.proj_wrapper {
  /*outline: 1px solid rebeccapurple;*/
  position: relative;
  display: flex;
  flex-flow: row wrap;
  /*align-content: flex-start;*/
  /*align-items: flex-start;*/
  gap: 10px;

}

.filler {
  width: 50px
}

.proj_cont {
  height: 150px;
}

.desc {
  /*max-width: 450px;*/
  line-height: normal;
  /*display: -webkit-box;*/
  /*-webkit-line-clamp: 2;*/
  /*-webkit-box-orient: vertical;*/
}

h1 {
  font-size: 1.3em;
  font-weight: 600;
}

h2 {
  font-size: 0.9em;
  color: #8c8c8c;
}

@media only screen and (max-width: 660px) {
  .company_cont {
    flex-flow: column;
  }

  .arrow_cont {
    display: none;
  }

  .arrow_ball {
    display: none;
  }
}

</style>