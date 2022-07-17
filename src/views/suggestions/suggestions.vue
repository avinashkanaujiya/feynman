<template>
  <div class="suggestions wrapper">
    <Banner :centerText="'feynman'"></Banner>
    <div class="suggestions-info-container">
      <div class="suggestions-info">
        <div class="suggestions-name">
          {{}} dawn
        </div>
        <div class="suggestions-time">
          0500 - 0800
        </div>
      </div>
      <div class="current-time">
        {{ currentHour}}:{{currentMinute}}
      </div>
    </div>
    <div class="pills-container first-pills-container">
      <div :key="activity"
        v-for="activity in activities">
        <pill class="pill-container" 
        :text="activity" 
        :color="'\#2C3C5B'"
        :width="'350px'" 
        :textSize="'20px'" 
        :textColor="'\#ffffff'" 
        :display="'block'"
        :height="'73px'"
        :alignment="'flex-start'">
        </pill>
      </div>
    </div>
    <div class="text-container">
      <div class="first-text">
        suggestions
      </div>
      <div @click="launchNextScreen" class="second-text">
        add new
      </div>
    </div>
    <div class="pills-container second-pills-container">
      <div :key="suggestion"
        v-for="suggestion in suggestions">
        <pill class="pill-container" 
        :text="suggestion" 
        :color="'\#0AC5A8'"
        :width="'350px'" 
        :textSize="'20px'" 
        :textColor="'\#ffffff'" 
        :display="'block'"
        :height="'73px'"
        :alignment="'flex-start'"
        @click="del(index)">
        </pill>
      </div>
    </div>
    <!-- <Pill :text="'dum dum'" :height="'50px'" :color="'\#2C3C5B'"></Pill> -->
  </div>
</template>

<script>
import Banner from '../../components/mobile-banner/mobile-banner.vue';
import Pill from '../../components/pill/pill.vue';
import { mapState, mapMutations } from 'vuex'
import { doc, setDoc, getDoc } from "firebase/firestore";
import { getAuth, signOut } from 'firebase/auth'
import { db } from '@/main';
export default {
  props: {
    centerText: String,
  },
  data() {
    return {
      currentHour: '',
      currentMinute: '',
      suggestions: [
        'one',
        'two',
        'three'
      ],
      activities: [
        ''
      ]
    }
  },
  components: {
    Banner,
    Pill
  },
  created() {
    let d = new Date();
    this.currentHour = d.getHours();
    this.currentMinute = d.getMinutes();
    if (this.currentHour < 10) {
      this.currentHour = '0' + this.currentHour;
    }
    if (this.currentMinute < 10) {
      this.currentMinute = '0' + this.currentMinute;
    }
    setInterval(() => {
      let d = new Date();
      this.currentHour = d.getHours();
      this.currentMinute = d.getMinutes();
      if (this.currentHour < 10) {
        this.currentHour = '0' + this.currentHour;
      }
      if (this.currentMinute < 10) {
        this.currentMinute = '0' + this.currentMinute;
      }
    }, 1000);
    console.log(this.currentActivity);
    this.activities[0] = this.currentActivity.activityName;
    this.suggestions = this.currentActivity.suggestions;
  },
  computed: {
    ...mapState([
      'count',
      'currentActivity',
      'currentRoutine',
      'currentActivityIndex',
      'currentRoutineIndex',
      'appUserData'
    ]),
  },
  methods: {
    launchNextScreen() {
      this.$router.push("/addnewsuggestion");
    },
    del(index) {
      this.appUserDataLocal = this.appUserData;
      const suggestion = this.appUserDataLocal.data[this.currentRoutineIndex].activities[this.currentActivityIndex].suggestions[index];
      let response = confirm(`Are you sure, ${suggestion}?`);

      if (response != null) {
        console.log('222222', this.appUserDataLocal);
        this.appUserDataLocal.data[this.currentRoutineIndex].activities[this.currentActivityIndex].suggestions.splice(index, 1);
        console.log('1222222222', this.appUserDataLocal);
        const userUid = getAuth().currentUser.uid;
        const userEmail = getAuth().currentUser.email;
        setDoc(doc(db, userUid, userEmail), this.appUserDataLocal).then((res) => {
          // this.$router.go(-1);
        }).catch((err) => {
          console.log('12333', err);
        });
      }
    }
  }
}
</script>

<style src="./suggestions.scss" lang="scss" scoped>
</style>