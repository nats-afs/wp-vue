<template>
  <div id="nav-header">
    <div class="container">
      <nav class="navbar-main">
        <div class="nav-wrapper">
          <sidenav></sidenav>
          <ul class="hide-on-med-and-down">
            <template v-for="link in links">
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
      </nav>
    </div>
  </div>
</template>
<script>
import rootlink from './RootLink.vue'
import parentlink from './ParentLink.vue'
import sidenav from './SideNav.vue'
export default {
  components: {
    rootlink,
    parentlink,
    sidenav
  },
  data() {
    return {
      links: [{
          name: 'Inicio',
          ref: 'dropdown3',
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
          ref: 'dropdown4',
          children: [
            { name: 'Galeria 1', path: 'distrito.html' },
            { name: 'Galeria 2', path: 'distrito.html' },
          ]
        },
        { name: 'Documentos', path: '#' }
      ]
    }
  }
}

</script>
<style>


</style>
