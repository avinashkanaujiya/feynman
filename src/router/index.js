import { createRouter, createWebHistory } from 'vue-router';
import { getAuth } from 'firebase/auth';
import dashboard from '../../src/views/dashboard/dashboard.vue';
import login from '../../src/components/Login.vue';
import signup from '../../src/components/Signup.vue';
import routine from '../views/routine/routine.vue'
import Suggestions from '../views/suggestions/suggestions.vue';
import AddNewSuggestion from '../views/addnewsuggestion/addnewsuggestion.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: login
    },
    {
      path: '/routine',
      name: 'routine',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: routine,
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
    },
    {
      path: '/',
      // redirect: '/login',
      name: 'login',
      component: login
    },
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = getAuth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  // console.log('22222', requiresAuth, currentUser, );
  // if (!currentUser && to.name !== 'login' && to.name !== 'signup') {
  //   return {name: 'login'}
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
