import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const generateConfigurationId = function () {
  const fontCode = String(Math.floor(Math.random() * 10 + 1)).padStart(2, "0");
  const themeCode = String(Math.floor(Math.random() * 10 + 1)).padStart(2, "0");

  return fontCode + themeCode;
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/view',
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
    {
      path: '/view',
      component: HomeView,
    },
  ],
});

router.beforeEach((to, from) => {
  console.log(to);
  console.log(from);

  // TODO: handle an invalid length id string
  if (to.path === '/view' && (to.query.id === undefined || to.query.id === '')) {
    return {
      path: '/view',
      query: { id: generateConfigurationId() },
    };
  }
});

export default router;
