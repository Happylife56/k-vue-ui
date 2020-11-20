import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../packages/styles/normalize.css';
import '../packages/styles/common.scss';
import App from './App.vue';
import router from './router';
import KUI from '../packages';
// import { directives } from '../packages';

// Vue.use(directives);
// console.log('KUI: ', KUI);

Vue.use(KUI);
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
