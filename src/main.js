import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
// import ErrorPage from 'vue-error-page'
import { store } from './store/store';
import { routes } from './routes';

Vue.use(VueRouter);

// window.eventBus = new Vue();

// Vue.use(ErrorPage, {
//   resolver: (component) => {
//     return component;
//   },
//   tagName: 'app-view',
//   bus: 'eventBus',
//   event: 'error-page'
// });


const router = new VueRouter({
  mode: 'history',
  routes
});

const app = new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
