import OwnMain from './components/OwnMain.vue';
// municipalidad componentes
import Municipalidad from './components/municipalidad/Municipalidad.vue';
import Alcalde from './components/municipalidad/Alcalde.vue';
import Regidores from './components/municipalidad/Regidores.vue';
import Funcionarios from './components/municipalidad/Funcionarios.vue';
import MisionVision from './components/municipalidad/MisionVision.vue';
// end municipalidad compoentes
// distrito componentes
import Distrito from './components/distrito/Distrito.vue';
import CreacionPolitica from './components/distrito/CreacionPolitica.vue';
import Historia from './components/distrito/Historia.vue';
import Turismo from './components/distrito/Turismo.vue';
import Ecologia from './components/distrito/Ecologia.vue';
// end distrito componentes
// servicio components
import Servicio from './components/servicios/Servicio.vue';
import Servicio1 from './components/servicios/Servicio1.vue';
import Servicio2 from './components/servicios/Servicio2.vue';
// end servicio components
// mas components
import Mas from './components/mas/Mas.vue';
import Mas1 from './components/mas/Mas1.vue';
import Mas2 from './components/mas/Mas2.vue';
// end mas components
import Noticias from './components/Noticias.vue'
import DefaultNew from './components/DefaultNew.vue'

// forms
import NewsForm from './components/forms/NewsForm'

import NotFound from './components/NotFound.vue'

export const routes = [
    { path: '*', component: NotFound },
    {
        path: '/municipalidad', component: Municipalidad, children: [
            { path: 'alcalde', component: Alcalde },
            { path: 'regidores', component: Regidores },
            { path: 'funcionarios', component: Funcionarios },
            { path: 'mision-vision', component: MisionVision },
        ]
    },
    {
        path: '/distrito', component: Distrito, children: [
            { path: 'creacion', component: CreacionPolitica },
            { path: 'historia', component: Historia },
            { path: 'turismo', component: Turismo },
            { path: 'ecologia', component: Ecologia },
        ]
    },
    {
        path: '/servicios', component: Servicio, children: [
            { path: 'servicio-1', component: Servicio1 },
            { path: 'servicio-2', component: Servicio2 },
        ]
    },
    {
        path: '/mas', component: Mas, children: [
            { path: 'mas-1', component: Mas1 },
            { path: 'mas-2', component: Mas2 }
        ]
    },
    // navbar
    { path: '/', component: OwnMain },
    {
        path: '/news', component: Noticias, children: [
            { path: '', component: DefaultNew ,children:[
                {path:':id',component: DefaultNew}
            ]}
        ]
    },
    // formulario
    { path: '/form', component: NewsForm }
];