import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/detail/:country',
      name: 'detail',
      component: () => import('../views/DetailView.vue'),
      props: true
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      redirect: () => {
        return {
          path: '/'
        }
      }
    },
  ]
})

export default router
