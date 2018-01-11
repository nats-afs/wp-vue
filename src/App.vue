<template>
  <div>
    <ownheader></ownheader>
    <ownnav></ownnav>
    <router-view></router-view>
    <ownfooter></ownfooter>
  </div>
</template>
<script>
import ownheader from "./components/OwnHeader.vue";
import ownnav from "./components/OwnNav.vue";
import ownfooter from "./components/OwnFooter.vue";
export default {
  components: {
    ownheader,
    ownnav,
    ownfooter
  },
  data() {
    return {};
  }
};
</script>
<style>

</style>
