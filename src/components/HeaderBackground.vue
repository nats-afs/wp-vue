<template>
  <div class="header-wrapper valign-wrapper">
    <div class="muni-logo">
      <div class="valign-wrapper"><img class="responsive-img" :src="imgPath" :alt="getTitle + ' ' + getSlogan"></div>
      <div class="">
        <h4>{{getTitle}}</h4>
        <p class="slogan">{{getSlogan}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {


  data() {
    return {
      imgPath: '/src/assets/img/logo_wd.png'
    }
  },
  computed: mapGetters(['getTitle','getSlogan'])
}

</script>
<style>


</style>
