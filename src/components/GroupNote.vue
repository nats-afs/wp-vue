<template>
  <div class="col s4">
    <div class="container">
      <h5>{{note.title}}</h5>
      <p class="flow-text">{{note.smallDescription}}</p>
      <ul>
        <rootlink v-for="item in note.items" :link="item" :key="item.id"></rootlink>
      </ul>
    </div>
  </div>
</template>
<script>
import rootlink from './RootLink.vue'
export default {
	components:{
		rootlink
	},
	props:['note']
}

</script>
<style>


</style>
