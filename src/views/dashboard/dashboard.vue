<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
    <div class="dashboard wrapper">
      <mobileBanner :centerText="'feynman'"></mobileBanner>

      <div class="pills-container">
        <template   :key="routine"
          v-for="( routine, index ) in routines">
          <pill class="pill-container" :text="routine.routineName" :color="'\#FFB067'"
          :width="'300px'"
          :height="'73px'"
          @click="launchNextScreen(index)">
          </pill>
        </template>
      </div>
      <!-- <button class="button logout" v-on:click="logout">Logout</button> -->
      <!-- <button class="button logout" v-on:click="addData">Push Data</button> -->
    </div>
  </header>

  <!-- <RouterView /> -->
</template>

<script>
import { RouterLink } from 'vue-router'
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from '@/main';
import AppHeader from '@/components/HelloWorld.vue'
import { getAuth, signOut } from 'firebase/auth'
import mobileBanner from '@/components/mobile-banner/mobile-banner.vue';
import pill from '@/components/pill/pill.vue';
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return{
      routines: [],
    }
  },
  created() {
    // const userUid = getAuth().currentUser.uid;
    // const docRef = doc(db, userUid, "routines");
    // const docSnap = getDoc(docRef);

    // if (docSnap.exists()) {
    //   this.setAppUserData(docSnap.data());
    //   this.routines = this.appUserData.data;
    //   console.log("Document data:", this.appUserData, this.routines[0]);
    // } else {
    //   // doc.data() will be undefined in this case
    //   console.log("No such document!");
    // }
    window.onpopstate = event => {
      this.$router.forward(1);
    }
    document.addEventListener('backbutton', function (e) {
        e.preventDefault();
        console.log('Back button prevented page from going back');
        // Put axios code here
    }, false);
    this.routines = this.appUserData.data;
    // console.log('12333', this.routines, this.routines[0], this.routines[0].routineName);
  },
  computed: {
    ...mapState([
      'appUserData'
    ])
  },
  methods: {
    ...mapMutations({
      setAppUserData: 'SET_APP_USER_DATA',
      setCurrentRoutine: 'SET_CURRENT_ROUTINE',
    }),
    logout () {
      const auth = getAuth()
      signOut(auth).then(() => {
        this.$router.replace('/login')
      })
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
    launchNextScreen(index) {
      this.setCurrentRoutine({data: this.routines[index], index});
      this.$router.push("/routine");
    }
  },
  watch: {
  },
  components: {
      AppHeader,
      RouterLink,
      // RouterView,
      mobileBanner,
      pill
  },
  mounted() {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      })
    }
  }
}
</script>

<style src="./dashboard.scss" lang="scss" scoped>

</style>
