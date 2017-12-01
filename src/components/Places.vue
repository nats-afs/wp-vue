<template>
	<div class="col s12 m4 l4 lugares">
    <h4>{{title}}</h4>
		<placeitem v-for="place in places" :key="place.id" :place="place"></placeitem>	
	</div>
</template>

<script>
import placeitem from './PlaceItem.vue'
export default {
  components:{
    placeitem
  },
  data () {
    return {
      title:'Lugares',
    	places:[
    		{name:'Plaza Mayor',address:'El Club II Etapa Mz. I-2',schedule:'Todos los dias 8am - 6pm',link:'#',imgPath:'/src/assets/img/img1s.jpg'},
    		{name:'Club Sparza',address:'Calle 1 Huachipa Norte',schedule:'Todos los dias 8am - 6pm',link:'#',imgPath:'/src/assets/img/img2s.jpg'},
    		{name:'Iglesia Santa Maria',address:'Av. Las Perdices 321',schedule:'Todos los dias 8am - 6pm',link:'#',imgPath:'/src/assets/img/img3s.jpg'}
    	]
    }
  }
}
</script>

<style>
</style>