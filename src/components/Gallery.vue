<template>
  <div class="col s12 m4 l4 galeria">
    <h4>{{title}}</h4>
		<groupgallery v-for="gallery in galleries" :key="gallery.id" :gallery="gallery"></groupgallery>	
  </div>
</template>
<script>
	import groupgallery from './GroupGallery.vue'
	export default{
		components:{
			groupgallery
		},
		data(){
			return {
				title:'Ultimas fotos',
				galleries:[
					{
						place: 'Palacio Municipal',
		        date: '13 de Enero',
		        items: [
		          { smallPath: '/src/assets/img/img1s.jpg', bigPath: '/src/assets/img/img1b.jpg', group: 'gallery1', caption: 'caption 1' , main: false},
		          { smallPath: '/src/assets/img/img2s.jpg', bigPath: '/src/assets/img/img2b.jpg', group: 'gallery1', caption: 'caption 2' , main: true},
		          { smallPath: '/src/assets/img/img3s.jpg', bigPath: '/src/assets/img/img3b.jpg', group: 'gallery1', caption: 'caption 3' , main: false},
		          { smallPath: '/src/assets/img/img4s.jpg', bigPath: '/src/assets/img/img4b.jpg', group: 'gallery1', caption: 'caption 4' , main: false}
		        ]					
					},
					{
						place: 'Palacio Municipal',
		        date: '13 de Enero',
		        items: [
		          { smallPath: '/src/assets/img/img1s.jpg', bigPath: '/src/assets/img/img1b.jpg', group: 'gallery1', caption: 'caption 1' , main: false},
		          { smallPath: '/src/assets/img/img2s.jpg', bigPath: '/src/assets/img/img2b.jpg', group: 'gallery1', caption: 'caption 2' , main: true},
		          { smallPath: '/src/assets/img/img3s.jpg', bigPath: '/src/assets/img/img3b.jpg', group: 'gallery1', caption: 'caption 3' , main: false},
		          { smallPath: '/src/assets/img/img4s.jpg', bigPath: '/src/assets/img/img4b.jpg', group: 'gallery1', caption: 'caption 4' , main: false}
		        ]					
					},
					{
						place: 'Palacio Municipal',
		        date: '13 de Enero',
		        items: [
		          { smallPath: '/src/assets/img/img1s.jpg', bigPath: '/src/assets/img/img1b.jpg', group: 'gallery1', caption: 'caption 1' , main: false},
		          { smallPath: '/src/assets/img/img2s.jpg', bigPath: '/src/assets/img/img2b.jpg', group: 'gallery1', caption: 'caption 2' , main: true},
		          { smallPath: '/src/assets/img/img3s.jpg', bigPath: '/src/assets/img/img3b.jpg', group: 'gallery1', caption: 'caption 3' , main: false},
		          { smallPath: '/src/assets/img/img4s.jpg', bigPath: '/src/assets/img/img4b.jpg', group: 'gallery1', caption: 'caption 4' , main: false}
		        ]					
					}
				]
			}
		}
	}

</script>
<style>


</style>
