import NotFound from './components/NotFound.vue';

export const routes = [
  { path: '*', component: NotFound },
  { path: '/', name: 'inicio', component: () => import('./components/OwnMain') },
  { path: '/gallery', name: 'gallery', component: () => import('./components/gallery/Gallery') },
  {
    path: '/municipalidad', name: 'municipio', component: () => import('./components/municipalidad/Municipalidad'), children: [
      { path: 'alcalde', name: 'alcalde', component: () => import('./components/municipalidad/Alcalde') },
      { path: 'teniente-alcalde', name: 'teniente', component: () => import('./components/municipalidad/TenienteAlcalde') },
      { path: 'regidores', name: 'regidores', component: () => import('./components/municipalidad/Regidores') },
      { path: 'funcionarios', name: 'funcionarios', component: () => import('./components/municipalidad/Funcionarios') },
      { path: 'mision-vision', name: 'mision-vision', component: () => import('./components/municipalidad/MisionVision') },
    ]
  },
  {
    path: '/distrito', component: () => import('./components/distrito/Distrito'), children: [
      { path: 'creacion', component: () => import('./components/distrito/CreacionPolitica') },
      { path: 'historia', component: () => import('./components/distrito/Historia') },
      { path: 'turismo', component: () => import('./components/distrito/Turismo') },
      { path: 'ecologia', component: () => import('./components/distrito/Ecologia') },
    ]
  },
  {
    path: '/servicios', component: () => import('./components/servicios/Servicio'), children: [
      { path: 'servicio-1', component: () => import('./components/servicios/Servicio1') },
      { path: 'servicio-2', component: () => import('./components/servicios/Servicio2') },
    ]
  },
  {
    path: '/mas', component: () => import('./components/mas/Mas'), children: [
      { path: 'mas-1', component: () => import('./components/mas/Mas1') },
      { path: 'mas-2', component: () => import('./components/mas/Mas2') }
    ]
  },
  {
    path: '/news', component: () => import('./components/news/Noticias'), children: [
      { path: '', component: () => import('./components/news/DefaultNew') },
      { path: ':uid', name: 'news-detail', component: () => import('./components/news/NewsDetail'), props: true }
    ]
  },
  {
    path: '/events', component: () => import('./components/events/Events'), children: [
      { path: '', component: () => import('./components/events/DefaultEvent') },
      { path: ':uid', name: 'event-detail', component: () => import('./components/events/EventDetail'), props: true }
    ]
  },
  {
    path: '/places', component: () => import('./components/places/Places'), children: [
      { path: '', component: () => import('./components/places/PlaceDefault') },
      { path: ':uid', name: 'place-detail', component: () => import('./components/places/PlaceDetail'), props: true }
    ]
  }
];