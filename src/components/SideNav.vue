<template>
  <!--         SIDENAV MOBILE-->
  <!-- mejorar esto de tipo acordeon -->
  <div>
    <a href="#" data-activates="mobile-sidenav" class="button-collapse valign-wrapper"><i class="material-icons">menu</i> Menu</a>
    <ul class="side-nav" id="mobile-sidenav">
      <template v-for="link in linksNav">
        <template v-if="link.children">
          <parentlink :link="link" :key="link.id"><i v-if="link.icon" :class="link.icon"></i></parentlink>
          <ul :id="link.ref" class="dropdown-content">
            <rootlink v-for="link in link.children" :link="link" :key="link.id"></rootlink>
          </ul>
        </template>
        <rootlink v-else :link="link" :key="link.id"><i v-if="link.icon" :class="link.icon"></i></rootlink>
      </template>
      <!-- divider -->
      <li class="divider"></li>
      <!--  -->
      <template v-for="link in linksHeader">
        <template v-if="link.children">
          <parentlink :link="link" :key="link.id"><i v-if="link.icon" :class="link.icon"></i></parentlink>
          <ul :id="link.ref" class="dropdown-content">
            <rootlink v-for="link in link.children" :link="link" :key="link.id"></rootlink>
          </ul>
        </template>
        <rootlink v-else :link="link" :key="link.id"><i v-if="link.icon" :class="link.icon"></i></rootlink>
      </template>
    </ul>
  </div>
  <!--          END SIDENAV-->
</template>
<script>
import rootlink from './RootLink.vue'
import parentlink from './ParentLink.vue'
export default {
  components: {
    rootlink,
    parentlink
  },
  data() {
    return {
      linksNav: [{
          name: 'Inicio',
          ref: 'dropdown5',
          children: [
            { name: 'Inicio 1', path: 'distrito.html' },
            { name: 'Inicio 2', path: 'distrito.html' },
          ]
        },
        { name: 'Noticias', path: '#' },
        { name: 'Directorio', path: '#' },
        { name: 'Eventos', path: '#' },
        {
          name: 'Galeria',
          ref: 'dropdown6',
          children: [
            { name: 'Galeria 1', path: 'distrito.html' },
            { name: 'Galeria 2', path: 'distrito.html' },
          ]
        },
        { name: 'Documentos', path: '#' }
      ],
      linksHeader: [
        { name: 'Distrito', icon: 'fa fa-fw fa-institution', path: 'distrito.html' },
        { name: 'Municipalidad', icon: 'fa fa-fw fa-building-o', path: 'municipalidad.html' },
        {
          name: 'Servicios',
          icon: 'fa fa-fw fa-smile-o',
          ref: 'dropdown7',
          children: [
            { name: 'Servicio 1', path: 'distrito.html' },
            { name: 'Servicio 2', path: 'distrito.html' },
          ]
        },
        {
          name: 'Mas',
          icon: 'fa fa-fw fa-smile-o',
          ref: 'dropdown8',
          children: [
            { name: 'Servicio 1', path: 'distrito.html' },
            { name: 'Servicio 2', path: 'distrito.html' },
          ]
        }
      ]
    }
  }
}

</script>
<style>


</style>
