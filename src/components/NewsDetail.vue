<template>
  <article>
    <h4>{{news.title}}</h4>
    <small>{{news.date}}</small>
    <img class="responsive-img" :src="news.image" alt="">
    <p>{{news.description}}</p>
  </article>
</template>
<script>
import { newsRef } from "../config/firebaseConfig";
export default {
  props: ["uid"],
  data() {
    return {
      news: {
        title: null,
        date: null,
        image: null,
        description: null
      }
    }
  },
  // created() {
  //   this.setRef()
  // },
  beforeRouteUpdate: (to, front, next) => {
    console.log("Otra ruta " + to.path);
    this.setRef();
    next();
  },
  computed: {
    setRef() {
      console.log(this.uid);
      newsRef.child(this.uid).on("value", snapshot => this.setNews(snapshot));
    }
  },
  methods: {
    setNews(news) {
      this.news.title = news.val().title;
      this.news.date = news.val().date;
      this.news.image = news.val().image;
      this.news.description = news.val().description;
    }
  }
};
</script>
<style lang="scss" scoped>
img {
  margin: 1em auto;
}
</style>
