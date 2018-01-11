import Home from './components/Home.vue';
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

import NotFound from './components/NotFound.vue'

export const routes = [
    { path: '*', components: NotFound },
    { path: '/', component: OwnMain },
    {
        path: '/municipalidad/', component: Municipalidad, children: [
            { path: 'alcalde', component: Alcalde },
            { path: 'regidores', component: Regidores },
            { path: 'funcionarios', component: Funcionarios },
            { path: 'mision-vision', component: MisionVision },
        ]
    },
    {
        path: '/distrito/', component: Distrito, children: [
            { path: 'creacion', component: CreacionPolitica },
            { path: 'historia', component: Historia },
            { path: 'turismo', component: Turismo },
            { path: 'ecologia', component: Ecologia },
        ]
    }
];