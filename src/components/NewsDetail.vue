<template>
  <article>
    <h4>{{news.title}}</h4>
    <small>{{news.date}}</small>
    <img class="responsive-img" :src="news.image" alt="">
    <p>{{news.description}}</p>
  </article>
</template>
<script>
export default {
  props:['news'],
  data(){
    return{
      // news: null
    }
  }
}
</script>
<style lang="scss" scoped>
  img{
    margin: 1em auto;
  }
</style>
