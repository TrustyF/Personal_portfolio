<script setup>
import ProjectPageTemplate from "@/components/project/ProjectPageTemplate.vue";
import YoutubeEmbed from "@/components/generic/YoutubeEmbed.vue";

let props = defineProps({
  test: {
    type: String,
    default: null,
  },
});

let proj_name = 'strange_tails'

function get_image(path) {
  return `https://firebasestorage.googleapis.com/v0/b/vue-portfolio-7361b.appspot.com/o/${proj_name}%2F${path}?alt=media&token=34218f81-850f-42f4-bd7e-6c95e9eee724`
}

</script>

<template>
  <project-page-template :project_name="proj_name" :image_loader="false">

    <template #content>

      <div class="vimeo_video">
        <youtube-embed id="NU44gS07Agw" muted="0"/>
      </div>

    </template>

  </project-page-template>
</template>

<style scoped>
.vimeo_video {
  justify-content: center;
  width: 100%;
}
</style>