<template>
  <div>
    <ownheader></ownheader>
    <ownnav></ownnav>
    <ownmain></ownmain>
    <ownfooter></ownfooter>
  </div>
</template>
<script>
import ownheader from './components/OwnHeader.vue'
import ownnav from './components/OwnNav.vue'
import ownmain from './components/OwnMain.vue'
import ownfooter from './components/OwnFooter.vue'
export default {
  components: {
    ownmain,
    ownheader,
    ownnav,
    ownfooter
  },
  data() {
    return {

    }
  }
}

</script>
<style>


</style>
