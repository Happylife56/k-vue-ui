import vueCode from './components/vueCode'
import VueTable from './components/vuetable'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../../packages/styles/common.scss';
import InputDefault from './components/input/default'
export default ({ Vue, options, router }) => {
    Vue.use(ElementUI)
    Vue.component('Vuecode', vueCode)
    Vue.component('vuetable', VueTable)
    Vue.component('InputDefault', InputDefault)
};