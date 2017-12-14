<template>
  <section id="notes">
    <div class="row">
      <div class="parallax-container">
        <div class="parallax"><img :src="imgPath"></div>
      </div>
    </div>
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
import groupnote from './GroupNote.vue'
export default {
	components:{
		groupnote
	},
  data() {
    return {
    	imgPath:'/src/assets/img/background.png',
    	notes:[
    		{
    			title:'Group 1',
    			smallDescription:'Some Text',
    			items:[
	    			{text:'Texto',link:'#'},
	    			{text:'Texto',link:'#'},
	    			{text:'Texto',link:'#'},
	    			{text:'Texto',link:'#'}
    			]
    		},
    		{
    			title:'Group 2',
    			smallDescription:'Some Text',
    			items:[
	    			{text:'Texto',link:'#'},
	    			{text:'Texto',link:'#'},
	    			{text:'Texto',link:'#'},
	    			{text:'Texto',link:'#'}
    			]
    		},
    		{
    			title:'Group 3',
    			smallDescription:'Some Text',
    			items:[
	    			{text:'Texto',link:'#'},
	    			{text:'Texto',link:'#'},
	    			{text:'Texto',link:'#'},
	    			{text:'Texto',link:'#'}
    			]
    		},    		    		
    	]
    }
  }
}
</script>
<style>


</style>
