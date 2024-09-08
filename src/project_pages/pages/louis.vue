<script setup>
import ProjectPageTemplate from "@/components/project/ProjectPageTemplate.vue";
import YoutubeEmbed from "@/components/generic/YoutubeEmbed.vue";

let props = defineProps({
  test: {
    type: String,
    default: null,
  },
});

let proj_name = 'louis'

function get_image(path) {
  return `https://firebasestorage.googleapis.com/v0/b/vue-portfolio-7361b.appspot.com/o/${proj_name}%2F${path}?alt=media&token=34218f81-850f-42f4-bd7e-6c95e9eee724`
}

</script>

<template>
  <project-page-template :project_name="proj_name" :poster="get_image('poster.webp')" :image_loader="false">

    <template #content>

      <div class="vimeo_video">
        <youtube-embed id="bkuLbLAn-JI" muted="0"/>
        <h5 style="text-align: center;padding-top: 10px">Final product</h5>
      </div>

      <div class="vimeo_video">
        <youtube-embed id="s-PYWy9eDjw" muted="0"/>
        <h5 style="text-align: center;padding-top: 10px">Making of</h5>
      </div>

      <div class="single_image">
        <div style="display: grid;  grid-template-columns: repeat(4, 1fr);gap: 0">
          <img :src="get_image('exploration_0.webp')" class="grid_image" alt="">
          <img :src="get_image('exploration_1.webp')" class="grid_image" alt="">
          <img :src="get_image('exploration_2.webp')" class="grid_image" alt="">
          <img :src="get_image('exploration_3.webp')" class="grid_image" alt="">
        </div>
        <h5>Story and visual exploration</h5>
      </div>

      <div class="single_image">
        <div style="display: grid;  grid-template-columns: repeat(3, 1fr);gap: 0">
          <img :src="get_image('moodboard (1).webp')" class="grid_image" alt="">
          <img :src="get_image('moodboard (2).webp')" class="grid_image" alt="">
          <img :src="get_image('moodboard (3).webp')" class="grid_image" alt="">
        </div>
        <h5>Moodboards</h5>
      </div>

      <div class="single_image">
        <div style="display: grid;  grid-template-columns: repeat(2, 1fr);gap: 0">
          <img :src="get_image('char_prepro (1).webp')" class="grid_image" alt="">
          <img :src="get_image('char_prepro (2).webp')" class="grid_image" alt="">
        </div>
        <h5>Character exploration</h5>
      </div>

      <div class="single_image">
        <div style="display: grid;  grid-template-columns: repeat(4, 1fr);gap: 0">
          <img :src="get_image('artbible (1).webp')" class="grid_image" alt="">
          <img :src="get_image('artbible (5).webp')" class="grid_image" alt="">
          <img :src="get_image('artbible (6).webp')" class="grid_image" alt="">
          <img :src="get_image('artbible (4).webp')" class="grid_image" alt="">
        </div>
        <h5>Artbible and research</h5>
      </div>

      <div class="single_image">
        <div style="display: grid;  grid-template-columns: repeat(2, 1fr);gap: 0">
          <img :src="get_image('monster (1)_1.webp')" class="grid_image" alt="">
          <img :src="get_image('monster (4).webp')" class="grid_image" alt="">
        </div>
        <h5>Monster concepting</h5>
      </div>

      <div class="single_image">
        <div style="display: grid;  grid-template-columns: repeat(2, 1fr);gap: 0">
          <img :src="get_image('storyboard_2.webp')" class="grid_image" alt="">
          <img :src="get_image('storyboard_4.webp')" class="grid_image" alt="">
          <img :src="get_image('storyboard_5.webp')" class="grid_image" alt="">
          <img :src="get_image('storyboard_9.webp')" class="grid_image" alt="">
          <img :src="get_image('storyboard_7.webp')" class="grid_image" alt="">
          <img :src="get_image('storyboard_10.webp')" class="grid_image" alt="">
        </div>

        <h5>Storyboard exploration using blender grease pencil</h5>
      </div>

      <div class="vimeo_video">
        <youtube-embed id="wdhrWTRTJ0A"/>
        <h5 style="text-align: center;padding-top: 10px">Animatics evolution</h5>
      </div>

      <div class="single_image">
        <div style="display: grid;  grid-template-columns: repeat(2, 1fr);gap: 0">
          <img :src="get_image('render_test (3).webp')" class="grid_image" alt="">
          <img :src="get_image('render_test (1).webp')" class="grid_image" alt="">

          <img :src="get_image('render_test.webp')" class="grid_image" alt="">
          <img :src="get_image('render_test (2).webp')" class="grid_image" alt="">

          <img :src="get_image('render_test (4).webp')" class="grid_image" alt="">
          <img :src="get_image('render_test (6).webp')" class="grid_image" alt="">
        </div>
        <h5>Rendering tests</h5>
      </div>

      <div class="single_image">
        <div style="display: grid;  grid-template-columns: repeat(2, 1fr);gap: 0">
          <img :src="get_image('Spider7.webp')" class="grid_image" alt="">
          <img :src="get_image('Spider3.webp')" class="grid_image" alt="">
          <img :src="get_image('Spider4.webp')" class="grid_image" alt="">
          <img :src="get_image('Spider2.webp')" class="grid_image" alt="">
        </div>
        <h5>Early testing, cobwebs procedural system developed in Houdini</h5>
      </div>

      <div class="single_image">
        <div style="display: grid;  grid-template-columns: repeat(2, 1fr);gap: 0">
          <img :src="get_image('dust (1).webp')" class="grid_image" alt="">
          <img :src="get_image('dust (3).webp')" class="grid_image" alt="">
          <img :src="get_image('dust (4).webp')" class="grid_image" alt="">
          <img :src="get_image('dust (2).webp')" class="grid_image" alt="">
        </div>
        <h5>Dust shader</h5>
      </div>

      <div class="single_image">
        <div style="display: grid;  grid-template-columns: repeat(3, 1fr);gap: 0">
          <img :src="get_image('character (1)_1.webp')" class="grid_image" alt="">
          <img :src="get_image('character (2).webp')" class="grid_image" alt="">
          <img :src="get_image('character (1).webp')" class="grid_image" alt="">
        </div>
        <h5>Character texturing</h5>
      </div>

      <div class="single_image">
        <div style="display: grid;  grid-template-columns: repeat(1, 1fr);gap: 0">
          <img :src="get_image('sizetest.webp')" class="grid_image" alt="">
        </div>
        <h5>Testing character in scene (secondary size adjustments were required for the props to match the character)</h5>
      </div>

      <div class="vimeo_video">
        <youtube-embed id="vt-PJ7dTJyo"/>
        <h5 style="text-align: center;padding-top: 10px">Character animation tests</h5>
      </div>
      <div class="vimeo_video">
        <youtube-embed id="Iwu2drZNfQQ"/>
        <h5 style="text-align: center;padding-top: 10px">Houdini oil sim tests</h5>
      </div>
      <div class="vimeo_video">
        <youtube-embed id="2pIxoGolAc4" muted="0"/>
        <h5 style="text-align: center;padding-top: 10px">Post-release soundtrack concert</h5>
      </div>

    </template>

  </project-page-template>
</template>

<style scoped>
.single_image {
  /*outline: 1px solid red;*/
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 10px;
}

.vimeo_video {
  justify-content: center;
  width: 100%;
}

.grid_image {
  width: 100%;
  height: 100%;
  max-height: 80vh;
  object-fit: cover
}
</style>