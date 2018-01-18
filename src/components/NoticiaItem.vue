<template>
  <div class="card horizontal hoverable">
    <div class="card-image">
      <img :src="noticia.image">
    </div>
    <div class="card-stacked">
      <div class="card-content">
        <h5 class="news-title">{{noticia.title}}</h5>
        <small>16-01-2018</small>
      </div>
      <div class="card-action">
        <a href="#">Leer mas</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:['noticia'],
  data() {
    return {};
  }
};
</script>
<style lang="scss">

</style>

