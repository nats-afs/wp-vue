<template>
  <article>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto numquam perspiciatis quia et optio ex consequatur dignissimos deleniti libero fugit expedita, nisi dolor ab veritatis maiores totam odio placeat praesentium.
    <!-- <h4>{{news.title}}</h4>
    <small>{{news.date}}</small>
    <img class="responsive-img" :src="news.image" alt="">
    <p>{{news.description}}</p> -->
  </article>
</template>
<script>
import { newsRef } from "../config/firebaseConfig";
export default {
  data() {
    return {
      news: null
    }
  }
  // ,
  // firebase: function() {
  //   return {
  //     noticia: newsRef.limitToLast(1)
  //   }
  // },
  // created(){
  //   this.news = this.noticia
  // }
}
</script>
<style lang="scss" scoped>
img {
  margin: 1em auto;
}
</style>
