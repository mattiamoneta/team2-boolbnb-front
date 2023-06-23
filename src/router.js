import { createRouter, createWebHistory } from 'vue-router';
import ApartmentCard from './pages/ApartmentCard.vue';
import ApartmentsList from './pages/ApartmentsList.vue';
import Home from './pages/Home.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: ApartmentsList,
      props: true
    }

  ],
});

export { router };