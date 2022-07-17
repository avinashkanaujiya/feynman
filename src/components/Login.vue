
<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import {doc, getDoc} from 'firebase/firestore';
import {db} from '../main'
import { mapMutations, mapState } from 'vuex';
export default {
  data() {
    return{
      email: 'feynman@avinashkanaujiya.me',
      password: 'adminadmin',
    }
  },
  methods: {
    ...mapMutations({
      setAppUserData: 'SET_APP_USER_DATA',
    }),
    login() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password).then(async (user) => {
        const userUid = user.user.uid;
        // console.log(user);
        const docRef = doc(db, userUid, "routines");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          this.$router.push('/dashboard')
          this.setAppUserData(docSnap.data());
          // console.log("Document data:", this.appUserData);
          // console.log(docSnap.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }).catch((err) => {
        alert(err.message)
      })
    }
  },
  watch: {
    // email() {
    //   console.table({date: '12072022', email: this.email, password: this.password});
    // },
    // password() {
    //   console.table({date: '12072022', email: this.email, password: this.password});
    // }
  },
  computed: {
    ...mapState([
      'appUserData',
    ])
  }
}
</script>

<template>
  <div class="login">
    <input 
      type="text" 
      v-model="email" 
      placeholder="Email address" 
      class="input"
      autocomplete="on"
      required>
    <br/>
    <input 
      type="password" 
      v-model="password"
      placeholder="Password" 
      class="input" 
      required>
    <br/>
    <button v-on:click="login" class="button">Enter</button>
    <p><router-link to="/signup">
      New Here? Create a new account
    </router-link></p>
  </div>
</template>
<style lang="scss" scoped>

</style>