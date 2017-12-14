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
import documents from './Documents.vue'
import gallery from './Gallery.vue'
import places from './Places.vue'

export default {
  components: {
    documents,
    gallery,
    places
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>