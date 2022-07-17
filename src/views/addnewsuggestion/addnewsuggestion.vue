<template>
  <div class="addnewsuggestion wrapper">
    <div class="first-pills-container pills-container">
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
    <div class="text-box">
      <textarea v-model="newSuggestion" name="comment" >Enter text here...</textarea>
    </div>
    <div class="pills-container">
      <div :key="activity"
        v-for="activity in activities">
        <pill class="pill-container" 
        :text="'ADD'" 
        :color="'\#2C3C5B'"
        :width="'150px'" 
        :textSize="'20px'" 
        :textColor="'\#ffffff'" 
        :display="'block'"
        :height="'73px'"
        @click="add">
        </pill>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import Pill from '../../components/pill/pill.vue';
import { doc, setDoc, getDoc } from "firebase/firestore";
import { getAuth, signOut } from 'firebase/auth'
import { db } from '@/main';

export default {
  props: {
    centerText: String,
  },
  data() {
    return {
      activities: [
        'one'
      ],
      newSuggestion: '',
      appUserDataLocal: {}
    }
  },
  created(){
    this.activities[0] = this.currentActivity.activityName;
  },
  computed: {
    ...mapState([
      'currentActivity',
      'currentRoutine',
      'currentActivityIndex',
      'currentRoutineIndex',
      'appUserData'
    ])
  },
  components: {
    Pill
  },
  methods: {
    ...mapMutations({
      setCurrentActivity: 'SET_CURRENT_ACTIVITY',
      setAppUserData: 'SET_APP_USER_DATA',
      setCurrentRoutine: 'SET_CURRENT_ROUTINE',
    }),
    add() {
      this.appUserDataLocal = this.appUserData;
      console.log('222222', this.appUserDataLocal);
      this.appUserDataLocal.data[this.currentRoutineIndex].activities[this.currentActivityIndex].suggestions.push(this.newSuggestion);
      console.log('1222222222', this.appUserDataLocal);
      const userUid = getAuth().currentUser.uid;
    const userEmail = getAuth().currentUser.email;
      setDoc(doc(db, userUid, userEmail), this.appUserDataLocal).then((res) => {
        this.$router.go(-1);
      }).catch((err) => {
        console.log('12333', err);
      });
    },
  }
}
</script>

<style src="./addnewsuggestion.scss" lang="scss" scoped>
</style>