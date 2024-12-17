import { createRouter, createWebHistory } from 'vue-router';
import NotFound from '@/views/NotFound.vue';
import Accueil from '@/views/Accueil.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: Accueil,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound,
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // Si une position sauvegardée existe (bouton "précédent"), y retourner
      return savedPosition;
    } else if (to.hash) {
      // Si un hash (ancre) est présent dans l'URL, défilement fluide vers l'élément
      return {
        el: to.hash,
        behavior: 'smooth', // Active le défilement fluide
      };
    } else {
      // Par défaut, défilement en haut de la page
      return { top: 0 };
    }
  },
});

export default router;
