import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'
// import VueFire from 'vuefire'
import state from './store/state.app.js'
import mutations from './store/mutations.app'
import actions from './store/actions.app'
import getters from './store/getters.app'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCl0uq9NcTjSvcFUvf8pLkX3PubtlukP9A",
  authDomain: "feynman-s-pr.firebaseapp.com",
  projectId: "feynman-s-pr",
  storageBucket: "feynman-s-pr.appspot.com",
  messagingSenderId: "60527738925",
  appId: "1:60527738925:web:6cdbd10c5dd12ede40b8a4",
  measurementId: "G-GYJDZ09MPD"
};
const appDb = initializeApp(firebaseConfig)
// Initialize Firebase
export const db = getFirestore(appDb);
// export const db = firebase.firestore();
// const analytics = getAnalytics(app);

const prod = process.env.NODE_ENV === 'production'
const shouldSW = 'serviceWorker' in navigator && prod
const shouldSWDev = 'serviceWorker' in navigator && !prod

if (shouldSW) {
  navigator.serviceWorker.register('/sw.js').then(() => {
    console.log("Service Worker Registered!")
  })
} 
// else if (shouldSWDev) {
//   navigator.serviceWorker.register('/sw-dev.js').then(() => {
//     console.log('Development Service Worker Registered!')
//   })
// }


const app = createApp(App)
const store = createStore({
  state,
  mutations,
  actions,
  getters
})
// app.use(VueFire);
app.use(router);
app.use(store);
app.mount('#app');
