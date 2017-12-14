<template>
	<li><a :href="note.link">{{note.text}}</a></li>
</template>

<script>
export default {
	props:['note'],
  data () {
    return {

    }
  }
}
</script>

<style>
</style>