<template>
  <footer class="page-footer">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">{{getTitle}}</h5>
          <p class="slogan">{{getSlogan}}</p>
          <iconlink v-for="red in redesSociales" :red="red" :key="red.id"></iconlink>
        </div>
        <div class="col l4 offset-l2 s12">
          <h5 class="white-text">{{interestingLinks.title}}</h5>
          <ul>
            <rootlink v-for="link in interestingLinks.links" :link="link" :key="link.id"></rootlink>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">{{getCopyright}}<a class="grey-text text-lighten-4 right" href="#!">Mas Enlaces</a>
      </div>
    </div>
  </footer>
</template>
<script>
import rootlink from './util/RootLink.vue'
import iconlink from './util/IconLink.vue'
import {mapGetters} from 'vuex'
export default {
  components: {
    rootlink,
    iconlink
  },
  data() {
    return {
    	// title:'Municipalidad Centro Poblado Santa Maria de Huachipa',
    	// slogan:'!Trabajando por el cambio!',
    	// copyright:'© 2017 Copyright Municipalidad del Centro Poblado Santa Maria de Huachipa',
      interestingLinks:{
        title:'Enlaces de interes',
        links:[
          { name:'Enlace 1', path:'#'},
          { name:'Enlace 2', path:'#'},
          { name:'Enlace 3', path:'#'},
          { name:'Enlace 4', path:'#'}
        ]
      },
      redesSociales: [
        { name:'facebook', icon:'fa fa-2x fa-facebook',link:'https://www.facebook.com/municipalidaddehuachipa/'},
        { name:'youtube', icon:'fa fa-2x fa-youtube-play',link:'https://www.youtube.com/channel/UCLZvENxowhzjA53nSRn8H-Q/videos'},
        { name:'twitter', icon:'fa fa-2x fa-twitter',link:'#'},
        { name:'instagram', icon:'fa fa-2x fa-instagram',link:'#'},
        { name:'pinterest', icon:'fa fa-2x fa-pinterest',link:'#'}
      ]
    }
  },
  computed: mapGetters(['getTitle','getSlogan','getCopyright'])
}

</script>
<style>


</style>
