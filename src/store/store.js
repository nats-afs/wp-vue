import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    title: 'Municipalidad Centro Poblado Santa Maria de Huachipa',
    slogan: '!Trabajando por el cambio!',
    copyright: '© 2017 Copyright Municipalidad del Centro Poblado Santa Maria de Huachipa',
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
    }
  }
});
