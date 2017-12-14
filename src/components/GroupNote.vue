<template>
  <div class="col s4">
    <div class="container">
      <h5>{{note.title}}</h5>
      <p class="flow-text">{{note.smallDescription}}</p>
      <ul>
        <noteitem v-for="item in note.items" :note="item" :key="item.id"></noteitem>	
      </ul>
    </div>
  </div>
</template>
<script>
import noteitem from './NoteItem.vue'
export default {
	components:{
		noteitem
	},
	props:['note']
}

</script>
<style>


</style>
