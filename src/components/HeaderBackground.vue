<template>
  <div class="header-wrapper valign-wrapper">
    <div class="muni-logo">
      <div class="valign-wrapper"><img class="responsive-img" :src="getLogo" :alt="getTitle + ' ' + getSlogan"></div>
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
  data: ()=> ({
  }),
  computed:{
    ...mapGetters(['getTitle','getSlogan','getLogo']),
  } 
}

</script>
<style>


</style>
