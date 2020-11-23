
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../../packages/styles/normalize.css';
import '../../packages/styles/common.scss';
import KUI from '../../packages'

export default ({ Vue, options, router }) => {
    Vue.use(ElementUI)
    Vue.use(KUI) 
    // Vue.component('Vuecode', vueCode)
    
    const requireModules = require.context('./components/', false, /\.vue$/)
    requireModules.keys().forEach(key => {
        Vue.component(requireModules(key).default.name, requireModules(key).default)
    })
};