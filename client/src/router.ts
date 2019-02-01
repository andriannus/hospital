import Vue from 'vue';
import Router from 'vue-router';

const Detail = () => import('./views/Detail.vue');
const Home = () => import('./views/Home.vue');
const Layout = () => import('./views/Layout.vue');
const Search = () => import('./views/Search.vue');

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home,
        },
        {
          path: 'search',
          name: 'search',
          component: Search,
        },
        {
          path: '/hospital/:id',
          name: 'detail',
          component: Detail,
        },
      ],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});
