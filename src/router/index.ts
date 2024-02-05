import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import PageView from '../views/page/PageView.vue'
import SectionView from '../views/page/SectionView.vue'
import QuestionView from '../views/page/QuestionView.vue'
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
      component: PageView,
      children: [
        {
          path: 'section/:pageId',
          name: RouteName.Section,
          component: SectionView
        },
        {
          path: 'question/:pageId',
          name: RouteName.Question,
          component: QuestionView
        }
      ]
    }
  ]
})

export default router
