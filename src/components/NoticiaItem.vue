<template>
  <div class="card horizontal small hoverable">
    <div class="card-image">
      <img :src="noticia.image">
    </div>
    <div class="card-stacked">
      <div class="card-content">
        <h6 class="news-title">{{noticia.title}}</h6>
        <small>{{noticia.date}}</small>
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
<style lang="scss" scoped>
  .small{
    height: 180px;
  }
</style>

