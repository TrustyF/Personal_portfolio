<script setup>
import ProjectPageTemplate from "@/components/project/ProjectPageTemplate.vue";

let props = defineProps({
  test: {
    type: String,
    default: null,
  },
});

let proj_name = 'trusty_corner'

function get_image(path) {
  return `https://firebasestorage.googleapis.com/v0/b/vue-portfolio-7361b.appspot.com/o/${proj_name}%2F${path}?alt=media&token=34218f81-850f-42f4-bd7e-6c95e9eee724`
}

</script>

<template>
  <project-page-template :project_name="proj_name">

    <template #content>

      <a href="https://trusty-corner.me/" target="_blank" class="trusty_corner_link">trusty-corner.me</a>

      <div class="single_image">
        <div style="display: grid;  grid-template-columns: repeat(1, 1fr);gap: 0">
          <img :src="get_image('readme_screen_2.jpg')" class="grid_image" alt="">
        </div>
      </div>

      <div style="display:flex;flex-flow: column;align-items: flex-start;gap: 10px;width: 100%">
        <ul style="line-height: normal;text-align: left">
          <li>Vue 3</li>
          <li>Python Flask</li>
          <li>Mysql</li>
          <li>Deployed with Firebase.</li>
        </ul>
      </div>

      <div style="display:flex;flex-flow: column;align-items: flex-start;gap: 5px;margin-top: 50px;width: 100%">
        <h2 style="color: white">Features</h2>
        <p>Ratings are split into: my personal rating, public rating and the combined circle.</p>
      </div>

      <div class="single_image">
        <div style="display: grid;  grid-template-columns: repeat(1, 1fr);gap: 0">
          <img :src="get_image('rating_info.jpg')" class="grid_image" alt="">
        </div>
      </div>

      <div style="display:flex;flex-flow: column;align-items: flex-start;gap: 10px">
        <p>The public rating is visually remapped to better match my personal rating distribution.</p>
        <p> The combined circle takes the average of both ratings to provide an easy shorthand of the overall consensus
          between my personal assessment and the public opinion but also serves as a valuable reference for
          decision-making. This collaborative approach ensures a more comprehensive and balanced evaluation, taking into
          account both personal preference and the collective sentiment</p>
      </div>

      <div style="display:flex;flex-flow: column;align-items: flex-start;gap: 5px;margin-top: 50px;width: 100%">
        <h2 style="color: white">Tags</h2>
        <p>Medias are annotated with various tags. These are meant to provide a simple breakdown of my opinion, and to
          help you decide what to pick.</p>
      </div>

      <div class="single_image">
        <div style="display: grid;  grid-template-columns: repeat(1, 1fr);gap: 0">
          <img :src="get_image('tags_info.jpg')" class="grid_image" alt="">
        </div>
      </div>

      <div style="display:flex;flex-flow: column;align-items: flex-start;gap: 10px;width: 100%">
        <p>Tags are categorized into different colors representing their sentiment:</p>
        <ul style="line-height: normal;text-align: left">
          <li>Gold: the highest honors, the best at what it does</li>
          <li>Green: Positive</li>
          <li>Purple: Caveat or disclaimer</li>
          <li>Red: Negative</li>
          <li>Grey: Gripe or light criticism</li>
        </ul>
      </div>

      <div style="display:flex;flex-flow: column;align-items: flex-start;gap: 5px;margin-top: 50px;width: 100%">
        <h2 style="color: white">Searchbar</h2>
        <p>Features a flexible keyword-matching search.</p>
      </div>

      <div class="single_image">
        <div style="display: grid;  grid-template-columns: repeat(1, 1fr);gap: 0">
          <img :src="get_image('search_info.jpg')" class="grid_image" alt="">
        </div>
      </div>

      <div style="display:flex;flex-flow: column;align-items: flex-start;gap: 10px;width: 100%">
        <p>Various Filters can also be applied to match specific attributes like: runtime, release date, rating, etc..
          Search fields are matched sequentially:</p>
        <ul style="line-height: normal;text-align: left">
          <li>name</li>
          <li>genre</li>
          <li>tags</li>
          <li>studio</li>
          <li>author</li>
        </ul>
        <p>Each field attempt to find as much as it can and moves to the next if nothing is returned. This allows for a
          more intuitive user experience.</p>
      </div>

      <div style="display:flex;flex-flow: column;align-items: flex-start;gap: 5px;margin-top: 50px;width: 100%">
        <h2 style="color: white">Stats</h2>
        <p>These are really just to satisfy my own curiosity. Each media category can be graphed if the necessary values
          are available.</p>
      </div>

      <div class="single_image">
        <div style="display: grid;  grid-template-columns: repeat(1, 1fr);gap: 0">
          <img :src="get_image('readme_screen_3.jpg')" class="grid_image" alt="">
        </div>
      </div>

      <div style="display:flex;flex-flow: column;align-items: flex-start;gap: 10px;width: 100%">
        <p>If possible the average personal rating and public rating will be plotted against the specified category.</p>
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

p {
  line-height: normal;
}
.trusty_corner_link{
  font-size: 1.3em;
  margin-bottom: -20px;
}
.trusty_corner_link:visited {
  color: #00bd7e;
}
</style>