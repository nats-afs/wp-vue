<template>
  <section id="noticias">
    <div class="container">
      <div class="row noticias-wrapper">
        <div class="col s8">
          <div class="news-main">
            <h1>Noticias</h1>
            <p>Informate de lo sucedido en tu distrito</p>
            <router-view></router-view>
          </div>
        </div>
        <div class="col s4">
          <div class="news-sidebar">
            <div class="featured-post">
              <div class="col s12">
                <h5>Noticia Destacada</h5>
                <newitem :newitem="featuredPost"></newitem>
              </div>
            </div>
            <div class="news-list">
              <div class="col s12">
                <h5>Ultimas Noticias</h5>
                <div class="container">
                  <div class="row">
                    <div class="col s12">
                      <div class="valign-wrapper">
                        <preloader :loading="load"></preloader> 
                      </div>
                    </div>
                  </div>
                </div>
                <noticiaitem v-for="noticia in news" :key="noticia.id" :noticia="noticia"></noticiaitem>
                <div class="container more">
                  <div class="center-align">
                    <a href="#" class="waves-effect btn-flat">Mas <i class="material-icons">more_horiz</i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import noticiaitem from "./NoticiaItem.vue";
import preloader from "./util/PreLoader.vue";
import newitem from "./NewItem.vue";
import { newsRef } from "../config/firebaseConfig";
export default {
  components: {
    newitem,
    noticiaitem,
    preloader
  },
  data() {
    return {
      featuredPost: {
        title: "Noticia 1",
        imgPath: "/src/assets/img/200.jpg",
        link: "#",
        linkText: "Enlace 1",
        actionLink1: "#",
        actionLink2: "#",
        actionLinkText1: "Accion 1",
        actionLinkText2: "Accion 2"
      },
      load:false,
      news: []
    };
  },
  // firebase:{
  //   news: newsRef.limitToLast(5)
  // },
  created() {
    newsRef.on("child_added", data => this.addNews(data.key, data))
    newsRef.on("child_changed", data => console.log('noticia modificada: ' + data.val().title) )
  },
  methods: {
    addNews(id, data) {
      this.load = true;
      this.news.push({
        uid: id,
        title: data.val().title,
        date: data.val().date,
        image: data.val().image,
        description: data.val().description
      });
    }
  }
};
</script>
<style lang="scss" scoped>
#noticias {
  margin: 1.5em auto;
  .noticias-wrapper {
    // display: grid;
    grid-gap: 2em;
    grid-template-columns: 2fr 1fr;
  }
  .card-content,
  .card-action {
    padding: 12px;
  }
}
h5 {
  margin: 2em auto;
}
img {
  height: 150px !important;
  width: 150px !important;
}
.news-list {
  h5.news-title {
    margin: 0 auto;
    font-size: 12pt;
    font-weight: 300;
  }
}
.more {
  margin: 3em auto;
  i {
    vertical-align: middle;
  }
}
@media only screen and (max-width: 992px) {
  #noticias {
    margin: 1.5em auto;
    .noticias-wrapper {
      display: grid;
      grid-gap: 1em;
      grid-template-columns: 1fr;
    }
  }
}
</style>