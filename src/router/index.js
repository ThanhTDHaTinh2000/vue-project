import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LearnView from '../views/LearnView.vue'
import TodoLearnView from '../views/TodoLearnView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/create',
      name: 'learn',
      component: LearnView,
    },
    {
      path: '/todo/:id',
      name:'todoLearn',
      component: TodoLearnView,
    }
  ],
})

export default router
