<template>
  <div class="container header-bottom valign-wrapper hide-on-med-and-down">
    <nav>
      <div class="nav-wrapper">
        <ul class="left">
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
      links: [
        { name: 'Distrito', icon: 'fa fa-fw fa-institution', path: 'distrito.html' },
        { name: 'Municipalidad', icon: 'fa fa-fw fa-building-o', path: 'municipalidad.html' },
        {
          name: 'Servicios',
          icon: 'fa fa-fw fa-smile-o',
          ref: 'dropdown1',
          children: [
            { name: 'Servicio 1', path: 'distrito.html' },
            { name: 'Servicio 2', path: 'distrito.html' },
          ]
        },
        {
          name: 'Mas',
          icon: 'fa fa-fw fa-smile-o',
          ref: 'dropdown3',
          children: [
            { name: 'Servicio 1', path: 'distrito.html' },
            { name: 'Servicio 2', path: 'distrito.html' },
          ]
        },
      ]
    }
  }
}

</script>
<style>


</style>
