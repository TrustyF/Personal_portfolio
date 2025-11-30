<script setup>
import NavBar from "@/components/nav/NavBar.vue";
import BottomFooter from "@/components/generic/BottomFooter.vue";
import {computed, onMounted, provide, ref, watch} from "vue";
import {useRoute} from "vue-router";
import {notifyPageVisible} from "@/router/index.js";

let route = useRoute()
let is_mobile = ref(0)
let yt_video_list = ref([])

const transitionName = ref('fade')
let lastOrder = route.meta.order ?? 0

watch(
    () => route.meta.order,
    (newOrder) => {
      if (newOrder > lastOrder) {
        transitionName.value = 'slide-left'
      } else if (newOrder < lastOrder) {
        transitionName.value = 'slide-right'
      } else {
        transitionName.value = 'fade'
      }

      lastOrder = newOrder
    }
)

function notify_after_enter() {
  notifyPageVisible()
}

function check_mobile() {
  let in_width = window.innerWidth;
  if (in_width > 1000) is_mobile.value = 0
  if (in_width <= 1000) is_mobile.value = 1
  if (in_width <= 660) is_mobile.value = 2
}

provide('is_mobile', is_mobile)
provide('yt_video_list', yt_video_list)

onMounted(() => {
  check_mobile()
  addEventListener('resize', check_mobile)
})

</script>
<template>
  <nav-bar/>
  <router-view v-slot="{ Component }">
    <Transition :name="transitionName" mode="out-in" @before-enter="notify_after_enter">
      <KeepAlive include="ReelView,PortfolioView,CurriculumView,AboutView">
        <component :is="Component" class="view-page"/>
      </KeepAlive>
    </Transition>
  </router-view>
  <bottom-footer/>
</template>

<style scoped>

.view-page * {
  backface-visibility: hidden;
  transform: translateZ(0);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 100ms ease-in-out, transform 200ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-left-enter-to,
.slide-left-leave-from,
.slide-right-enter-to,
.slide-right-leave-from {
  transform: translate3d(0, 0, 0);
}

.slide-left-enter-from {
  transform: translateX(5px);
  opacity: 0;
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: opacity 100ms ease-in-out, transform 150ms ease;
}

.slide-left-leave-to {
  transform: translateX(-5px);
  opacity: 0;
}

.slide-right-enter-from {
  transform: translateX(-5px);
  opacity: 0;
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: opacity 100ms ease-in-out, transform 150ms ease;
}

.slide-right-leave-to {
  transform: translateX(5px);
  opacity: 0;
}
</style>
