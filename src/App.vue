<template>
	<div>
    <news></news>
    <notes></notes>
		<events></events>
  	<media></media> 
	</div>
</template>
<script>
import news from './components/News.vue'
import notes from './components/Notes.vue'
import media from './components/Media.vue'
import events from './components/Events.vue'
export default {
  components: {
    news,
    media,
    events,
    notes
  },
  data() {
    return {

    }
  }
}

</script>
<style>


</style>
