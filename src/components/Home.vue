<template>
  <div>
    <ownheader></ownheader>
    <ownnav></ownnav>
    <router-view></router-view>
    <ownfooter></ownfooter>
  </div>
</template>
<script>
import ownfooter from './OwnFooter.vue'
import ownheader from './OwnHeader.vue'
import ownnav from './OwnNav.vue'
export default {
  
  components:{
      ownfooter,
      ownnav,
      ownheader
  }
}
</script>

<style lang="scss">

</style>
