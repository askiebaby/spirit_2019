import Vue from 'vue';
import Router from 'vue-router';
import TodoList from './views/TodoList.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    redirect: '/todoList',
  },
  {
    path: '/todoList',
    name: 'TodoList',
    component: TodoList,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('./views/Dashboard.vue'),
  },
  ],
});
