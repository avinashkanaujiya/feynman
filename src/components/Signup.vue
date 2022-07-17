
<script>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from '@/main';
export default {
  data() {
    return{
      email: '',
      password: '',
    }
  },
  methods: {
    signUp() {
      const auth = getAuth();
      // console.log('12072022 this', this);
      createUserWithEmailAndPassword(auth, this.email, this.password).then((user) => {
        // console.log('12072022 self', self);
        this.addData();

        this.$router.replace('/login');
      }).catch((err) => {
        // console.log('12072022', err);
        this.$router.replace('/login');
        alert(err.message)
      });
    },
    addData() {
    // Add a new document in collection "cities"
    // console.log('getAuth().currentUser', getAuth().currentUser);
    const userUid = getAuth().currentUser.uid;
    const userEmail = getAuth().currentUser.email;
    setDoc(doc(db, userUid, userEmail), {
      data: [
        {
          routineName: 'dawn',
          routineStartTime: '0500',
          routineEndTime: '0800',
          activities: [
            {
              activityName: 'Rise, Rinse & Meditate',
              suggestions: []
            },
            {
              activityName: 'Plan the Day\'s Task & Take Resolution of the Day',
              suggestions: []
            },
            {
              activityName: 'Read on something unrelated to day to day work.',
              suggestions: []
            },
            {
              activityName: 'Breakfast',
              suggestions: []
            }
          ] 
        },
        {
          routineName: 'work',
          routineStartTime: '0800',
          routineEndTime: '1800',
          activities: [
            {
              activityName: 'Rise, Rinse & Meditate',
              suggestions: []
            },
            {
              activityName: 'Plan the Day\'s Task & Take Resolution of the Day',
              suggestions: []
            },
            {
              activityName: 'Read on something unrelated to day to day work.',
              suggestions: []
            },
            {
              activityName: 'Breakfast',
              suggestions: []
            }
          ] 
        },
        {
          routineName: 'dusk',
          routineStartTime: '1800',
          routineEndTime: '2130',
          activities: [
            {
              activityName: 'Put things in their places',
              suggestions: []
            },
            {
              activityName: 'Music, Diversion, Conversations',
              suggestions: []
            },
            {
              activityName: 'Examination of the Day',
              suggestions: []
            },
            {
              activityName: 'Supper',
              suggestions: []
            }
          ] 
        }
      ]
    });
  },
  },
  watch: {
    // email() {
    //   console.table({date: '12072022', email: typeof(email), password});
    // },
    // password() {
    //   console.table({date: '12072022', email, password});
    // }
  }
}
</script>
<template>
  <div class="sign-up">
    <!-- <img src="../assets/dc_logo.jpg" width="300px"> -->
    <h3>Create a new account</h3>
    <input
      v-model="email" 
      type="text" 
      class="input" 
      placeholder="Email" 
      required>
    <br>
    <input 
      v-model="password"
      type="password" 
      class="input" 
      placeholder="Password" 
      required>
    <br>
    <button v-on:click="signUp" class="button">Sign Up!</button>
    <button class="button">
      <router-link to="/login">
        Back
      </router-link>
    </button>
  </div>
</template>