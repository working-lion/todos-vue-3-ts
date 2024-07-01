import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/add',
      name: 'add-view',
      component: () => import('../views/AddView.vue'),
    },
    {
      path: '/view',
      name: 'note-view',
      component: () => import('../views/NoteView.vue'),
    },
    {
      path: '/edit/:id',
      name: 'edit-view',
      component: () => import('../views/EditView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue'),
    },
  ],
});

export default router;
