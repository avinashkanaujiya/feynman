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
      <div class="current-time">
        {{ currentHour}}:{{currentMinute}}
      </div>
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
        @click="launchNextScreen(index)">
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
    this.activities = this.currentRoutine.activities;
    // console.log(this.activities);
  },
  computed: {
    ...mapState([
      'count',
      'currentRoutine'
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
    }
  }
}
</script>

<style src="./routine.scss" lang="scss" scoped>
</style>