import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import { getComponent } from '../utils';

const { routerList } = getComponent();
console.log(getComponent());
Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      ...routerList,
    ],
  },
];
console.log(routes, 22);
const router = new Router({
  routes,
});

export default router;
