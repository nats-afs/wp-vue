<template>
  <div class="col s12 m4 l4 galeria">
    <h4>{{title}}</h4>
    <div class="row" v-if="gallery.length">
    	<div class="col s4">
    		<img class="responsive-img" :src="randomImage.src" :alt="randomImage.caption" @click="openGallery">
				<lightbox :images="gallery" ref="lightbox" :show-caption="true" :showLightBox="false"></lightbox>
    	</div>
    	<div class="col 8">
    		<h5>Mensaje</h5>
    	</div>
    </div>
  </div>
</template>
<script>
	import {galleryRef} from "../config/firebaseConfig"
	import Lightbox from 'vue-image-lightbox'
	require('vue-image-lightbox/dist/vue-image-lightbox.min.css')
	import groupgallery from './GroupGallery.vue'
	export default{
		components:{
			groupgallery,
			Lightbox
		},
		data: () => ({
			title: 'Ultimas Fotos',
			gallery: []
		}),
		created() {
	    galleryRef.limitToLast(15).orderByChild('group').on('value', snapshot => {
	    	this.setPictures(snapshot.val())
	    })
  	},
	  methods: {
	  	setPictures(data){
	  		this.gallery = []
	  		for(let key in data){
	  			this.gallery.push({
	  				caption: data[key].caption,
	          group: data[key].group,
	          src: data[key].src,
	          thumb: data[key].thumb
	  			})
	  		}
	  	},
	      openGallery() {
	      this.$refs.lightbox.showImage(1)
	    }
	  },
	  computed:{
	  	randomImage(){
	  		let size = this.gallery.length
	  		let indice = Math.floor(Math.random() * size); 
	  		return this.gallery[indice]
	  	}
	  }
	}

</script>

<style>


</style>
