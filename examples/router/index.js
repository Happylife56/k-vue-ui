import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
// import { getComponent } from '../utils';

// const { routerList } = getComponent();
Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      // ...routerList,
      {
        name: 'test',
        path: '/test',
        component: () => import('../views/test.vue'),
      },
      {
        name: 'input',
        path: '/input',
        component: () => import('../../packages/input/src/main.vue'),
      },
      {
        name: 'table',
        path: '/table',
        component: () => import('../../packages/table/src/main.vue'),
      },
    ],
  },
];
const router = new Router({
  routes,
});

export default router;
