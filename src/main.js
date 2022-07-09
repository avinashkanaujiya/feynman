import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'
const prod = process.env.NODE_ENV === 'production'
const shouldSW = 'serviceWorker' in navigator && prod
const shouldSWDev = 'serviceWorker' in navigator && !prod
if (shouldSW) {
  navigator.serviceWorker.register('/sw.js').then(() => {
    console.log("Service Worker Registered!")
  })
} else if (shouldSWDev) {
  navigator.serviceWorker.register('/sw-dev.js').then(() => {
    console.log('Service Worker Registered!')
  })
}
const app = createApp(App)
const store = createStore({
  state () {
    return {
      count: 10
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
app.use(router);
app.use(store);
app.mount('#app');
