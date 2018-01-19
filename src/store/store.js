import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    title: 'Municipalidad Centro Poblado Santa Maria de Huachipa',
    slogan: '¡Trabajando por el cambio!',
    copyright: '© 2017 Copyright Municipalidad del Centro Poblado Santa Maria de Huachipa',
    linksHeaderMovil: [],
    linksNavMovil: [],
    linksNav: [
      { name: "Inicio", path: "/" },
      { name: "Noticias", path: "/news" },
      { name: "Directorio", path: "/" },
      { name: "Eventos", path: "/" },
      {
        name: "Galeria",
        ref: "gall-dropdown",
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
      ,
      {
        name: 'Servicios',
        icon: 'fa fa-fw fa-smile-o',
        ref: 'serv-dropdown',
        children: [
          { name: 'Servicio 1', path: '/servicios/servicio-1' },
          { name: 'Servicio 2', path: '/servicios/servicio-2' },
        ]
      },
      {
        name: 'Mas',
        icon: 'fa fa-fw fa-plus',
        ref: 'mas-dropdown',
        children: [
          { name: 'Mas 1', path: '/mas/mas-1' },
          { name: 'Mas 2', path: '/mas/mas-2' }
        ]
      }
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
    },
    getLinksHeaderMovil: (state) => {
      state.linksHeaderMovil = state.linksHeader;
      return state.linksHeaderMovil;
    },
    getLinksNavMovil: (state) => {
      state.linksNavMovil = state.linksNav;
      return state.linksNavMovil;
    }
  }
});
