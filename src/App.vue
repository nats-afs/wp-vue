<template>
  <section id="media">
    <div class="container">
      <div class="row">
        <places></places>
        <gallery></gallery>
        <documents></documents>
      </div>
    </div>
  </section>
</template>
<script>
import documents from './components/Documents.vue'
import gallery from './components/Gallery.vue'
import places from './components/Places.vue'
export default {
  components: {
    documents,
    gallery,
    places
  },
  data() {
    return {

    }
  }
}

</script>
<style>


</style>
