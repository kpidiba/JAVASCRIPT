import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Reactive from '../views/Reactive.vue'
import PostList from '../views/Prop.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/reactive',
    name: 'reactive',
    component: Reactive
  },
  {
    path: '/postlist',
    name: 'postlist',
    component: PostList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
