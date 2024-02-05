import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import { RouteName } from './routeName'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: RouteName.Home,
      component: HomeView
    },
    {
      path: '/page',
      name: RouteName.Page,
      component: () => import('../views/page/PageView.vue'),
      children: [
        {
          path: 'section/:pageId',
          name: RouteName.Section,
          component: () => import('../views/page/SectionView.vue')
        },
        {
          path: 'question/:pageId',
          name: RouteName.Question,
          component: () => import('../views/page/QuestionView.vue')
        }
      ]
    }
  ]
})

export default router
