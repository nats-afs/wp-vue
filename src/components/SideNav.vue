<template>
  <!--         SIDENAV MOBILE-->
  <!-- mejorar esto de tipo acordeon -->
  <div>
    <a href="#" data-activates="mobile-sidenav" class="button-collapse valign-wrapper"><i class="material-icons">menu</i> Menu</a>
    <ul class="side-nav" id="mobile-sidenav">
      <template v-for="link in getLinksNav">
        <template v-if="link.children">
          <parentlink :link="link" :key="link.id"><i v-if="link.icon" :class="link.icon"></i></parentlink>
          <ul :id="link.ref" :key="link.id" class="dropdown-content">
            <rootlink v-for="link in link.children" :link="link" :key="link.id"></rootlink>
          </ul>
        </template>
        <rootlink v-else :link="link" :key="link.id"><i v-if="link.icon" :class="link.icon"></i></rootlink>
      </template>
      <!-- divider -->
      <li class="divider"></li>
      <!--  -->
      <template v-for="link in getLinksHeader">
        <template v-if="link.children">
          <parentlink :link="link" :key="link.id"><i v-if="link.icon" :class="link.icon"></i></parentlink>
          <ul :id="link.ref" :key="link.id" class="dropdown-content">
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
import { mapGetters } from "vuex";
export default {
  components: {
    rootlink,
    parentlink
  },
  data() {
    return {
     
    }
  },
  computed: mapGetters(["getLinksHeader","getLinksNav"])
}

</script>
<style>


</style>
