// componentes

Vue.component('own-header', {
  template: '\
<header>\
  <div class="header-wrapper valign-wrapper">\
    <div class="muni-logo">\
      <div class="valign-wrapper"><img class="responsive-img" src="img/logo_wd.png" alt=""></div>\
      <div class="">\
        <h4>Municipalidad Centro Poblado Santa Maria de Huachipa</h4>\
        <p class="slogan">!Trabajando por el cambio!</p>\
      </div>\
    </div>\
  </div>\
  <div class="container header-bottom valign-wrapper hide-on-med-and-down">\
    <ul id="dropdown1" class="dropdown-ontent">\
      <li><a href="#!">one</a></li>\
      <li><a href="#!">two</a></li>\
      <li class="divider"></li>\
      <li><a href="#!">three</a></li>\
    </ul>\
    <nav>\
      <div class="nav-wrapper">\
        <ul class="left">\
          <li><a href="sass.html"><i class="fa fa-fw fa-institution"></i> Distrito</a></li>\
          <li><a href="municipalidad.html"><i class="fa fa-fw fa-building-o"></i> Municipalidad</a></li>\
          <li><a class="dropdown-button" href="#!" data-beloworigin="true" data-activates="dropdown1"><i class="fa fa-fw fa-smile-o"></i>  Servicios<i class="material-icons right">arrow_drop_down</i></a></li>\
        </ul>\
      </div>\
    </nav>\
  </div>\
</header>\
  '
})

Vue.component('own-footer', {
  template: ' \
<footer class="page-footer">  \
    <div class="container"> \
      <div class="row"> \
        <div class="col l6 s12">\
          <h5 class="white-text">Municipalidad Centro Poblado Santa Maria de Huachipa</h5>\
          <p class="slogan">!Trabajando por el cambio!</p>\
          <a href="https://www.facebook.com/municipalidaddehuachipa/" target="_blank"><i class="fa \fa-2x fa-facebook" aria-hidden="true"></i></a>\
          <a href="https://www.youtube.com/channel/UCLZvENxowhzjA53nSRn8H-Q/videos" target="_blank"> <i class="fa fa-2x fa-youtube-play" aria-hidden="true"></i></a>\
          <a href="#"><i class="fa fa-2x fa-twitter" aria-hidden="true"></i></a>\
          <a href="#"><i class="fa fa-2x fa-instagram" aria-hidden="true"></i></a>\
          <a href="#"><i class="fa fa-2x fa-pinterest" aria-hidden="true"></i></a>\
        </div>\
        <div class="col l4 offset-l2 s12">\
          <h5 class="white-text">Enlaces</h5>\
          <ul>\
            <li><a class="grey-text text-lighten-3" href="#!">Enlace 1</a></li>\
            <li><a class="grey-text text-lighten-3" href="#!">Enlace 2</a></li>\
            <li><a class="grey-text text-lighten-3" href="#!">Enlace 3</a></li>\
            <li><a class="grey-text text-lighten-3" href="#!">Enlace 4</a></li>\
          </ul>\
        </div>\
      </div>\
    </div>\
    <div class="footer-copyright">\
      <div class="container">\
        © 2017 Copyright Text\
        <a class="grey-text text-lighten-4 right" href="#!">Mas Enlaces</a>\
      </div>\
    </div>\
  </footer>\
  '
})


var app1 = new Vue({
  el: '#header',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})
  
var app2 = new Vue({
  el: '#footer',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})
  

