import { createRouter, createWebHistory } from 'vue-router';
import { getAuth } from 'firebase/auth';
import dashboard from '../../src/views/dashboard/dashboard.vue';
import Login from '../../src/components/Login.vue';
import signup from '../../src/components/Signup.vue';
import Routine from '../views/routine/routine.vue'
import Suggestions from '../views/suggestions/suggestions.vue';
import AddNewSuggestion from '../views/addnewsuggestion/addnewsuggestion.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'Login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Login
    },
    {
      path: '/routine',
      name: 'Routine',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Routine,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/suggestions',
      name: 'suggestions',
      component: Suggestions,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/addnewsuggestion',
      name: 'addnewsuggestion',
      component: AddNewSuggestion,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = getAuth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  console.log('22222', requiresAuth, currentUser, );
  // if (!currentUser && to.name !== 'Login' && to.name !== 'signup') {
  //   return {name: 'Login'}
  // } else if(!currentUser && to.name === 'signup') {
    // return {name: 'signup'}
  // } sdsddsds
  if (requiresAuth && !currentUser) 
    {
      console.log('login');
      next('login')
    }
  else if (!requiresAuth && currentUser) {
    console.log('dashboard');
    next('dashboard')
  }
  else {
    console.log('next');
    next()
  }
})

export default router
