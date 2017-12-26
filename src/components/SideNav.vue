<template>
  <!--         SIDENAV MOBILE-->
  <div>
    <a href="#" data-activates="mobile-sidenav" class="button-collapse valign-wrapper"><i class="material-icons">menu</i> Menu</a>
    <ul class="side-nav" id="mobile-sidenav">
      <li><a class="dropdown-button" href="#!" data-activates='dropdown2'>Inicio</a></li>
      <rootlink v-for="link in linksNav" :link="link" :key="link.id"></rootlink>
      <li class="divider"></li>
      <rootlink v-for="link in linksHeader" :link="link" :key="link.id">
        <template v-if="link.icon"><i :class="link.icon"></i></template>
      </rootlink>
    </ul>
  </div>
  <!--          END SIDENAV-->
</template>
<script>
import rootlink from './RootLink.vue'
export default {
  components: {
    rootlink
  },
  data() {
    return {
      linksNav: [
        { name: 'Noticias', path: '#' },
        { name: 'Directorio', path: '#' },
        { name: 'Eventos', path: '#' },
        { name: 'Galeria', path: '#' },
        { name: 'Documentos', path: '#' }
      ],
      linksHeader: [
        { name: 'Distrito', icon: 'fa fa-fw fa-institution', path: 'distrito.html' },
        { name: 'Municipalidad', icon: 'fa fa-fw fa-building-o', path: 'municipalidad.html' },
        // { name: 'Servicios', icon: 'fa fa-fw fa-smile-o', path: '#' },
        { name: 'Link', path: '#' },
      ]
    }
  }
}

</script>
<style>


</style>
