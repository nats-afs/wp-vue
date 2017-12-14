<template>
  <section id="news">
    <div class="container news-wrapper">
      <div class="row valign-wrapper">
        <div class="col s12 m4 l4 news-title">
          <div class="">
            <h2>{{title}}</h2>
            <p class="flow-text">{{description}}</p>
            <a class="waves-effect btn-flat pulse">Leer mas <i class="material-icons">more_horiz</i></a>
          </div>
        </div>
        <div class="col s12 m8 l8 news-content">
          <div class="row">
            <div class="carousel">
              <newitem v-for="newitem in news" :newitem="newitem" :key="newitem.id"></newitem>
            </div>
          </div>
          <div class="news-navigation hide-on-small-only">
            <a class="news-nav-left btn-floating btn-large waves-effect waves-light"><i class="material-icons">arrow_back</i></a>
            <a class="news-nav-right btn-floating btn-large waves-effect waves-light"><i class="material-icons">arrow_forward</i></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import newitem from './NewItem.vue'
export default {
  components: {
    newitem
  },
  data() {
    return {
      title: 'Ultimas Noticias',
      description: 'Informese sobre las nuevas noticias de su ciudad',
      news: [
        { title : "Noticia 1", imgPath : "/src/assets/img/200.jpg", link : "#", linkText : "Enlace 1", actionLink1 : "#", actionLink2 : "#", actionLinkText1 : "Accion 1", actionLinkText2 : "Accion 2" },
        { title : "Noticia 2", imgPath : "/src/assets/img/200.jpg", link : "#", linkText : "Enlace 1", actionLink1 : "#", actionLink2 : "#", actionLinkText1 : "Accion 1", actionLinkText2 : "Accion 2" },
        { title : "Noticia 3", imgPath : "/src/assets/img/200.jpg", link : "#", linkText : "Enlace 1", actionLink1 : "#", actionLink2 : "#", actionLinkText1 : "Accion 1", actionLinkText2 : "Accion 2" },
        { title : "Noticia 4", imgPath : "/src/assets/img/200.jpg", link : "#", linkText : "Enlace 1", actionLink1 : "#", actionLink2 : "#", actionLinkText1 : "Accion 1", actionLinkText2 : "Accion 2" },
        { title : "Noticia 1", imgPath : "/src/assets/img/200.jpg", link : "#", linkText : "Enlace 1", actionLink1 : "#", actionLink2 : "#", actionLinkText1 : "Accion 1", actionLinkText2 : "Accion 2" },
        { title : "Noticia 2", imgPath : "/src/assets/img/200.jpg", link : "#", linkText : "Enlace 1", actionLink1 : "#", actionLink2 : "#", actionLinkText1 : "Accion 1", actionLinkText2 : "Accion 2" },
        { title : "Noticia 3", imgPath : "/src/assets/img/200.jpg", link : "#", linkText : "Enlace 1", actionLink1 : "#", actionLink2 : "#", actionLinkText1 : "Accion 1", actionLinkText2 : "Accion 2" },
        { title : "Noticia 4", imgPath : "/src/assets/img/200.jpg", link : "#", linkText : "Enlace 1", actionLink1 : "#", actionLink2 : "#", actionLinkText1 : "Accion 1", actionLinkText2 : "Accion 2" }
      ]
    }
  }
}

</script>
<style>


</style>
