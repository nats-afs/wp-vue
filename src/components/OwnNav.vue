<template>
	<div id="nav-header">
    <div class="container">
      <nav class="navbar-main">
        <div class="nav-wrapper">
					<sidenav></sidenav>
          <ul class="hide-on-med-and-down">
            <li><a class="dropdown-button" href="#!" data-activates='dropdown2'>Inicio</a></li>
            <rootlink v-for="link in links" :link="link" :key="link.id"></rootlink>
          </ul>
          <ul id='dropdown2' class='dropdown-content'>
            <li><a href="#!">one</a></li>
            <li><a href="#!">two</a></li>
            <li class="divider"></li>
            <li><a href="#!">three</a></li>
            <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
            <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </div>	
</template>

<script>
import rootlink from './RootLink.vue'
import sidenav from './SideNav.vue'
export default {
  components: {
    rootlink,
    sidenav
  },
  data () {
    return {
			links: [
        { name: 'Noticias', path: '#' },
        { name: 'Directorio', path: '#' },
        { name: 'Eventos', path: '#' },
        { name: 'Galeria', path: '#' },
        { name: 'Documentos', path: '#' }
      ]
    }
  }
}
</script>

<style>
</style>