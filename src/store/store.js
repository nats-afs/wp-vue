import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    title: 'Municipalidad Centro Poblado Santa Maria de Huachipa',
    slogan: '¡Trabajando por el cambio!',
    copyright: '© 2017 Copyright Municipalidad del Centro Poblado Santa Maria de Huachipa',
    linksNav: [
      { name: "Inicio", path: "/" },
      { name: "Noticias", path: "/" },
      { name: "Directorio", path: "/" },
      { name: "Eventos", path: "/" },
      {
        name: "Galeria",
        ref: "gallery-dropdown",
        children: [
          { name: "Galeria 1", path: "/" },
          { name: "Galeria 2", path: "/" }
        ]
      },
      { name: "Documentos", path: "/" }
    ],
    linksHeader: [
      {
        name: 'Distrito',
        icon: 'fa fa-fw fa-institution',
        ref: 'dist-dropdown',
        children: [
          { name: 'Creacion Politica', path: '/distrito/creacion' },
          { name: 'Historia', path: '/distrito/historia' },
          { name: 'Turismo', path: '/distrito/turismo' },
          { name: 'Ecologia', path: '/distrito/ecologia' }
        ]
      },
      {
        name: 'Municipalidad',
        icon: 'fa fa-fw fa-building-o',
        ref: 'muni-dropdown',
        children: [
          { name: 'Alcalde', path: '/municipalidad/alcalde' },
          { name: 'Regidores', path: '/municipalidad/regidores' },
          { name: 'Funcionarios', path: '/municipalidad/funcionarios' },
          { name: 'Mision - Vision', path: '/municipalidad/mision-vision' }
        ]
      }
      // ,
      // {
      //   name: 'Servicios',
      //   icon: 'fa fa-fw fa-smile-o',
      //   ref: 'dropdown1',
      //   children: [
      //     { name: 'Servicio 1', path: 'distrito.html' },
      //     { name: 'Servicio 2', path: 'distrito.html' },
      //   ]
      // },
      // {
      //   name: 'Mas',
      //   icon: 'fa fa-fw fa-plus',
      //   ref: 'dropdown2',
      //   children: [
      //     { name: 'Servicio 1', path: 'distrito.html' },
      //     { name: 'Servicio 2', path: 'distrito.html' },
      //   ]
      // }
    ]
  },
  getters: {
    getTitle: (state) => {
      return state.title;
    },
    getSlogan: (state) => {
      return state.slogan;
    },
    getCopyright: state => {
      return state.copyright;
    },
    getLinksHeader: (state) => {
      return state.linksHeader;
    },
    getLinksNav: (state) => {
      return state.linksNav;
    }
  }
});
