<template>
  <div class="routine wrapper">
    <Banner :centerText="'feynman'"></Banner>
    <div class="routine-info-container">
      <div class="routine-info">
        <div class="routine-name">
          {{currentRoutine.routineName}}
        </div>
        <div class="routine-time">
          {{currentRoutine.routineStartTime}} - {{currentRoutine.routineEndTime}}
        </div>
      </div>
      <div class="second-sub-container">
        <div class="current-time">
          {{ currentHour}}:{{currentMinute}}
        </div>
      </div>
    </div>
    <div @click="launchAddScreen" class="add-new-text">
          add new
        </div>
    <div class="pills-container">
      <div :key="activity"
        v-for="(activity, index) in activities">
        <pill class="pill-container" 
        :text="activity.activityName" 
        :color="'\#2C3C5B'"
        :width="'350px'" 
        :textSize="'20px'" 
        :textColor="'\#ffffff'" 
        :display="'block'"
        :height="'73px'"
        :alignment="'flex-start'"
        @click="launchNextScreen(index)"
        @touchstart="startSwipe"
        @touchend="handleSwipe($event, index)">
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
import TouchEvent from '../../components/touchevent/touchevent';
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
      activities: [
        'one',
        'two',
        'three'
      ],
      touchEvent: null
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
    this.activities = this.currentRoutine.activities;
    // console.log(this.activities);
    // this.$el.querySelectorAll('.pill-container');
    // document.addEventListener('touchstart', (event) => {
        
    // });

    // document.addEventListener('touchend', handleSwipe);
  },
  computed: {
    ...mapState([
      'count',
      'currentRoutine',
      'appUserData',
      'currentRoutineIndex'
    ]),
  },
  methods: {
    ...mapMutations({
      setCurrentActivity: 'SET_CURRENT_ACTIVITY',
    }),
    launchNextScreen(index) {
      // console.log(this.currentRoutine.activities[index]);
      this.setCurrentActivity({data: this.currentRoutine.activities[index], index})
      this.$router.push("/suggestions");
    },
    launchAddScreen() {
      // console.log(this.currentRoutine.activities[index]);
      // this.setCurrentActivity({data: this.currentRoutine.activities[index], index})
      this.$router.push("/addnewactivity");
    },
    handleSwipe(event, index) {
      if (!this.touchEvent) {
          return;
      }
      // alert(`after right ${JSON.parse(JSON.stringify(event))}`);
      this.touchEvent.setEndEvent(event);
      // console.log(event, this.touchEvent.isSwipeLeft(), this.touchEvent.isSwipeRight());
      // alert(`${this.touchEvent.isSwipeRight(), this.touchEvent.isSwipeLeft()}`);
      if (this.touchEvent.isSwipeRight()) {
          // Do something
          // alert(`right ${index}`);
      } else if (this.touchEvent.isSwipeLeft()) {
          // Do something different
          // alert(`left ${index}`);
          this.del(index);
      }
      this.touchEvent.setEndEvent(event);
      // Reset event for next touch
      this.touchEvent = null;
    },
    startSwipe(event) {
      this.touchEvent = new TouchEvent(event);
    },
    del(index) {
      this.appUserDataLocal = this.appUserData;
      const suggestion = this.appUserDataLocal.data[this.currentRoutineIndex].activities[index].activityName;
      let response = confirm(`Are you sure, ${suggestion}?`);

      if (response) {
        console.log('222222', this.appUserDataLocal);
        this.appUserDataLocal.data[this.currentRoutineIndex].activities.splice(index, 1);
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

<style src="./routine.scss" lang="scss" scoped>
</style>