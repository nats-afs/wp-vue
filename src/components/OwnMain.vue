<template>
    <section>
      <news></news>
      <notes></notes>
      <events></events>
      <media></media> 
    </section>
</template>

<script>
import news from './News.vue'
import notes from './Notes.vue'
import media from './Media.vue'
import events from './Events.vue'
export default {
  components: {
    news,
    media,
    events,
    notes},
  data () {
    return {

    }
  }
}
</script>

<style>
</style>