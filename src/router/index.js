import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

//异步路由
const index = () => import('../views/index/index');

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/index',
      component: index
    },
    {
      path: '',
      component: index
    },
  ]
})