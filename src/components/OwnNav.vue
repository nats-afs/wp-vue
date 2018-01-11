<template>
  <div id="nav-header">
    <div class="container">
      <nav class="navbar-main">
        <div class="nav-wrapper">
          <!-- <sidenav></sidenav> -->
          <ul class="hide-on-med-and-down">
            <template v-for="link in getLinksNav">
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
      </nav>
    </div>
  </div>
</template>
<script>
import rootlink from "./RootLink.vue";
import parentlink from "./ParentLink.vue";
import sidenav from "./SideNav.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    rootlink,
    parentlink,
    sidenav
  },
  data() {
    return {

    }
  },
  computed: mapGetters(['getLinksNav'])
};
</script>
<style>

</style>
