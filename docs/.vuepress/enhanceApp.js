import vueCode from './components/vueCode'
import VueTable from './components/vuetable'
import filterDirective from './components/filterDirective'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../../packages/styles/common.scss';
import InputDefault from './components/input/default'
import KUI from '../../packages'
export default ({ Vue, options, router }) => {
    Vue.use(ElementUI)
    Vue.use(KUI) 
    Vue.component('Vuecode', vueCode)
    Vue.component('vuetable', VueTable)
    Vue.component('InputDefault', InputDefault)
    Vue.component('filterDirective', filterDirective)
};