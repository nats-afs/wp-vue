<template>
  <div class="container header-bottom valign-wrapper hide-on-med-and-down">
    <ul id="dropdown1" class="dropdown-content">
      <li><a href="#!">one</a></li>
      <li><a href="#!">two</a></li>
      <li class="divider"></li>
      <li><a href="#!">three</a></li>
    </ul>
    <nav>
      <div class="nav-wrapper">
        <ul class="left">
          <rootlink v-for="link in links" :link="link" :key="link.id"><template v-if="link.icon"><i :class="link.icon"></i></template></rootlink>
          <!-- <li><a class="dropdown-button" data-activates="dropdown1"><i class="fa fa-fw fa-smile-o"></i>  Servicios<i class="material-icons right">arrow_drop_down</i></a></li> -->
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
import rootlink from './RootLink.vue'
export default {
  components: {
    rootlink
  },
  data() {
    return {
      links: [
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
