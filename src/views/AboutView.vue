<script setup>
import {inject, onMounted, watch, ref, computed, onBeforeMount} from "vue";
import profile from '../assets/people_icons/arthur_s.webp'
import location from '../assets/software_icons/location.webp'
import envelope from '../assets/software_icons/envelope.webp'
import linkedin from '../assets/software_icons/linkedin.webp'
import github from '../assets/software_icons/github.webp'
import {openNewTab} from "@/scripts/helpers.js";

let props = defineProps({
  test: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <div class="about_cont">

    <div class="personal">
      <img :src="profile" alt="profile" class="prof_pic" rel="preload">

      <div class="info">
        <h1 style="color: white;font-size: 2em">Arthur Sirjacobs</h1>
        <h2>Houdini FX Artist</h2>

        <div style="display: flex;gap: 5px;align-items: center;margin-top: 20px">
          <img style="width: 15px;opacity: 50%" :src="location" alt="location" rel="preload">
          <h2 style="font-size: 0.8em;transform: translate(0,-1px)">Vancouver BC - Canada</h2>
        </div>
      </div>

    </div>

    <div class="contact" style="max-width: 1000px;">
      <h1 style="color: white;font-size: 1.3em;">About</h1>
      <div class="contact_links" style="line-height: 1.5">
        Creative tech artist focused on simulations and procedural tools development. Strong background
        in film production and visual effects. Looking to be part of, and learn more about the professional
        pipeline and related fields. Interested in new technologies and their practical applications.
      </div>
    </div>

    <div class="contact">
      <h1 style="color: white;font-size: 1.3em;">Contact</h1>
      <div class="contact_links">

        <div class="contact_cont" style="cursor: text">
          <img :src="envelope" alt="envelope" style="width: 15px" rel="preload">
          <h2>sirjacobs.arthur@gmail.com</h2>
        </div>

        <div class="contact_cont" @click="openNewTab('https://www.linkedin.com/in/arthur-sirjacobs/')">
          <img :src="linkedin" alt="linkedin" style="width: 15px" rel="preload">
          <h2>LinkedIn</h2>
        </div>

        <div class="contact_cont" @click="openNewTab('https://github.com/TrustyF')">
          <img :src="github" alt="github" style="width: 15px" rel="preload">
          <h2>Github</h2>
        </div>

      </div>
    </div>
  </div>
  <div style="height: 70px"></div>
</template>

<style scoped>
.about_cont {
  display: flex;
  flex-flow: column wrap;
  gap: 50px;
}

.personal {
  /*outline: 1px solid red;*/
  display: flex;
  flex-flow: row;
  gap: 40px;
  align-items: center;
  /*justify-content: center;*/
  /*width: fit-content;*/
  /*background-color: #383838;*/
  /*box-shadow: 0 0 0 100vmax #383838;*/
  /*clip-path: inset(0 -100vmax);*/
  /*padding: 20px;*/
  border-radius: 10px;
}

.prof_pic {
  width: 200px;
  height: 200px;
  border-radius: 5%;
  object-fit: cover;

  animation: fadein 0.25s;
}

.info {
  display: flex;
  flex-flow: column;
  gap: 5px;
}

.contact {
  display: flex;
  flex-flow: column;
  gap: 10px;
}

.contact_links {
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
}

.contact_cont {
  display: flex;
  flex-flow: row nowrap;
  gap: 5px;
  padding: 11px;
  border-radius: 5px;
  background-color: #383838;
  cursor: pointer;
  transition: 100ms ease;
}

.contact_cont:hover {
  background-color: #13392c;
}

h2 {
  font-size: 1em;
}

@media only screen and (max-width: 660px) {
  .personal {
    flex-flow: column;
  }

  .contact_links {
    flex-flow: row wrap;
  }
}
</style>