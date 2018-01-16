<template>
  <section id="notes">
		<parallaxnote :imgPath="imgPath"></parallaxnote>
    <div class="container">
      <div class="card hoverable notes-wrapper">
        <div class="row">
					<groupnote v-for="note in notes" :note="note" :key="note.id"></groupnote>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import parallaxnote from './util/ParallaxNote.vue'
import groupnote from "./GroupNote.vue";
export default {
  components: {
    groupnote,
    parallaxnote
  },
  data() {
    return {
      imgPath: '/src/assets/img/background.png',
      notes: [
        {
          title: "Group 1",
          smallDescription: "Title 1",
          items: [
            { name: "Texto", path: "#" },
            { name: "Texto", path: "#" },
            { name: "Texto", path: "#" },
            { name: "Texto", path: "#" }
          ]
        },
        {
          title: "Group 2",
          smallDescription: "Title 2",
          items: [
            { name: "Texto", path: "#" },
            { name: "Texto", path: "#" },
            { name: "Texto", path: "#" },
            { name: "Texto", path: "#" }
          ]
        },
        {
          title: "Group 3",
          smallDescription: "Title 3",
          items: [
            { name: "Texto", path: "#" },
            { name: "Texto", path: "#" },
            { name: "Texto", path: "#" },
            { name: "Texto", path: "#" }
          ]
        }
      ]
    };
  }
};
</script>
