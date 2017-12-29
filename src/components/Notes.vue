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
    			smallDescription:'Title 1',
    			items:[
	    			{name:'Texto',path:'#'},
	    			{name:'Texto',path:'#'},
	    			{name:'Texto',path:'#'},
	    			{name:'Texto',path:'#'}
    			]
    		},
    		{
    			title:'Group 2',
    			smallDescription:'Title 2',
    			items:[
	    			{name:'Texto',path:'#'},
	    			{name:'Texto',path:'#'},
	    			{name:'Texto',path:'#'},
	    			{name:'Texto',path:'#'}
    			]
    		},
    		{
    			title:'Group 3',
    			smallDescription:'Title 3',
    			items:[
	    			{name:'Texto',path:'#'},
	    			{name:'Texto',path:'#'},
	    			{name:'Texto',path:'#'},
	    			{name:'Texto',path:'#'}
    			]
    		},    		    		
    	]
    }
  }
}
</script>
<style>


</style>
