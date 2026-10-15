import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import BooksView from '../views/BooksView.vue'
import RegisterView from '../views/RegisterView.vue'
import BookDetailView from '../views/BookDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/llibres',
      name: 'books',
      component: BooksView,
    },
    {
      path: '/llibres/:id',
      name: 'book-detail',
      component: BookDetailView,
      props: true
    },
    {
      path: '/registre',
      name: 'register',
      component: RegisterView,
    },
  ],
})

export default router